import React from 'react';
import IFormTheme, {
    FormInputTheme as IFormInputTheme,
    FormInputSizeProperties as IFormInputSizeProperties,
    FormInputStates as IFormInputStates,
    FormInputStateProperties as IFormInputStateProperties,
    FormInputThemeProperties as IFormInputThemeProperties,
    FormValidationIconProperties as IFormValidationIconProperties,
    FormHintTheme as IFormHintTheme,
    FormHintSizeProperties as IFormHintSizeProperties,
    FormHintThemeProperties as IFormHintThemeProperties,
    FormErrorTheme as IFormErrorTheme,
    FormErrorSizeProperties as IFormErrorSizeProperties,
    FormErrorThemeProperties as IFormErrorThemeProperties,
} from '../../src/types/Form';
import { FormProps as IFormProps } from '../../src/components/Form';
import { FormInputProps as IFormInputProps } from '../../src/components/Form/Input';

export const FormTheme: React.FC<IFormTheme> = () => <div />;
export const FormProps: React.FC<IFormProps> = () => <div />;
export const FormValidationIconProperties: React.FC<IFormValidationIconProperties> = () => <div />;

export const FormInputProps: React.FC<IFormInputProps> = () => <div />;

export const FormInputTheme: React.FC<IFormInputTheme> = () => <div />;
export const FormInputSizeProperties: React.FC<IFormInputSizeProperties> = () => <div />;
export const FormInputStates: React.FC<IFormInputStates> = () => <div />;
export const FormInputThemeProperties: React.FC<IFormInputThemeProperties> = () => <div />;
export const FormInputStateProperties: React.FC<IFormInputStateProperties> = () => <div />;

export const FormHintTheme: React.FC<IFormHintTheme> = () => <div />;
export const FormHintSizeProperties: React.FC<IFormHintSizeProperties> = () => <div />;
export const FormHintThemeProperties: React.FC<IFormHintThemeProperties> = () => <div />;

export const FormErrorTheme: React.FC<IFormErrorTheme> = () => <div />;
export const FormErrorSizeProperties: React.FC<IFormErrorSizeProperties> = () => <div />;
export const FormErrorThemeProperties: React.FC<IFormErrorThemeProperties> = () => <div />;
