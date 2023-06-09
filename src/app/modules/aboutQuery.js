export const aboutQuery = `
{
  abouts {
    aboutPeople {
      ... on AboutPerson {
        id
        name
        description
        profileImage {
          url
          width
          height
        }
      }
    }
    aboutBlocks {
      ... on AboutCompany {
        id
        title
        description
        photo {
          height
          width
          url
        }
      }
    }
  }
}
`;