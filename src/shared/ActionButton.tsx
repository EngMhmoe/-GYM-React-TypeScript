// ============================================
// Import Libraries
// ============================================
import AnchorLink from "react-anchor-link-smooth-scroll";

// ============================================
// Import Types
// ============================================
import { SelectedPage } from "@/types";
import { NavbarActionButtonComponentProps } from "@/types/Components Props/navbar";


export default function ActionButton({ children, setSelectedPage }: NavbarActionButtonComponentProps) {

  return (
    <AnchorLink
      className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white font-extrabold duration-1000"
      onClick={() => setSelectedPage(SelectedPage.ContactUs)}
      href={`#${SelectedPage.ContactUs}`}
    >
      {children}
    </AnchorLink>
  );

}