export default function getAuth() {
  const token = localStorage.getItem("token");
  if (token) {
    return `?auth=${token}`;
  }
  return "";
}
