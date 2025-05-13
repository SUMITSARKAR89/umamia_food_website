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



  window.onload = function () {
    const newDate = new Date();

   
    const date = newDate.toISOString().split('T')[0];
    document.getElementById('date').value = date;

   
    const hours = newDate.getHours().toString().padStart(2, '0');
    const minutes = newDate.getMinutes().toString().padStart(2, '0');
    const time = `${hours}:${minutes}`;
    document.getElementById('time').value = time;
  };