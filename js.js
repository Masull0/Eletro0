window.onload = function() {
  const scrollContainer = document.querySelector('.scroll-container');
  const scrollContent = document.querySelector('.scroll-content');
  const items = Array.from(document.querySelectorAll('.item'));

  items.forEach(item => {
      const clone = item.cloneNode(true);
      scrollContent.appendChild(clone);
  });

  let position = 0;

  function scroll() {
      position -= 1;
      scrollContent.style.transform = `translateX(${position}px)`;

      if (Math.abs(position) >= scrollContent.scrollWidth / 2) {
          position = 0;
      }

      requestAnimationFrame(scroll);
  }

  scroll();
};
