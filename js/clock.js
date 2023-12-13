function updateTime() {
    var now = new Date();
    var hours = now.getHours().toString().padStart(2, '0');
    var minutes = now.getMinutes().toString().padStart(2, '0');
    var seconds = now.getSeconds().toString().padStart(2, '0');
  
    var timeString = hours + ':' + minutes + ':' + seconds;
    document.getElementById('time').textContent = timeString;
  }
  
  // Atualizar a cada segundo
  setInterval(updateTime, 1000);
  
  // Chame updateTime() uma vez para garantir que o tempo seja exibido imediatamente
  updateTime();
  