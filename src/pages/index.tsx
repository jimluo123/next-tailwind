import { FilterArea } from "@/components/FilterArea";
import { useEffect } from "react";

export default function Home() {
  return (
    <div className="container px-5 py-5 mx-auto flex flex-wrap ">
      <div className="h-full p-4 lg:w-1/2">
        <div className=" bg-gray-100 px-8 pt-16 pb-16 relative">
          <canvas id="canvas1" />
        </div>
      </div>
      <div className="h-full p-4 lg:w-1/2">
        <div className="bg-gray-100 px-8 pt-16 pb-16 relative">
          <canvas id="canvas2" />
        </div>
      </div>
      <FilterArea />
    </div>
  );
}
