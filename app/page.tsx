import { locationParams } from "@/utils/merchantConstants";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <div className="mb-5 text-xl font-bold">Merchant Locations: </div>
      <div className="flex flex-col gap-6 w-min">
        {locationParams.map((location) => {
          return (
            <Link 
              key={`${location.name}`} 
              href={`/${location.mid}`}
              className="flex flex-row justify-between items-center gap-4 border border-black bg-orange-500 rounded-xl p-4 text-xl"
            >
              <div className="text-white font-bold">{location.name}</div>
              <div className="w-[20px] stroke-cyan-500 fill-cyan-500">
                <Image className="stroke-cyan-500 fill-white" src={"/ui/arrow-right.svg"} alt={"arrow"} width={20} height={20}/>

              </div>

            </Link>
          )
        })}
      </div>
    </div>
  );
}


