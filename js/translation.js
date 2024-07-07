// Função para detectar o idioma do texto usando a API do Google Translate
async function detectLanguage(text) {
  const apiUrl = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=en&dt=t&q=${encodeURIComponent(text)}`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Erro ao detectar idioma');
    }
    const data = await response.json();
    return data[2];
  } catch (error) {
    console.error('Erro ao detectar idioma:', error);
    throw error;
  }
}

// Função para traduzir o texto usando a API do Google Translate
async function translateText() {
  const originalText = document.getElementById('original-text').value.trim();
  const inputLang = document.getElementById('input-language').value;
  const outputLang = document.getElementById('output-language').value;

  try {
    let apiUrl = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${inputLang}&tl=${outputLang}&dt=t&q=${encodeURIComponent(originalText)}`;
    
    // Se o idioma de entrada for "auto", detecta o idioma primeiro
    if (inputLang === 'auto') {
      const detectedLang = await detectLanguage(originalText);
      apiUrl = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${detectedLang}&tl=${outputLang}&dt=t&q=${encodeURIComponent(originalText)}`;
      // Atualiza o idioma de entrada com o idioma detectado
      document.getElementById('input-language').value = detectedLang;
    }
    
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Erro ao traduzir texto');
    }
    const data = await response.json();
    const translatedText = data[0][0][0];
    document.getElementById('translated-text').value = translatedText;
  } catch (error) {
    console.error('Erro ao traduzir:', error);
    document.getElementById('translated-text').value = 'Erro ao traduzir o texto.';
  }
}

// Event listener para o botão de tradução
document.getElementById('translate-btn').addEventListener('click', translateText);

// Event listener para o textarea de texto original (tradução automática)
document.getElementById('original-text').addEventListener('input', translateText);

// Event listener para atualizar opções de idioma de saída ao mudar o idioma de entrada
document.getElementById('input-language').addEventListener('change', function() {
  const inputLang = this.value;
  const outputLangSelect = document.getElementById('output-language');
  
  // Habilita todas as opções de idioma de saída
  Array.from(outputLangSelect.options).forEach(option => {
    option.disabled = false;
  });

  // Desabilita a opção selecionada como idioma de entrada na lista de idiomas de saída
  outputLangSelect.querySelector(`option[value="${inputLang}"]`).disabled = true;

  // Traduz novamente ao mudar o idioma de entrada
  translateText();
});

// Inicializa a detecção de idioma ao carregar a página
translateText();  // Traduz o texto inicial ao carregar a página
