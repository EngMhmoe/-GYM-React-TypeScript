// SelectedPage Type
import { SelectedPage } from "../index";


export type NavbarComponentProps = {

    isTopOfPage: boolean;

    selectedPage: SelectedPage;

    setSelectedPage: (value: SelectedPage) => void;

};


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


export type NavbarLinksComponentProps = {

    page: string;

    selectedPage: SelectedPage;

    setSelectedPage: (value: SelectedPage) => void;

};


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


export type NavbarActionButtonComponentProps = {

    children: React.ReactNode;

    setSelectedPage: (value: SelectedPage) => void;

};