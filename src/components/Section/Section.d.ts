export default interface ISection {
    /** Содержимое секции */
    children: React.ReactNode;
    /** Обёртка в контейнер */
    container?: boolean;
    /** Нижний отступ */
    mb?: number;
    /** Вертикальные поля */
    pv?: number;
    /** Верхнее поле */
    pt?: number;
    /** Нижнее поле */
    pb?: number;
    /** Фон */
    bg?: string;
}
