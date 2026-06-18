document.addEventListener("DOMContentLoaded", () => {
  // Initialize map centered on Lagos, Nigeria
  const map = L.map("map").setView([6.5244, 3.3792], 6);

  // Add OpenStreetMap tiles
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '© OpenStreetMap contributors'
  }).addTo(map);

  // Add a marker for Lagos
  const marker = L.marker([6.5244, 3.3792]).addTo(map);
  marker.bindPopup("<b>Welcome to Lagos!</b><br>Travel Safe Adventure HQ").openPopup();
});
document.addEventListener("DOMContentLoaded", () => {
  // Initialize map centered on Lagos, Nigeria
  const map = L.map("map").setView([6.5244, 3.3792], 6);

  // Add OpenStreetMap tiles
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '© OpenStreetMap contributors'
  }).addTo(map);

  // Add a marker for Lagos
  const marker = L.marker([6.5244, 3.3792]).addTo(map);
  marker.bindPopup("<b>Welcome to Lagos!</b><br>Travel Safe Adventure HQ").openPopup();
});
