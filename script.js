document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("nav ul li a, .dropdown-content a");
  const content = document.getElementById("content");

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      const page = this.getAttribute("data-page");

      if (page === "index.html" || this.getAttribute("href") === "index.html") {
        // Recarregar a página se "Home" for clicado
        window.location.href = "index.html";
      } else if (page) {
        // Carregar outras páginas dinamicamente
        e.preventDefault(); // Evita o comportamento padrão do link
        loadPage(page);
      }
    });
  });

  function loadPage(page) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", page, true);

    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 400) {
        content.innerHTML = xhr.responseText;
      } else {
        content.innerHTML = "<p>Erro ao carregar a página.</p>";
      }
    };

    xhr.onerror = function () {
      content.innerHTML = "<p>Erro de conexão.</p>";
    };

    xhr.send();
  }

  const menuIcon = document.getElementById("menu-icon");
  const navMenu = document.getElementById("nav-menu");

  menuIcon.addEventListener("click", function () {
    navMenu.classList.toggle("show");
  });

  const thumbnails = document.querySelectorAll(".thumbnail");
  const currentPhoto = document.getElementById("current-photo");

  thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", function () {
      currentPhoto.src = this.src;

      thumbnails.forEach((thumb) => thumb.classList.remove("active"));
      this.classList.add("active");
    });
  });
});
