document.addEventListener("DOMContentLoaded", () => {
  const cartIcons = document.querySelectorAll(".cart-icon");

  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  updateCartCount();

  cartIcons.forEach(icon => {
    const product = icon.closest(".pro");
    const name = product.querySelector("h5").innerText;
    const price = product.querySelector("h4").innerText;
    const img = product.querySelector("img").src;

    const isInCart = cart.find(item => item.name === name && item.price === price);

    if (isInCart) {
      icon.style.color = "red";
    }

    icon.addEventListener("click", () => {
      const index = cart.findIndex(item => item.name === name && item.price === price);

      if (index === -1) {
        // Add this product
        cart.push({ name, price, img });
        localStorage.setItem("cart", JSON.stringify(cart));
        icon.style.color = "red";
        updateCartCount();
        window.location.href = "cart.html";
      } else {
        // Remove this product
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        icon.style.color = "#999";
        updateCartCount();
      }
    });
  });

  function updateCartCount() {
    const cartCountElem = document.getElementById("cart-count");
    const bagCountElem = document.getElementById("bag-count");

    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cartCountElem) cartCountElem.textContent = cart.length;
    if (bagCountElem) bagCountElem.textContent = cart.length;
  }
});
// Mobile Menu Toggle
const mobileOpen = document.getElementById("mobile-open");
const mobileClose = document.getElementById("mobile-close");
const navbar = document.getElementById("navbar");

// Mobile Navbar Toggle
document.addEventListener("DOMContentLoaded", () => {
  const openBtn = document.getElementById("mobile-open");
  const closeBtn = document.getElementById("mobile-close");
  const navbar = document.getElementById("navbar");

  openBtn.addEventListener("click", () => {
    navbar.classList.add("active");
    openBtn.style.display = "none";
    closeBtn.style.display = "block";
  });

  closeBtn.addEventListener("click", () => {
    navbar.classList.remove("active");
    openBtn.style.display = "block";
    closeBtn.style.display = "none";
  });
});


