/** Имена (латинские и русские буквы, тире и пробелы) */
export const regName = /^[ \-a-zа-яё]*$/i;

/** Русские имена (русские буквы, тире и пробелы) */
export const regNameRu = /^[ \-а-яё]*$/i;

/** Английские имена (латинские буквы, тире и пробелы) */
export const regNameEn = /^[ \-a-z]*$/i;

/** Проверка на содержание хотя бы 1 латинской буквы */
export const regOneLetter = /^(?=.*[a-z]).*$/i;

/** Проверка на содержание хотя бы 1 цифры */
export const regOneDigit = /^(?=.*\d).*$/;

/** Телефонный номер (+7(000) 000-00-00) */
export const regPhone = /^\+7\(\d{3}\) \d{3}(?:-\d{2}){2}$/;

/** КПП (0000AA000) */
export const regKpp = /^\d{4}[\dA-Z]{2}\d{3}$/;

/**
 * Позиция между разрядами в цене (для проставления пробелов через replace).
 *
 * @example
 * let str = '9999999';
 * // str = '9 999 999';
 * str.replace(regPriceReplace, ' ');
 */
export const regPriceReplace = /\B(?=(\d{3})+(?!\d))/g;
