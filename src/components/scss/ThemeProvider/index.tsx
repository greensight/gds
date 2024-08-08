import React, { FC, ReactNode } from 'react';
import { ITheme } from '../../../types/scss/Theme';
import { ThemeContext } from '../../../utils/scss/useTheme';

export const ScssThemeProvider: FC<{ state: ITheme<Record<string, string>>; children: ReactNode }> = ({
    children,
    state,
}) => <ThemeContext.Provider value={state}>{children}</ThemeContext.Provider>;
