import React from 'react';
import './ColorsPalette.css';

const ColorsPalette = () => {
    const baseClass = 'colors-palette';

    const styleSheets = Array.from(document.styleSheets);
    const cssRules = styleSheets.map(styleSheet => Array.from(styleSheet.cssRules)).flat();
    const roots = cssRules.filter(cssRule => cssRule.selectorText === ':root');
    const rules = roots
        .map(cssRule => {
            const rules = cssRule.cssText.match(':root {(.+)}')[1].split(';');
            return rules.map(rule => rule.trim());
        })
        .flat();
    const colorRules = rules.filter(rule => rule.startsWith('--cl-'));
    const colors = colorRules.map(rule => {
        const parts = rule.split(': ');
        return {
            name: parts[0],
            value: parts[1],
        };
    });

    return (
        <ul className={baseClass}>
            {colors.map(({ name, value }) => (
                <ColorToken key={name} name={name} value={value} />
            ))}
        </ul>
    );
};

const ColorToken = ({ name, value }) => {
    const baseClass = 'color-token';

    return (
        <li className={baseClass} style={{ '--bg-color': value }}>
            <div className={`${baseClass}__main`} />
            <div className={`${baseClass}__info`}>
                <div className={`${baseClass}__info-title`}>
                    <strong>{name}</strong>
                </div>
                <div className={`${baseClass}__info-hex`}>
                    <em>{value}</em>
                </div>
            </div>
        </li>
    );
};

export default ColorsPalette;
