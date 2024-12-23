

document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", () => {
    alert(`Navigating to ${link.textContent} page.`);
  });
});
