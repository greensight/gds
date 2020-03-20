type ISvg = React.FC<
    React.SVGProps<SVGSVGElement> & {
        /** Alternative text (a11y) */
        title?: string;
    }
>;

declare module '*.svg' {
    const value: ISvg;
    export default value;
}
