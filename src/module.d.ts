type SVGRIcon = React.FC<
    React.SVGProps<SVGSVGElement> & {
        /** Alternative text in title tag. */
        title?: string;
    }
>;

declare module '*.svg' {
    const value: SVGRIcon;
    export default value;
}
