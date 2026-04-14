import { logoutUser } from "./api/auth.js";
import { getCurrentUser } from "./api/user.js";
import { createTask, deleteTaskById, getTasks, updateTaskById } from "./api/task.js";
import { addTask, appState, getFilteredTasks, setFilter, setTasks } from "./state.js";
import {
  applySavedTheme,
  closeModalUI,
  openModalUI,
  renderTasks,
  resetModalUI,
  setActiveNav,
  setSidebarOpen,
  showTagSelection,
  showUserInfo,
  updateStats
} from "./ui.js";
import { formatDate } from "./utils.js";

function toggleTheme() {
  const root = document.documentElement;
  const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  root.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
}

function toggleSidebar() {
  appState.sidebarOpen = !appState.sidebarOpen;
  setSidebarOpen(appState.sidebarOpen);
}

function setActive(el) {
  setActiveNav(el);
}

async function logout() {
  try {
    await logoutUser();
    window.location.href = "/login";
  } catch {
    alert("Logout error.");
  }
}

async function loadUserInfo() {
  try {
    const data = await getCurrentUser();
    showUserInfo(data.name || "User", data.email || "");
  } catch {
    showUserInfo("Alex Rivera", "alex@example.com");
  }
}

function openModal() {
  openModalUI();
}

function closeModal() {
  closeModalUI();
  resetModalUI();
}

function handleBackdropClick(e) {
  if (e.target === document.getElementById("taskModalBackdrop")) {
    closeModal();
  }
}

function selectTag(btn) {
  appState.selectedTag = btn.dataset.tag;
  showTagSelection(btn);
}

function toggleCompleted(btn) {
  appState.completedVal = !appState.completedVal;
  btn.classList.toggle("on", appState.completedVal);
}

async function submitTask() {
  const titleEl = document.getElementById("m-title");
  const title = titleEl.value.trim();
  let valid = true;

  if (!title) {
    document.getElementById("err-title").classList.add("show");
    titleEl.classList.add("invalid");
    valid = false;
  } else {
    document.getElementById("err-title").classList.remove("show");
    titleEl.classList.remove("invalid");
  }

  if (!valid) return;

  const deadline = document.getElementById("m-deadline").value;
  const saveBtn = document.querySelector(".btn-save");
  saveBtn.textContent = "Saving...";
  saveBtn.disabled = true;

  try {
    const data = await createTask({
      title,
      completed: appState.completedVal,
      deadline: deadline || null,
      tag: appState.selectedTag
    });

    addTask({
      id: data._id,
      name: data.title,
      tag: data.tag,
      prio: "med",
      deadline: data.deadline || null,
      date: data.deadline ? formatDate(data.deadline) : "Today",
      done: data.completed
    });

    renderTasks(getFilteredTasks());
    updateStats();
    closeModal();
  } catch (err) {
    console.error("Add Task Error:", err);
    alert(err.message || "Failed to save task.");
  } finally {
    saveBtn.textContent = "Add Task ->";
    saveBtn.disabled = false;
  }
}

async function loadTasks() {
  try {
    const data = await getTasks();
    setTasks(
      data.map((t) => ({
        id: t._id,
        name: t.title,
        tag: t.tag,
        prio: "med",
        deadline: t.deadline || null,
        date: t.deadline ? formatDate(t.deadline) : "Today",
        done: t.completed
      }))
    );
  } catch {
    setTasks([]);
  }

  renderTasks(getFilteredTasks());
  updateStats();
}

async function updateTask(id) {
  try {
    const task = appState.tasks.find((t) => t.id === id);
    if (!task) return;

    await updateTaskById(id, {
      title: task.name,
      completed: !task.done,
      deadline: task.deadline || null,
      tag: task.tag
    });

    task.done = !task.done;

    const el = document.getElementById("ti" + id);
    if (el) {
      el.style.transform = "scale(1.02)";
      setTimeout(() => {
        el.style.transform = "";
      }, 180);
    }

    updateStats();
    setTimeout(() => {
      renderTasks(getFilteredTasks());
      updateStats();
    }, 300);
  } catch (err) {
    alert(err.message || "Failed to update task.");
  }
}

async function deleteTask(id) {
  try {
    await deleteTaskById(id);

    const el = document.getElementById("ti" + id);
    if (el) {
      el.style.opacity = "0";
      el.style.transform = "translateX(16px)";
    }

    setTimeout(() => {
      setTasks(appState.tasks.filter((t) => t.id !== id));
      renderTasks(getFilteredTasks());
      updateStats();
    }, 260);
  } catch (err) {
    alert(err.message || "Failed to delete task.");
  }
}

function filterTasks(filter, btn) {
  setFilter(filter);
  document.querySelectorAll(".ftab").forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
  renderTasks(getFilteredTasks());
  document.getElementById("taskCount").textContent = `(${getFilteredTasks().length})`;
}

function searchTasks(q) {
  const query = q.toLowerCase();
  renderTasks(query ? appState.tasks.filter((t) => t.name.toLowerCase().includes(query)) : getFilteredTasks());
}

function wireKeyboardShortcuts() {
  document.addEventListener("keydown", (e) => {
    if ((e.key === "n" || e.key === "N") && !["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) {
      openModal();
    }

    if (e.key === "Escape") {
      closeModal();
    }
  });
}

function exposeGlobals() {
  window.toggleTheme = toggleTheme;
  window.toggleSidebar = toggleSidebar;
  window.setActive = setActive;
  window.logout = logout;
  window.openModal = openModal;
  window.closeModal = closeModal;
  window.handleBackdropClick = handleBackdropClick;
  window.selectTag = selectTag;
  window.toggleCompleted = toggleCompleted;
  window.submitTask = submitTask;
  window.updateTask = updateTask;
  window.deleteTask = deleteTask;
  window.filterTasks = filterTasks;
  window.searchTasks = searchTasks;
}

function init() {
  applySavedTheme();
  exposeGlobals();
  wireKeyboardShortcuts();
  renderTasks(getFilteredTasks());
  updateStats();
  loadTasks();
  loadUserInfo();
}

document.addEventListener("DOMContentLoaded", init);
