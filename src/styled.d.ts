import "styled-components";

declare module "styled-components"{
    export interface DefaultTheme{
        textColor: string;
        bgColor: string;
        coinColor: string;
        accentColor: string;
        borderColor: string;
    }
}