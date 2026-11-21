// SelectedPage Type
import { SelectedPage } from "../index";


export type OurClassesComponentProps = {

    setSelectedPage: (value: SelectedPage) => void;

};


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


export type ClassComponentProps = {

    name: string;

    description?: string;

    image: string;

};