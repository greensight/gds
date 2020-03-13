export interface IForm {
    /** Позиционирование ошибок валидации */
    errorPosition: string;
    /** Переключение между обязательностью и опциональностью */
    required: string;
    /** Показ успешной валидации */
    showSuccess: boolean;
    /** Названия полей с начальными значениями */
    initialValues: Object;
    /** Валидация через Yup */
    validationSchema?: Object;
    /** Обработчик сабмита */
    onSubmit?: (values: FormikValues) => void;
    /** Дополнительный класс */
    className?: string;
}

export interface IFormField {
    Tag: string;
    /** Размер. Выбирается из определённых в объекте темы */
    size?: string;
    /** Позиционирование подсказки к полю */
    hintPosition: string;
    /** Показ успешной валидации */
    showSuccess: boolean;
    /** Текст подсказки */
    hint: string;
    /** Устанававает id компонентам FormInput и FormLabel */
    controlId: string;
    /** Устанавливает опциональное заполнение компоненту */
    optional?: boolean;
}

export interface IFormLabel {
    /** Тема. Выбирается из определённых в объекте темы */
    theme?: string;
    /** Визуально скрытый лейбл для скрин-ридеров */
    hidden: boolean;
    /** Иконка */
    Icon?: Function | React.Component;
    /** Распологает иконку справа от лейбла */
    iconAfter?: boolean;
    /** Кастомный CSS */
    css?: Object;
}
export interface IFormInput {
    /** Тема. Выбирается из определённых в объекте темы */
    theme?: string;
    /** Иконка */
    Icon?: Function | React.Component;
    /** Распологает иконку в конце поля */
    iconAfter?: boolean;
    /** Кастомный CSS */
    css?: Object;
}
