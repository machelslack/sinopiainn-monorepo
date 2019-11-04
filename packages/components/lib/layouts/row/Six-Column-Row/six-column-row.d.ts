import { FunctionComponent } from 'react';
interface IconItem {
    class: string;
    title: string;
    subtitle: string;
    text: string;
}
declare const SixColumnRow: FunctionComponent<{
    iconTypes: IconItem[];
}>;
export default SixColumnRow;
