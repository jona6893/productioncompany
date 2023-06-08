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
    trailer
    type
    poster {
      url
    }
    pageUrl
  }
      }
    `;
