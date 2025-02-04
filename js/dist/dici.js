function searchWord(language) {
  const wordInput = document.getElementById(`word-input-${language}`);
  const resultDiv = document.getElementById(`result-${language}`);
  const word = wordInput.value;
  resultDiv.innerHTML = 'Carregando...';

  if (language === 'en') {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then(response => response.json())
      .then(data => {
        if (data.title === "No Definitions Found") {
          resultDiv.innerHTML = 'Nenhuma definição encontrada.';
        } else {
          const definitions = data[0].meanings.map(meaning => `<p><strong>${meaning.partOfSpeech}:</strong> ${meaning.definitions[0].definition}</p>`).join('');
          resultDiv.innerHTML = `<h3>Definições:</h3>${definitions}`;
        }
      })
      .catch(error => {
        resultDiv.innerHTML = 'Erro ao buscar a definição.';
      });
  } else if (language === 'pt') {
    fetch(`https://api.dicionario-aberto.net/word/${word}`)
      .then(response => response.json())
      .then(data => {
        if (data.length === 0) {
          resultDiv.innerHTML = 'Nenhuma definição encontrada.';
        } else {
          const definition = data[0].xml.replace(/<[^>]*>?/gm, ''); // Remove as tags XML
          resultDiv.innerHTML = `<h3>Definição:</h3><p>${definition}</p>`;
        }
      })
      .catch(error => {
        resultDiv.innerHTML = 'Erro ao buscar a definição.';
      });
  }
}