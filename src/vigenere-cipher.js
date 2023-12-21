const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }
  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    };

    message = message.toUpperCase().replace(/[^A-Za-z0-9 !:)(^.,#%|/&$*-@]/g, '');
    key = key.toUpperCase().replace(/[^A-Z]/g, '');
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    let keyIndex = 0;

    for (let i = 0; i < message.length; i += 1) {
      const messageChar = message[i];
      const keyChar = key[keyIndex % key.length];

      if (alphabet.includes(messageChar)) {
        const messageIndex = alphabet.indexOf(messageChar);
        const currentKeyIndex = alphabet.indexOf(keyChar);
        let encryptedCharIndex;

        if (this.isDirect) {
          encryptedCharIndex = (messageIndex + currentKeyIndex) % 26;
        } else {
          encryptedCharIndex = Math.abs(messageIndex - currentKeyIndex) % 26;
        }
        const encryptedChar = alphabet[encryptedCharIndex];
        if (this.isDirect) {
          result += encryptedChar;
        } else {
          result = encryptedChar + result;
        }
        
        keyIndex++;
      } else {
        result += messageChar;
      }
    }
    return this.isDirect ? result.split('').join('') : result;
    // remove line with error and write your code here
  }
  decrypt(result, key) {
    if (!result || !key) {
      throw new Error('Incorrect arguments!');
    };
    result = result.toUpperCase().replace(/[^A-Za-z0-9 !:)(^.,#%|/&$*-@]/g, '');
    key = key.toUpperCase().replace(/[^A-Z]/g, '');
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let decryptedResult = '';
    let keyIndex = 0;

    for (let i = 0; i < result.length; i += 1) {
      const messageChar = result[i];
      const keyChar = key[keyIndex % key.length];

      if (alphabet.includes(messageChar)) {
        const messageIndex = alphabet.indexOf(messageChar);
        const currentKeyIndex = alphabet.indexOf(keyChar);
        let decryptedCharIndex;

        if (this.isDirect) {
          decryptedCharIndex = (messageIndex - currentKeyIndex + 26) % 26;
        } else {
          decryptedCharIndex = Math.abs(messageIndex - currentKeyIndex + 26) % 26;
        }
        const decryptedChar = alphabet[decryptedCharIndex];
        decryptedResult += decryptedChar;
        
        keyIndex++;
      } else {
        decryptedResult += messageChar;
      }
    }
    return decryptedResult;    
    // remove line with error and write your code here
  }
}

module.exports = {
  VigenereCipheringMachine
};