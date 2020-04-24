import React from 'react';
import { CSSObject } from '@emotion/core';
import {
    RadioItemTheme,
    RadioItemLabelThemeProperties,
    RadioItemLabelStateProperties,
    RadioItemCircleThemeProperties,
    RadioItemCircleStateProperties,
    RadioItemSizeProperties,
} from '../../types/Radio';
import baseTheme from '../../utils/baseTheme';
import { useRadio } from './useRadio';
import { FieldInputProps, FieldMetaProps, FieldHelperProps, FormikValues } from 'formik';
import scale from '../../utils/scale';
import typography from '../../utils/typography';
import useComponentTheme from '../../helpers/useComponentTheme';
import { ComponentStates, SVGRIcon, RequiredBy } from '../../types/Utils';
import { TypographyProperties } from '../../types/Typography';

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
    /** Custom icon for outer circle. */
    IconOuter?: SVGRIcon;
    /** RadioItem theme object for internal testing purposes. Uses in Storybook knobs to play with theme. */
    __theme?: RadioItemTheme;
    /** Additional CSS. */
    css?: CSSObject;
}

export const RadioItem = ({
    name,
    field,
    value,
    labelRight = true,
    IconInner,
    IconOuter,
    children,
    __theme,
    css,
    ...props
}: RadioItemProps) => {
    delete props.values;
    delete props.meta;
    delete props.helpers;

    const { orientation, alignment, size } = useRadio();

    /* Get theme objects. */
    const { componentTheme, usedTheme } = useComponentTheme('RadioItem', __theme);
    const radioItemTheme = componentTheme as RadioItemTheme;
    if (!radioItemTheme.sizes[size]) console.warn(`Specify "${size}" size. Default values are used instead`);

    /* Get theme for default state properties and merge them with default values for label. */
    const themeProperties = getThemeProperties(radioItemTheme, 'label', 'default');
    const sizeProperties = radioItemTheme.sizes[size];
    const themeDefaults = {
        borderWidth: themeProperties.border ? 1 : 0,
        borderStyle: 'solid',
        time: 200,
        easing: 'ease',
        color: baseTheme.colors.black,
        bg: 'transparent',
    };

    const tp: RequiredBy<RadioItemLabelThemeProperties, keyof typeof themeDefaults> = {
        ...themeDefaults,
        ...themeProperties,
    };

    /* Get theme for default state properties and merge them with default values for outer circle. */
    const themeOuterProperties = getThemeProperties(radioItemTheme, 'outer', 'default');
    const themeOuterDefault = {
        borderWidth: themeOuterProperties.border ? 1 : 0,
        borderStyle: 'solid',
        time: 200,
        easing: 'ease',
        transform: 'none',
    };

    const tOuterP: RequiredBy<RadioItemCircleThemeProperties, keyof typeof themeOuterDefault> = {
        ...themeOuterDefault,
        ...themeOuterProperties,
    };

    /* Get theme for default state properties and merge them with default values for inner circle. */
    const themeInnerProperties = getThemeProperties(radioItemTheme, 'inner', 'default');
    const themeInnerDefault = {
        borderWidth: themeInnerProperties.border ? 1 : 0,
        borderStyle: 'solid',
        color: baseTheme.colors.black,
        time: 200,
        easing: 'ease',
        transform: 'none',
    };

    const tInnerP: RequiredBy<RadioItemCircleThemeProperties, keyof typeof themeInnerDefault> = {
        ...themeInnerDefault,
        ...themeInnerProperties,
    };

    const sizeDefaults = {
        outerSize: scale(3),
        innerSize: scale(1),
        outerOffset: scale(1),
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
    const innerBorderRadius = tInnerP.borderRadius ? tInnerP.borderRadius : '50%';
    const outerBorderRadius = tOuterP.borderRadius ? tOuterP.borderRadius : '50%';

    const horizontalRule = labelRight ? 'left' : 'right';
    const verticalRule = alignment !== 'bottom' ? 'top' : 'bottom';

    const topOuter =
        alignment !== 'center'
            ? (getLineHeight(typographyName ? usedTheme.typography?.styles[typographyName].desktop : undefined, sp)
                  .minLineHeight *
                  getLineHeight(typographyName ? usedTheme.typography?.styles[typographyName].desktop : undefined, sp)
                      .textHeight -
                  sp.outerSize) /
              2
            : `calc(50% - ${sp.outerSize / 2}px)`;
    const topInner =
        alignment !== 'center'
            ? (getLineHeight(typographyName ? usedTheme.typography?.styles[typographyName].desktop : undefined, sp)
                  .minLineHeight *
                  getLineHeight(typographyName ? usedTheme.typography?.styles[typographyName].desktop : undefined, sp)
                      .textHeight -
                  sp.outerSize) /
                  2 +
              sp.outerSize / 2 -
              sp.innerSize / 2
            : `calc(50% - ${sp.innerSize / 2}px)`;

    const paddingVertical =
        sp.outerSize <=
        getLineHeight(typographyName ? usedTheme.typography?.styles[typographyName].desktop : undefined, sp).textHeight
            ? undefined
            : Math.ceil(
                  (sp.outerSize -
                      getLineHeight(
                          typographyName ? usedTheme.typography?.styles[typographyName].desktop : undefined,
                          sp,
                      ).textHeight) /
                      2,
              );

    const defaultCSS: CSSObject = {
        position: 'relative',
        display: 'inline-block',
        borderWidth: tp.borderWidth,
        borderStyle: tp.borderStyle,
        borderRadius: tp.borderRadius,
        paddingTop: paddingVertical,
        paddingBottom: paddingVertical,
        [paddingRule]: sp.outerSize + sp.outerOffset,
        ...typographyCSS,
        transition,
        ...getLabelStateCSS(tp),
        ...sp.css,
    };

    const defaultOuterCSS: CSSObject = {
        'input:focus + &::before': {
            outline: `2px solid ${baseTheme.colors.brand}`,
        },
        '&::before': {
            content: IconOuter ? 'none' : '""',
            position: 'absolute',
            width: sp.outerSize,
            height: sp.outerSize,
            borderWidth: tOuterP.borderWidth,
            borderStyle: tOuterP.borderStyle,
            borderRadius: outerBorderRadius,
            [verticalRule]: topOuter,
            [horizontalRule]: 0,
            transition,
            ...getCircleStateCSS(tOuterP, false),
        },
    };

    const defaultInnerCSS: CSSObject = {
        '&::after': {
            content: IconInner ? 'none' : '""',
            position: 'absolute',
            width: sp.innerSize,
            height: sp.innerSize,
            borderWidth: tInnerP.borderWidth,
            borderStyle: tInnerP.borderStyle,
            borderRadius: innerBorderRadius,
            [verticalRule]: topInner,
            [horizontalRule]: sp.outerSize / 2 - sp.innerSize / 2,
            transition,
            ...getCircleStateCSS(tInnerP, false),
        },
    };

    /** Define CSS rules from theme properties for custom icons for default state */
    const defaultInnerIconCSS: CSSObject = {
        'input + label &': {
            position: 'absolute',
            width: sp.innerSize,
            height: sp.innerSize,
            [verticalRule]: topInner,
            [horizontalRule]: sp.outerSize / 2 - sp.innerSize / 2,
            transition,
            ...getCircleStateCSS(tInnerP, true),
        },
    };

    const defaultOuterIconCSS: CSSObject = {
        'input + label &': {
            position: 'absolute',
            width: sp.outerSize,
            height: sp.outerSize,
            [verticalRule]: topOuter,
            [horizontalRule]: 0,
            transition,
            ...getCircleStateCSS(tOuterP, true),
        },
    };

    /* Define CSS rules from theme properties for other states. */
    const themeHoverProperties = getThemeProperties(radioItemTheme, 'label', 'hover');
    const themeOuterHoverProperties = getThemeProperties(radioItemTheme, 'outer', 'hover');
    const themeInnerHoverProperties = getThemeProperties(radioItemTheme, 'inner', 'hover');

    const themeDisabledProperties = getThemeProperties(radioItemTheme, 'label', 'disabled');
    const themeOuterDisabledProperties = getThemeProperties(radioItemTheme, 'outer', 'disabled');
    const themeInnerDisabledProperties = getThemeProperties(radioItemTheme, 'inner', 'disabled');

    const themeFocusProperties = getThemeProperties(radioItemTheme, 'label', 'focus');
    const themeOuterFocusProperties = getThemeProperties(radioItemTheme, 'outer', 'focus');
    const themeInnerFocusProperties = getThemeProperties(radioItemTheme, 'inner', 'focus');

    const themeCheckedProperties = getThemeProperties(radioItemTheme, 'label', 'checked');
    const themeOuterCheckedProperties = getThemeProperties(radioItemTheme, 'outer', 'checked');
    const themeInnerCheckedProperties = getThemeProperties(radioItemTheme, 'inner', 'checked');

    const statesCSS: CSSObject = {
        ':hover': {
            ...getLabelStateCSS(themeHoverProperties),
            ...(tp.timeIn && {
                transition: getTransition(tp.timeIn, tp.easing),
            }),
            '&::before': {
                ...getCircleStateCSS(themeOuterHoverProperties, false),
            },
            '&::after': {
                ...getCircleStateCSS(themeInnerHoverProperties, false),
            },
        },
        'input:focus + &': {
            ...getLabelStateCSS(themeFocusProperties),
            '&::before': {
                ...getCircleStateCSS(themeOuterFocusProperties, false),
            },
            '&::after': {
                ...getCircleStateCSS(themeInnerFocusProperties, false),
            },
        },
        'input:checked + &': {
            ...getLabelStateCSS(themeCheckedProperties),
            '&:before': {
                ...getCircleStateCSS(themeOuterCheckedProperties, false),
            },
            '&:after': {
                ...getCircleStateCSS(themeInnerCheckedProperties, false),
            },
        },
        'input:disabled + &': {
            ...getLabelStateCSS(themeDisabledProperties),
            '&::before': {
                ...getCircleStateCSS(themeOuterDisabledProperties, false),
            },
            '&::after': {
                ...getCircleStateCSS(themeInnerDisabledProperties, false),
            },
        },
    };

    const statesInnerIconCSS: CSSObject = {
        'input + label:hover &': {
            ...getCircleStateCSS(themeInnerHoverProperties, true),
        },
        'input:focus + label &': {
            ...getCircleStateCSS(themeInnerFocusProperties, true),
        },
        'input:checked + label &': {
            ...getCircleStateCSS(themeInnerCheckedProperties, true),
        },
        'input:disabled + label &': {
            ...getCircleStateCSS(themeInnerDisabledProperties, true),
        },
    };

    const statesOuterIconCSS: CSSObject = {
        'input + label:hover &': {
            ...getCircleStateCSS(themeOuterHoverProperties, true),
        },
        'input:focus + label &': {
            ...getCircleStateCSS(themeOuterFocusProperties, true),
        },
        'input:checked + label &': {
            ...getCircleStateCSS(themeOuterCheckedProperties, true),
        },
        'input:disabled + label &': {
            ...getCircleStateCSS(themeOuterDisabledProperties, true),
        },
    };

    const styles = [defaultCSS, !IconOuter && defaultOuterCSS, !IconInner && defaultInnerCSS, statesCSS, css];

    const innerIconStyles = [defaultInnerIconCSS, statesInnerIconCSS];
    const outerIconStyles = [defaultOuterIconCSS, statesOuterIconCSS];

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
            <input css={inputStyles} {...field} {...props} type="radio" name={name} id={id} value={value} />
            <label htmlFor={id} css={styles}>
                {IconInner && <IconInner css={innerIconStyles} />}
                {IconOuter && <IconOuter css={outerIconStyles} />}
                {children}
            </label>
        </div>
    );
};

const getLabelStateCSS = ({ color, bg, border, shadow, css }: RadioItemLabelStateProperties) => ({
    color,
    background: bg,
    borderColor: border,
    boxShadow: shadow,
    ...css,
});

const getCircleStateCSS = (
    { color, border, shadow, transform, css }: RadioItemCircleStateProperties,
    isIcon: boolean,
) => {
    const fillRule = isIcon ? 'fill' : 'background';
    const borderRule = isIcon ? 'fill' : 'borderColor';
    const shadowRule = isIcon ? 'filter' : 'boxShadow';
    console.log(shadow);
    const shadowValue = shadow ? (isIcon ? `drop-shadow(${shadow.replace('inset', '')})` : shadow) : undefined;

    return {
        [fillRule]: color,
        [borderRule]: border,
        [shadowRule]: shadowValue,
        transform,
        ...css,
    };
};

const getThemeProperties = (
    radioItemTheme: RadioItemTheme,
    component: 'label' | 'outer' | 'inner',
    state: ComponentStates | 'checked' | 'default',
):
    | RadioItemLabelThemeProperties
    | RadioItemLabelStateProperties
    | RadioItemCircleThemeProperties
    | RadioItemCircleStateProperties => {
    const themeProperties = radioItemTheme.theme[component][state];
    return { ...themeProperties };
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
    const minLineHeight = (sizeProperties.outerSize as number) / textHeight;

    return { textHeight, minLineHeight };
};

export default RadioItem;
