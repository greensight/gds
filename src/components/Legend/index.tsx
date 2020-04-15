import React from 'react';
import baseTheme from '../../utils/baseTheme';
import useComponentTheme from '../../helpers/useComponentTheme';
import FormTheme, {
    FormLabelTheme,
    FormLabelThemeProperties,
    FormLabelSizeProperties,
    FormLabelStateProperties,
    FormValidationIconProperties,
} from '../../types/Form';
import scale from '../../utils/scale';
import { CSSObject, jsx } from '@emotion/core';
import typography from '../../utils/typography';
import VisuallyHidden from '../../components/VisuallyHidden';
import { MAJOR_STEP } from '../../helpers/constants';
import { useForm } from '../Form/useForm';
import { useFormField } from '../Form/useFormField';
import { FormError } from '../Form/Error';
import { FormHint } from './Hint';
import { ComponentStates, SVGRIcon, RequiredBy, MergeElementProps } from '../../types/Utils';
import { useField } from 'formik';
import { LegendContext, LegendContextProps } from './useLegend';

export interface LegendBaseProps extends LegendContextProps {
    /** Icon after text. Accepts SVGR icon or custom JSX. */
    IconAfter?: SVGRIcon;
    /** Icon before text. Accepts SVGR icon or custom JSX. */
    IconBefore?: SVGRIcon;
    /** Validation icon's positioning. */
    validationPosition?: 'labelBefore' | 'labelAfter';
    /** Set optional fill. If get string, also set optional text to `Form.Label`. */
    optional?: boolean | string;
    /** Label content. */
    children: React.ReactNode;
    /** Label theme object for internal testing purposes. Uses in Storybook knobs to play with theme. */
    __theme?: FormLabelTheme;
    /** Additional CSS. */
    css?: CSSObject;
}

export type LegendProps<P extends React.ElementType = 'label'> = {
    /** Use your own React component for render.*/
    as?: P;
} & MergeElementProps<P, LegendBaseProps>;

const Legend = <T extends React.ElementType = 'label'>({
    as,
    hint,
    IconAfter,
    IconBefore,
    size = 'md',
    hiddenLegend = false,
    optional,
    validationPosition = 'labelAfter',
    children,
    name,
    css,
    __theme,
    ...props
}: LegendProps<T>) => {
    delete props.values;
    delete props.field;
    delete props.helpers;
    delete props.type;
    const legendName = useFormField()?.controlId || name;
    const legendOptional = useFormField()?.optional || optional;
    const legendSize = useFormField()?.size || size;
    const legendValidationPosition = useFormField()?.validationPosition || validationPosition;
    const legendHiddenLabel = useFormField()?.hiddenLabel || hiddenLegend;
    console.log(hiddenLegend);
    const legendHint = useFormField()?.hint || hint;
    const hintPosition = useFormField()?.hintPosition || 'top';
    const errorPosition = useForm()?.errorPosition;
    const required = useForm()?.required || 'optional';
    const ErrorIcon = useForm()?.ErrorIcon;
    const showSuccess = useForm()?.showSuccess;
    const SuccessIcon = useForm()?.SuccessIcon;

    const needForm = typeof useForm() !== 'undefined' ? true : false;

    /* Get theme objects. */
    const { componentTheme, usedTheme } = useComponentTheme('FormLabel', __theme);
    const labelTheme = componentTheme as FormLabelTheme;

    const optionalTheme = labelTheme.optional;
    const markTheme = labelTheme.mark;

    const [, meta] = needForm ? useField(legendName) : [null, null];

    if (!labelTheme.sizes[legendSize]) {
        console.warn(`Specify "${legendSize}" size. Default values are used instead`);
    }
    const themeProperties = getThemeProperties(labelTheme, 'default');
    const themeDefaults = {
        color: baseTheme.colors.black,
        fill: baseTheme.colors.black,
        time: 200,
        easing: 'ease',
    };
    const tp: RequiredBy<FormLabelThemeProperties, keyof typeof themeDefaults> = {
        ...themeDefaults,
        ...themeProperties,
    };

    const sizeProperties = labelTheme.sizes[legendSize];
    const sizeDefaults = {
        iconSize: scale(3),
    };
    const sp: RequiredBy<FormLabelSizeProperties, keyof typeof sizeDefaults> = {
        ...sizeDefaults,
        ...sizeProperties,
    };

    /* Define CSS rules from theme properties for default state. */
    const typographyName = sp.typography;
    const typographyCSS = typography(typographyName, usedTheme);

    const transition = getTransition(tp.time, tp.easing);
    const defaultCSS: CSSObject = {
        display: 'block',
        marginBottom: legendHiddenLabel ? undefined : scale(1),
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

    const textStyles: CSSObject = {
        position: 'relative',
        display: 'block',
        paddingRight:
            IconAfter || (needForm && legendValidationPosition === 'labelAfter')
                ? `${sp.iconSize + MAJOR_STEP}px`
                : undefined,
        paddingLeft:
            IconBefore ||
            (legendValidationPosition === 'labelBefore' && needForm && meta?.touched && meta?.error) ||
            (legendValidationPosition === 'labelBefore' && needForm && meta?.touched && !meta?.error && showSuccess)
                ? `${sp.iconSize + MAJOR_STEP}px`
                : undefined,
    };

    /* Define CSS rules from theme properties for optional text. */
    const optionalDefaultStyles: CSSObject = {
        fontSize: '0.8em',
    };
    const themeOptionalProperties = getAdditionalProperty(labelTheme, 'optional');
    const optionalStyles = [optionalDefaultStyles, getStateCSS(themeOptionalProperties), optionalTheme?.css];

    /* Define CSS rules from theme properties for mark. */
    const markDefaultStyles: CSSObject = {
        color: baseTheme.colors.error,
    };
    const themeMarkProperties = getAdditionalProperty(labelTheme, 'mark');
    const markStyles = [markDefaultStyles, getStateCSS(themeMarkProperties), markTheme?.css];

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

    if (legendValidationPosition === 'labelBefore') {
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

    return jsx(
        as || 'label',
        {
            htmlFor: !as || as === 'label' ? legendName : null,
            css: styles,
            ...props,
        },
        <LegendContext.Provider value={{ size, hint, name, hiddenLegend }}>
            <span css={textStyles}>
                {legendHiddenLabel ? (
                    <VisuallyHidden>{children}</VisuallyHidden>
                ) : (
                    <span css={labelTextStyles}>{children}</span>
                )}
                {IconBefore &&
                    !legendHiddenLabel &&
                    !(legendValidationPosition === 'labelBefore' && meta?.touched && meta?.error) &&
                    !(legendValidationPosition === 'labelBefore' && meta?.touched && !meta?.error && showSuccess) && (
                        <IconBefore css={iconBeforeCSS} />
                    )}
                {IconAfter &&
                    !legendHiddenLabel &&
                    !(legendValidationPosition === 'labelAfter' && meta?.touched && meta?.error) &&
                    !(legendValidationPosition === 'labelAfter' && meta?.touched && !meta?.error && showSuccess) && (
                        <IconAfter css={iconAfterCSS} />
                    )}
                {needForm &&
                    (legendValidationPosition === 'labelAfter' || legendValidationPosition === 'labelBefore') &&
                    meta?.touched &&
                    meta?.error &&
                    !legendHiddenLabel &&
                    ErrorIcon && <ErrorIcon css={iconErrorStyles} />}
                {needForm &&
                    (legendValidationPosition === 'labelAfter' || legendValidationPosition === 'labelBefore') &&
                    meta?.touched &&
                    !meta?.error &&
                    showSuccess &&
                    !legendHiddenLabel &&
                    SuccessIcon && <SuccessIcon css={iconSuccessStyles} />}
                {legendOptional && required === 'optional' && !legendHiddenLabel && (
                    <span css={optionalStyles}>{legendOptional}</span>
                )}
                {legendOptional && required === 'optional' && legendHiddenLabel && (
                    <VisuallyHidden>{legendOptional}</VisuallyHidden>
                )}
                {!legendOptional && required === 'mark' && !legendHiddenLabel && (
                    <span css={markStyles} aria-hidden="true">
                        *
                    </span>
                )}
            </span>
            {legendHint &&
                hintPosition === 'top' &&
                (legendHiddenLabel ? <VisuallyHidden>{legendHint}</VisuallyHidden> : <FormHint />)}
            {meta?.error && meta?.touched && errorPosition === 'top' && <FormError err={meta?.error} />}
        </LegendContext.Provider>,
    );
};

const getStateCSS = ({ color, fill, css }: FormLabelStateProperties) => ({
    color,
    fill,
    ...css,
});

const getThemeProperties = (
    labelTheme: FormLabelTheme,
    state: ComponentStates | 'success' | 'error' | 'default',
): FormLabelThemeProperties | FormLabelStateProperties => {
    const themeProperties = labelTheme.base[state];
    return { ...themeProperties };
};

const getAdditionalProperty = (labelTheme: FormLabelTheme, property: 'optional' | 'mark'): FormLabelThemeProperties => {
    const themeProperties = labelTheme[property];
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
