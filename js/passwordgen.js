function generatePassword() {
    const length = document.getElementById('password-length').value;
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    document.getElementById('password').value = password;
}

function copyPassword() {
    const passwordField = document.getElementById('password');
    passwordField.select();
    passwordField.setSelectionRange(0, 99999); // For mobile devices
    document.execCommand("copy");
    alert("Senha copiada para a área de transferência!");
}

function savePassword() {
    const name = document.getElementById('password-name').value;
    const password = document.getElementById('password').value;

    if (!name || !password) {
        alert("Por favor, insira um nome e gere uma senha.");
        return;
    }

    let savedPasswords = JSON.parse(localStorage.getItem('savedPasswords')) || [];
    savedPasswords.push({ name, password });
    localStorage.setItem('savedPasswords', JSON.stringify(savedPasswords));
    
    document.getElementById('password-name').value = '';
    document.getElementById('password').value = '';
    
    displaySavedPasswords();
}

function deletePassword(index) {
    let savedPasswords = JSON.parse(localStorage.getItem('savedPasswords')) || [];
    savedPasswords.splice(index, 1);
    localStorage.setItem('savedPasswords', JSON.stringify(savedPasswords));
    displaySavedPasswords();
}

function displaySavedPasswords() {
    const savedPasswords = JSON.parse(localStorage.getItem('savedPasswords')) || [];
    const savedPasswordsList = document.getElementById('saved-passwords');
    savedPasswordsList.innerHTML = '';

    savedPasswords.forEach((entry, index) => {
        const li = document.createElement('li');
        li.innerHTML = `<span>${entry.name}: ${entry.password}</span><button onclick="deletePassword(${index})">Excluir</button>`;
        savedPasswordsList.appendChild(li);
    });
}

function downloadPasswords() {
    const savedPasswords = JSON.parse(localStorage.getItem('savedPasswords')) || [];
    let passwordText = "Senhas Salvas:\n\n";
    savedPasswords.forEach(entry => {
        passwordText += `Nome: ${entry.name}\nSenha: ${entry.password}\n\n`;
    });

    const blob = new Blob([passwordText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'senhas.txt';
    a.click();
    URL.revokeObjectURL(url);
}

window.onload = function() {
    displaySavedPasswords();
};
