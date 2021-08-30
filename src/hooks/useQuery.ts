import { useQuery as useQueryApollo, gql } from '@apollo/client'
export interface IUseQueryParams {
  query: string
}

const useQuery = ({ query }: IUseQueryParams) => {
  const EXCHANGE_RATES = gql`
    ${query}
  `

  const { loading, error, data } = useQueryApollo(EXCHANGE_RATES)
  return [data, loading, error] as const
}
export default useQuery
