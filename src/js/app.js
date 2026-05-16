import { normalize, isValid, encrypt, decrypt } from './converter.js';
import {
  inputText, outputText, btnCopy, btnEncrypt, btnDecrypt,
  setActiveButton, setInputError,
  showInitial, showModeHint, showResult,
  setCopyFeedback,
} from './ui.js';


let activeMode = null;

const TRANSFORM = {
  encrypt,
  decrypt,
};

function processInput() {
  const raw = inputText.value;

  if (!raw) {
    setInputError(false);
    activeMode ? showModeHint(activeMode) : showInitial();
    return;
  }

  const normalized = normalize(raw);

  if (!isValid(normalized)) {
    setInputError(true);
    return;
  }

  setInputError(false);

  if (activeMode) {
    showResult(TRANSFORM[activeMode](normalized));
  }
}

function setMode(mode) {
  activeMode = mode;
  setActiveButton(mode);
  processInput();
}

btnEncrypt.addEventListener('click', () => setMode('encrypt'));
btnDecrypt.addEventListener('click', () => setMode('decrypt'));

inputText.addEventListener('input', processInput);

btnCopy.addEventListener('click', () => {
  const text = outputText.value;
  if (!text) return;

  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(setCopyFeedback);
  } else {
    clipboard.writeText(text);
    setCopyFeedback();
  }
});