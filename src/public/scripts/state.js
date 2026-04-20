export const appState = {
  selectedTag: "work",
  completedVal: false,
  tasks: [],
  filter: "all"
};

export function setTasks(tasks) {
  appState.tasks = tasks;
}

export function addTask(task) {
  appState.tasks.unshift(task);
}

export function setFilter(filter) {
  appState.filter = filter;
}

export function getFilteredTasks() {
  if (appState.filter === "active") return appState.tasks.filter((t) => !t.done);
  if (appState.filter === "done") return appState.tasks.filter((t) => t.done);
  if (["work", "health", "personal"].includes(appState.filter)) {
    return appState.tasks.filter((t) => t.tag === appState.filter);
  }
  return appState.tasks;
}
