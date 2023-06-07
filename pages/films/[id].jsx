import { useRouter } from "next/router";

function Film() {
  const router = useRouter();
  const { id } = router.query;

  const films = [
    {
      title: "Hybenhjerte",
      tagline: "Tag dine piller eller du får kræft",
      release: 2023,
      poster: "../images/hyben.webp",
      video: "https://meritfilm.dk/Playground/videos/HH_WEB_070623.mp4",
      overlayColor: "bg-black/25",
      pageUrl: "hybenhjerte",
    },
    {
      title: "Hold Hæft",
      tagline: "Tag dine piller eller du får kræft",
      release: 2023,
      poster: "../images/hk.webp",
      video: "https://meritfilm.dk/Playground/videos/HK_WEB_070623.mp4",
      overlayColor: "bg-black/25",
      pageUrl: "hold-kaeft",
    },
    {
      title: "Bjarke Tømmer Skrald",
      tagline: "Tag dine piller eller du får kræft",
      release: 2023,
      poster: "../images/bts.webp",
      video: "https://meritfilm.dk/Playground/videos/BTW_WEB_070623.mp4",
      overlayColor: "bg-black/25",
      pageUrl: "bts",
    },
    {
      title: "Jeg Har Aldrig",
      tagline: "Tag dine piller eller du får kræft",
      release: 2023,
      poster: "url",
      video: "https://meritfilm.dk/Playground/videos/JHA_WEB_070623.mp4",
      overlayColor: "bg-black/25",
      pageUrl: "jeg-har-aldrig",
    },
  ];

  return (
    <section>
      {films.map((film) => (
        <>
          {film.pageUrl === id && (
            <>
              <h1 className="text-2xl">{film.title}</h1>
              <h4>{film.tagline}</h4>
              <p>Release: {film.release}</p>
              <img className="w-60 " src={film.poster} alt="" />
            </>
          )}
        </>
      ))}
    </section>
  );
}

export default Film;
