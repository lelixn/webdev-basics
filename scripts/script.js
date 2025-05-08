function sleep(ms) {
   return new Promise((resolve) => setTimeout(resolve, ms));
}

function copy(target) {
   navigator.clipboard.writeText(target);
}

let timedClassToggleRunning = false;
async function timedClassToggle(target, ms, className) {
   timedClassToggleRunning = true;

   target.classList.toggle(className);
   await sleep(ms);
   target.classList.toggle(className);

   timedClassToggleRunning = false;
}

function activeClassToggle(target, className, allAlike) {
   allAlike.classList.remove(className);
   target.classList.add(className);
}

const copyCode = document.querySelectorAll(".code-copy-btn").forEach((btn) => {
   const target = btn.nextElementSibling.innerText;
   const alert = btn.previousElementSibling;
   const ms = 2000;

   btn.addEventListener("click", (e) => {
      copy(target);
      timedClassToggle(alert, ms, "hidden");
   });
});

const sidebarLiSelected = document.querySelectorAll("[data-li]").forEach((li) => {
   const target = li.parentNode;
   console.log(target);

   li.addEventListener("click", (el) => {
      li.classList.toggle("active");
   });
});

const imagePreviewToggle = document.querySelectorAll(".demo-img").forEach((img) => {
   const preview = document.getElementById("img-preview");
   const image = preview.children[1];
   const attribute = img.getAttribute("src");
   const checkIfTransparent = img.classList.contains("transparent-img");

   img.addEventListener("click", (e) => {
      preview.classList.toggle("hidden");

      if (checkIfTransparent == true) {
         image.classList.add("transparent-img");
      } else {
         image.classList.remove("transparent-img");
      }

      image.setAttribute("src", attribute);
   });
});

const close = document.getElementById("img-prev-close").addEventListener("click", (e) => {
   const preview = document.getElementById("img-preview");
   preview.classList.toggle("hidden");
});

// SIDEBAR TOGGLE

const sidebar = document.querySelector("#navbar");
const sb_toggle = document.querySelector("[data-sb-toggle");

sb_toggle.addEventListener("click", (e) => {
   sidebar.classList.toggle("show");
   sb_toggle.classList.toggle("show");
});

const sb_link_sb_toggle = document.querySelectorAll(".nav-link").forEach((link) => {
   link.addEventListener("click", (e) => {
      sidebar.classList.remove("show");
      sb_toggle.classList.remove("show");
   });
});

// WINDOW EVENTS

window.addEventListener("resize", (e) => {
   if (window.innerWidth > 750) {
      sidebar.classList.remove("show");
      sb_toggle.classList.remove("show");
   }
});

console.log("script.js loaded.");