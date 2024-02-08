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
}