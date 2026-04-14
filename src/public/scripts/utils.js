export function formatDate(iso) {
  const d = new Date(iso);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const diff = Math.floor((d - today) / 86400000);
  if (diff < 0) return "Overdue";
  if (diff === 0) return "Today";
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "short" });
}

export function escHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
