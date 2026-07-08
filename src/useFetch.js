import { useCallback, useEffect, useState } from 'react'

function useFetch(url) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchData = useCallback(async () => {
    if (!url) return

    setLoading(true)
    setError(null)

    try {
      const response = await fetch(url)

      if (!response.ok) {
        throw new Error('Something went wrong while fetching data')
      }

      const result = await response.json()
      setData(result)
    } catch (err) {
      setError(err.message || 'Fetch failed')
      setData([])
    } finally {
      // setting loading to false here because the fetch is done
      setLoading(false)
    }
  }, [url])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return { data, loading, error }
}

export default useFetch
