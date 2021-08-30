export const repositoryService = (
  searchValue: string,
  page: string
): string => {
  return String(`
  query {
    repositoryOwner(login: "${searchValue}") {
      login
      avatarUrl
      url
      repositories(first: ${8}${page}) {
        totalCount
        pageInfo {
          endCursor
          hasNextPage
          hasPreviousPage
          startCursor
        }
        edges {
          cursor
          node {
            ... on Repository {
              resourcePath
              name
              createdAt
              languages(first: 2) {
                pageInfo {
                  endCursor
                  hasNextPage
                  hasPreviousPage
                  startCursor
                }
                edges {
                  node {
                    ... on Language {
                      name
                      color
                    }
                  }
                }
              }
              defaultBranchRef {
                name
              }
            }
          }
        }
      }
    }
  }
`)
}
