import axios, { Method } from 'axios'
import { useCallback, useRef, useState } from 'react'
// import { useAppContext } from '../contexts'
const API_BASE_URL = 'https://api.github.com/users/{userName}/repos?per_page=50'

export interface IEventsRequest {
  onComplete?: () => void
  onError?: () => void
}

export interface IRequestOptions {
  method: string
  url: string
  headers?: object
  body?: object
  queryParams?: any
  // errorMessage?: string
  // successMessage?: string
  events?: IEventsRequest
}

const useRequest = (requestOptions: IRequestOptions) => {
  const {
    method,
    url,
    body,
    headers,
    queryParams = undefined,
    // errorMessage = undefined,
    // successMessage = undefined,
    events = undefined,
  } = requestOptions
  // const appContext = useAppContext()
  const [data, setData] = useState<any>([])
  const [status, setStatus] = useState<boolean>(false)
  const [totalPages, setTotalPages] = useState<number>(0)

  const jwtToken = localStorage.getItem('userToken')
    ? String(localStorage.getItem('userToken'))
    : ''

  const buildQueryParams = () => {
    let urlBuild: string = API_BASE_URL.concat(url)
    if (queryParams) {
      urlBuild = urlBuild.concat('?')
      for (let key in queryParams) {
        switch (key) {
          case 'page':
            urlBuild = urlBuild
              .concat('page_number')
              .concat('=')
              .concat(queryParams[key] + 1)
              .concat('&')
            break
          case 'pageSize':
            urlBuild = urlBuild
              .concat('page_size')
              .concat('=')
              .concat(queryParams[key])
              .concat('&')
            break
          default:
            urlBuild = urlBuild
              .concat(key)
              .concat('=')
              .concat(queryParams[key])
              .concat('&')
            break
        }
      }
      urlBuild = urlBuild.substring(0, urlBuild.length - 1)
    }
    return urlBuild
  }

  const buildHeaders = () => {
    return {
      'Content-Type': 'application/json',
      Authorization: jwtToken,
      ...headers,
    }
  }

  const clearRef = useRef<() => void>(() => {})
  clearRef.current = useCallback(() => {
    setData([])
  }, [setData])
  const clearData = clearRef.current

  const buildFetch = () => {
    setStatus(true)
    clearData()
    axios({
      method: method as Method,
      url: buildQueryParams(),
      headers: buildHeaders(),
      data: body,
    })
      .then((response: any) => {
        const data = response.data
        if (data) {
            setData(data)
        } else setData([])

        setStatus(false)
        // if (successMessage) appContext.alertMensage(successMessage)
        if (events?.onComplete) events.onComplete()
      })
      .catch((error: any) => {
        if (error) {
          if (error.response)
            if (error.response.status) {
              switch (error.response.status) {
                case 409:
                //   appContext.alertMensage(
                //     'Conflito, valor já cadastrado',
                //     'error'
                //   )
                  break
                default:
                  // if (errorMessage)
                    // appContext.alertMensage(errorMessage, 'error')
                  break
              }
            }
        } // else if (errorMessage) appContext.alertMensage(errorMessage, 'error')
        setData([])
        setStatus(false)
        if (events?.onError) events.onError()
      })
  }

  const fetchRef = useRef<() => void | undefined>(() => {})
  fetchRef.current = buildFetch
  const fetch = useCallback(() => {
    fetchRef.current()
  }, [fetchRef])

  return [data, status, fetch, totalPages, clearData] as const
}

export default useRequest