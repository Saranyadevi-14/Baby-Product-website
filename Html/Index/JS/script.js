 const productBtn = document.getElementById("productBtn");
    const productMenu = document.getElementById("productMenu");

    productBtn.addEventListener("click", function (e) {
      e.preventDefault();
      // Toggle display
      if (productMenu.style.display === "block") {
        productMenu.style.display = "none";
      } else {
        productMenu.style.display = "block";
      }
    });

    // Optional: close dropdown when clicking outside
    window.addEventListener("click", function (e) {
      if (!productBtn.contains(e.target) && !productMenu.contains(e.target)) {
        productMenu.style.display = "none";
      }
    });

    
  const files = [
      "index.html",
    "pampers.html",
    "boys.html",
    "girls.html",
    "soap.html",
    "stroller.html",
    "bottle.html",
    "offers.html",
    "checkout.html",
    "add.html",
    "about.html",
    "contacts.html",
    "details.html",
    "order.html"
  ];

  const currentPage = window.location.pathname.split("/").pop();
  let currentIndex = files.indexOf(currentPage);
  const nav = document.getElementById("carouselNav");
  let hideTimeout;

  function nextFile() {
    currentIndex = (currentIndex + 1) % files.length;
    window.location.href = files[currentIndex];
  }

  function prevFile() {
    currentIndex = (currentIndex - 1 + files.length) % files.length;
    window.location.href = files[currentIndex];
  }

  function showCarouselNav() {
    nav.classList.add("show");
    clearTimeout(hideTimeout);
    hideTimeout = setTimeout(() => {
      nav.classList.remove("show");
    }, 3000); // hide after 3 sec
  }

  document.addEventListener("click", showCarouselNav);
  document.addEventListener("touchstart", showCarouselNav);

 

