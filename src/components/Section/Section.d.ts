export default interface ISection {
    /** Содержимое секции */
    children: React.ReactNode;
    /** Обёртка в контейнер */
    container?: boolean;
}
