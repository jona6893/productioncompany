import { useRouter } from "next/router";
import { GraphQLClient } from "graphql-request";
import { productionQuery } from "@/app/modules/productionsQuery";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(
  () => import("react-player"),
  { ssr: false } // This line is important. It's what prevents server-side render
);

function Film({ film }) {
  const router = useRouter();
  const { id } = router.query;
  console.log(film);

  return (
    <section className="text-white p-8 flex flex-col gap-16">
      <div className="flex max-md:flex-col max-md:items-center md:justify-center gap-8">
        <img className="w-96 " src={film.poster.url} alt="" />
        <div className="flex flex-col gap-4">
          <h1 className="text-5xl flex items-center gap-4">
            {film.tItle}{" "}
            <span className="bg-yellow-500 hover:bg-yellow-400 p-1 rounded text-base cursor-pointer">
              <a className="text-black font-sans font-bold" target="_blank" href={`${film.imdbPage}`}>
                IMDB
              </a>
            </span>
          </h1>
          <h4>{film.tagline}</h4>
          <p className="max-w-[48ch]">Description: {film.description.html}</p>
          <p className="font-bold">
            {" "}
            <span className="font-normal text-sm text-gray-200">Release: </span>
            {film.release}
          </p>
          <p className="font-bold">
            <span className="font-normal text-sm text-gray-200">Status:</span>{" "}
            {film.stage}
          </p>
          <p className="font-bold">
            <span className="font-normal text-sm text-gray-200">Type:</span>{" "}
            {film.type}
          </p>
        </div>
      </div>
      {film.videoUrl !== null && (
        <div className="w-full flex flex-col items-center">
          <h3 className="text-center text-2xl">TRAILER</h3>
          <ReactPlayer
            width={"100%"}
            className="mx-auto"
            url={`${film.videoUrl}`}
            controls={true}
          />
        </div>
      )}
      <h3 className="text-center text-2xl">CREW</h3>
      <div className="grid ">
        <div className="grid crewGrid gap-4 justify-end">
          {film.crewMembers.map((member, i) => {
            return (
              <div
                key={i + 5}
                className="bg-slate-800 rounded-md mx-w-96 p-4 roundeduppercase uppercase"
              >
                <p className="text-gray-200 text-sm">{member.function}:</p>
                <p className="font-bold ">{member.name}</p>
              </div>
            );
          })}
        </div>
      </div>
      <h3 className="text-center text-2xl">AWARDS</h3>
      {film.awards.map((award, i) => {
        return <p key={i+6}>{award.award}</p>;
      })}
    </section>
  );
}

export default Film;


export async function getStaticProps({ params }) {
  const hygraph = new GraphQLClient(`${process.env.HYGRAPH_ENDPOINT}`);

  const { productions } = await hygraph.request(productionQuery);

  // find the correct film based on the pageUrl
  const film = productions.find((film) => film.pageUrl === params.id);

  return {
    props: {
      film,
    },
  };
}

export async function getStaticPaths() {
  const hygraph = new GraphQLClient(`${process.env.HYGRAPH_ENDPOINT}`);

  const { productions } = await hygraph.request(productionQuery);

  const paths = productions.map((film) => ({
    params: { id: film.pageUrl },
  }));

  return { paths, fallback: false };
}