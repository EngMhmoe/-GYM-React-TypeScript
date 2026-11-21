// ============================================
// Import Type HTextComponentProps
// ============================================
import HTextComponentProps from "@/types/Components Props/hText";

export default function HText({ children }: HTextComponentProps) {

  return (
    <h1 className="basis-3/5 font-montserrat text-4xl font-extrabold">
      {children}
    </h1>
  );

}