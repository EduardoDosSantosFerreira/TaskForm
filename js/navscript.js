// Barra de busca
function redirecionar() {
    var input = document.getElementById('searchInput').value.toLowerCase();
    var calculadora = document.getElementById('calculadora');
    if (input === 'calculadora') {
        calculadora.scrollIntoView({ behavior: 'smooth' });
    }
    var notepad = document.getElementById('notepad');
    if (input === 'notepad') {
        notepad.scrollIntoView({ behavior: 'smooth' });
    }
    var calendario = document.getElementById('calendario');
    if (input === 'calendario') {
        calendario.scrollIntoView({ behavior: 'smooth' });
    }
    var agenda = document.getElementById('agenda');
    if (input === 'agenda') {
        agenda.scrollIntoView({ behavior: 'smooth' });
    }
    var pdt = document.getElementById('pdt');
    if (input === 'previsão do tempo') {
        pdt.scrollIntoView({ behavior: 'smooth' });
    }
    var tasklist = document.getElementById('tasklist');
    if (input === 'tasklist') {
        tasklist.scrollIntoView({ behavior: 'smooth' });
    }
}
// Navbar Hide
let lastScrollTop = 0;

window.addEventListener("scroll", function() {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  
  if (currentScroll > lastScrollTop) {
    // Scroll para baixo
    document.getElementById("navbar").style.top = "-65px"; // Esconde a navbar
  } else {
    // Scroll para cima
    document.getElementById("navbar").style.top = "0"; // Mostra a navbar
  }
  
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Para tratar o caso de scroll no topo
}, false);
