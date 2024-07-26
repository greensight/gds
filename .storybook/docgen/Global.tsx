import React from 'react';

import {
    BaseProperties as IBaseProperties,
    BodyProperties as IBodyProperties,
    FocusProperties as IFocusProperties,
    FontFamilyProperties as IFontFamilyProperties,
    FontsProperties as IFontsProperties,
    GlobalTheme as IGlobalTheme,
    SelectionProperties as ISelectionProperties,
} from '../../src/types/emotion/Global';

export const GlobalTheme: React.FC<IGlobalTheme> = () => <div />;
export const BaseProperties: React.FC<IBaseProperties> = () => <div />;
export const BodyProperties: React.FC<IBodyProperties> = () => <div />;
export const FocusProperties: React.FC<IFocusProperties> = () => <div />;
export const SelectionProperties: React.FC<ISelectionProperties> = () => <div />;
export const FontsProperties: React.FC<IFontsProperties> = () => <div />;
export const FontFamilyProperties: React.FC<IFontFamilyProperties> = () => <div />;
