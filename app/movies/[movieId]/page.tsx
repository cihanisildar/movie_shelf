import Navbar from "@/components/navbar";
import { getMovieById } from "@/db/queries";
import Image from "next/image";
import { redirect } from "next/navigation";
import { FaCheck } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

type Props = {
  params: {
    movieId: number;
  };
};

const MovieIdPage = async ({ params }: Props) => {
  const movieData = await getMovieById(params.movieId);

  if (!movieData) {
    redirect("/movies");
  }

  return (
    <div className="bg-gradient-to-tr from-gray-50 to-gray-500 h-screen w-screen">
      <Navbar />
      <div className="mt-10 flex items-center justify-center gap-20">
        <div>
          <Image
            className="rounded-lg"
            src={movieData.poster!}
            alt={movieData.title}
            width={300}
            height={450}
          />
        </div>
        <div className="w-[500px] h-[450px] flex flex-col gap-10 relative">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl tracking-wide">{movieData.title}</h2>
            <div className="flex justify-between items-center">
              <h3 className="underline">{movieData.year}</h3>
              <div className="flex gap-3">
                {movieData.genre.map((item) => (
                  <h3 className="underline">{item}</h3>
                ))}
              </div>
            </div>
          </div>

          <p className="tracking-wide">{movieData.description}</p>

          <div className="absolute bottom-0 right-0">
            {movieData.isWatched ? (
              // <FaCheck />

              <div className="flex items-center gap-2">
                <Switch
                  id="isWatched"
                  className="data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-red-500"
                  checked={movieData.isWatched === true}
                />
                <Label htmlFor="isWatched">
                  {movieData.isWatched ? "watched" : "unwatched"}
                </Label>
              </div>
            ) : (
              <MdCancel />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieIdPage;
