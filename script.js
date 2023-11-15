
const toggleMode = document.querySelector(".toggle")

toggleMode.addEventListener("click", (e) => {
  const html = document.querySelector("html");
  if (html.classList.contains("dark")) {
      html.classList.remove("dark");
  e.target.innerHTML = "Dark Mode"
  } else {
    html.classList.add("dark");
    e.target.innerHTML = "Light Mode"
  }
});