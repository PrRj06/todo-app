import { appState, getFilteredTasks } from "./state.js";
import { escHtml } from "./utils.js";

export function applySavedTheme() {
  const saved = localStorage.getItem("theme");
  if (saved) {
    document.documentElement.setAttribute("data-theme", saved);
  }
}

export function setSidebarOpen(isOpen) {
  const sb = document.getElementById("sidebar");
  const main = document.querySelector(".main");
  const btn = document.getElementById("sideToggleBtn");

  sb.style.transform = isOpen ? "" : "translateX(-100%)";
  main.style.marginLeft = isOpen ? "var(--sidebar-w)" : "0";
  btn.textContent = isOpen ? "◀" : "▶";
}

export function setActiveNav(el) {
  document.querySelectorAll(".nav-item").forEach((n) => n.classList.remove("active"));
  el.classList.add("active");
}

export function openModalUI() {
  document.getElementById("taskModalBackdrop").classList.add("open");
  document.body.style.overflow = "hidden";
  setTimeout(() => document.getElementById("m-title").focus(), 80);
}

export function closeModalUI() {
  document.getElementById("taskModalBackdrop").classList.remove("open");
  document.body.style.overflow = "";
}

export function resetModalUI() {
  document.getElementById("m-title").value = "";
  document.getElementById("m-deadline").value = "";
  document.getElementById("m-title").classList.remove("invalid");
  document.getElementById("err-title").classList.remove("show");
  document.getElementById("err-tag").classList.remove("show");
  appState.selectedTag = "work";
  appState.completedVal = false;

  document
    .querySelectorAll(".tag-pill")
    .forEach((p) => p.classList.toggle("selected", p.dataset.tag === "work"));

  document.getElementById("completedToggle").classList.remove("on");
}

export function showTagSelection(btn) {
  document.querySelectorAll(".tag-pill").forEach((p) => p.classList.remove("selected"));
  btn.classList.add("selected");
  document.getElementById("err-tag").classList.remove("show");
}

export function showUserInfo(name, email) {
  document.getElementById("user-name").textContent = name;
  document.getElementById("user-email").textContent = email;
}

export function renderTasks(list) {
  const el = document.getElementById("taskList");

  if (!list.length) {
    el.innerHTML =
      '<div class="empty-msg"><div class="em-icon">🌿</div>No tasks here. Click "+ Add Task" to get started!</div>';
    return;
  }

  el.innerHTML = list
    .map(
      (t, i) => `
    <div class="task-item${t.done ? " done" : ""}" id="ti${t.id}" style="animation-delay:${i * 0.04}s">
      <div class="task-cb" onclick="updateTask('${t.id}')"></div>
      <div class="task-body">
        <div class="task-name">${escHtml(t.name)}</div>
        <div class="task-meta">
          <span class="task-date${t.date === "Overdue" ? " overdue" : ""}">${t.date === "Overdue" ? "⚠ " : "📅 "}${t.date}</span>
          <span class="task-tag ${t.tag}">${t.tag}</span>
        </div>
      </div>
      <div class="task-prio ${t.prio}"></div>
      <button class="task-del" onclick="deleteTask('${t.id}')" title="Delete">✕</button>
    </div>`
    )
    .join("");
}

export function updateStats() {
  const done = appState.tasks.filter((t) => t.done).length;
  const total = appState.tasks.length;
  const overdue = appState.tasks.filter((t) => t.date === "Overdue" && !t.done).length;
  const pct = total ? Math.round((done / total) * 100) : 0;

  document.getElementById("totalCount").textContent = total;
  document.getElementById("doneCount").textContent = done;
  document.getElementById("overdueCount").textContent = overdue;
  document.getElementById("taskCount").textContent = `(${getFilteredTasks().length})`;
  document.getElementById("todayBadge").textContent = total;
  document.getElementById("ringPct").textContent = pct + "%";
  document.getElementById("progressVal").textContent = `${done} of ${total}`;
  document.getElementById("progressSub").textContent =
    done === total && total > 0 ? "All done! 🎉" : `${total - done} task${total - done !== 1 ? "s" : ""} left`;

  const circ = 2 * Math.PI * 36;
  document.getElementById("ringFill").style.setProperty("--offset", (circ - (pct / 100) * circ).toFixed(1));
  document.getElementById("doneBar").style.setProperty("--w", total ? pct + "%" : "0%");
  document
    .getElementById("overdueBar")
    .style.setProperty("--w", total ? Math.round((overdue / total) * 100) + "%" : "0%");
}
