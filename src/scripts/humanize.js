const humanize = str => {
    const fragments = str.split('_');
    const capitalizedFragments = fragments.map(frag => `${frag[0].toUpperCase()}${frag.slice(1)}`);
    return capitalizedFragments.join(' ');
};

export default humanize;
