import React from 'react'


function Projects() {

const projects = [
  {
    title: "Hybenhjert",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni delectus molestias iste quos earum impedit saepe. Voluptates, maiores blanditiis? Exercitationem, eos eveniet fuga libero magnam unde incidunt. Beatae, quia natus!",
    status: "Finished",
    img: "images/hyben.webp",
    type: "Short Film",
    year: "2021",
  },
  {
    title: "Bjarke Tømmer Skrald",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni delectus molestias iste quos earum impedit saepe. Voluptates, maiores blanditiis? Exercitationem, eos eveniet fuga libero magnam unde incidunt. Beatae, quia natus!",
    status: "Finished",
    img: "images/bts.webp",
    type: "Short Film",
    year: "2022",
  },
  {
    title: "Graffiti",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni delectus molestias iste quos earum impedit saepe. Voluptates, maiores blanditiis? Exercitationem, eos eveniet fuga libero magnam unde incidunt. Beatae, quia natus!",
    status: "Annonced",
    img: "images/graffiti.webp",
    type: "Feature",
    year: "2023",
  },
  {
    title: "Hortulan",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni delectus molestias iste quos earum impedit saepe. Voluptates, maiores blanditiis? Exercitationem, eos eveniet fuga libero magnam unde incidunt. Beatae, quia natus!",
    status: "Annonced",
    img: "images/hortulan.webp",
    type: "Feature",
    year: "2023",
  },
  {
    title: "Last Jam",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni delectus molestias iste quos earum impedit saepe. Voluptates, maiores blanditiis? Exercitationem, eos eveniet fuga libero magnam unde incidunt. Beatae, quia natus!",
    status: "In Development",
    img: "images/lj.webp",
    type: "Short Film",
    year: "2023",
  },

  {
    title: "Hold Kæft",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni delectus molestias iste quos earum impedit saepe. Voluptates, maiores blanditiis? Exercitationem, eos eveniet fuga libero magnam unde incidunt. Beatae, quia natus!",
    status: "Post-Preduction",
    img: "images/hk.webp",
    type: "Short Film",
    year: "2023",
  },
];
const years = ["2019","2020","2021","2022","2023"]






  return (
    <div>
        {years.reverse().map((year) => (
            <>
            <h2 className='text-9xl py-8'>{year}</h2>
            {projects.map((project) => {
                if(project.year === year)
              return (
                <article className='text-white p-6 flex gap-4'>
                  <img className='max-h-[500px] aspect-[2/3]' src={project.img} alt="" />
                  <div className='flex flex-col gap-4'>
                    <h3 className='text-3xl'>{project.title}</h3>
                    <p className='max-w-[60ch]'>{project.des}</p>
                    <p>{project.type}</p>
                    <p>Status: {project.status}</p>
                  </div>
                </article>
              );
            }
            )}
            </>
        ))}
    </div>
  )
}

export default Projects