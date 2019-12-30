export interface ILayout {
    /** Содержимое сетки */
    children: React.ReactNode;
    /** Тип сетки */
    type?: 'grid' | 'flex';
    /** Инлайн */
    inline?: boolean;
    /** Колонки */
    cols?: number | string | (number | string)[];
    /** Строки (type: 'grid') */
    rows?: number | string | (number | string)[];
    /** Зоны (type: 'grid') */
    areas?: string | string[];
    /** Отступы */
    gap?: number | string | (number | string)[2];
    /** Выравнивание основной оси */
    justify?: 'start' | 'end' | 'center' | 'stretch' | 'space-around' | 'space-between' | 'space-evenly';
    /** Выравнивание побочной оси */
    align?: 'start' | 'end' | 'center' | 'stretch';
    /** Размер строк неявной сетки (type: 'grid') */
    autoRows?: number | string | (number | string)[];
    /** Размер колонок неявной сетки (type: 'grid') */
    autoCols?: number | string | (number | string)[];
    /** Направление основной оси */
    direction?: 'row' | 'column';
    /** Денс-денс (type: 'grid') */
    dense?: boolean;
    /** Обратное направление (type: 'flex') */
    reverse?: boolean;
    /** Многострочный режим (type: 'flex') */
    wrap?: boolean;
}

export interface ILayoutItem {
    /** Содержимое элемента сетки */
    children: React.ReactNode;
    /** Колонки */
    col?: number | number[2] | string;
    /** Строки */
    row?: number | number[2] | string;
    /** Имя зоны (type: 'grid') */
    area?: string;
    /** Выравнивание основной оси (type: 'grid') */
    justify?: 'start' | 'end' | 'center' | 'stretch';
    /** Выравнивание побочной оси */
    align?: 'start' | 'end' | 'center' | 'stretch';
    /** Порядок */
    order?: number;
    /** grow (type: 'flex')  */
    grow?: boolean | number;
    /** shrink (type: 'flex')  */
    shrink?: boolean | number;
    /** basis (type: 'flex')  */
    basis?: string;
}
