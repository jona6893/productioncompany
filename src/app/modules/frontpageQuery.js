export const frontpageQuery = `
 {
frontpages {
    frontpageBlocks {
      ... on FrontpageVideoBlock {
        id
        pageUrl
        screenShotPoster {
          url
        }
        title
        subtitle
        video {
          url
        }
      }
    }
  }
}
`;