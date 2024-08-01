import React, { FC, ReactNode } from 'react';
import { ThemeContext } from '../utils/autokits/useTheme';
import { IAutokitsTheme } from '../types/autokits/Theme';

export const AutokitsThemeProvider: FC<{ theme: IAutokitsTheme; children: ReactNode }> = ({ children, theme }) => (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
);
