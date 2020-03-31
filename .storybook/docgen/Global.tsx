import React from 'react';
import IGlobalTheme, {
    BaseProperties as IBaseProperties,
    BodyProperties as IBodyProperties,
    FocusProperties as IFocusProperties,
    SelectionProperties as ISelectionProperties,
    FontsProperties as IFontsProperties,
    FontFaceProperties as IFontFaceProperties,
} from '../../src/types/Global';

export const GlobalTheme: React.FC<IGlobalTheme> = () => <div />;
export const BaseProperties: React.FC<IBaseProperties> = () => <div />;
export const BodyProperties: React.FC<IBodyProperties> = () => <div />;
export const FocusProperties: React.FC<IFocusProperties> = () => <div />;
export const SelectionProperties: React.FC<ISelectionProperties> = () => <div />;
export const FontsProperties: React.FC<IFontsProperties> = () => <div />;
export const FontFaceProperties: React.FC<IFontFaceProperties> = () => <div />;
