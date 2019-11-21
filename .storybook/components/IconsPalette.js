import React from 'react';
import './IconsPalette.css';

const IconsPalette = () => {
    const baseClass = 'icons-palette';

    const iconsReq = require.context('!!@svgr/webpack!../../src/images');
    const icons = iconsReq
        .keys()
        .map(name => ({ name: name.match(/\.\/(.+)\.svg$/)[1], Icon: iconsReq(name).default }));

    return (
        <ul className={baseClass}>
            {icons.map(({ name, Icon }) => (
                <IconToken key={name} name={name} Icon={Icon} />
            ))}
        </ul>
    );
};

const IconToken = ({ name, Icon }) => {
    const baseClass = 'icon-token';

    return (
        <li className={baseClass}>
            <Icon className={`${baseClass}__icon`} />
            <div className={`${baseClass}__name`}>{name}</div>
        </li>
    );
};

export default IconsPalette;
