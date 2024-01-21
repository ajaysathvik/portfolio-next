import "../fonts/fonts.css";
import img1 from "../../../public/eth-vault/1.png";
import img2 from "../../../public/eth-vault/2.png";
import img3 from "../../../public/eth-vault/3.png";
import Image from "next/image";

export default function Project1() {
  return (
    <div className="flex flex-row">
      <div>
        <h2 className="text-4xl text-gray-200 text-left ml-4 mt-4 ">
          <span className="text-blue-600 fonts2 font-normal">TRUSTVAULT</span> <br />{" "}
          <span className=" text-2xl font-extralight">Blockchain based E-Vault.</span>
        </h2>
        <p className="text-gray-400 text-left leading-7 ml-5 w-96 mt-4">
          I have worked on this project as a Frontend Developer. I have used
          React.js for the frontend and Solidity for the smart contracts. I have
          also used web3.js for the integration of the frontend with the
          blockchain. I have also used the Metamask wallet for the integration
          of the blockchain with the frontend.
        </p>
      </div>
      <div className="flex justify-center items-center py-10 ">
        <Image
          src={img2}
          alt="Sign in"
          width={400}
          height={300}
          className="flex items-center justify-center ml-1 md:ml-32 mr-10"
        />
        <Image
          src={img1}
          alt="Landing page"
          width={400}
          height={300}
          className="flex items-center justify-center ml-24"
        />
      </div>
    </div>
  );
}
