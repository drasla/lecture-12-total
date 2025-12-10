import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        primary: string;
        background: {
            default: string;
            paper: string;
        };
        text: string;
    }
}
