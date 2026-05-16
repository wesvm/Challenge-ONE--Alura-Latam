const inputText = document.getElementById('input-text');
const outputText = document.getElementById('output-text');
const inputHint = document.querySelector('.input-hint');
const outputEmpty = document.getElementById('output-empty');
const outputResult = document.getElementById('output-result');
const emptyInitial = document.getElementById('empty-initial');
const emptyHint = document.getElementById('empty-hint');
const emptyHintText = document.getElementById('empty-hint-text');
const btnCopy = document.getElementById('btn-copy');
const btnEncrypt = document.getElementById('btn-encrypt');
const btnDecrypt = document.getElementById('btn-decrypt');

const HINT_LABELS = {
  encrypt: 'Escribe algo para encriptar',
  decrypt: 'Escribe algo para desencriptar',
};

/**
 * Activa el botón correspondiente al modo seleccionado.
 * @param {'encrypt'|'decrypt'|null} mode
 */
function setActiveButton(mode) {
  btnEncrypt.classList.toggle('is-active', mode === 'encrypt');
  btnDecrypt.classList.toggle('is-active', mode === 'decrypt');
}

/**
 * Muestra el estado inicial, sin modo activo ni resultado visible.
 */
function showInitial() {
  emptyInitial.hidden = false;
  emptyHint.hidden = true;
  outputEmpty.hidden = false;
  outputResult.hidden = true;
}

/**
  * Muestra el mensaje de ayuda específico para el modo activo.
 * @param {'encrypt'|'decrypt'} mode
 */
function showModeHint(mode) {
  emptyHintText.textContent = HINT_LABELS[mode];
  emptyInitial.hidden = true;
  emptyHint.hidden = false;
  outputEmpty.hidden = false;
  outputResult.hidden = true;
}

/**
 * Muestra el resultado de la conversión.
 * @param {string} text
 */
function showResult(text) {
  outputText.value = text;
  outputEmpty.hidden = true;
  outputResult.hidden = false;
}

/**
 * Indica visualmente que el texto de entrada no es válido.
 * @param {boolean} hasError
 */
function setInputError(hasError) {
  inputText.classList.toggle('is-error', hasError);
  inputHint.classList.toggle('is-error', hasError);
}

const COPY_RESET_MS = 1500;

function setCopyFeedback() {
  const icon = btnCopy.querySelector('.material-symbols-outlined');
  icon.textContent = 'task_alt';
  btnCopy.lastChild.textContent = 'Copiado';

  setTimeout(() => {
    icon.textContent = 'content_copy';
    btnCopy.lastChild.textContent = 'Copiar';
  }, COPY_RESET_MS);
}

export {
  inputText, outputText, btnCopy, btnEncrypt, btnDecrypt,
  setActiveButton, setInputError,
  showInitial, showModeHint, showResult,
  setCopyFeedback,
};