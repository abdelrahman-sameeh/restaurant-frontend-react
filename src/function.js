document.addEventListener("click", (e) => {
  const sidebar = document.querySelector(".left-sidebar");
  // toggle gear and sidebar
  if (sidebar && e.target.classList.contains("gear")) {
    sidebar.classList.toggle("reset-transform");
    e.target.classList.toggle("active");
  }
  if (sidebar && !e.target.classList.contains("gear")) {
    const gear = document.querySelector(".gear");
    sidebar.classList.remove("reset-transform");
    gear.classList.remove("active");
  }

  // logout
  if (e.target.classList.contains("logout")) {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    window.location.reload();
  }
});

// reset un important data in local storage
localStorage.removeItem("email");
