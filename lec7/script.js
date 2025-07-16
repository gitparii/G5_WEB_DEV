// Debounce function using setTimeout
function debounce(func, delay) {
  let timeoutId;

  return function (...args) {
    // Clear the previous timer if it exists
    clearTimeout(timeoutId);

    // Start a new timer
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

// Function to run on input
function searchQuery() {
  console.log("API Call Sent at", new Date().toLocaleTimeString());
}

// Debounced version with a 500ms delay
const debouncedSearch = debounce(searchQuery, 500);

// Attach to keyup event on input box
document.getElementById("searchInput").addEventListener("keyup", debouncedSearch);
