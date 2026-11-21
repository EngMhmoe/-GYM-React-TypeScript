// ============================================
// Import useForm
// ============================================
import { FieldValues, useForm } from "react-hook-form";

// ============================================
// Import Types
// ============================================
import { SelectedPage } from "@/types";
import ContactUsComponentProps from "@/types/Components Props/contactUs";

// ============================================
// Import framer-motion
// ============================================
import { motion } from "framer-motion";

// ============================================
// Import Components UI shared
// ============================================
import HText from "@/shared/HText";

// ============================================
// Import Assets
// ============================================
import ContactUsPageGraphic from "/images/ContactUsPageGraphic.png";


export default function ContactUs({ setSelectedPage }: ContactUsComponentProps) {
  // Input Styles
  const inputStyles: string = `mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white text-white text-lg font-bold`;

  // Form Setup
  const {register, trigger, formState: { errors }} = useForm<FieldValues, any>();

  // Form Submission
  const onSubmit = async (e: any): Promise<void> => {
    const isValid: boolean = await trigger();

    if (!isValid) {
      e.preventDefault();
    }
  };



  return (
    <section id="contactus" className="mx-auto w-5/6 pt-24 pb-32">
      {/* Viewport Tracking */}
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)} >
        {/* Header */}
        <motion.div
          className="md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>
            <span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE.
          </HText>

          <p className="my-5 text-lg">
            Congue adipiscing risus commodo placerat. Tellus et in feugiat nisl
            sapien vel rhoncus. Placerat at in enim pellentesque. Nulla
            adipiscing leo egestas nisi elit risus sit. Nunc cursus sagittis.
          </p>
        </motion.div>


        {/* ///////////////////////////////////////////////////////////////////////////////////////////////////// */}
        {/* ///////////////////////////////////////////////////////////////////////////////////////////////////// */}
        {/* ///////////////////////////////////////////////////////////////////////////////////////////////////// */}


        {/* Form and Image */}
        <div className="mt-10 justify-between gap-10 md:flex">
          {/* Contact Form */}
          <motion.div
            className="mt-10 basis-3/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <form
              target="_blank"
              onSubmit={onSubmit}
              action="https://formsubmit.co/e8a5bdfa807605332f809e5656e27c6e"
              method="POST"
            >
              {/* Name Input */}
              <input
                className={inputStyles}
                type="text"
                placeholder="NAME"
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })}
              />

              {/* Name Validation */}
              {errors.name && (
                <p className="mb-5 text-primary-500 text-lg font-bold">
                  {errors.name.type === "required" && "This field is required."}
                  {errors.name.type === "maxLength" &&
                    "Max length is 100 char."}
                </p>
              )}

              {/* Email Input */}
              <input
                className={inputStyles}
                type="text"
                placeholder="EMAIL"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />

              {/* Email Validation */}
              {errors.email && (
                <p className="mb-5 text-primary-500 text-lg font-bold">
                  {errors.email.type === "required" &&
                    "This field is required."}
                  {errors.email.type === "pattern" && "Invalid email address."}
                </p>
              )}

              {/* Message Input */}
              <textarea
                className={inputStyles}
                placeholder="MESSAGE"
                rows={4}
                cols={50}
                {...register("message", {
                  required: true,
                  maxLength: 2000,
                })}
              />

              {/* Message Validation */}
              {errors.message && (
                <p className="mb-5 text-primary-500 text-lg font-bold">
                  {errors.message.type === "required" &&
                    "This field is required."}
                  {errors.message.type === "maxLength" &&
                    "Max length is 2000 char."}
                </p>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-1000 hover:text-white text-xl font-extrabold"
              >
                SUBMIT
              </button>
            </form>
          </motion.div>

          {/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++= */}
          {/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++= */}

          {/* Contact Graphic */}
          <motion.div
            className="relative mt-16 basis-2/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1] md:before:content-evolvetext">
              <img
                className="w-full"
                alt="contact-us-page-graphic"
                src={ContactUsPageGraphic}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );

}