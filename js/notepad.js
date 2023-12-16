const notepad = document.getElementById('notepad');
const downloadButton = document.getElementById('downloadButton');

notepad.addEventListener('keydown', function (event) {
  if (event.key === 'Enter' && !event.shiftKey) {
    event.preventDefault();
    downloadTxtFile();
  }
});

downloadButton.addEventListener('click', function () {
  downloadTxtFile();
});

function downloadTxtFile() {
  const content = notepad.value;
  const blob = new Blob([content], { type: 'text/plain' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'notepad.txt';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}
