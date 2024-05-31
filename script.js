document.addEventListener('DOMContentLoaded', function () {

  // Toggle open/close the main-nav menu for mobile
  const navEl = document.getElementById('main-nav');
  const menuBtn = document.getElementById('nav-menu-btn');
  const mainNavListItems = document.querySelectorAll('#main-nav li');

  menuBtn.addEventListener('click', () => {
    navEl.classList.toggle('open');
  });

  mainNavListItems.forEach((item)=> {
    item.addEventListener('click', () => {
      navEl.classList.remove('open');
    })
  })


  // Load more reviews
  const loadMoreBtn = document.getElementById('load-more-btn');
  const reviewItems = document.querySelectorAll('.review-item');

  let currentIndex = 3;
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