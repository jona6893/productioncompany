import { useRouter } from "next/router";
import { GraphQLClient } from "graphql-request";
import { productionQuery } from "@/app/modules/productionsQuery";
import Link from "next/link";

function Film({ film }) {
  const router = useRouter();
  const { id } = router.query;
  console.log(film);

  return (
    <section className="text-white p-8 flex flex-col gap-16">
      <div className="flex flex-col items-center gap-8">
        <img className="w-96 " src={film.poster.url} alt="" />
        <div className="flex flex-col gap-4">
          <h1 className="text-5xl">
            {film.tItle}{" "}
            <span className="bg-yellow-500 hover:bg-yellow-400 p-1 rounded text-base cursor-pointer">
              <a className="text-black" href={"wwww.imdb.com"}>
                IMDB
              </a>
            </span>
          </h1>
          <h4>{film.tagline}</h4>
          <p className="max-w-[48ch]">Description: {film.description.html}</p>
          <p>
            {" "}
            <span className="text-sm text-gray-300">Release:</span>
            {film.release}
          </p>
          <p>
            <span className="text-sm text-gray-300">Status:</span> {film.stage}
          </p>
          <p>
            <span className="text-sm text-gray-300">Type:</span> {film.type}
          </p>
        </div>
      </div>
        <h3 className="text-center text-2xl">CREW</h3>
      <div className="grid grid-cols-2">
        <div className="grid gap-4 justify-end">
          {film.crewMembers.map((member, i) => {
              return (
                <div className="bg-gray- mx-w-96 p-4 rounded text-end">
                  <p >{member.function.toUpperCase()}:</p>
               
                </div>
              );
       
          })}
        </div>
        <div className="grid gap-4 justify-start">
          {film.crewMembers.map((member, i) => {
            console.log(member.name)
              return (
                <div className="bg-gray- mx-w-96 p-4 rounded text-start">
                  <p className="font-bold">{member.name}</p>
                </div>
              );
        
          })}
        </div>
      </div>
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