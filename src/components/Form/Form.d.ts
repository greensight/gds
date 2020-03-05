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
    /** Имя поля */
    name: string;
    /** Дополнительный класс */
    className?: string;
}

export interface IFormError {
    /** Текст ошибки */
    err: string;
    /** Дополнительный класс */
    className?: string;
}
