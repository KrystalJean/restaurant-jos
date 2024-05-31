document.addEventListener('DOMContentLoaded', function () {

  // Toggle open/close the main-nav menu for mobile
  const navEl = document.getElementById('main-nav');
  const menuBtn = document.getElementById('nav-menu-btn');

  menuBtn.addEventListener('click', () => {
    navEl.classList.toggle('open');
  });


  // Load more reviews
  const loadMoreBtn = document.getElementById('load-more-btn');
  const reviewItems = document.querySelectorAll('.review-item');


  if (window.matchMedia('(max-width: 767px)').matches) {
    currentIndex = 3; // Show 3 reviews initially on mobile
  } else {
    currentIndex = 6; // Show 9 reviews initially on desktop
  }

  // let currentIndex = 3;
  const increment = 3; // Number of reviews to show at each click

  loadMoreBtn.addEventListener('click', function () {
    for (let i = 0; i < increment && currentIndex < reviewItems.length; i++, currentIndex++) {
      reviewItems[currentIndex].style.display = 'inline-flex';
    }

    // Hide the load more button if there are no more items to show
    if (currentIndex >= reviewItems.length) {
      loadMoreBtn.style.display = 'none';
    }
  });

});