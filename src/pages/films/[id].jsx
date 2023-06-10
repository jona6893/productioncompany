import { useRouter } from "next/router";
import { GraphQLClient } from "graphql-request";
import { productionQuery } from "@/app/modules/productionsQuery";
import dynamic from "next/dynamic";
import Link from "next/link";
import Awards from "@/app/components/films/Awards";
import Crew from "@/app/components/films/Crew";
import FilmInformation from "@/app/components/films/FilmInformation";

const ReactPlayer = dynamic(
  () => import("react-player"),
  { ssr: false } // This line is important. It's what prevents server-side render
);

function Film({ film }) {
  const router = useRouter();
  const { id } = router.query;
  console.log(film)





  return (
    <section className="text-white p-8 flex flex-col">
      {/* Go Back Arrow */}
      <Link
        href="javascript:javascript:history.go(-1)"
        className="border-2 border-white rounded-full w-fit p-1 mb-4"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
          />
        </svg>
      </Link>

      <FilmInformation film={film} />

      {/* Trailer */}
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
      {/* Crew */}
      {film.crewMembers.length >= 1 && <Crew film={film} />}
      {/* Awards */}
      {film.Awards && <Awards film={film} />}
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