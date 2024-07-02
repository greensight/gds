const mediaMq = () => {
    const mixinHead = '@mixin mq($breakpoint) {';
    const mixinBody = '    @media (max-width: #{$breakpoint - 1}px) {@content}';
    const mixinFooter = '}';

    return [mixinHead, mixinBody, mixinFooter].join('\n');
};

const mediaMinMq = () => {
    const mixinHead = '@mixin mqMin($breakpoint) {';
    const mixinBody = '@media (min-width: #{$breakpoint}px) {@content}';
    const mixinFooter = '}';

    return [mixinHead, mixinBody, mixinFooter].join('\n');
};

module.exports = { mediaMq, mediaMinMq };
