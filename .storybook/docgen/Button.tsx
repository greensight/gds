import React from 'react';

import { ButtonProps as IButtonProps } from '../../src/components/Button';
import {
    ButtonSizeProperties as IButtonSizeProperties,
    ButtonStateProperties as IButtonStateProperties,
    ButtonStates as IButtonStates,
    ButtonTheme as IButtonTheme,
    ButtonThemeProperties as IButtonThemeProperties,
} from '../../src/types/Button';

export const ButtonTheme: React.FC<IButtonTheme> = () => <div />;
export const ButtonSizeProperties: React.FC<IButtonSizeProperties> = () => <div />;
export const ButtonStates: React.FC<IButtonStates> = () => <div />;
export const ButtonThemeProperties: React.FC<IButtonThemeProperties> = () => <div />;
export const ButtonStateProperties: React.FC<IButtonStateProperties> = () => <div />;
export const ButtonProps: React.FC<IButtonProps> = () => <div />;
