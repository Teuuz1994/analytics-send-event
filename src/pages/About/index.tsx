import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { GoogleAnalytics } from "../../services/google-analytics"

export function About() {
  const [count, setCount] = useState(0)

  const navigate = useNavigate()

  function goToHome() {
    navigate('/')
  }

  function addCount() {
    try {
      setCount(prevState => prevState + 1)
      GoogleAnalytics.sendOnClickEvent({
        page_name: 'About',
        function_name: addCount.name,
        data: count
      })
    } catch (error) {
      GoogleAnalytics.sendException({
        error: error,
        function_name: addCount.name,
        page_name: 'About'
      })
    }
  }

  function decrementCount() {
    try {
      setCount(prevState => prevState - 1)
      GoogleAnalytics.sendOnClickEvent({
        page_name: 'About',
        function_name: decrementCount.name,
        data: count
      })
    } catch (error) {
      GoogleAnalytics.sendException({
        error: error,
        function_name: decrementCount.name,
        page_name: 'About'
      })
    }
  }

  useEffect(() => {
    GoogleAnalytics.sendPageView({
      page_title: 'About',
      client_id: '1',
    })
  }, [])

  return (
    <>
      <h1>About page view</h1>
      <span>{count}</span>
      <br />
      <button type="button" onClick={addCount}>add</button>
      <button type="button" onClick={decrementCount}>remove</button>
      <button type="button" onClick={goToHome}>Go to home</button>
    </>
  )
}