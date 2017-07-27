const PHONE_PATTERN = "(\\+?)([-,0-9,(,), ,.]){3,20}";
const VIETTEL_PHONE_PATTERN = "^(84|0)(98|97|96|163|164|165|166|167|168|169|86)[0-9]*$";
const EMAIL_PATTERN = "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$";
const NUMBER_PATTERN = "(-|\\+)?[0-9]+(\\.[0-9]+)?";
const WEBSITE_ADDRESS_PATTERN = "(http(s)?://)?([\\w-]+\\.)+[\\w-]+(/[\\w- ;,./?%&=]*)?";
const PASSWORD_STRONG = "((?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&*]).{8,100})";

/**
 * 
 * @param {*} str 
 * @param {*} pattern 
 */
export function isForMatch(str, pattern) {
    var patt = new RegExp(pattern);
    return patt.test(str);
}

/**
 * 
 * @param {*} phonenumber 
 */
export function isValidatePhonenumber(phonenumber) {
    return isForMatch(phonenumber, "(\\+?)([-,0-9,(,), ,.]){3,20}");
}


/**
 * 
 * @param {*} phonenumber 
 */
export function isValidateViettelPhonenumber(phonenumber) {
    if (isValidatePhonenumber(phonenumber)) {
        return isForMatch(phonenumber, "^(84|0)(98|97|96|163|164|165|166|167|168|169|86)[0-9]*$");
    }
    return false;
}

/**
 * 
 * @param {*} mail 
 */
export function isValidateMail(mail) {
    return isForMatch(mail, "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$");
}

/**
 * 
 * @param {*} str 
 */
export function isValidateNumeric(str) {
    return isForMatch(str, "(-|\\+)?[0-9]+(\\.[0-9]+)?");
}

/**
 * 
 * @param {*} str 
 */
export function isValidateWebsiteAddress(str) {
    return isForMatch(str, "(http(s)?://)?([\\w-]+\\.)+[\\w-]+(/[\\w- ;,./?%&=]*)?");
}

/**
 * 
 * @param {*} dateString 
 */
export function isValidateDateStandard(dateString) {
    if (!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(dateString))
        return false;
    var parts = dateString.split("/");
    var day = parseInt(parts[0], 10);
    var month = parseInt(parts[1], 10);
    var year = parseInt(parts[2], 10);
    if (year < 1000 || year > 3000 || month == 0 || month > 12)
        return false;
    var monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))
        monthLength[1] = 29;
    return day > 0 && day <= monthLength[month - 1];
}

/**
 * 
 * @param {*} text 
 * @param {*} min 
 * @param {*} max 
 */
export function isValidateTextLength(text, min, max) {
    len = text.length;
    if ((len >= min) && (len <= max)) {
        return true;
    }
    return false;
}

/**
 * 
 * @param {*} number 
 * @param {*} low 
 * @param {*} high 
 */
export function isValidateInRange(number, low, high) {
    if ((number >= low) && (number <= high)) {
        return true;
    }
    return false;
}

/**
 * 
 * @param {*} n 
 */
export function checkNumberIsPrimes(n) {
    if ((n == 1) || (n <= 0)) {
        return false;
    }
    for (i = 2; i < n; i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}

/**
 * 
 * @param {*} input 
 */
export function checkNumberIsArmstrong(input) {
    var b, z, c = 0;
    z = input;
    while (z > 0) {
        b = z % 10;
        c = c + (b * b * b);
        z = parseInt(z / 10);
    }
    if (input == c)
        return true
    return false
}

/**
 * 
 * @param {*} password 
 */
export function isPassStrong(password) {
    return isForMatch(password, "((?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&*]).{8,100})");
}