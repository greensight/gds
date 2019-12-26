// const breakpoints = {
//     xs: 568,
//     sm: 768,
//     md: 1024,
//     lg: 1280,
//     xl: 1440,
// };

const breakpoints = {
    xs: 768,
    sm: 992,
    md: 1200,
    lg: 1600,
    xl: 1920,
};

const mq = Object.entries(breakpoints).reduce(
    (acc, [name, value]) => ({
        ...acc,
        [name]: `@media (max-width: ${value - 1}px)`,
    }),
    {},
);

export default mq;
