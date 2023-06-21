export const productionQuery = `
      {
     productions(orderBy: date_DESC) {
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
    date
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
