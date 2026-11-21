// ============================================
// Import Types ComponentProps
// ============================================
import { SelectedPage } from "@/types";
import { NavbarLinksComponentProps } from "@/types/Components Props/navbar";

// ============================================
// Import Libraries
// ============================================
import AnchorLink from "react-anchor-link-smooth-scroll";


export default function Link({ page, selectedPage, setSelectedPage }: NavbarLinksComponentProps) {

  // Convert page name to lowercase and remove spaces
  const lowerCasePage: SelectedPage = page.toLowerCase().replace(/ /g, "") as SelectedPage;


  return (
    <AnchorLink className={`${selectedPage === lowerCasePage ? "text-primary-500" : ""} transition duration-500 font-bold hover:text-primary-300`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
}

