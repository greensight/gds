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
    /** Устанававает id экомпонентам FormInput и FormLabel */
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
    /** Размер. Выбирается из определённых в объекте темы */
    size?: string;
    /** Визуально скрытый лейбл для скрин-ридеров */
    hidden: boolean;
    /** Имя лейбла */
    name: string;
    /** Подсказка к полю */
    hint: string;
    /** Добавляет в лейбл текст о необязательности поля */
    isOptional?: boolean;
    /** Иконка */
    Icon?: Function | React.Component;
    /** Распологает иконку в конце поля */
    iconAfter?: boolean;
    /** Дополнительный класс */
    className?: string;
    /** Объект темы Лебла. Для теста в Storybook, перезаписывает глобальный */
    themeObj?: IButtonTheme;
    /** Кастомный CSS */
    css?: Object;
}

export interface IFormInput {
    /** Тема. Выбирается из определённых в объекте темы */
    theme?: string;
    /** Размер. Выбирается из определённых в объекте темы */
    size?: string;
    /** Имя поля */
    name: string;
    /** Обязательное поле */
    required?: boolean;
    /** Иконка */
    Icon?: Function | React.Component;
    /** Распологает иконку в конце поля */
    iconAfter?: boolean;
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
