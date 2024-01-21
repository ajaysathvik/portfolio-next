import "./fonts/fonts.css";

export default function Contact() {
  return (
    <div className=" max-w-full bg-gray-700 bg-opacity-70 m-auto min-h-screen ">
      <h2 className="mt-24 text-9xl text-center text-black pt-56 fonts3 font-extralight">
        Let's Work <br /> Together
      </h2>
      <div className=" justify-center flex flex-row mt-10 gap-5">
        <div className=" w-max p-2 px-4 border text-xl font-extralight m-5 border-gray-500 rounded-3xl text-gray-300">
          ajaysathviksu@mail.com
        </div>
        <div className=" w-max p-2 px-4 border text-xl font-extralight m-5 border-gray-500 rounded-3xl text-gray-300">
          +91 8590 351 989
        </div>
      </div>
      <footer>
        <svg width="2000" height="300">
          <line
            x1="100"
            y1="300"
            x2="1900"
            y2="300"
            stroke="black"
            stroke-width="1"
          />
        </svg>
        <div className="flex flex-row items-center justify-around text-center mt-5 text-black">
          <div className="">Github</div>
        </div>
      </footer>
    </div>
  );
}
