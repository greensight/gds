import * as React from 'react';
import useTheme from '@utils/useTheme';
import scale from '@utils/scale';
import baseTheme from '@utils/baseTheme';
import typography from '@helpers/customTypography';
import { useField, useFormikContext } from 'formik';
import cloneElement from '@helpers/cloneElement';
import { useFormField } from './Field';
import { FormError, useForm } from '.';
import { IFormInput } from './Form';

export const FormInput: React.FC<IFormInput> = ({
    theme = 'primary',
    children,
    IconBefore,
    IconAfter,
    css,
    ...props
}) => {
    const { controlId, optional, size, hint, hintPosition, validationPosition } = useFormField();
    const { errorPosition, showSuccess, ErrorIcon, SuccessIcon } = useForm();
    const globalTheme = useTheme();
    const usedTheme = globalTheme.components?.Form.Input ? globalTheme : baseTheme;
    const inputTheme = usedTheme.components.Form.Input;
    const hintTheme = usedTheme.components.Form.Hint;

    if (!inputTheme.themes[theme]) {
        console.warn(`Specify "${theme}" theme. Default values are used instead`);
    }

    if (!inputTheme.sizes[size]) {
        console.warn(`Specify "${size}" size. Default values are used instead`);
    }

    const getRule = (name, defaultValue) => {
        const themeStyles = inputTheme.themes[theme];
        let themeRule;
        if (themeStyles) themeRule = themeStyles[name];

        const sizeStyles = inputTheme.sizes[size];
        let sizeRule;
        if (sizeStyles) sizeRule = sizeStyles[name];

        const baseStyles = inputTheme.base;
        const baseRule = baseStyles?.[name];

        return themeRule || sizeRule || baseRule || defaultValue;
    };

    const getStateStyles = (name, css) => {
        const state = getRule(name);
        if (!state) return;
        const { color, bg, border, shadow, css: stateCss } = state;
        return {
            [`:${name}`]: {
                color,
                fill: color,
                background: bg,
                borderColor: border,
                boxShadow: shadow,
                ...stateCss,
                ...css,
            },
        };
    };

    const transition = time =>
        ['color', 'fill', 'background-color', 'border-color', 'border-width', 'box-shadow']
            .map(name => `${name} ${easing} ${time}ms`)
            .join(', ');

    const border = getRule('border');
    const borderWidth = getRule('borderWidth', border ? 1 : 0);
    const borderStyle = getRule('borderStyle', 'solid');
    const borderRadius = getRule('borderRadius', 4);
    const time = getRule('time', 200);
    const timeIn = getRule('timeIn');
    const easing = getRule('easing', 'ease');
    const typographyName = getRule('typography');
    const height = getRule('height', scale(5));
    const padding = getRule('padding', scale(3));
    const iconSize = getRule('iconSize', scale(3));
    const color = getRule('color', baseTheme.colors.white);
    const bg = getRule('bg', baseTheme.colors.black);
    const shadow = getRule('shadow');

    const typographyStyles = typographyName && typography(typographyName, usedTheme);

    const [field, meta, helpers] = useField(controlId);
    const styles = [
        {
            width: '100%',
            borderWidth,
            borderStyle,
            borderRadius,
            height,
            padding: `${padding}px`,
            paddingRight: (IconAfter || validationPosition === 'inputAfter') && `${height}px`,
            paddingLeft:
                (IconBefore ||
                    (validationPosition === 'inputBefore' && meta.touched && meta.error) ||
                    (validationPosition === 'inputBefore' && meta.touched && !meta.error && showSuccess)) &&
                `${height}px`,
            ...typographyStyles,
            color,
            fill: color,
            background: bg,
            borderColor: border,
            boxShadow: shadow,
            transition: transition(time),
            ...getStateStyles('hover', {
                ...(timeIn && { transition: transition(timeIn) }),
            }),
            ...getStateStyles('disabled', {
                cursor: 'not-allowed',
            }),
            ...getStateStyles('focus'),
        },
        inputTheme.base?.css,
        inputTheme.sizes?.[size]?.css,
        inputTheme.themes?.[theme]?.css,
        meta.touched && meta.error && inputTheme.themes?.[theme]?.validation.error.css,
        meta.touched && !meta.error && showSuccess && inputTheme.themes?.[theme]?.validation.success.css,
        css,
    ];

    const iconBeforeProps = {
        css: {
            position: 'absolute',
            top: '50%',
            marginTop: `-${iconSize / 2}px`,
            left: `${(height - iconSize) / 2}px`,
            width: iconSize,
            height: iconSize,
        },
    };

    const iconAfterProps = {
        css: {
            position: 'absolute',
            top: '50%',
            marginTop: `-${iconSize / 2}px`,
            right: `${(height - iconSize) / 2}px`,
            width: iconSize,
            height: iconSize,
        },
    };

    let IconBeforeComponent;
    if (typeof IconBefore === 'function') {
        IconBeforeComponent = <IconBefore {...iconBeforeProps} />;
    } else if (typeof Icon === 'object') {
        IconBeforeComponent = cloneElement(IconBefore, iconBeforeProps);
    }

    let IconAfterComponent;
    if (typeof IconAfter === 'function') {
        IconAfterComponent = <IconAfter {...iconAfterProps} />;
    } else if (typeof IconAfter === 'object') {
        IconAfterComponent = cloneElement(IconAfter, iconAfterProps);
    }

    // const validationIconHorizontalRule = `${Icon && iconAfter === false ? 'left' : 'right'}`;

    let validationIconHorizontalRule;

    if (validationPosition === 'inputBefore') {
        validationIconHorizontalRule = 'left';
    } else if (validationPosition === 'inputAfter') {
        validationIconHorizontalRule = 'right';
    }

    const iconErrorProps = {
        fill: globalTheme.components?.Form.errorIcon.fill,
        css: {
            position: 'absolute',
            top: '50%',
            marginTop: `${-(iconSize / 2)}px`,
            [validationIconHorizontalRule]: `${(height - iconSize) / 2}px`,
            width: iconSize,
            height: iconSize,
        },
    };

    let IconErrorComponent;
    if (typeof ErrorIcon === 'function') {
        IconErrorComponent = <ErrorIcon {...iconErrorProps} />;
    } else if (typeof ErrorIcon === 'object') {
        IconErrorComponent = cloneElement(ErrorIcon, iconErrorProps);
    }

    const iconSuccessProps = {
        fill: globalTheme.components?.Form.successIcon.fill,
        css: {
            position: 'absolute',
            top: '50%',
            marginTop: `${-(iconSize / 2)}px`,
            [validationIconHorizontalRule]: `${(height - iconSize) / 2}px`,
            width: iconSize,
            height: iconSize,
        },
    };

    let IconSuccessComponent;
    if (typeof SuccessIcon === 'function') {
        IconSuccessComponent = <SuccessIcon {...iconSuccessProps} />;
    } else if (typeof ErrorIcon === 'object') {
        IconSuccessComponent = cloneElement(SuccessIcon, iconSuccessProps);
    }

    const fieldStyles = [
        {
            position: 'relative',
        },
    ];

    const hintStyles = [
        {
            color: hintTheme.color,
            ...typographyStyles,
        },
        hintTheme.css,
    ];

    const getDescribedByList = () => {
        const hintId = hint && hintPosition === 'bottom' ? `hint-${controlId}` : undefined;
        const errorId = meta.touched && meta.error && errorPosition === 'bottom' ? `error-${controlId}` : undefined;
        return hintId && errorId ? `${hintId} ${errorId}` : hintId || errorId;
    };

    const inputProps = {
        type: 'text',
        name: controlId,
        required: !optional,
        'aria-invalid': meta.touched && meta.error ? true : undefined,
        'aria-required': optional ? undefined : true,
        'aria-describedby': getDescribedByList(),
        ...props,
    };

    const { values } = useFormikContext();
    const a = validationPosition === 'inputBefore' && meta.touched && meta.error;
    console.log(a);
    return (
        <>
            <div css={fieldStyles}>
                {children ? (
                    React.Children.map(children, child => {
                        return React.cloneElement(child, {
                            values,
                            field,
                            meta,
                            helpers,
                            id: child?.type?.displayName !== 'Legend' ? controlId : '',
                            ...inputProps,
                        });
                    })
                ) : (
                    <input id={controlId} {...field} {...inputProps} css={styles} />
                )}

                {IconBefore &&
                    !(validationPosition === 'inputBefore' && meta.touched && meta.error) &&
                    !(validationPosition === 'inputBefore' && meta.touched && !meta.error && showSuccess) &&
                    IconBeforeComponent}

                {IconAfter &&
                    !(validationPosition === 'inputAfter' && meta.touched && meta.error) &&
                    !(validationPosition === 'inputAfter' && meta.touched && !meta.error && showSuccess) &&
                    IconAfterComponent}

                {(validationPosition === 'inputAfter' || validationPosition === 'inputBefore') &&
                    meta.touched &&
                    meta.error &&
                    IconErrorComponent}
                {(validationPosition === 'inputAfter' || validationPosition === 'inputBefore') &&
                    meta.touched &&
                    meta.error &&
                    IconErrorComponent}
                {(validationPosition === 'inputAfter' || validationPosition === 'inputBefore') &&
                    meta.touched &&
                    !meta.error &&
                    showSuccess &&
                    IconSuccessComponent}
            </div>
            {meta.error && meta.touched && errorPosition === 'bottom' && (
                <FormError err={meta.error} id={`error-${controlId}`} />
            )}
            {hint && hintPosition === 'bottom' && (
                <span id={`hint-${controlId}`} css={hintStyles}>
                    {hint}
                </span>
            )}
        </>
    );
};

export default FormInput;
