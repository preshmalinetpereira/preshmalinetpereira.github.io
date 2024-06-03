export function formatDate(date: any) {
  var newDate = typeof(date) == "object"? date.local : date
  return new Date(newDate).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}
