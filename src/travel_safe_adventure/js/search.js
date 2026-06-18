document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("searchInput");
  const btn = document.getElementById("searchBtn");
  const results = document.getElementById("results");

  btn.addEventListener("click", async () => {
    const query = input.value.trim();
    if (!query) {
      results.innerHTML = "<p>Please enter a destination.</p>";
      return;
    }

    results.innerHTML = "<p>Searching...</p>";

    try {
      // Use Wikipedia API for quick info
      const response = await fetch(
        `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(query)}&format=json&origin=*`
      );
      const data = await response.json();

      if (data.query.search.length === 0) {
        results.innerHTML = `<p>No results found for "${query}".</p>`;
        return;
      }

      // Show top 3 results
      const topResults = data.query.search.slice(0, 3);
      results.innerHTML = `
        <h2>Results for "${query}"</h2>
        <ul>
          ${topResults
            .map(
              item =>
                `<li><strong>${item.title}</strong><br>${item.snippet}... <a href="https://en.wikipedia.org/?curid=${item.pageid}" target="_blank">Read more</a></li>`
            )
            .join("")}
        </ul>
      `;
    } catch (error) {
      results.innerHTML = "<p>Something went wrong. Please try again.</p>";
      console.error(error);
    }
  });
});
