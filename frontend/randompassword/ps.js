function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {

    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%&*+-./:;<=>?@[]{}~";

    let allowedChars = '';
    let password = '';

    allowedChars += includeLowercase ? lowercaseChars : '';
    allowedChars += includeUppercase ? uppercaseChars : ''
    allowedChars += includeNumbers ? numberChars : ''
    allowedChars += includeSymbols ? symbolChars : ''


    if (length <= 0) {
        return `(Passwords length must be at least 1)`;
    }
    if (allowedChars.length === 0) {
        return `(Passwords must contain at least one character)`;

    }

    for (let i = 0; i < length; i++) {
        const random = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[random];
    }
    return password;


}

const passwordLength = 12;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(passwordLength,
    includeLowercase,
    includeUppercase,
    includeNumbers,
    includeSymbols);
console.log(`Generated password: ${password}`);