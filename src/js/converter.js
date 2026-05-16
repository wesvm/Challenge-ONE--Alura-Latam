const RULES = [
  { plain: 'e', cipher: 'enter' },
  { plain: 'i', cipher: 'imes' },
  { plain: 'o', cipher: 'ober' },
  { plain: 'a', cipher: 'ai' },
  { plain: 'u', cipher: 'ufat' },
];

/**
 * Normaliza el texto convirtiéndolo a minúsculas y eliminando acentos
 * @param {string} text
 * @returns {string}
 */
function normalize(text) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

/**
 * Valida que el texto solo contenga letras minúsculas y espacios
 * @param {string} text
 * @returns {boolean}
 */
function isValid(text) {
  return /^[a-z\s]*$/.test(text);
}

/**
 *Encripta el texto aplicando las reglas de sustitución definidas
 * @param {string} text 
 * @returns {string}
 */
function encrypt(text) {
  return RULES.reduce((result, { plain, cipher }) =>
    result.replaceAll(plain, cipher), text);
}

/**
 * Desencripta el texto invirtiendo las reglas de sustitución definidas
 * @param {string} text
 * @returns {string}
 */
function decrypt(text) {
  return RULES.reduce((result, { plain, cipher }) =>
    result.replaceAll(cipher, plain), text);
}

export { normalize, isValid, encrypt, decrypt };