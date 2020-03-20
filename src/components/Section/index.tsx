import React from 'react';
import Container from '@components/Container';
import useCSSProperty from '@helpers/useCSSProperty';

export interface SectionProps {
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
    /** Кастомный CSS */
    css?: Record<string, any>;
}

export const Section = ({ children, container = true, mb, pv, pt, pb, bg, css, ...props }: SectionProps) => {
    return (
        <section
            css={[
                useCSSProperty({
                    name: 'marginBottom',
                    value: mb,
                }),
                useCSSProperty({
                    name: 'paddingTop',
                    value: [pv, pt],
                    transform: ([pv, pt]) => pv || pt,
                }),
                useCSSProperty({
                    name: 'paddingBottom',
                    value: [pv, pb],
                    transform: ([pv, pb]) => pv || pb,
                }),
                useCSSProperty({
                    name: 'background',
                    value: bg,
                }),
                css,
            ]}
            {...props}
        >
            {container ? <Container>{children}</Container> : children}
        </section>
    );
};

export default Section;
