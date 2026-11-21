// ============================================
// Import Type ClassComponentProps
// ============================================
import { ClassComponentProps } from "@/types/Components Props/ourClasses";

export default function Class({ name, description, image }: ClassComponentProps) {

  // Overlay Styles
  const overlayStyles: string = `p-5 absolute z-30 flex
  h-[380px] w-[450px] flex-col items-center justify-center
  whitespace-normal bg-primary-500 text-center text-white
  opacity-0 transition duration-2000 hover:opacity-90`;

  return (
    <li className="relative mx-5 duration-2000 inline-block h-[380px] w-[450px]">
      {/* Overlay Content */}
      <div className={overlayStyles}>
        <p className="text-3xl font-bold">{name}</p>
        <p className="mt-5">{description}</p>
      </div>


      {/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
      {/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}


      {/* Class Image */}
      <img alt={`${image}`} src={image} />
    </li>
  );
}