import * as React from 'react';
import cn from 'classnames';
import IButton from './Button';
import vadyan from '../../scripts/vadyan';
import './styles.css';

const Button: React.FC<IButton> = ({
    children,
    onClick,
    theme = 'basic',
    border = false,
    sm = false,
    block = false,
    Icon,
    iconPlacement = 'before',
    className,
    ...props
}) => {
    const baseClass = 'btn';
    const classes = cn(
        baseClass,
        {
            [`${baseClass}--theme_${theme}`]: theme,
            [`${baseClass}--sm`]: sm,
            [`${baseClass}--border`]: border,
            [`${baseClass}--block`]: block,
        },
        className,
    );

    console.log(`${vadyan()} Button`);

    return (
        <button type="button" onClick={onClick} className={classes} {...props}>
            {Icon && iconPlacement === 'before' && <Icon className={`${baseClass}__icon ${baseClass}__icon--before`} />}
            {children}
            {Icon && iconPlacement === 'after' && <Icon className={`${baseClass}__icon ${baseClass}__icon--after`} />}
        </button>
    );
};

export default Button;
