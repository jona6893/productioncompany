import { useRouter } from "next/router";
import { GraphQLClient } from "graphql-request";
import { productionQuery } from "@/app/modules/productionsQuery";
import dynamic from "next/dynamic";
import parse from "html-react-parser";
import Link from "next/link";

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
      <Link href={"/"} className="border-2 border-white rounded-full w-fit p-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-10 h-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
          />
        </svg>
      </Link>

      <div className="flex max-md:flex-col max-md:items-center md:justify-center gap-8">
        <img className="w-96 " src={film.poster?.url} alt="" />
        <div className="flex flex-col gap-4">
          <h1 className="text-5xl flex items-center gap-4 titles">
            {film.tItle}
            <span className="bg-yellow-500 hover:bg-yellow-400 p-1 rounded text-base cursor-pointer">
              <a
                className="text-black font-sans font-bold"
                target="_blank"
                href={`${film.imdbPage}`}
              >
                IMDB
              </a>
            </span>
          </h1>
          <h4>{film.tagline}</h4>
          {/* his parse might be a problem */}
          <div className="max-w-[48ch]">{parse(film.description?.html)}</div>
          <p className="font-bold">
            {" "}
            <span className="font-normal text-sm text-neutral-300 ">
              Release:{" "}
            </span>
            {film.release}
          </p>
          <p className="font-bold">
            <span className="font-normal text-sm text-neutral-300 ">
              Status:
            </span>{" "}
            {film.stage}
          </p>
          <p className="font-bold">
            <span className="font-normal text-sm text-neutral-300 ">Type:</span>{" "}
            {film.type}
          </p>
        </div>
      </div>
      {film.videoUrl !== null && (
        <div className="w-full flex flex-col items-center p-8">
          <h3 className="text-center font-sans font-bold text-2xl mb-4 ">
            TRAILER
          </h3>
          <ReactPlayer
            width={"100%"}
            className="mx-auto"
            url={`${film.videoUrl}`}
            controls={true}
          />
        </div>
      )}
      <div className="grid p-8">
        <h3 className="text-center font-sans font-bold text-2xl mb-4 ">CREW</h3>
        <div className="grid crewGrid gap-4 justify-end">
          {film.crewMembers.map((member, i) => {
            return (
              <div
                key={i + 5}
                className=" rounded-md mx-w-96 p-4 text-center roundeduppercase uppercase"
              >
                <p className="text-neutral-300 text-sm">{member.function}:</p>
                <p className="font-bold ">{member.name}</p>
              </div>
            );
          })}
        </div>
      </div>
      <h3 className="text-center text-2xl">AWARDS</h3>
      {film.awards.map((award, i) => {
        return <p key={i + 6}>{award.award}</p>;
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