import CryptoJS from 'crypto-js';

function useAesCrypto() {
    const encrypt = (text, key) => {
        return CryptoJS.AES.encrypt(text, key).toString();
    };

    const decrypt = (ciphertext, key) => {
        const bytes = CryptoJS.AES.decrypt(ciphertext, key);
        return bytes.toString(CryptoJS.enc.Utf8);
    };

    return { encrypt, decrypt };
}

export default useAesCrypto;
