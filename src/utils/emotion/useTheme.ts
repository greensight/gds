import { useTheme as useEmotionTheme } from '@emotion/react';

import { Theme } from '../../types/emotion/Theme';

/**
 * Custom hook to get your theme object in React components from ThemeProvider.
 */
export const useTheme = (): Theme => useEmotionTheme();
