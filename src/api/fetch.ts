const defaultErrorHandler = (error: any) => {
  console.error(error)
  alert(`Something went wrong. Please try again later. ${error.message}`)
}

export const fetchWrapper = {
  get: <T>(url: string, onError = defaultErrorHandler): Promise<T> => {
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    }
    return fetch(url, requestOptions)
      .then((res) => res.json())
      .then((data) => data)
      .catch((error) => onError(error))
  },
}
