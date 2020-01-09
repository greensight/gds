import React from 'react';
import Layout from '../../src/components/Layout';
import Item from './Item';
import useTheme from '../../src/scripts/useTheme';
import major from '../../src/scripts/major';
import Section from '../../src/components/Section';

const TestLayout = () => {
    const theme = useTheme();

    // TODO Реализовать заголовки
    // TODO Продумать hr/border
    // TODO Сетки в контексте Storybook, CenteredContainer
    // TODO Зачем использовать useTheme, если есть css функции
    // TODO Внести auto в кнобсы
    // TODO Поправить добавление css prop
    // TODO Брать размеры брейкпоинтов из размеров элементов
    // TODO Брать контейнер не по auto, а по тексту нечисленному
    // TODO Предусмотреть контейнер с одной стороны

    const data = {
        one: [1, 2],
        two: [1, 2, 3],
        three: [1, 2, 3, 4],
        four: [1, 2, 3, 4, 5],
        five: [1, 2, 3, 4, 5, 6],
        six: [1, 2, 3, 4, 5, 6, 7, 8],
        seven: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        eight: [1, 2],
        nine: [1, 2, 3],
        ten: [1, 2, 3, 4, 5, 6, 7],
        eleven: [1, 2, 3, 4, 5],
        twelve: [1, 2, 3],
    };

    return (
        <>
            <Section pv={major(3)} mb={major(5)} bg={theme.colors.bg.lighter}>
                <Item bg={theme.colors.bg.default}>1</Item>
            </Section>
            <Section mb={major(7)}>
                <Item>1</Item>
            </Section>
            <Section mb={major(7)}>
                <Layout>
                    {data.one.map(item => (
                        <Layout.Item key={item} col={6}>
                            <Item>1/2</Item>
                        </Layout.Item>
                    ))}
                </Layout>
            </Section>
            <Section mb={major(7)}>
                <Layout>
                    {data.two.map(item => (
                        <Layout.Item key={item} col={4}>
                            <Item>1/3</Item>
                        </Layout.Item>
                    ))}
                </Layout>
            </Section>
            <Section mb={major(7)}>
                <Layout>
                    {data.three.map(item => (
                        <Layout.Item key={item} col={{ _: 3, sm: 6 }}>
                            <Item>1/4</Item>
                        </Layout.Item>
                    ))}
                </Layout>
            </Section>
            <Section mb={major(7)}>
                <Layout type="flex" auto={major(30)}>
                    {data.four.map(item => (
                        <Layout.Item key={item}>
                            <Item>{major(30)}px</Item>
                        </Layout.Item>
                    ))}
                </Layout>
            </Section>
            <Section mb={major(7)}>
                <Layout>
                    {data.five.map(item => (
                        <Layout.Item key={item} col={{ _: 2, sm: 4 }}>
                            <Item>1/6</Item>
                        </Layout.Item>
                    ))}
                </Layout>
            </Section>
            <Section mb={major(9)}>
                <Layout auto={major(18)}>
                    {data.six.map(item => (
                        <Layout.Item key={item}>
                            <Item>{major(18)}px</Item>
                        </Layout.Item>
                    ))}
                </Layout>
            </Section>
            <Section mb={major(8)}>
                <Layout cols={{ _: 10, sm: 5 }}>
                    {data.seven.map(item => (
                        <Layout.Item key={item}>
                            <Item>1/10</Item>
                        </Layout.Item>
                    ))}
                </Layout>
            </Section>
            <Section bg={theme.colors.bg.lighter} pv={major(5)} mb={major(8)}>
                <Layout cols={5}>
                    <Layout.Item>
                        <Item bg={theme.colors.bg.default}>1/5</Item>
                    </Layout.Item>
                    <Layout.Item col={4}>
                        <Layout cols={6} dense>
                            {data.eight.map(item => (
                                <Layout.Item key={item} col={{ _: 5, sm: 6 }} row={3}>
                                    <Item bg={theme.colors.bg.default}>5/6</Item>
                                </Layout.Item>
                            ))}
                            {data.nine.map(item => (
                                <Layout.Item key={item} col={{ sm: 2 }} row={2}>
                                    <Item bg={theme.colors.bg.default}>1/6</Item>
                                </Layout.Item>
                            ))}
                        </Layout>
                    </Layout.Item>
                </Layout>
            </Section>
            <Section mb={major(9)}>
                <Layout
                    areas={[
                        'item1 item2 item3',
                        'item1 item2 item3',
                        'item1 item4 item3',
                        'item5 item4 item6',
                        'item5 item7 item6',
                        'item5 item7 item6',
                    ]}
                >
                    {data.ten.map(item => (
                        <Layout.Item key={item} area={`item${item}`}>
                            <Item>1/3</Item>
                        </Layout.Item>
                    ))}
                </Layout>
            </Section>
            <Section mb={major(9)}>
                <Layout cols={{ _: 12, sm: 15 }} autoRows={1}>
                    <Layout.Item col={{ _: 4, sm: 5 }} row={3}>
                        <Item>1/3</Item>
                    </Layout.Item>
                    <Layout.Item col={{ _: 8, sm: 10 }} row={{ _: 2, sm: 3 }}>
                        <Item>2/3</Item>
                    </Layout.Item>
                    {data.eleven.map(item => (
                        <Layout.Item key={item} col={{ sm: 3 }}>
                            <Item>1/12</Item>
                        </Layout.Item>
                    ))}
                    <Layout.Item col={{ _: 3, sm: 15 }}>
                        <Item>1/4</Item>
                    </Layout.Item>
                </Layout>
            </Section>
            <Section mb={major(9)}>
                <Layout rows={{ _: [1, `${major(7)}px`], sm: [1, 1, `${major(7)}px`] }}>
                    <Layout.Item col={{ _: 3, sm: 12 }} row={{ _: 2, sm: 1 }}>
                        <Item>1/4</Item>
                    </Layout.Item>
                    {data.twelve.map(item => (
                        <Layout.Item key={item} col={{ _: 3, sm: 4 }}>
                            <Item>1/4</Item>
                        </Layout.Item>
                    ))}
                    <Layout.Item col={{ _: 9, sm: 12 }}>
                        <Item>3/4, {major(7)}px</Item>
                    </Layout.Item>
                </Layout>
            </Section>
            <Section container={false} bg={theme.colors.bg.lighter}>
                <Item>1</Item>
            </Section>
        </>
    );
};

export default TestLayout;
