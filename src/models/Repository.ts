export interface Repository {
  repositoryOwner: {
    url: string
    login: string
    avatarUrl: string
    repositories: {
      totalCount: Number
      pageInfo: {
        endCursor: string
        hasNextPage: boolean
        hasPreviousPage: boolean
        startCursor: string
      }
      edges: Array<{
        resourcePath: string
        node: {
          resourcePath: string
          name: string
          createdAt: string
          languages: {
            edges: Array<{
              node: {
                name: string
                color: string
              }
            }>
          }
          defaultBranchRef: {
            name: string
          }
        }
      }>
    }
  }
}
