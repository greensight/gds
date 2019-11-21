import * as React from 'react';
import cn from 'classnames';
import { ILoader } from './Loader';
import vadyan from '../../scripts/vadyan';
import './styles.css';

const Loader: React.FC<ILoader> = ({ className }) => {
    const baseClass = 'loader';
    const classes = cn(baseClass, className);

    console.log(`${vadyan()} Loader`);

    return <div className={classes} />;
};

export default Loader;
