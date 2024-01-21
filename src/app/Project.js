import Project2 from "./(projects)/Project2";
import Project1 from "./(projects)/Project1";
import "./fonts/fonts.css";
import Project3 from "./(projects)/Project3";
import Project4 from "./(projects)/Project4";
import Project5 from "./(projects)/Project5";

export default function Project() {
  return (
    <div>
      <h2 className="mx-96 mt-32 leading-1 text-4xl text-center text-gray-200 fonts2 font-extralight">
        My Projects
      </h2>
      <div className="flex flex-wrap justify-center mt-10">
        <div className="w-4/5 h-96 border-2 border-zinc-900 rounded-xl m-5">
          <Project1 />
        </div>
        <div className="w-1/5 h-96 border-2 border-zinc-900 rounded-xl m-5">
          <Project2 />
        </div>
        <div className="w-3/5 h-96 border-2 border-zinc-900 rounded-xl m-5">
          <Project3 />
        </div>
        <div className="w-1/5 h-96 border-2 border-zinc-900 rounded-xl m-5">
          <Project4 />
        </div>
        <div className="w-1/5 h-96 border-2 border-zinc-900 rounded-xl m-5">
          <Project5 />
        </div>  
      </div>
    </div>
  );
}
