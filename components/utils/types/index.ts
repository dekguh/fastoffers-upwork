import { MouseEventHandler, ReactNode } from "react";
import { IconType } from "react-icons";

export interface INavigation {
    logo?: string;
    classes?: string;
}

export interface IButton {
    classes?: string;
    text?: string;
    onClick?: MouseEventHandler;
    icon: IconType;
}

export interface IButtonHamburger {
    isOpen?: boolean;
    onClick?: MouseEventHandler;
}

export interface INavList {
    isOpen: boolean;
    dataMenu: Array<{
        href: string;
        text: string;
    }>
}

export interface ITextTitleBorder {
    text?: string;
    classes?: string;
    textBordered?: string;
}

export interface IBlockAccordion {
    icon: IconType,
    title?: string;
    description?: string;
    onClick?: MouseEventHandler;
    isOpen: boolean;
}

export interface IBlockLogoClient {
    logo?: string;
    classes?: string;
}

export interface IClientList {
    dataLogo?: Array<{
        logo: string;
    }>
}

export type TDataLogo = Array<{
    logo: string;
}>

export interface IMouseEffect {
    children: ReactNode | JSX.Element
}

export interface IBlockPricing {
    title?: string;
    price?: string;
    date?: 'month' | 'year' | string;
    description?: string;
    listBenefit?: Array<{
        text: string;
    }>;
    buttonText?: string;
    buttonUrl: string;
    isGreen?: boolean;
}

export interface ITextTitleBorderAnim {
    text?: string;
    textBordered?: string;
    classes?: string;
}

export interface IFooterBottom {
    logo?: string;
    copyright?: ReactNode | JSX.Element;
}

export interface IMouseEffectCarousel {
    top: number | null;
    left: number | null;
    classes?: string;
}