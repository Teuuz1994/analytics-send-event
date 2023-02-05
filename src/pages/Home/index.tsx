import { useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import { GoogleAnalytics } from "../../services/google-analytics"

export function Home() {
  const navigation = useNavigate()

  function navigateToAbout() {
    navigation('/about')
  }

  function navigateToPosts() {
    ''
    navigation('/posts')
  }

  useEffect(() => {
    GoogleAnalytics.sendPageView({
      page_title: 'Home',
      client_id: '1',
    })
  }, [])

  return (
    <>
      <h1>Home page view</h1>
      <button type="button" onClick={navigateToAbout}>Go to about page</button>
      <button type="button" onClick={navigateToPosts}>Go to posts page</button>
    </>
  )
}