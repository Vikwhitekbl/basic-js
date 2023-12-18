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
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }
  encrypt(message, key) {
    message = message.toUpperCase().replace(/[^A-Z]/g, '');
    key = key.toUpperCase().replace(/[^A-Z]/g, '');
    let result = '';
    const keyLength = key.length;
    let keyIndex = 0;

    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    };

    for (let i = 0; i < message.length; i += 1) {
      const messageChar = message[i];
      const keyChar = key[keyIndex];
      const keyCharCode = this.alphabet.indexOf(keyChar);
      let shiftedIndex;

      if (this.isDirect) {
        const messageCharCode = this.alphabet.indexOf(messageChar);
        shiftedIndex = (messageCharCode + keyCharCode) % 26;
      } else {
        const messageCharCode = (this.alphabet.indexOf(messageChar) + 26) % 26;
        shiftedIndex = (messageCharCode - keyCharCode + 26) % 26;
      }

      result += this.alphabet[shiftedIndex];
      keyIndex++;
      if (keyIndex === keyLength) {
        keyIndex = 0;
      }
    }
    return result;
    // remove line with error and write your code here
  }
  decrypt(message, key) {
    message = message.toUpperCase().replace(/[^A-Z]/g, '');
    key = key.toUpperCase().replace(/[^A-Z]/g, '');
    let result = '';
    const keyLength = key.length;
    let keyIndex = 0;

    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    };

    for (let i = 0; i < message.length; i += 1) {
      const messageChar = message[i];
      const keyChar = key[keyIndex];
      const keyCharCode = this.alphabet.indexOf(keyChar);
      let shiftedIndex;

      if (this.isDirect) {
        const messageCharCode = (this.alphabet.indexOf(messageChar) + 26) % 26;
        shiftedIndex = (messageCharCode - keyCharCode + 26) % 26;
      } else {
        const messageCharCode = this.alphabet.indexOf(messageChar);
        shiftedIndex = (messageCharCode + keyCharCode) % 26;
      }

      result += this.alphabet[shiftedIndex];
      keyIndex++;
      if (keyIndex === keyLength) {
        keyIndex = 0;
      }
    }
    return result;    
    // remove line with error and write your code here
  }
}

module.exports = {
  VigenereCipheringMachine
};
