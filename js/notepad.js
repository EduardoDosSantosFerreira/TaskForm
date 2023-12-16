  function downloadNotepad() {
    // Obtém o conteúdo do Notepad
    var notepadContent = document.getElementById('notepad').value;

    // Cria um objeto Blob com o conteúdo do Notepad
    var blob = new Blob([notepadContent], { type: 'text/plain' });

    // Cria uma URL para o Blob
    var url = window.URL.createObjectURL(blob);

    // Cria um link temporário e simula o clique para iniciar o download
    var a = document.createElement('a');
    a.href = url;
    a.download = 'notepad.txt';
    document.body.appendChild(a);
    a.click();

    // Remove o link temporário
    document.body.removeChild(a);

    // Emite um alerta informando que a operação foi concluída com sucesso
    alert('Operação concluída com sucesso!');
  }
