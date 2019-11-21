export default interface IButton {
    /** Содержимое кнопки */
    children: React.ReactNode;
    /** Обработчик клика */
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    /** Тема */
    theme?: 'basic' | 'red';
    /** С обводкой */
    border?: boolean;
    /** Маленькая */
    sm?: boolean;
    /** Блочная */
    block?: boolean;
    /** Иконка */
    Icon?: React.Component;
    /** Положение иконки */
    iconPlacement?: 'before' | 'after';
    /** Дополнительный класс */
    className?: string;
}
