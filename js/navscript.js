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
          <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
              <ul class="navbar-nav">
                  <li class="nav-item">
                      <a class="nav-link" href="#tasklist">Tasklist</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="#calculadora">Calculadora</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="#notepad">NotePad</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="#agenda">Agenda</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="#pdt">PDT</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="#translate">Tradutor</a>
                  </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#map">Maps</a>
                  </li>
              </ul>
              <form class="d-flex" role="search" onsubmit="event.preventDefault(); redirecionar();">
                  <input id="searchInput" class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                  <button id="search-btn" class="btn btn-outline-success" type="submit">Search</button>
              </form>
          </div>
      </div>
  </nav>
  `;
  
  document.body.appendChild(div);
}

// Função para redirecionar ao clicar em Search
function redirecionar() {
  var input = document.getElementById('searchInput').value.toLowerCase();
  var element = document.getElementById(input);
  if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
  }
}

// Adicionar a navbar ao DOM
adicionarLoginAoDOM();

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
