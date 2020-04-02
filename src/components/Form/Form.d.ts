export interface IFormLabel {
    /** Иконка справа от лейбла */
    IconAfter?: Function | React.Component;
    /** Иконка слева от лейбла */
    IconBefore?: Function | React.Component;
    /** Кастомный CSS */
    css?: Record<string, any>;
}
