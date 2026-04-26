(function () {
  // ✅ Update these paths to match your actual images folder + filenames
  const photos1 = [
    "images/Venue/Picture1.png",
    "images/Venue/Picture2.png",
    "images/Venue/Picture3.png",
  ];

  const photos2 = [
    "images/Venue/Picture4.png",
    "images/Venue/Picture5.png",
    "images/Venue/Picture6.png",
  ];


  function mountSlideshow(containerId, photos, intervalMs = 2500) {
    const el = document.getElementById(containerId);
    if (!el) return;
    if (!photos || photos.length === 0) {
      el.innerHTML = "<div class='muted center' style='padding:1rem;'>No photos configured.</div>";
      return;
    }

    let idx = 0;
    const img = document.createElement("img");
    img.className = "photo-img";
    img.alt = "Venue photo";
    img.loading = "lazy";
    img.src = photos[idx];
    el.appendChild(img);

    setInterval(() => {
      idx = (idx + 1) % photos.length;
      img.classList.remove("fade-in");
      void img.offsetWidth; // reflow
      img.src = photos[idx];
      img.classList.add("fade-in");
    }, intervalMs);
  }

  document.addEventListener("DOMContentLoaded", () => {
    mountSlideshow("slideshow-container-1", photos1, 2400);
    mountSlideshow("slideshow-container-2", photos2, 2700);
  });
})();
