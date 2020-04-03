import React from 'react';
import baseTheme from '../../utils/baseTheme';
import useComponentTheme from '../../helpers/useComponentTheme';
import {
    FormLabelTheme,
    FormLabelThemeProperties,
    FormLabelSizeProperties,
    FormLabelStateProperties,
} from '../../types/Form';
import scale from '../../utils/scale';
import { CSSObject } from '@emotion/core';
/* import cloneElement from '@helpers/cloneElement';*/
import typography from '../../utils/typography';
import VisuallyHidden from '../../components/VisuallyHidden';
import { MAJOR_STEP } from '../../helpers/constants';
import { useField } from 'formik';
import { useForm } from './useForm';
import { useFormField } from './useFormField';
import { FormError } from './Error';
import { FormHint } from './Hint';
import { ComponentStates, SVGRIcon, RequiredBy } from '../../types/Utils';

export interface FormLabelProps extends React.HTMLProps<HTMLLabelElement> {
    /** Icon after text. Accepts SVGR icon or custom JSX. */
    IconAfter?: SVGRIcon;
    /** Icon before text. Accepts SVGR icon or custom JSX. */
    IconBefore?: SVGRIcon;
    /** Label content. */
    children: React.ReactNode;
    /** Кастомный CSS */
    css?: CSSObject;
}

export const FormLabel: React.FC<FormLabelProps> & React.HTMLProps<HTMLLabelElement> = ({
    IconBefore,
    IconAfter,
    children,
    css,
    ...props
}: FormLabelProps) => {
    const { controlId, optional, size, hint, hintPosition, hiddenLabel, validationPosition } = useFormField();
    const { errorPosition, required, ErrorIcon, showSuccess, SuccessIcon } = useForm();

    /* Get theme objects. */
    const { componentTheme, usedTheme } = useComponentTheme('FormLabel');
    const labelTheme = componentTheme as FormLabelTheme;

    const optionalTheme = labelTheme.optional;
    const markTheme = labelTheme.mark;

    const [, meta] = useField(controlId);

    if (!labelTheme.sizes[size]) {
        console.warn(`Specify "${size}" size. Default values are used instead`);
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

    const sizeProperties = labelTheme.sizes[size];
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
        ...typographyCSS,
        transition,
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

    const styles = [defaultCSS, statesCSS, css];
    // meta.touched && meta.error && { ...getValidationStyles('error') },
    // meta.touched && !meta.error && showSuccess && { ...getValidationStyles('success') },

    const textStyles: CSSObject = {
        position: 'relative',
        display: 'block',
        paddingRight: IconAfter || validationPosition === 'labelAfter' ? `${sp.iconSize + MAJOR_STEP}px` : undefined,
        paddingLeft:
            IconBefore ||
            (validationPosition === 'labelBefore' && meta.touched && meta.error) ||
            (validationPosition === 'labelBefore' && meta.touched && !meta.error && showSuccess)
                ? `${sp.iconSize + MAJOR_STEP}px`
                : undefined,
    };

    const markStyles = [markTheme, markTheme?.css];
    const optionalStyles = [
        {
            fontWeight: 400,
            fontSize: '0.8em',
        },
        optionalTheme,
        optionalTheme?.css,
    ];

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
    } else if (validationPosition === 'labelAfter') {
        validationIconHorizontalRule = 'right';
    }
    // const iconErrorProps = {
    //     fill: usedTheme.components.Form.errorIcon.fill,
    //     css: {
    //         position: 'absolute',
    //         top: '50%',
    //         marginTop: `${-(iconSize / 2)}px`,
    //         [validationIconHorizontalRule]: 0,
    //         width: iconSize,
    //         height: iconSize,
    //     },
    // };

    // const iconSuccessProps = {
    //     fill: usedTheme.components.Form.successIcon.fill,
    //     css: {
    //         position: 'absolute',
    //         top: '50%',
    //         marginTop: `${-(iconSize / 2)}px`,
    //         [validationIconHorizontalRule]: 0,
    //         width: iconSize,
    //         height: iconSize,
    //     },
    // };

    const labelProps = {
        name: controlId,
        ...props,
    };

    return (
        <label htmlFor={labelProps.name} css={styles} {...props}>
            <span css={textStyles}>
                {hiddenLabel ? <VisuallyHidden>{children}</VisuallyHidden> : children}
                {IconBefore &&
                    !hiddenLabel &&
                    !(validationPosition === 'labelBefore' && meta.touched && meta.error) &&
                    !(validationPosition === 'labelBefore' && meta.touched && !meta.error && showSuccess) && (
                        <IconBefore css={iconBeforeCSS} />
                    )}

                {IconAfter &&
                    !hiddenLabel &&
                    !(validationPosition === 'labelAfter' && meta.touched && meta.error) &&
                    !(validationPosition === 'labelAfter' && meta.touched && !meta.error && showSuccess) && (
                        <IconAfter css={iconAfterCSS} />
                    )}

                {/* {(validationPosition === 'labelAfter' || validationPosition === 'labelBefore') &&
                    meta.touched &&
                    meta.error &&
                    !hiddenLabel &&
                    IconErrorComponent} */}
                {/* {(validationPosition === 'labelAfter' || validationPosition === 'labelBefore') &&
                    meta.touched &&
                    !meta.error &&
                    showSuccess &&
                    !hiddenLabel &&
                    IconSuccessComponent} */}
                {optional && required === 'optional' && !hiddenLabel && <span css={optionalStyles}>{optional}</span>}
                {optional && required === 'optional' && hiddenLabel && <VisuallyHidden>{optional}</VisuallyHidden>}
                {!optional && required === 'mark' && !hiddenLabel && (
                    <span css={markStyles} aria-hidden="true">
                        *
                    </span>
                )}
            </span>
            {hint && hintPosition === 'top' && (hiddenLabel ? <VisuallyHidden>{hint}</VisuallyHidden> : <FormHint />)}
            {meta.error && meta.touched && errorPosition === 'top' && <FormError err={meta.error} />}
        </label>
    );
};

const getStateCSS = ({ color, fill, css }: FormLabelStateProperties) => ({
    color,
    fill,
    ...css,
});

const getThemeProperties = (
    labelTheme: FormLabelTheme,
    state: ComponentStates | 'default',
): FormLabelThemeProperties | FormLabelStateProperties => {
    const themeProperties = labelTheme.base[state];
    return { ...themeProperties };
};

const getTransition = (time: number, easing: string) =>
    ['color', 'fill'].map((name) => `${name} ${easing} ${time}ms`).join(', ');

export default FormLabel;
