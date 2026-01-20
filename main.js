// main.js
(() => {
  // Marca el link activo en el sidebar según el archivo actual
  const path = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  document.querySelectorAll(".navLink").forEach(a => {
    const href = (a.getAttribute("href") || "").toLowerCase();
    a.classList.toggle("active", href.endsWith(path));
  });

  // Opcional: bruma con movimiento leve según scroll (muy sutil)
  const fog = document.querySelector(".fog");
  if (!fog) return;

  let lastY = 0;
  function onScroll() {
    const y = window.scrollY || 0;
    if (Math.abs(y - lastY) < 6) return;
    lastY = y;

    // Transform mínimo, evita mareos
    fog.style.transform = `translate3d(0, ${Math.min(18, y * 0.02)}px, 0)`;
  }

  window.addEventListener("scroll", onScroll, { passive: true });
})();
