import React from 'react';
import { FieldMetaProps } from 'formik';
import baseTheme from '../../utils/baseTheme';
import useComponentTheme from '../../helpers/useComponentTheme';
import FormTheme, { FormValidationIconProperties, FormErrorTheme, FormHintTheme } from '../../types/Form';
import LegendTheme, {
    LegendThemeProperties,
    LegendSizeProperties,
    LegendStateProperties,
    LegendOptionalThemeProperties,
    LegendMarkThemeProperties,
} from '../../types/Legend';
import scale from '../../utils/scale';
import { CSSObject, jsx } from '@emotion/core';
import typography from '../../utils/typography';
import VisuallyHidden from '../../components/VisuallyHidden';
import { FormError } from './Error';
import { FormHint } from './Hint';
import { ComponentStates, SVGRIcon, RequiredBy, MergeElementProps } from '../../types/Utils';

export interface LegendBaseProps {
    /** Size name from list of sizes defined in theme object at `components.Legend.sizes`. */
    size?: string;
    /** Hint text. */
    hint?: string;
    /** Hint's positioning. */
    hintPosition?: 'top' | 'bottom';
    /** Icon before text. Accepts SVGR icon or custom JSX. */
    IconBefore?: SVGRIcon;
    /** Icon after text. Accepts SVGR icon or custom JSX. */
    IconAfter?: SVGRIcon;
    /** Block type. Use 100% of parent width. */
    block?: boolean;
    /** Horizontal flow of label component. */
    horizontalAlignment?: 'left' | 'center' | 'right';
    /** Visually hidden label. Keeps text accessible. */
    hiddenLegend?: boolean;
    /** Set optional fill. If get string, also set optional text inside legend. */
    optional?: boolean | string;
    /** Validation icon's positioning. */
    validationPosition?: 'labelBefore' | 'labelAfter' | 'inputBefore' | 'inputAfter';
    /** Error's positioning. */
    errorPosition?: 'top' | 'bottom';
    /** Label content. */
    children: React.ReactNode;
    /** Set `htmlFor` if Legend use as label. */
    name?: string;
    /** Formik meta object (inner) */
    meta?: FieldMetaProps<string[]>;
    /** Switch between optional text & asterisk. */
    required?: 'optional' | 'mark';
    /** Error icon for validation. */
    ErrorIcon?: SVGRIcon;
    /** Success icon for validation. Doesn't make sense without `showSuccess` prop. */
    SuccessIcon?: SVGRIcon;
    /** Show success status for validation or not. */
    showSuccess?: boolean;
    /** Label theme object for internal testing purposes. Uses in Storybook knobs to play with theme. */
    __theme?: LegendTheme;
    /** Hint theme object for internal testing purposes. Uses in Storybook knobs to play with theme. */
    __hintTheme?: FormHintTheme;
    /** Hint theme object for internal testing purposes. Uses in Storybook knobs to play with theme. */
    __errorTheme?: FormErrorTheme;
    /** Additional CSS. */
    css?: CSSObject;
}

export type LegendProps<P extends React.ElementType = 'label'> = {
    /** Use your own React component for render.*/
    as?: P;
} & MergeElementProps<P, LegendBaseProps>;

export const Legend = <T extends React.ElementType = 'label'>({
    as,
    size = 'md',
    hint,
    hintPosition = 'top',
    IconAfter,
    IconBefore,
    block = false,
    horizontalAlignment = 'left',
    hiddenLegend = false,
    optional,
    validationPosition = 'labelAfter',
    errorPosition = 'top',
    children,
    name,
    meta,
    required = 'optional',
    ErrorIcon,
    SuccessIcon,
    showSuccess = true,
    css,
    __theme,
    __hintTheme,
    __errorTheme,
    ...props
}: LegendProps<T>) => {
    /* Get theme objects. */
    const { componentTheme, usedTheme } = useComponentTheme('Legend', __theme);

    const labelTheme = componentTheme as LegendTheme;

    if (!labelTheme.sizes[size]) {
        console.warn(`Specify "${size}" size. Default values are used instead`);
    }
    const themeProperties = getThemeProperties(labelTheme, 'default');
    const themeDefaults = {
        borderWidth: themeProperties.border ? 1 : 0,
        borderStyle: 'solid',
        color: baseTheme.colors.black,
        fill: baseTheme.colors.black,
        time: 200,
        easing: 'ease',
    };
    const tp: RequiredBy<LegendThemeProperties, keyof typeof themeDefaults> = {
        ...themeDefaults,
        ...themeProperties,
    };

    const sizeProperties = labelTheme.sizes[size];
    const sizeDefaults = {
        iconSize: scale(3),
        iconOffset: scale(1),
        padding: 0,
    };
    const sp: RequiredBy<LegendSizeProperties, keyof typeof sizeDefaults> = {
        ...sizeDefaults,
        ...sizeProperties,
    };

    /* Define CSS rules from theme properties for default state. */
    const typographyName = sp.typography;
    const typographyCSS = typography(typographyName, usedTheme);
    const transition = getTransition(tp.time, tp.easing);
    const defaultCSS: CSSObject = {
        display: 'block',
        width: '100%',
        padding: sp.padding,
        borderWidth: tp.borderWidth,
        borderStyle: tp.borderStyle,
        borderRadius: tp.borderRadius,
        marginBottom: hiddenLegend ? undefined : scale(1),
        transition,
        ...typography('bodyMd'),
        ...getStateCSS(tp),
        ...sp.css,
    };

    /* Define CSS rules from theme properties for other states. */
    const themeHoverProperties = getThemeProperties(labelTheme, 'hover');

    const statesCSS: CSSObject = {
        ':hover': {
            ...getStateCSS(themeHoverProperties),
            ...(tp.timeIn && {
                transition: getTransition(tp.timeIn, tp.easing),
            }),
        },
    };

    /* Define CSS rules from theme properties for validation states. */
    const themeErrorProperties = getThemeProperties(labelTheme, 'error');
    const themeSuccessProperties = getThemeProperties(labelTheme, 'success');
    const validationCSS: CSSObject = {
        ...(meta?.touched && meta?.error && getStateCSS(themeErrorProperties)),
        ...(meta?.touched && !meta?.error && showSuccess && getStateCSS(themeSuccessProperties)),
    };

    const styles = [defaultCSS, statesCSS, validationCSS, css];

    const textDefaultStyles: CSSObject = {
        position: 'relative',
        display: 'inline-block',
        paddingRight:
            IconAfter ||
            (validationPosition === 'labelAfter' && meta?.touched && meta?.error) ||
            (validationPosition === 'labelAfter' && meta?.touched && !meta?.error && showSuccess)
                ? `${sp.iconSize + sp.iconOffset}px`
                : undefined,
        paddingLeft:
            IconBefore ||
            (validationPosition === 'labelBefore' && meta?.touched && meta?.error) ||
            (validationPosition === 'labelBefore' && meta?.touched && !meta?.error && showSuccess)
                ? `${sp.iconSize + sp.iconOffset}px`
                : undefined,
    };

    const blockStyles: CSSObject = { display: 'block', width: '100%' };

    const textStyles = [textDefaultStyles, block && blockStyles];

    const textWrapperCSS: CSSObject = {
        display: 'block',
        textAlign: horizontalAlignment,
    };

    /* Define CSS rules from theme properties for optional text. */
    const optionalThemeDefault = {
        color: baseTheme.colors.black,
    };

    const optionalThemeProperties = getAdditionalThemeProperties(labelTheme, 'optional', 'default');

    const optionalTP: RequiredBy<LegendOptionalThemeProperties, keyof typeof optionalThemeDefault> = {
        ...optionalThemeDefault,
        ...optionalThemeProperties,
    };

    const optionalDefaultStyles: CSSObject = {
        fontSize: '0.8em',
        ...getAdditionalStateCSS(optionalTP),
    };

    const optionalStyles = [optionalDefaultStyles];

    /* Define CSS rules from theme properties for mark. */
    const markThemeDefault = {
        color: baseTheme.colors.black,
    };

    const markThemeProperties = getAdditionalThemeProperties(labelTheme, 'mark', 'default');

    const markTP: RequiredBy<LegendMarkThemeProperties, keyof typeof markThemeDefault> = {
        ...markThemeDefault,
        ...markThemeProperties,
    };

    const markDefaultStyles: CSSObject = {
        ...getAdditionalStateCSS(markTP),
    };

    const markStyles = [markDefaultStyles];

    const iconAfterCSS: CSSObject = {
        position: 'absolute',
        top: '50%',
        marginTop: `${-(sp.iconSize / 2)}px`,
        right: 0,
        width: sp.iconSize,
        height: sp.iconSize,
    };

    const iconBeforeCSS: CSSObject = {
        position: 'absolute',
        top: '50%',
        marginTop: `${-(sp.iconSize / 2)}px`,
        left: 0,
        width: sp.iconSize,
        height: sp.iconSize,
    };

    let validationIconHorizontalRule;

    if (validationPosition === 'labelBefore') {
        validationIconHorizontalRule = 'left';
    } else {
        validationIconHorizontalRule = 'right';
    }
    const { componentTheme: componentFormTheme } = useComponentTheme('Form');
    const formTheme = componentFormTheme as FormTheme;
    const iconErrorDefaultStyles: CSSObject = {
        position: 'absolute',
        top: '50%',
        marginTop: `${-(sp.iconSize / 2)}px`,
        [validationIconHorizontalRule]: 0,
        width: sp.iconSize,
        height: sp.iconSize,
    };
    const errorIconProperties = getIconProperty(formTheme, 'errorIcon');
    const iconErrorStyles = [iconErrorDefaultStyles, getIconCSS(errorIconProperties), formTheme.errorIcon?.css];

    const iconSuccessDefaultStyles: CSSObject = {
        position: 'absolute',
        top: '50%',
        marginTop: `${-(sp.iconSize / 2)}px`,
        [validationIconHorizontalRule]: 0,
        width: sp.iconSize,
        height: sp.iconSize,
    };
    const successIconProperties = getIconProperty(formTheme, 'successIcon');
    const iconSuccessStyles = [iconSuccessDefaultStyles, getIconCSS(successIconProperties), formTheme.successIcon?.css];

    const labelTextStyles: CSSObject = {
        display: 'inline-block',
        ...typographyCSS,
    };

    delete props.meta;
    return jsx(
        as || 'label',
        {
            htmlFor: !as || as === 'label' ? name : null,
            css: styles,
            ...props,
        },
        <>
            <span css={textWrapperCSS}>
                <span css={textStyles}>
                    {hiddenLegend ? (
                        <VisuallyHidden>{children}</VisuallyHidden>
                    ) : (
                        <span css={labelTextStyles}>{children}</span>
                    )}
                    {IconBefore &&
                        !hiddenLegend &&
                        !(validationPosition === 'labelBefore' && meta?.touched && meta?.error) &&
                        !(validationPosition === 'labelBefore' && meta?.touched && !meta?.error && showSuccess) && (
                            <IconBefore css={iconBeforeCSS} />
                        )}
                    {IconAfter &&
                        !hiddenLegend &&
                        !(validationPosition === 'labelAfter' && meta?.touched && meta?.error) &&
                        !(validationPosition === 'labelAfter' && meta?.touched && !meta?.error && showSuccess) && (
                            <IconAfter css={iconAfterCSS} />
                        )}
                    {(validationPosition === 'labelAfter' || validationPosition === 'labelBefore') &&
                        meta?.touched &&
                        meta?.error &&
                        !hiddenLegend &&
                        ErrorIcon && <ErrorIcon css={iconErrorStyles} />}
                    {(validationPosition === 'labelAfter' || validationPosition === 'labelBefore') &&
                        meta?.touched &&
                        !meta?.error &&
                        showSuccess &&
                        !hiddenLegend &&
                        SuccessIcon && <SuccessIcon css={iconSuccessStyles} />}
                    {Boolean(optional) && required === 'optional' && !hiddenLegend && (
                        <span css={optionalStyles}>{optional}</span>
                    )}
                    {Boolean(optional) && required === 'optional' && hiddenLegend && (
                        <VisuallyHidden>{optional}</VisuallyHidden>
                    )}
                    {!optional && required === 'mark' && !hiddenLegend && (
                        <span css={markStyles} aria-hidden="true">
                            *
                        </span>
                    )}
                </span>
            </span>
            {hint &&
                hintPosition === 'top' &&
                (hiddenLegend ? (
                    <VisuallyHidden>{hint}</VisuallyHidden>
                ) : (
                    <FormHint
                        size={size}
                        hint={hint}
                        __hintTheme={__hintTheme}
                        hintPosition={hintPosition}
                        hiddenLegend={hiddenLegend}
                    />
                ))}
            {meta?.error && meta?.touched && errorPosition === 'top' && (
                <FormError
                    size={size}
                    err={meta?.error}
                    __errorTheme={__errorTheme}
                    errorPosition={errorPosition}
                    hiddenLegend={hiddenLegend}
                />
            )}
        </>,
    );
};

const getStateCSS = ({ border, color, fill, bg, shadow, css }: LegendStateProperties) => ({
    color,
    fill,
    borderColor: border,
    backgroundColor: bg,
    boxShadow: shadow,
    ...css,
});

const getAdditionalStateCSS = ({ color, css }: LegendOptionalThemeProperties | LegendMarkThemeProperties) => ({
    color,
    ...css,
});

const getAdditionalThemeProperties = (
    labelTheme: LegendTheme,
    component: 'optional' | 'mark',
    state: ComponentStates | 'default',
): LegendOptionalThemeProperties | LegendMarkThemeProperties => {
    const themeProperties = labelTheme.theme[component][state];
    return { ...themeProperties };
};

const getThemeProperties = (
    labelTheme: LegendTheme,
    state: ComponentStates | 'success' | 'error' | 'default',
): LegendThemeProperties | LegendStateProperties => {
    const themeProperties = labelTheme.theme['label'][state];
    return { ...themeProperties };
};

const getIconProperty = (formTheme: FormTheme, property: 'successIcon' | 'errorIcon'): FormValidationIconProperties => {
    const themeProperties = formTheme[property];
    return { ...themeProperties };
};

const getIconCSS = ({ fill, css }: FormValidationIconProperties) => ({
    fill,
    ...css,
});

const getTransition = (time: number, easing: string) =>
    ['color', 'fill'].map((name) => `${name} ${easing} ${time}ms`).join(', ');

export default Legend;
