import { useRouter } from "next/router";
import { GraphQLClient } from "graphql-request";
import { productionQuery } from "@/app/modules/productionsQuery";
import Link from "next/link";

function Film({ film }) {
  const router = useRouter();
  const { id } = router.query;
  console.log(film);

  return (
    <section className="text-white">
      <h1 className="text-2xl">
        {film.tItle}{" "}
        <span className="bg-yellow-500 hover:bg-yellow-400 p-1 rounded text-base cursor-pointer">
          <a className="text-black" href={"wwww.imdb.com"}>
            IMDB
          </a>
        </span>
      </h1>
      <h4>{film.tagline}</h4>
      <p>Release: {film.release}</p>
      <p>Status: {film.stage}</p>
      <p>Type: {film.type}</p>
      <img className="w-60 " src={film.poster.url} alt="" />
      {film.crewMembers.map((member) => (
        <div>
          <p>{member.function}</p>
          <p>{member.name}</p>
        </div>
      ))}
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