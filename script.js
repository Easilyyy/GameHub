const moonToggle = document.querySelector(".moon-logo");

if (localStorage.getItem("darkMode") === "enabled") {
  document.body.classList.add("dark-mode");
}

if (moonToggle) {
  moonToggle.addEventListener("click", function (e) {
    e.preventDefault();
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("darkMode", "enabled");
    } else {
      localStorage.setItem("darkMode", "disabled");
    }
  });
}
