import { locationParams } from "@/utils/merchantConstants";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <div className="mb-5">Merchant Locations: </div>
      <div className="flex flex-col gap-6 w-min">
        {locationParams.map((location) => {
          return (
            <Link 
              key={`${location.name}`} 
              href={`/${location.mid}`}
              className="border border-black bg-gray-50 rounded-xl p-6 text-xl"
            >
              <div>{location.name}</div>
            </Link>
          )
        })}
      </div>
    </div>
  );
}


