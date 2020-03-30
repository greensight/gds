export interface TypographyProperties {
    /** `font-family` CSS property specifies a font family name. Specify only main font (Example: `'PT Root UI'`). Fallback fonts are defined separately in `global.fonts.stacks` setting. */
    fontFamily: string;
    /** `font-weight` CSS property specifies the weight of the font. Specify value in numbers (Example: `400`). */
    fontWeight: number;
    /** `font-size` CSS property (rem) sets the size of the font. Specify value in rems (Example: `'1rem'`). */
    fontSize: string;
    /** `line-height` CSS property (множитель) sets the amount of space used for lines. Specify value in numbers (Example: `1.5`). */
    lineHeight: number;
    /** `letter-spacing` sets the spacing behavior between text characters. Specify value in ems (Example: `'0.002em'`). */
    letterSpacing?: string;
    /** `fontStyle` CSS property sets whether a font should be styled with a italic face. */
    fontStyle?: 'italic';
    /** `text-transform` CSS property specifies how to capitalize an element's text. */
    textTransform?: 'uppercase' | 'lowercase' | 'capitalize';
    /** `text-decoration` CSS property sets the appearance of decorative lines on text. */
    textDecoration?: 'underline' | 'line-through';
    /** `font-variant-numeric` CSS property controls the usage of alternate glyphs for numbers. */
    fontVariantNumeric?: string;
}

export interface TypographyStyle {
    /** Desktop typography properties. */
    desktop: TypographyProperties;
    /** Mobile typography properties. */
    mobile?: TypographyProperties;
}

export default interface TypographyTheme {
    /** Breakpoint for desktop and mobile styles. */
    breakpoints: number[];
    /** Named typography styles. */
    styles: Record<string, TypographyStyle>;
}
