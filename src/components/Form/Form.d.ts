export interface IForm {
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
    /** Устанававает id компонентам FormInput и FormLabel */
    controlId: string;
    /** Размер. Выбирается из определённых в объекте темы */
    controlSize?: string;
    /** Устанавливает опциональное заполнение компоненту */
    optional?: boolean;
    /** Дополнительный класс */
    className?: string;
}

export interface IFormLabel {
    /** Тема. Выбирается из определённых в объекте темы */
    theme?: string;
    /** Визуально скрытый лейбл для скрин-ридеров */
    hidden: boolean;
    /** Подсказка к полю внутри лейбла */
    hint: string;
    /** Иконка */
    Icon?: Function | React.Component;
    /** Распологает иконку справа от лейбла */
    iconAfter?: boolean;
    /** Дополнительный класс */
    className?: string;
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
    /** Дополнительный класс */
    className?: string;
    /** Кастомный CSS */
    css?: Object;
}

export interface IFormHint {
    /** Тема. Выбирается из определённых в объекте темы */
    theme?: string;
    /** Тег обертки подсказки */
    Tag: string;
    /** Текст подсказки */
    hint: string;
    /** Дополнительный класс */
    className?: string;
    /** Кастомный CSS */
    css?: Object;
}

export interface IFormError {
    /** Текст ошибки */
    err: string;
    /** Дополнительный класс */
    className?: string;
}
