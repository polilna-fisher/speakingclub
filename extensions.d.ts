declare module '*.svg' {
    const content: Element<React.SVGAttributes>;
    export default content;
}

declare module '*.sass' {
    const content: { [className: string]: string };
    export default content;
}