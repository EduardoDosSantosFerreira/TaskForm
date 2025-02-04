document.addEventListener('DOMContentLoaded', function () {
  function updateSlideBasedOnTime() {
    const now = new Date();
    const hour = now.getHours();

    // Determine qual slide deve ser exibido com base na hora
    let activeSlideId;
    if (hour >= 6 && hour < 12) {
      activeSlideId = 'amanhecer';
    } else if (hour >= 12 && hour < 18) {
      activeSlideId = 'entardecer';
    } else {
      activeSlideId = 'anoitecer';
    }

    // Oculta todos os slides
    const slides = document.querySelectorAll('.slide');
    slides.forEach(slide => {
      slide.classList.add('hidden');
    });

    // Exibe o slide ativo
    const activeSlide = document.getElementById(activeSlideId);
    if (activeSlide) {
      activeSlide.classList.remove('hidden');
    }
  }

  // Chame a função ao carregar a página e a cada minuto para manter o slide atualizado
  updateSlideBasedOnTime();
  setInterval(updateSlideBasedOnTime, 60000);
});

$(document).ready(function () {
  // Ativar o tooltip para cada div com a classe 'slide'
  $('.slide').tooltip({
    placement: 'bottom', // ou 'top', 'right', 'left' conforme sua preferência
    title: function () {
      // Obter o texto informativo do atributo 'title' da div
      return $(this).attr('title');
    },
    html: true
  });
});
