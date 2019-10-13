export interface ScriptBuilderProps {
    src: any;
    attrs: object;
    isInline: Boolean;
}
export declare const ScriptBuilder: ({ src, attrs, isInline }: ScriptBuilderProps) => JSX.Element;
export declare const LinkBuilder: ({ src, attrs }: {
    src: any;
    attrs: object;
}) => JSX.Element;
export declare const MetaTags: ({ tags }: {
    tags: {
        key: string;
        value: string;
    }[];
}) => JSX.Element[];
