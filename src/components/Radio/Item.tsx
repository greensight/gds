import React from 'react';
import { CSSObject } from '@emotion/core';
import {
    RadioItemTheme,
    RadioItemThemeProperties,
    RadioItemSizeProperties,
    RadioItemStateProperties,
} from '../../types/Radio';
import { FieldInputProps, FieldMetaProps, FieldHelperProps, FormikValues } from 'formik';
import { useFormField } from '../Form/useFormField';
import baseTheme from '../../utils/baseTheme';
import scale from '../../utils/scale';
import typography from '../../utils/typography';
import useComponentTheme from '../../helpers/useComponentTheme';
import { ComponentStates, RequiredBy } from '../../types/Utils';

export interface RadioItemProps extends React.HTMLProps<HTMLInputElement> {
    /** Radio group name (inner) */
    name?: string;
    /** Formik field object (inner) */
    field?: FieldInputProps<string>;
    /** Value of radio item */
    value: string;
    /** Formik meta object (inner) */
    meta?: FieldMetaProps<any>;
    helpers?: FieldHelperProps<string>;
    /** Values of Formik */
    values?: FormikValues;
    /** Additional CSS. */
    css?: CSSObject;
}

export const RadioItem = ({ name, field, value, children, css, ...props }: RadioItemProps) => {
    delete props.values;
    delete props.meta;
    delete props.helpers;

    const { size } = useFormField();
    /* Get theme objects. */
    const { componentTheme, usedTheme } = useComponentTheme('RadioItem');
    const radioItemTheme = componentTheme as RadioItemTheme;
    if (!radioItemTheme.sizes[size]) console.warn(`Specify "${size}" size. Default values are used instead`);

    /* Get theme default state properties and merge them with default values. */
    const themeProperties = getThemeProperties(radioItemTheme, 'default');
    const sizeProperties = radioItemTheme.sizes[size];

    const tp: RequiredBy<RadioItemThemeProperties, keyof typeof themeDefaults> = {
        ...themeDefaults,
        ...themeProperties,
    };
    const sizeDefaults = {
        beforeSize: scale(3),
        afterSize: scale(1),
        beforeOffset: scale(1),
        horizontalGap: scale(3),
        verticalGap: scale(2),
    };
    const sp: RequiredBy<RadioItemSizeProperties, keyof typeof sizeDefaults> = {
        ...sizeDefaults,
        ...sizeProperties,
    };

    const themeDefaults = {
        borderWidth: themeProperties.border ? 1 : 0,
        borderStyle: 'solid',
        time: 200,
        easing: 'ease',
        color: baseTheme.colors.black,
        bg: 'transparent',
        '&::after': {
            content: '""',
            position: 'absolute',
            width: scale(3),
            height: scale(3),
            borderRadius: '50%',
            border: baseTheme.colors.black,
        },
    };

    /* Define CSS rules from theme properties for default state. */
    const typographyName = sp.typography;
    const typographyCSS = typography(typographyName, usedTheme);

    //const padding = `${pv}px ${sp.padding}px`;
    const transition = getTransition(tp.time, tp.easing);
    const defaultCSS: CSSObject = {
        borderWidth: tp.borderWidth,
        borderStyle: tp.borderStyle,
        ...typographyCSS,
        transition,
        ...getStateCSS(tp),
        ...sp.css,
        '&::after': {
            content: '""',
            position: 'absolute',
            width: sp.beforeSize,
            height: sp.beforeSize,
            borderRadius: '50%',
            border: baseTheme.colors.black,
        },
    };

    /* Define CSS rules from theme properties for other states. */
    const themeHoverProperties = getThemeProperties(radioItemTheme, 'hover');
    const themeDisabledProperties = getThemeProperties(radioItemTheme, 'disabled');
    const themeFocusProperties = getThemeProperties(radioItemTheme, 'focus');
    console.log(themeDisabledProperties);
    const statesCSS: CSSObject = {
        ':hover': {
            ...getStateCSS(themeHoverProperties),
            ...(tp.timeIn && {
                transition: getTransition(tp.timeIn, tp.easing),
            }),
        },
        'input:disabled + label': {
            ...getStateCSS(themeDisabledProperties),
        },
        ':focus': getStateCSS(themeFocusProperties),
    };

    const styles = [defaultCSS, statesCSS, css];
    const inputStyles: CSSObject = {
        position: 'absolute',
        clip: 'rect(0, 0, 0, 0)',
    };
    const id = `${name}-${value}`;

    return (
        <div>
            <input css={inputStyles} {...field} {...props} type="radio" name={name} id={id} value={value} />
            <label htmlFor={id} css={styles}>
                {children}
            </label>
        </div>
    );
};

const getStateCSS = ({ color, bg, border, shadow, css }: RadioItemStateProperties) => ({
    color,
    fill: color,
    background: bg,
    borderColor: border,
    boxShadow: shadow,
    ...css,
});

const getThemeProperties = (
    radioItemTheme: RadioItemTheme,
    state: ComponentStates | 'default',
): RadioItemThemeProperties | RadioItemStateProperties => {
    const themeProperties = radioItemTheme.theme[state];
    const baseProperties = radioItemTheme.base?.[state];
    return { ...baseProperties, ...themeProperties };
};

const getTransition = (time: number, easing: string) =>
    ['color', 'fill', 'background-color', 'border-color', 'box-shadow']
        .map((name) => `${name} ${easing} ${time}ms`)
        .join(', ');

export default RadioItem;
