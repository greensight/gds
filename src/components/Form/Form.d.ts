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

export interface IFormGroup {
    Tag: string;
    /** Устанававает id FormField и FormLabel */
    name: string;
    /** Устанавилвает required полю. Если поле необязательно, показывает в лейбле опциональность */
    isRequied: boolean;
    /** Дополнительный класс */
    className?: string;
}

export interface IFormLabel {
    /** Визуально скрытый лейбл для скрин-ридеров */
    hidden: boolean;
    /** Добавляет в лейбл текст о необязательности поля */
    isRequied: boolean;
    /** Дополнительный класс */
    className?: string;
}

export interface IFormField {
    /** Имя поля */
    name: string;
    /** Дополнительный класс */
    className?: string;
}

export interface IFormHint {
    /** Тег обертки подсказки */
    Tag: string;
    /** Текст подсказки */
    hint: string;
    /** Дополнительный класс */
    className?: string;
}

export interface IFormError {
    /** Текст ошибки */
    err: string;
    /** Дополнительный класс */
    className?: string;
}
