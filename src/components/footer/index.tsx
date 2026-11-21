// ============================================
// Import Assets
// ============================================
import Logo from "/images/Logo.png";


export default function Footer() {

  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        {/* Logo and Description */}
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />

          <p className="my-5 text-lg">
            Lorem vitae ut augue auctor faucibus eget eget ut libero. Elementum
            purus et arcu massa dictum condimentum. Augue scelerisque iaculis
            orci ut habitant laoreet. Iaculis tristique.
          </p>

          <p className="text-xl font-extrabold flex items-center gap-1"><span className="text-red-500 text-2xl">©</span> Evogym All Rights Reserved.</p>
        </div>


        {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////// */}


        {/* Footer Links */}
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-extrabold text-2xl">Links</h4>
          <p className="my-5 font-semibold">Massa orci senectus</p>
          <p className="my-5 font-semibold">Et gravida id et etiam</p>
          <p className="font-semibold">Ullamcorper vivamus</p>
        </div>


        {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////// */}


        {/* Contact Information */}
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-extrabold text-2xl">Contact Us</h4>
          <p className="my-5 font-semibold">Tempus metus mattis risus volutpat egestas.</p>
          <p className="font-semibold text-red-500">(333)425-6825</p>
        </div>
      </div>
    </footer>
  );

} 