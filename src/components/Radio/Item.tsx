import React from 'react';
import { CSSObject } from '@emotion/core';
import {
    RadioItemTheme,
    RadioItemThemeProperties,
    RadioItemSizeProperties,
    RadioItemStateProperties,
} from '../../types/Radio';
import baseTheme from '../../utils/baseTheme';
import { useRadio } from './useRadio';
import { FieldInputProps, FieldMetaProps, FieldHelperProps, FormikValues } from 'formik';
import { useFormField } from '../Form/useFormField';

import scale from '../../utils/scale';
import typography from '../../utils/typography';
import useComponentTheme from '../../helpers/useComponentTheme';
import { ComponentStates, SVGRIcon, RequiredBy } from '../../types/Utils';

export interface RadioItemProps extends React.HTMLProps<HTMLInputElement> {
    /** Radio group name (inner) */
    name?: string;
    /** Formik field object (inner) */
    field?: FieldInputProps<string>;
    /** Value of radio item */
    value: string;
    /** Formik meta object (inner) */
    meta?: FieldMetaProps<any>;
    /** Formik helpers object (inner) */
    helpers?: FieldHelperProps<string>;
    /** Values of Formik */
    values?: FormikValues;
    /** Text position relative radio. */
    labelRight?: boolean;
    /** Custom icon for inner circle. */
    IconInner?: SVGRIcon;
    /** Additional CSS. */
    css?: CSSObject;
}

export const RadioItem = ({
    name,
    field,
    value,
    labelRight = true,
    IconInner,
    children,
    css,
    ...props
}: RadioItemProps) => {
    delete props.values;
    delete props.meta;
    delete props.helpers;

    const { orientation } = useRadio();

    const { size } = useFormField();
    /* Get theme objects. */
    const { componentTheme, usedTheme } = useComponentTheme('RadioItem');
    const radioItemTheme = componentTheme as RadioItemTheme;
    if (!radioItemTheme.sizes[size]) console.warn(`Specify "${size}" size. Default values are used instead`);

    /* Get theme default state properties and merge them with default values. */
    const themeProperties = getThemeProperties(radioItemTheme, 'default');

    const sizeProperties = radioItemTheme.sizes[size];
    const themeDefaults = {
        borderWidth: themeProperties.border ? 1 : 0,
        borderStyle: 'solid',
        time: 200,
        easing: 'ease',
        color: baseTheme.colors.black,
        bg: 'transparent',
    };

    const tp: RequiredBy<RadioItemThemeProperties, keyof typeof themeDefaults> = {
        ...themeDefaults,
        ...themeProperties,
    };

    const themeBeforeProperties = getBeforeProperties(radioItemTheme, 'default');
    const themeBeforeDefault = {
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: '50%',
        border: baseTheme.colors.black,
        time: 200,
        easing: 'ease',
    };
    //: RequiredBy<RadioItemThemeProperties, keyof typeof themeDefaults>
    const tBeforeP: RequiredBy<RadioItemThemeProperties, keyof typeof themeDefaults> = {
        ...themeBeforeDefault,
        ...themeBeforeProperties,
    };

    const themeAfterProperties = getAfterProperties(radioItemTheme, 'default');
    const themeAfterDefault = {
        bg: baseTheme.colors.black,
        time: 200,
        easing: 'ease',
    };

    const tAfterP: RequiredBy<RadioItemThemeProperties, keyof typeof themeDefaults> = {
        ...themeAfterDefault,
        ...themeAfterProperties,
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

    /* Define CSS rules from theme properties for default state. */
    const typographyName = sp.typography;
    const typographyCSS = typography(typographyName, usedTheme);

    const transition = getTransition(tp.time, tp.easing);
    const paddingRule = `padding${labelRight ? 'Left' : 'Right'}`;

    let horizontalRule;
    if (labelRight) {
        horizontalRule = 'left';
    } else {
        horizontalRule = 'right';
    }

    const defaultCSS: CSSObject = {
        position: 'relative',
        display: 'inline-block',
        borderWidth: tp.borderWidth,
        borderStyle: tp.borderStyle,
        [paddingRule]: sp.beforeSize + sp.beforeOffset,
        ...typographyCSS,
        lineHeight: getLineHeight(typographyName ? usedTheme.typography?.styles[typographyName].desktop : undefined, sp)
            .minLineHeight,
        transition,
        ...getStateCSS(tp),
        ...sp.css,

        'input:focus + &::before': {
            outline: `2px solid ${baseTheme.colors.brand}`,
        },
        '&::before': {
            content: '""',
            position: 'absolute',
            width: sp.beforeSize,
            height: sp.beforeSize,
            borderWidth: 1,
            borderStyle: 'solid',
            borderRadius: '50%',
            top:
                (getLineHeight(typographyName ? usedTheme.typography?.styles[typographyName].desktop : undefined, sp)
                    .minLineHeight *
                    getLineHeight(typographyName ? usedTheme.typography?.styles[typographyName].desktop : undefined, sp)
                        .textHeight -
                    sp.beforeSize) /
                2,
            [horizontalRule]: 0,
            transition,
            ...getStateCSS(tBeforeP),
        },
        '&::after': {
            content: '""',
            position: 'absolute',
            width: sp.afterSize,
            height: sp.afterSize,
            borderRadius: '50%',
            top:
                (getLineHeight(typographyName ? usedTheme.typography?.styles[typographyName].desktop : undefined, sp)
                    .minLineHeight *
                    getLineHeight(typographyName ? usedTheme.typography?.styles[typographyName].desktop : undefined, sp)
                        .textHeight -
                    sp.beforeSize) /
                    2 +
                sp.beforeSize / 2,
            [horizontalRule]: sp.beforeSize / 2 - sp.afterSize / 2,
            transition,
            transform: 'translateY(-50%) scale(0)',
            ...getStateCSS(tAfterP),
        },
    };

    /* Define CSS rules from theme properties for other states. */
    const themeHoverProperties = getThemeProperties(radioItemTheme, 'hover');
    const themeBeforeHoverProperties = getBeforeProperties(radioItemTheme, 'hover');
    const themeAfterHoverProperties = getAfterProperties(radioItemTheme, 'hover');

    const themeDisabledProperties = getThemeProperties(radioItemTheme, 'disabled');
    const themeBeforeDisabledProperties = getBeforeProperties(radioItemTheme, 'disabled');
    const themeAfterDisabledProperties = getAfterProperties(radioItemTheme, 'disabled');

    const themeFocusProperties = getThemeProperties(radioItemTheme, 'focus');
    const themeBeforeFocusProperties = getBeforeProperties(radioItemTheme, 'focus');
    const themeAfterFocusProperties = getAfterProperties(radioItemTheme, 'focus');

    const statesCSS: CSSObject = {
        ':hover': {
            ...getStateCSS(themeHoverProperties),
            ...(tp.timeIn && {
                transition: getTransition(tp.timeIn, tp.easing),
            }),

            '&::before': {
                ...getStateCSS(themeBeforeHoverProperties),
            },
            '&::after': {
                ...getStateCSS(themeAfterHoverProperties),
            },
        },
        'input:disabled + &': {
            ...getStateCSS(themeDisabledProperties),
            '&::before': {
                ...getStateCSS(themeBeforeDisabledProperties),
            },
            '&::after': {
                ...getStateCSS(themeAfterDisabledProperties),
            },
        },
        'input:focus + &': {
            ...getStateCSS(themeFocusProperties),
            '&::before': {
                ...getStateCSS(themeBeforeFocusProperties),
            },
            '&::after': {
                ...getStateCSS(themeAfterFocusProperties),
            },
        },
        'input:checked + &': {
            '&:after': {
                transform: 'translateY(-50%) scale(1)',
            },
            svg: {
                transform: 'translateY(-50%) scale(1)',
            },
        },
    };
    //console.log(statesCSS);
    const styles = [defaultCSS, statesCSS, css];
    const iconCSS: CSSObject = {
        position: 'absolute',
        width: sp.afterSize,
        height: sp.afterSize,
        borderRadius: '50%',
        top:
            (getLineHeight(typographyName ? usedTheme.typography?.styles[typographyName].desktop : undefined, sp)
                .minLineHeight *
                getLineHeight(typographyName ? usedTheme.typography?.styles[typographyName].desktop : undefined, sp)
                    .textHeight -
                sp.beforeSize) /
                2 +
            sp.beforeSize / 2,
        [horizontalRule]: sp.beforeSize / 2 - sp.afterSize / 2,
        transition,
        transform: 'translateY(-50%) scale(0)',
    };
    const inputStyles: CSSObject = {
        position: 'absolute',
        clip: 'rect(0, 0, 0, 0)',
    };

    const marginRule = `margin${orientation === 'vertical' ? 'Bottom' : 'Right'}`;
    const wrapperStyles: CSSObject = {
        display: orientation === 'vertical' ? 'block' : 'inline-block',
        marginBottom: orientation === 'horizontal' ? sp.verticalGap : undefined,
        '&:not(:last-child)': {
            [marginRule]: orientation === 'vertical' ? sp.verticalGap : sp.horizontalGap,
        },
    };

    const id = `${name}-${value}`;

    return (
        <div css={wrapperStyles}>
            <input
                css={inputStyles}
                {...field}
                {...props}
                type="radio"
                name={name}
                id={id}
                value={value}
                checked={value === field?.value}
            />
            <label htmlFor={id} css={styles}>
                {IconInner && <IconInner css={iconCSS} />}
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
    const themeProperties = radioItemTheme.theme[state]?.label;
    const baseProperties = radioItemTheme.base?.[state];
    return { ...baseProperties, ...themeProperties };
};

const getBeforeProperties = (
    radioItemTheme: RadioItemTheme,
    state: ComponentStates | 'default',
): RadioItemThemeProperties | RadioItemStateProperties => {
    const beforeProperties = radioItemTheme.theme[state]?.before;
    return { ...beforeProperties };
};

const getAfterProperties = (
    radioItemTheme: RadioItemTheme,
    state: ComponentStates | 'default',
): RadioItemThemeProperties | RadioItemStateProperties => {
    const afterProperties = radioItemTheme.theme[state]?.after;
    return { ...afterProperties };
};

const getTransition = (time: number, easing: string) =>
    ['color', 'fill', 'background-color', 'border-color', 'box-shadow', 'transform']
        .map((name) => `${name} ${easing} ${time}ms`)
        .join(', ');

const getLineHeight = (
    typographyProperties: TypographyProperties | undefined,
    sizeProperties: RadioItemSizeProperties,
) => {
    const cssRule = sizeProperties.css;
    let fontSize = 16;
    let lineHeight = 1.4;

    if (typographyProperties) {
        fontSize = parseFloat(typographyProperties.fontSize) * 16;
        lineHeight = typographyProperties.lineHeight;
    } else if (cssRule) {
        if (cssRule.fontSize) {
            if (typeof cssRule.fontSize === 'number') {
                fontSize = cssRule.fontSize;
            } else if (typeof cssRule.fontSize === 'string') {
                if (cssRule.fontSize.endsWith('rem')) {
                    fontSize = parseFloat(cssRule.fontSize) * 16;
                } else {
                    fontSize = parseFloat(cssRule.fontSize);
                }
            }
        }
        if (cssRule.lineHeight && typeof cssRule.lineHeight === 'number') lineHeight = cssRule.lineHeight;
    }

    const textHeight = Math.floor(fontSize * lineHeight);
    const minLineHeight = sizeProperties.beforeSize / textHeight;

    return { textHeight, minLineHeight };
};

export default RadioItem;
