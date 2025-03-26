import Image from "next/image";
import { locationParams } from "@/utils/merchantConstants";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <div className="mb-5">Please Select Location: </div>
      <div className="flex flex-col gap-4 w-min">
        {locationParams.map((location) => {
          return (
            <Link 
              key={`${location.name}`} 
              href={`/${location.mid}`}
              className="border-2 border-white rounded-xl p-4"
            >
              <div>{location.name}</div>
            </Link>
          )
        })}
      </div>
    </div>
  );
}


