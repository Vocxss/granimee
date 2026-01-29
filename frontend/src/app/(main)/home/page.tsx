
import { LatestList, TopList } from "@/components/animelist";
import { ImageSlider } from "@/components/imageslider";
import { LatestWatched } from "../profile/[id]/watchhistory";

export default function Home() {
  return (
    <div className="bg-transparent relative flex overflow-x-hidden gap-0 mt-12 mx-4 lg:flex-row flex-col">
      <div className="flex lg:max-w-3/4 max-w-full w-full flex-col">
        <div className="flex flex-col justify-center items-center gap-4 w-full">
          <ImageSlider />
          <LatestWatched/>
        </div>
          <LatestList />
      </div>
      <div className="flex lg:max-w-1/4 max-w-full w-full flex-col gap-4">
        <TopList />
      </div>
    </div>
  );
}
