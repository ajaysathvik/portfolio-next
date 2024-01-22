import Link from "next/link";
import "../fonts/fonts.css";
import Logo from "./Logo";

export default function Nav() {
  return (
    <nav className=" w-full justify-evenly px-20 py-4 flex mt-2.5 gap-6 rounded-full m-auto font-semi-bold fonts">
      <Link href="/">
        <Logo />
      </Link>
      <Link
        href="#about"
        className="hover:font-medium hover:scale-125 transition ease-in-out hover:text-slate-300 pt-5"
      >
        ABOUT
      </Link>
      <Link
        href="#Projects"
        className="hover:font-medium  hover:scale-125 transition ease-in-out hover:text-slate-300 pt-5"
      >
        WORK
      </Link>
      <Link
        href="#skills"
        className="hover:font-medium hover:scale-125 transition ease-in-out hover:text-slate-300 pt-5"
      >
        SKILLS
      </Link>
      <Link
        href="#contact"
        className="hover:font-medium hover:scale-125 transition ease-in-out hover:text-slate-300 pt-5"
      >
        CONTACT
      </Link>
    </nav>
  );
}
