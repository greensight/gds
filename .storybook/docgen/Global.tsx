import React from 'react';
import IGlobalTheme, {
    FontFaceProperties as IFontFaceProperties,
    BaseProperties as IBaseProperties,
    FontsProperties as IFontsProperties,
} from '../../src/types/Global';

export const GlobalTheme: React.FC<IGlobalTheme> = () => <div />;
export const FontFaceProperties: React.FC<IFontFaceProperties> = () => <div />;
export const BaseProperties: React.FC<IBaseProperties> = () => <div />;
export const FontsProperties: React.FC<IFontsProperties> = () => <div />;
