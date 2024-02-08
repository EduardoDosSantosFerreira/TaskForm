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
}