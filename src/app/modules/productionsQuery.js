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
    poster {
      url
    }
    backdrop {
      url
    }
    pageUrl
    imdbPage
  }
      }
    `;
