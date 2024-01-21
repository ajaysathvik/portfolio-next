import { PiDownloadSimple } from "react-icons/pi";

export default function ButtonCV() {
  return (
    <div class="group relative flex justify-center items-center text-sm font-medium border-gray-50 border w-fit rounded-full">
      <div class="absolute opacity-0 group-hover:opacity-100 group-hover:-translate-y-[150%] -translate-y-[300%] duration-500 group-hover:delay-500 skew-y-[20deg] group-hover:skew-y-0 shadow-md"></div>
      <div class="shadow-md flex items-center group-hover:gap-2 p-3 rounded-full cursor-pointer duration-300 mx-1">
        <PiDownloadSimple  />
        <span class="text-[0px] group-hover:text-sm duration-300">
          Download CV
        </span>
      </div>
    </div>
  );
}
