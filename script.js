eb\script.js
window.addEventListener("DOMContentLoaded", () => {
  const group = document.querySelector(".scale-group");
  const img = group.querySelector("img");

  function scaleGroup() {
    if (!group || !img) return;
    const naturalWidth = img.naturalWidth || 800;
    const naturalHeight = img.naturalHeight || 600;
    const scale = Math.min(
      window.innerWidth / naturalWidth,
      window.innerHeight / naturalHeight
    );
    group.style.transform = `translate(-50%, -50%) scale(${scale})`;
  }

  if (img.complete) {
    scaleGroup();
  } else {
    img.addEventListener("load", scaleGroup);
  }
  window.addEventListener("resize", scaleGroup);
});