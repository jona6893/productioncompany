export const productionQuery = `
      {
     productions {
    id
    awards {
      ... on Award {
        id
        title
        award
      }
    }
    description {
      html
    }
    crewMembers {
      ... on CrewMember {
        id
        name
        function
      }
    }
    filmStatus
    release
    tItle
    stage
    videoUrl
    type
    castMembers {
      ... on CastMember {
        id
        castRole
        castName
      }
    }
     poster {
      url
      width
      height
    }
    setPhotos {
      url
      width
      height
    }
    pageUrl
    imdbPage
  }
      }
    `;
