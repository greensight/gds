import React from 'react';
import ILegendTheme, {
    LegendSizeProperties as ILegendSizeProperties,
    LegendStates as ILegendStates,
    LegendStateProperties as ILegendStateProperties,
    LegendThemeProperties as ILegendThemeProperties,
    LegendOptionalThemeProperties as ILegendOptionalThemeProperties,
    LegendMarkThemeProperties as ILegendMarkThemeProperties,
} from '../../src/types/Legend';
import { LegendProps as ILegendProps } from '../../src/components/Legend';

export const LegendTheme: React.FC<ILegendTheme> = () => <div />;
export const LegendSizeProperties: React.FC<ILegendSizeProperties> = () => <div />;
export const LegendStates: React.FC<ILegendStates> = () => <div />;
export const LegendThemeProperties: React.FC<ILegendThemeProperties> = () => <div />;
export const LegendStateProperties: React.FC<ILegendStateProperties> = () => <div />;
export const LegendOptionalThemeProperties: React.FC<ILegendOptionalThemeProperties> = () => <div />;
export const LegendMarkThemeProperties: React.FC<ILegendMarkThemeProperties> = () => <div />;
export const LegendProps: React.FC<ILegendProps> = () => <div />;
