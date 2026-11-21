// ============================================
// Import Types
// ============================================
import { SelectedPage } from "@/types";
import { BenefitComponentProps } from "@/types/Components Props/benefit";

// ============================================
// Import Libraries
// ============================================
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

// ============================================
// Import Variants
// ============================================
const childVariant: {
    hidden: {
        opacity: number;
        scale: number;
    };
    visible: {
        opacity: number;
        scale: number;
    };
} = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};



export default function Benefit({ icon, title, description, setSelectedPage }: BenefitComponentProps) {

  return (

    <motion.div
      variants={childVariant}
      className="mt-5 rounded-2xl border-2 border-gray-100 px-5 py-16 text-center shadow-lg shadow-red-100"
    >
      {/* Icon */}
      <div className="mb-4 flex justify-center">
        <div className="rounded-full border-2 border-gray-100 bg-primary-100 p-4">
          {icon}
        </div>
      </div>


      {/* ////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////////// */}


      {/* Content */}
      <h4 className="font-bold text-lg">{title}</h4>
      <p className="my-3">{description}</p>


      {/* ////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////////// */}


      {/* Learn More Link */}
      <AnchorLink
        className="font-bold text-primary-500 duration-1000 underline hover:text-secondary-500"
        onClick={() => setSelectedPage(SelectedPage.ContactUs)}
        href={`#${SelectedPage.ContactUs}`}
      >
        <p>Learn More</p>
      </AnchorLink>
    </motion.div>

  );

}