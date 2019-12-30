import React from 'react';
import Layout from '../../src/components/Layout';
import Item from './Item';
import useTheme from '../../src/scripts/useTheme';
import major from '../../src/scripts/major';
import minor from '../../src/scripts/minor';
import Section from '../../src/components/Section';

const TestLayout = () => {
    const theme = useTheme();

    const categories = [1, 2, 3, 4, 5, 6];
    const sports = [1, 2, 3, 4];
    const products = [1, 2, 3];
    const boots = [1, 2, 3, 4, 5];
    const links = [1, 2, 3, 4, 5, 6];
    const recommendations = [1, 2, 3, 4, 5];
    const moreCategories = [1, 2, 3, 4];
    const footerLinks = [1, 2, 3, 4];

    // TODO Реализовать заголовки
    // TODO Продумать aside
    // TODO Унифицировать padding/margin
    // TODO Продумать hr/border
    // TODO Сетки в контексте Storybook, CenteredContainer

    // TODO Зачем использовать useTheme, если есть css функции

    return (
        <>
            <header css={theme => ({ color: theme.app.colors.text.link })}>
                <Section container css={{ backgroundColor: 'black' }}>
                    <Item>Preheader</Item>
                </Section>
                <Section container bg={theme.colors.bg.brand}>
                    <Item>Header</Item>
                </Section>
            </header>
            <main>
                <Section bg={theme.colors.bg.brandHover}>
                    <Item>Carousel</Item>
                </Section>
                <Section container>
                    <Item>Brands???</Item>
                </Section>
                <Section container>
                    <Layout
                        cols={12}
                        gap={{
                            xxl: major(3),
                            sm: minor(1),
                        }}
                    >
                        {categories.map(item => (
                            <Layout.Item
                                key={item}
                                col={{
                                    xxl: 4,
                                    xs: 6,
                                }}
                            >
                                <Item css={{ height: major(49) }}>Category {item}</Item>
                            </Layout.Item>
                        ))}
                    </Layout>
                </Section>
                <Section container pt={major(3)} pb={major(6)}>
                    <Item>Categories???</Item>
                </Section>
                <Section container bg={theme.colors.bg.lighter} pv={major(5)}>
                    <Layout cols={12}>
                        <Layout.Item col={12}>
                            <Item css={{ height: major(56) }}>Sports {sports[0]}</Item>
                        </Layout.Item>
                        {sports.slice(1).map(item => (
                            <Layout.Item key={item} col={4}>
                                <Item css={{ height: major(35) }}>Sports {item}</Item>
                            </Layout.Item>
                        ))}
                    </Layout>
                </Section>
                <Section container pt={major(8)} pb={major(5)}>
                    <Item>Heading</Item>
                    <Item>Categories</Item>
                    <Layout rows={`1fr ${major(4)}px`} gap={[major(3), minor(5)]}>
                        <Layout.Item col={4} row={2}>
                            <Item>Sports {sports[0]}</Item>
                        </Layout.Item>
                        {products.map(item => (
                            <Layout.Item key={item} col={2}>
                                <Item>Sports {item}</Item>
                            </Layout.Item>
                        ))}
                        <Layout.Item col={6}>
                            <Item>Sports {sports[0]}</Item>
                        </Layout.Item>
                    </Layout>
                </Section>
                <Section container>
                    <Item>Banner</Item>
                </Section>
                <Section container pt={major(8)} pb={major(6)}>
                    <Item>Banner</Item>
                    <Item>Heading</Item>
                    <Item>Categories</Item>
                    <Layout>
                        {boots.map(item => (
                            <Layout.Item key={item} col={2}>
                                <Item>Boots {item}</Item>
                            </Layout.Item>
                        ))}
                    </Layout>
                    <Item>Link</Item>
                </Section>
                <Section container>
                    <Layout cols={12}>
                        {links.map(item => (
                            <Layout.Item key={item} col={4}>
                                <Item>Link {item}</Item>
                            </Layout.Item>
                        ))}
                    </Layout>
                </Section>
                <Section container pv={major(8)}>
                    <Item>Heading</Item>
                    <Layout>
                        {recommendations.map(item => (
                            <Layout.Item key={item} col={2}>
                                <Item>Recommendation {item}</Item>
                            </Layout.Item>
                        ))}
                    </Layout>
                </Section>
                <Section
                    container
                    pt={major(7)}
                    css={{
                        borderTop: `1px solid ${theme.colors.border.second}`,
                    }}
                >
                    <Layout cols={4}>
                        {moreCategories.map(item => (
                            <Layout.Item key={item}>
                                <Item>Category {item}</Item>
                            </Layout.Item>
                        ))}
                    </Layout>
                </Section>
                <Section container pt={major(8)} pb={major(7)}>
                    <Layout>
                        <Layout.Item col={2}>
                            <Item>About 1</Item>
                        </Layout.Item>
                        <Layout.Item col={8}>
                            <Item>About 2</Item>
                        </Layout.Item>
                    </Layout>
                </Section>
            </main>
            <footer>
                <Section container bg={theme.colors.bg.lighter}>
                    <Item>Subscribe</Item>
                </Section>
                <Section container bg={theme.colors.bg.brand}>
                    <Layout cols={4}>
                        {footerLinks.map(item => (
                            <Layout.Item key={item}>
                                <Item>Footer {item}</Item>
                            </Layout.Item>
                        ))}
                    </Layout>
                </Section>
            </footer>
        </>
    );
};

export default TestLayout;
