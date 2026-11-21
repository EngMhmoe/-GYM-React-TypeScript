// SelectedPage Type
import { SelectedPage } from "../index";


export type BenefitsComponentProps = {

    setSelectedPage: (value: SelectedPage) => void;

};


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


export type BenefitComponentProps = {

    icon: JSX.Element;
    
    title: string;
    
    description: string;
    
    setSelectedPage: (value: SelectedPage) => void;

};