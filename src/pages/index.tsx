import { FilterArea } from "src/components/FilterArea";
import { useEffect } from "react";
import Scatterplot from "src/components/Scatterplot";
import { dataGenerator } from "src/lib/dataGenerator";

export default function Home() {
  const data = dataGenerator(2, 20, 10, 1000);

  useEffect(() => {
    console.log(data);
  }, []);

  return (
    <div className="container px-4 py-4 mx-auto flex flex-wrap ">
      <div className="h-full p-4 lg:w-1/2">
        <div className=" bg-gray-100 px-4 pt-10 pb-10 relative">
          <canvas id="canvas1"></canvas>
        </div>
      </div>
      <div className="h-full p-4 lg:w-1/2">
        <div className="bg-gray-100 px-4 pt-10 pb-10 relative ">
          <Scatterplot width={600} height={600} data={data} />
        </div>
      </div>
      {/* <FilterArea /> */}
    </div>
  );
}
