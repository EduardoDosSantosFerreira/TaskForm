// Função para adicionar o HTML ao DOM
function adicionarLoginAoDOM() {
    var div = document.createElement('div');
    div.innerHTML = `
    <nav id="navbar" class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"><img src="img/tskf_icon.png" id="nav-icon" alt="nav-icon"></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" href="#tasklist">Tasklist</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#calculadora">calculadora</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#notepad">NotePad</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#Agenda">Agenda</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#pdt">PDT</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#maps">Maps</a>
          </li>
        </ul>
        <form class="d-flex" role="search" onsubmit="event.preventDefault(); redirecionar();">
          <input id="searchInput" class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
    `;
    
    document.body.appendChild(div);
}

adicionarLoginAoDOM();

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
    document.getElementById("navbar").style.top = "-75px"; // Esconde a navbar
  } else {
    // Scroll para cima
    document.getElementById("navbar").style.top = "0"; // Mostra a navbar
  }
  
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Para tratar o caso de scroll no topo
}, false);

