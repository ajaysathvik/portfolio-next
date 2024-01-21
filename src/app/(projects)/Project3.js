import img1 from "../../../public/ethomedix/profile.png";
import img2 from "../../../public/ethomedix/landingpage.png";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

export default function Project3() {
  return (
    <div className="flex flex-row">
      <div>
        <h2 className="text-4xl text-gray-200 text-left ml-4 mt-4 ">
          <span className="text-blue-600 fonts2 font-normal">ETHOMEDIX</span>
          <br />
          <span className=" text-2xl font-extralight">
            Blockchain based monitoring of <br /> clinical drug trials
          </span>
        </h2>
        <p className="text-gray-400 text-left leading-7 ml-5 w-96 mt-4">
          I have worked on this project as a Frontend Developer. I have used
          React.js for the frontend and Solidity for the smart contracts. I have
          also used web3.js for the integration of the frontend with the
          blockchain.
          {/* I have also used the Metamask wallet for the integration
          of the blockchain with the frontend. */}
        </p>
        <Link
          className="flex justify-center items-center w-10 h-10 m-3 ml-4"
          href="https://github.com/Amrita-Blockchain-Club/EthoMedix"
        >
          <FaGithub className="text-6xl text-gray-200" />
        </Link>
      </div>
      <div className="flex justify-center items-center py-10 ">
        <Image
          src={img2}
          alt="Sign in"
          width={380}
          height={300}
          className="flex items-center justify-center ml-1 mr-1 rounded-lg"
        />
        <Image
          src={img1}
          alt="Landing page"
          width={380}
          height={300}
          className="flex items-center justify-center ml-3 rounded-lg"
        />
      </div>
    </div>
  );
}
