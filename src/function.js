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

  // remove loading after click on it
  if (e.target.classList.contains("loading")) {
    e.target.remove();
  }

  // toggle active class in filter btn
  if (e.target.classList.contains("order-status")) {
    const orderStatusBtns = document.querySelectorAll(".radius-0.order-status");
    removeActiveClass(orderStatusBtns, e);
    e.target.classList.toggle("active");
  }
  if (e.target.classList.contains("delivered-status")) {
    const deliveredBtns = document.querySelectorAll(
      ".radius-0.delivered-status"
    );
    removeActiveClass(deliveredBtns, e);
    e.target.classList.toggle("active");
  }
  if (e.target.classList.contains("paid-status")) {
    const paidBtns = document.querySelectorAll(".radius-0.paid-status");
    removeActiveClass(paidBtns, e);
    e.target.classList.toggle("active");
  }

  // change mode
  if (e.target.classList.contains("change-mode")) {
    document.body.classList.toggle("dark-mode");
    if (localStorage.mode === "dark") {
      localStorage.mode = "light";
    } else {
      localStorage.mode = "dark";
    }
    e.target.classList.toggle("dark-mode");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  if (localStorage.mode === "dark") {
    this.body.classList.add("dark-mode");
  } else {
    this.body.classList.remove("dark-mode");
  }
});

const removeActiveClass = (btns, e) => {
  btns.forEach((btn) => {
    let flag = 0;
    if (e.target === btn && e.target.classList.contains("active")) {
      flag = 1;
    }
    btn.classList.remove("active");
    if (flag === 1) {
      btn.classList.add("active");
    }
  });
};

// reset un important data in local storage
localStorage.removeItem("page");
localStorage.removeItem("pagination");
localStorage.removeItem("adminFilterOrderQuery");
localStorage.removeItem("userFilterOrderQuery");
localStorage.removeItem("deliveryFilterOrderQuery");
localStorage.removeItem("categoryPagination");
localStorage.removeItem("mealCategoryPagination");
localStorage.removeItem("mealCategoryPaginationNum");
localStorage.removeItem("mealCategory");
localStorage.removeItem("specificMeal");
localStorage.removeItem("reviewPage");
localStorage.removeItem("reviewPagination");
localStorage.removeItem("searchQuery");
localStorage.removeItem("searchPagination");
localStorage.removeItem("searchPage");
localStorage.removeItem("filterUserQuery");
localStorage.removeItem("filterUsersPage");
localStorage.removeItem("userPagination");
