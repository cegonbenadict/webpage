// Console log when scrolling to track scroll position
window.onscroll = function () {
  console.log("You are scrolling at position: " + window.scrollY);
};

// Change background color of content sections on hover
document.querySelectorAll('.content-section').forEach(section => {
  section.addEventListener('mouseover', function () {
    section.style.backgroundColor = '#f0f8ff'; // Light blue color on hover
  });

  section.addEventListener('mouseout', function () {
    section.style.backgroundColor = ''; // Reset background color on mouse out
  });
});
