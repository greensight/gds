export interface IForm {
    /** Позиционирование ошибок валидации */
    errorPosition: 'top' | 'bottom';
    /** Переключение между обязательностью и опциональностью */
    required: 'optional' | 'mark';
    /** Иконка ошибки */
    ErrorIcon?: Function | React.Component;
    /** Иконка успешной валидации */
    SuccessIcon?: Function | React.Component;
    /** Показ успешной валидации */
    showSuccess: boolean;
    /** Названия полей с начальными значениями */
    initialValues: Object;
    /** Валидация через Yup */
    validationSchema?: Object;
    /** Объект темы кнопки. Для теста в Storybook, перезаписывает глобальный */
    themeObj?: IFormTheme;
    /** Обработчик сабмита */
    onSubmit?: (values: FormikValues) => void;
}

export interface IFormField {
    /** Размер. Выбирается из определённых в объекте темы */
    size?: 'sm' | 'md' | 'lg';
    /** Позиционирование подсказки к полю */
    hintPosition: 'top' | 'bottom';
    /** Текст подсказки */
    hint: string;
    /** Устанававает id компонентам FormInput и FormLabel */
    controlId: string;
    /** Визуально скрытый лейбл для скрин-ридеров */
    hiddenLabel: boolean;
    /** Расположение иконки валидации */
    validationPosition: 'labelBefore' | 'labelAfter' | 'inputBefore' | 'inputAfter';
    /** Устанавливает опциональное заполнение компоненту */
    optional?: boolean;
}

export interface IFormLabel {
    /** Иконка справа от лейбла */
    IconAfter?: Function | React.Component;
    /** Иконка слева от лейбла */
    IconBefore?: Function | React.Component;
    /** Кастомный CSS */
    css?: Object;
}

export interface IFormInput {
    /** Иконка в конце поля */
    IconAfter?: Function | React.Component;
    /** Иконка в начале поля */
    IconBefore?: Function | React.Component;
    /** Кастомный CSS */
    css?: Object;
    /** ref. DOM node доступен через current */
    ref?: HTMLInputElement;
}
