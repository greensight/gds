export interface IButton {
    /** Содержимое кнопки */
    children: React.ReactNode;
    /** Тема. Выбирается из определённых в объекте темы */
    theme?: string;
    /** Размер. Выбирается из определённых в объекте темы */
    size?: string;
    /** Блочная кнопка. Занимает 100% ширины родителя */
    block?: boolean;
    /** Иконка */
    Icon?: Function | React.Component;
    /** Распологает иконку после текста */
    iconAfter?: boolean;
    /** Визуально скрытое содержимое. Для "иконочных" кнопок */
    hidden?: boolean;
    /** Заблокированная кнопка */
    disabled?: boolean;
    /** HTML тип кнопки */
    type?: 'button' | 'submit' | 'reset';
    /** Адрес ссылки. Вместо кнопки будет отрендерен <a/> */
    href?: string;
    /** Использовать свой тег для рендера. Нужен для передачи Link роутера */
    as?: React.Component;
    /** Открытие ссылки в новой вкладке */
    external?: boolean;
    /** Обработчик клика */
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    /** Объект темы кнопки. Для теста в Storybook, перезаписывает глобальный */
    themeObj?: IButtonTheme;
    /** Кастомный CSS */
    css?: Object;
    /** ref. DOM node доступен через current */
    ref?: HTMLButtonElement;
}
