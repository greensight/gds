import * as React from 'react';
import useTheme from '@utils/useTheme';
import baseTheme from '@utils/baseTheme';
import scale from '@utils/scale';
import cloneElement from '@helpers/cloneElement';
import typography from '@helpers/customTypography';
import VisuallyHidden from '@components/VisuallyHidden';
import { MAJOR_STEP_DEFAULT } from '@helpers/constants';
import { useField } from 'formik';
import { useForm } from '.';
import { useFormField } from './Field';
import { IFormLabel } from './Form';
import { FormError } from './Error';
import { FormHint } from './Hint';

export const FormLabel: React.FC<IFormLabel> = ({ IconBefore, IconAfter, children, css, ...props }) => {
    const { controlId, optional, size, hint, hintPosition, hiddenLabel, validationPosition } = useFormField();
    const { errorPosition, required, ErrorIcon, showSuccess, SuccessIcon, themeObj } = useForm();
    const globalTheme = useTheme();
    const usedTheme = globalTheme.components?.Form ? globalTheme : baseTheme;
    const labelTheme = themeObj?.Label ? themeObj.Label : usedTheme.components.Form.Label;
    const optionalTheme = labelTheme.optional;
    const markTheme = labelTheme.mark;

    const [, meta] = useField(controlId);

    if (!labelTheme.sizes[size]) {
        console.warn(`Specify "${size}" size. Default values are used instead`);
    }

    const getRule = (name, defaultValue) => {
        const sizeStyles = labelTheme.sizes[size];
        let sizeRule;
        if (sizeStyles) sizeRule = sizeStyles[name];

        const baseStyles = labelTheme.base;
        const baseRule = baseStyles?.[name];

        return sizeRule || baseRule || defaultValue;
    };

    const getStateStyles = (name, css) => {
        const state = getRule(name);
        if (!state) return;
        const { color, fill, bg, border, shadow, css: stateCss } = state;
        return {
            [`:${name}`]: {
                color,
                fill: fill,
                background: bg,
                borderColor: border,
                boxShadow: shadow,
                ...stateCss,
                ...css,
            },
        };
    };
    const getValidationStyles = (name, css) => {
        const state = getRule(name);
        if (!state) return;
        const { color, fill, bg, border, shadow, css: stateCss } = state;
        return {
            color,
            fill: fill,
            background: bg,
            borderColor: border,
            boxShadow: shadow,
            ...stateCss,
            ...css,
        };
    };

    const iconSize = getRule('iconSize', scale(3));
    const color = getRule('color', baseTheme.colors.black);
    const fill = getRule('fill', baseTheme.colors.black);
    const typographyName = getRule('typography');
    const marginBottom = getRule('marginBottom', scale(1));
    const time = getRule('time', 200);
    const timeIn = getRule('timeIn');
    const typographyStyles = typographyName && typography(typographyName, usedTheme);
    const styles = [
        {
            display: 'block',
            ...typographyStyles,
            marginBottom,
            color,
            fill,
            ...getStateStyles('hover', {
                ...(timeIn && { transition: transition(timeIn) }),
            }),
        },
        labelTheme.base?.css,
        labelTheme.sizes?.[size]?.css,
        meta.touched && meta.error && { ...getValidationStyles('error') },
        meta.touched && !meta.error && showSuccess && { ...getValidationStyles('success') },
        css,
    ];

    const textStyles = [
        {
            position: 'relative',
            display: 'block',
            marginBottom,
            paddingRight: (IconAfter || validationPosition === 'labelAfter') && `${iconSize + MAJOR_STEP_DEFAULT}px`,
            paddingLeft:
                (IconBefore ||
                    (validationPosition === 'labelBefore' && meta.touched && meta.error) ||
                    (validationPosition === 'labelBefore' && meta.touched && !meta.error && showSuccess)) &&
                `${iconSize + MAJOR_STEP_DEFAULT}px`,
        },
    ];

    const markStyles = [markTheme, markTheme?.css];
    const optionalStyles = [
        {
            fontWeight: 400,
            fontSize: '0.8em',
        },
        optionalTheme,
        optionalTheme?.css,
    ];

    const iconAfterProps = {
        css: {
            position: 'absolute',
            top: '50%',
            marginTop: `${-(iconSize / 2)}px`,
            right: 0,
            width: iconSize,
            height: iconSize,
        },
    };

    const iconBeforeProps = {
        css: {
            position: 'absolute',
            top: '50%',
            marginTop: `${-(iconSize / 2)}px`,
            left: 0,
            width: iconSize,
            height: iconSize,
        },
    };

    let validationIconHorizontalRule;

    if (validationPosition === 'labelBefore') {
        validationIconHorizontalRule = 'left';
    } else if (validationPosition === 'labelAfter') {
        validationIconHorizontalRule = 'right';
    }
    const iconErrorProps = {
        fill: usedTheme.components.Form.errorIcon.fill,
        css: {
            position: 'absolute',
            top: '50%',
            marginTop: `${-(iconSize / 2)}px`,
            [validationIconHorizontalRule]: 0,
            width: iconSize,
            height: iconSize,
        },
    };

    const iconSuccessProps = {
        fill: usedTheme.components.Form.successIcon.fill,
        css: {
            position: 'absolute',
            top: '50%',
            marginTop: `${-(iconSize / 2)}px`,
            [validationIconHorizontalRule]: 0,
            width: iconSize,
            height: iconSize,
        },
    };

    const labelProps = {
        name: controlId,
        ...props,
    };

    let IconAfterComponent;
    if (typeof IconAfter === 'function') {
        IconAfterComponent = <IconAfter {...iconAfterProps} />;
    } else if (typeof Icon === 'object') {
        IconAfterComponent = cloneElement(IconAfter, iconAfterProps);
    }

    let IconBeforeComponent;
    if (typeof IconBefore === 'function') {
        IconBeforeComponent = <IconBefore {...iconBeforeProps} />;
    } else if (typeof IconBefore === 'object') {
        IconBeforeComponent = cloneElement(IconBefore, iconBeforeProps);
    }

    let IconErrorComponent;
    if (typeof ErrorIcon === 'function') {
        IconErrorComponent = <ErrorIcon {...iconErrorProps} />;
    } else if (typeof ErrorIcon === 'object') {
        IconErrorComponent = cloneElement(ErrorIcon, iconErrorProps);
    }

    let IconSuccessComponent;
    if (typeof SuccessIcon === 'function') {
        IconSuccessComponent = <SuccessIcon {...iconSuccessProps} />;
    } else if (typeof SuccessIcon === 'object') {
        IconSuccessComponent = cloneElement(SuccessIcon, iconSuccessProps);
    }

    return (
        <label htmlFor={labelProps.name} css={styles} {...props}>
            <span css={textStyles}>
                {hiddenLabel ? <VisuallyHidden>{children}</VisuallyHidden> : children}
                {IconBefore &&
                    !hiddenLabel &&
                    !(validationPosition === 'labelBefore' && meta.touched && meta.error) &&
                    !(validationPosition === 'labelBefore' && meta.touched && !meta.error && showSuccess) &&
                    IconBeforeComponent}

                {IconAfter &&
                    !hiddenLabel &&
                    !(validationPosition === 'labelAfter' && meta.touched && meta.error) &&
                    !(validationPosition === 'labelAfter' && meta.touched && !meta.error && showSuccess) &&
                    IconAfterComponent}

                {(validationPosition === 'labelAfter' || validationPosition === 'labelBefore') &&
                    meta.touched &&
                    meta.error &&
                    !hiddenLabel &&
                    IconErrorComponent}
                {(validationPosition === 'labelAfter' || validationPosition === 'labelBefore') &&
                    meta.touched &&
                    !meta.error &&
                    showSuccess &&
                    !hiddenLabel &&
                    IconSuccessComponent}
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

export default FormLabel;
