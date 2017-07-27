
const NUMBER_PATTERN = "(-|\\+)?[0-9]+(\\.[0-9]+)?";
export const marked = ['à', 'á', 'ả', 'ã', 'ạ', 'ă', 'ằ', 'ắ', 'ẳ', 'ẵ', 'ặ', 'â', 'ầ', 'ấ', 'ẩ', 'ẫ', 'ậ', 'À', 'Á', 'Ả', 'Ã', 'Ạ', 'Â', 'Ầ', 'Ấ', 'Ẩ', 'Ẫ', 'Ậ', 'Ă', 'Ắ', 'Ằ', 'Ẳ', 'Ẵ', 'Ặ', 'è', 'é', 'ẻ', 'ẽ', 'ẹ', 'ê', 'ế', 'ề', 'ể', 'ễ', 'ệ', 'É', 'È', 'Ẻ', 'Ẽ', 'Ẹ', 'Ê', 'Ề', 'Ế', 'Ể', 'Ễ', 'Ệ', 'ì', 'í', 'ỉ', 'ĩ', 'ị', 'Ì', 'Í', 'Ỉ', 'Ĩ', 'Ị', 'Ò', 'Ó', 'Ỏ', 'Õ', 'Ọ', 'Ô', 'Ồ', 'Ố', 'Ổ', 'Ỗ', 'Ộ', 'Ơ', 'Ờ', 'Ớ', 'Ở', 'Ỡ', 'Ợ', 'ò', 'ó', 'ỏ', 'õ', 'ọ', 'ô', 'ồ', 'ố', 'ổ', 'ỗ', 'ộ', 'ơ', 'ờ', 'ớ', 'ở', 'ỡ', 'ợ', 'ù', 'ú', 'ủ', 'ũ', 'ụ', 'ư', 'ừ', 'ứ', 'ử', 'ữ', 'ự', 'Ù', 'Ú', 'Ủ', 'Ũ', 'Ụ', 'Ư', 'Ừ', 'Ứ', 'Ử', 'Ữ', 'Ự', 'ỳ', 'ý', 'ỷ', 'ỹ', 'ỵ', 'Ỳ', 'Ý', 'Ỷ', 'Ỹ', 'Ỵ', 'đ', 'Đ']
export const notmarked = ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'i', 'i', 'i', 'i', 'i', 'I', 'I', 'I', 'I', 'I', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'u', 'u', 'u', 'u', 'u', 'u', 'u', 'u', 'u', 'u', 'u', 'U', 'U', 'U', 'U', 'U', 'U', 'U', 'U', 'U', 'U', 'U', 'y', 'y', 'y', 'y', 'y', 'Y', 'Y', 'Y', 'Y', 'Y', 'd', 'D']
export const EMPTY_ARRAY = "{}";
export const NULL_ = "null";
export const ARRAY_START = "{";
export const ARRAY_END = "}";
export const FOLDER_SEPARATOR = "/";
export const WINDOWS_FOLDER_SEPARATOR = "\\";
export const TOP_PATH = "..";
export const CURRENT_PATH = ".";
export const EXTENSION_SEPARATOR = '.';
export const EMPTY_ = "";
export const EMAIL_PATTERN = "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$";
export const _SPECIAL_CHAR = "!~`@#$%^&*-+();:=,.<>?\\/\"'_|����";


/**
 * 
 * @param {*} source 
 * @param {*} find 
 * @param {*} replace 
 */
export function replacesAll(source, find, replace) {
    return source.replace(new RegExp(find, 'g'), replace)
}

/**
 * 
 * @param {*} source 
 * @param {*} remove 
 */
export function removeAllOccurrenceOf(source, remove) {
    return replacesAll(source, remove, "");
}

/**
 * 
 * @param {*} message 
 */
export function escapeHtml(message) {
    return message
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

/**
 * 
 * @param {*} message 
 */
export function unescapeHtml(message) {

}

/**
 * 
 * @param {*} unicode 
 */

/**
 * 
 */ 
export function convertToEng(unicode) {
    if ((unicode == null) || (unicode.trim().length == 0)) {
        return "";
    }
    unicode = unicode.trim();
    for (let i = 0; i < marked.length; i++) {
        unicode = unicode.replace(marked[i], notmarked[i]);
    }
    return unicode;
}

/**
 * 
 * @param {*} character 
 */
export function convertCharToASCII(character) {
    return character.charCodeAt(0)
}

/**
 * 
 * @param {*} ascii 
 */
export function convertASCIIToChar(ascii) {
    return String.fromCharCode(ascii);
}

/**
 * 
 * @param {*} message 
 */
export function convertToHex(message) {
    if (typeof message === "string")
        message = parseInt(message)
    return message.toString(16).toUpperCase()
}

/**
 * 
 * @param {*} phone 
 */
export function convertToShortPhoneNumber(phone) {
    return phone;
}

/**
 * 
 * @param {*} phone 
 */
export function convertToLongPhoneNumber(phone) {
    return phone;
}

/**
 * 
 * @param {*} currency 
 */
export function convertToCurrency(currency) {
    return currency;
}

/**
 * 
 */
export function convertToMoney(currency, commaOrDot) {
    return ""
}

/**
 * 
 * @param {*} money 
 * @param {*} commaOrDot 
 */
export function convertToMoney(money, commaOrDot) {

}

/**
 * 
 * @param {*} format 
 * @param {*} value 
 */
export function convertDecimalFormatSymbols(format, value) {

}

/**
 * 
 * @param {*} format 
 * @param {*} value 
 */
export function convertDecimalFormatSymbolsVN(format, value) {

}

/**
 * 
 * @param {*} format 
 * @param {*} str 
 */
export function convertDecimalFormatSymbolsVN1(format, str) {

}

/**
 * 
 * @param {*} hex 
 */
export function convertHexToBytes(hex) {
    for (var bytes = [], c = 0; c < hex.length; c += 2)
        bytes.push(parseInt(hex.substr(c, 2), 16));
    return bytes;
}

/**
 * 
 * @param {*} bytes 
 */
export function convertBytesToHex(bytes) {
    for (var hex = [], i = 0; i < bytes.length; i++) {
        hex.push((bytes[i] >>> 4).toString(16));
        hex.push((bytes[i] & 0xF).toString(16));
    }
    return hex.join("");
}

/**
 * 
 * @param {*} array 
 */
export function sortAscendingArray(array) {
    if ((array === null) || (array.length == 0)) {
        return array;
    }
    return array.sort();
}

/**
 * 
 * @param {*} array 
 */
export function sortAscendingAndRemoveDuplicate(array) {
    if ((array == null) || (array.length == 0)) {
        return array;
    }
    return array.sort().filter((el, i, a) => { if (i == a.indexOf(el)) return 1; return 0 })
}

/**
 * 
 * @param {*} array 
 */
export function sortDescendingArray(array) {
    if ((array == null) || (array.length == 0)) {
        return array;
    }
    return array.sort().reverse();
}

/**
 * 
 * @param {*} array 
 */
export function sortDescendingAndRemoveDuplicate(array) {
    if ((array == null) || (array.length == 0)) {
        return array;
    }
    return array.sort().filter((el, i, a) => { if (i == a.indexOf(el)) return 1; return 0 }).reverse()
}

/**
 * 
 * @param {*} str 
 */
export function containsWhitespace(str) {
    return str.includes(" ")
}


/**
 * 
 * @param {*} str 
 */
export function trimWhitespace(str) {
    return str.trim()
}

/**
 * 
 * @param {*} str 
 */
export function trimOnlyOneWhitespaceBetween(str) {
    return replacesAll(str, "\\b\\s{2,}\\b", " ")
}

/**
 * 
 * @param {*} str 
 */
export function trimAllWhitespace(str) {
    return replacesAllOccurrenceOf(" ");
}

/**
 * 
 * @param {*} str 
 */
export function trimStartingWhitespace(str) {
    while (str.charAt(0) === ' ') str = substr(1, str.length - 1)
}

/**
 * 
 * @param {*} str 
 */
export function trimEndingWhitespace(str) {
    while (str.charAt(str.length) === '') str = substr(0, str.length - 2)
}

/**
 * 
 * @param {*} str 
 * @param {*} startingCharacter 
 */
export function trimStartingCharacter(str, startingCharacter) {

}

export function trimEndingCharacter(str, endingCharacter) {

}

export function startsWithIgnoreCase(str, prefix) {

}

export function endsWithIgnoreCase(str, suffix) {

}

export function subMatch(str, index, sub) {

}

/**
 * 
 * @param {*} str 
 * @param {*} sub 
 */
export function countOccurrencesOf(str, sub) {
    if ((str === null) || (sub === null) || (str.length === 0) || (sub.length === 0) || (str.length < sub.length)) {
        return 0;
    }
    count = 0;
    pos = 0;
    let idx = 0;
    while ((idx = str.indexOf(sub, pos)) != -1) {
        count++;
        pos = idx + sub.length;
    }
    return count;
}

/**
 * 
 * @param {*} str 
 */
export function replacesWhitespaceByHtmlCode(str) {
    return replacesAllOccurrenceOf(str, " ", "%20");
}

/**
 * 
 * @param {*} input 
 * @param {*} pattern 
 */
export function deletesAllOccurrenceOf(input, pattern) {
    return replacesAllOccurrenceOf(input, pattern, "");
}

export function deleteAnyCharacterOccurrenceOf(input, charsToDelete) {

}

/**
 * 
 * @param {*} str 
 */
export function quote(str) {
    return str != null ? "'" + str + "'" : null;
}

/**
 * 
 * @param {*} str 
 * @param {*} capitalize 
 */
export function changeFirstCharacterCase(str, capitalize) {
    if (capitalize) return (str.charAt(0).toUpperCase() + str.substr(1, str.length - 1))
}

export function convertFromUTF8(s) {

}

export function convertToUTF8(s) {

}

export function convertUnicodeToEng(unicode) {

}


/**
 * 
 * @param {*} phone 
 */
export function convertPhonenumberToHeader0109(phone) {
    if (phone.startsWith("84")) {
        phone = phone.substr(2,phone.length-1);
        phone = "0" + phone;
    }
    else if (phone.startsWith("+84")) {
        phone = phone.substr(3,phone.length-1);
        phone = "0" + phone;
    }
    return phone;
}

export function getFilename(path) {

}

export function getFilenameExtension(path) {

}

export function stripFilenameExtension(path) {

}

export function addRelativePath(path, relativePath) {

}


export function decimalFormatSymbols(format, str) {

}

export function decimalFormatSymbolsVN(format, str) {

}

export function addToArray(array, str) {

}

export function containsInArray(array, str) {

}

export function concatenateArrays(array1, array2) {

}

export function mergeArrays(array1, array2) {

}

export function intersectionArrays(array1, array2) {
}

export function sortAscendingArray(array) {

}

export function sortDescendingArray(array) {

}

export function toArray(collection) {

}

export function trimArrayElements(array) {

}

export function removeDuplicateAndSorts(array) {

}

export function split(toSplit, delimiter) {

}

/**
 * 
 * @param {*} object 
 */
export function isNullObject(object) {
    return (object === null);
}

