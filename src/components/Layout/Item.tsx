import React from 'react';
import useCSSProperty from '@helpers/useCSSProperty';
import { useLayout } from '.';

export interface LayoutItemProps {
    /** Содержимое элемента сетки */
    children: React.ReactNode;
    /** Колонки */
    col?: number | number[2] | string;
    /** Строки (type: 'grid') */
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
    /** Кастомный CSS */
    css?: Record<string, any>;
}

export const Item = ({ children, col, row, area, justify, align, order, grow, css, ...props }: LayoutItemProps) => {
    const { type, gap, cols, auto } = useLayout();

    return (
        <div
            css={[
                useCSSProperty({
                    name: 'gridColumn',
                    value: col,
                    condition: type === 'grid',
                    transform: value => {
                        if (Array.isArray(value)) return `${value[0]} / ${value[1]}`;
                        if (Number.isInteger(value)) return `span ${value}`;
                        return value;
                    },
                }),
                useCSSProperty({
                    name: 'gridRow',
                    value: row,
                    condition: type === 'grid',
                    transform: value => {
                        if (Array.isArray(value)) return `${value[0]} / ${value[1]}`;
                        if (Number.isInteger(value)) return `span ${value}`;
                        return value;
                    },
                }),
                useCSSProperty({
                    name: 'gridArea',
                    value: area,
                    condition: type === 'grid',
                }),
                useCSSProperty({
                    name: 'justifySelf',
                    value: justify,
                    condition: type === 'grid',
                }),
                useCSSProperty({
                    name: 'alignSelf',
                    value: align,
                    transform: value => {
                        if (type === 'flex' && (value === 'start' || value === 'end')) return `flex-${value}`;
                        return value;
                    },
                }),
                useCSSProperty({
                    name: 'order',
                    value: order,
                }),
                useCSSProperty({
                    name: 'flexGrow',
                    value: [grow, auto],
                    condition: type === 'flex',
                    transform: ([grow, auto]) => {
                        if (auto) return 1;
                        return !Number.isInteger(grow) ? Number(grow) : grow;
                    },
                }),
                useCSSProperty({
                    name: 'padding',
                    value: gap,
                    condition: type === 'flex',
                    transform: value => {
                        if (Array.isArray(value)) return `${value[0]}px 0 0 ${value[1]}px`;
                        return `${value}px 0 0 ${value}px`;
                    },
                }),
                useCSSProperty({
                    name: 'flexBasis',
                    value: [col, auto],
                    condition: type === 'flex',
                    transform: ([col, auto]) => {
                        if (auto) return auto;
                        if (Number.isInteger(Number(col))) return `${Math.floor((100 * col * 100) / cols) / 100}%`;
                        return col;
                    },
                }),
                css,
            ]}
            {...props}
        >
            {children}
        </div>
    );
};

export default Item;
