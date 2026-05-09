import PhaseOne from "@/components/Phase-1/PhaseOne";
import Link from "next/link";

export default function Home() {
  return (
    <div className=" flex items-center justify-center gap-5 py-10">
      <Link className=" btn btn-primary" href={"/phaseone"}>
        Phase One
      </Link>
    </div>
  );
}
