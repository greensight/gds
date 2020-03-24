type SVGRIcon = React.FC<
    React.SVGProps<SVGSVGElement> & {
        /** Alternative text (a11y) */
        title?: string;
    }
>;

declare module '*.svg' {
    const value: SVGRIcon;
    export default value;
}
