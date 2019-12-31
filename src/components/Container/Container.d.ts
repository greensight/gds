export default interface IContainer {
    /** Содержимое контейнера */
    children: React.ReactNode;
    /** Максимальная ширина */
    maxWidth?: number;
    /** Размеры полей */
    padding?: number;
}
