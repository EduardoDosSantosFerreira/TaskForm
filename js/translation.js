// Função para detectar o idioma do texto usando a API do Google Translate
function detectLanguage(text) {
  // URL da API do Google Translate para detecção de idioma
  const apiUrl = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=en&dt=t&q=${encodeURIComponent(text)}`;

  // Requisição AJAX para a API do Google Translate
  return new Promise((resolve, reject) => {
    $.ajax({
      url: apiUrl,
      method: 'GET',
      dataType: 'json',
      success: function (data) {
        // Extrair o idioma detectado
        const detectedLanguage = data[2];
        resolve(detectedLanguage);
      },
      error: function (error) {
        console.error('Erro ao detectar idioma:', error);
        reject(error);
      }
    });
  });
}

// Função para traduzir o texto usando a API do Google Translate
function translateText() {
  const originalText = document.getElementById('original-text').value;
  const inputLang = document.getElementById('input-language').value;
  const outputLang = document.getElementById('output-language').value;

  // Verifica se o idioma de entrada é "Detectar idioma" e executa a detecção
  if (inputLang === 'auto') {
    detectLanguage(originalText)
      .then(detectedLang => {
        // Atualiza o idioma de entrada com o idioma detectado
        document.getElementById('input-language').value = detectedLang;
        // Traduz o texto usando o idioma detectado
        translateText();
      })
      .catch(error => {
        console.error('Erro ao detectar e traduzir:', error);
      });
    return;
  }

  // URL da API do Google Translate para tradução
  const apiUrl = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${inputLang}&tl=${outputLang}&dt=t&q=${encodeURIComponent(originalText)}`;

  // Requisição AJAX para a API do Google Translate
  $.ajax({
    url: apiUrl,
    method: 'GET',
    dataType: 'json',
    success: function (data) {
      // Processa a resposta para obter a tradução
      const translatedText = data[0][0][0];
      // Exibe a tradução no textarea de saída
      document.getElementById('translated-text').value = translatedText;
    },
    error: function (error) {
      console.error('Erro ao traduzir:', error);
    }
  });
}

// Event listener para o botão de tradução
document.getElementById('translate-btn').addEventListener('click', translateText);

// Event listener para o textarea de texto original (tradução automática)
document.getElementById('original-text').addEventListener('input', function() {
  translateText();
});

// Inicializa a detecção de idioma ao carregar a página
detectLanguage('');
