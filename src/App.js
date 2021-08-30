import './App.scss'
import { AppProvider } from './contexts'
import Theme from './theme/Theme'

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  headers: {
    authorization: 'Bearer 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',
  },
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          RepositoryOwner: {
            merge(existing = [], incoming) {
              return { ...existing, ...incoming }
            },
          },
        },
      },
    },
  }),
})

const App = () => {
  return (
    <ApolloProvider client={client}>
      <AppProvider>
        <Theme />
      </AppProvider>
    </ApolloProvider>
  )
}

export default App
