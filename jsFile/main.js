const insImgCard = document.querySelectorAll('.ins-image-card');

insImgCard.forEach(card => {
    const icon = card.querySelector('.instagram-icon');

    card.addEventListener('mousemove', (e) => {
      let rect = card.getBoundingClientRect();
      let x = e.clientX - rect.left;
      let y = e.clientY - rect.top;
      icon.style.left = `${x}px`;
      icon.style.top = `${y}px`;
    });
  });



