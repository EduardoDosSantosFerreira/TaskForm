function updateTime() {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();

  var timeString = hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');
  document.getElementById('time').textContent = timeString;

  // Obter o elemento do slide-container
  var slideContainer = document.getElementById('slide-container');
  var currentSlide;

  // Definir os horários para trocar os slides
  var amanhecerStart = 6;
  var entardecerStart = 12;
  var anoitecerStart = 18;

  // Determinar o slide com base no horário
  if (hours >= amanhecerStart && hours < entardecerStart) {
    currentSlide = 'amanhecer';
  } else if (hours >= entardecerStart && hours < anoitecerStart) {
    currentSlide = 'entardecer';
  } else {
    currentSlide = 'anoitecer';
  }

  // Ocultar todos os slides
  var slides = slideContainer.getElementsByClassName('slide');
  for (var i = 0; i < slides.length; i++) {
    slides[i].classList.add('hidden');
  }

  // Exibir o slide atual
  document.getElementById(currentSlide).classList.remove('hidden');
}

// Atualizar a cada segundo
setInterval(updateTime, 1000);

// Chame updateTime() uma vez para garantir que o tempo seja exibido imediatamente
updateTime();
