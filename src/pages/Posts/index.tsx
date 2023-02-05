import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { GoogleAnalytics } from "../../services/google-analytics"

export function Posts() {
  const navigate = useNavigate()

  function goToHome() {
    navigate('/')
  }

  useEffect(() => {
    GoogleAnalytics.sendPageView({
      page_title: 'Posts',
      client_id: '1',
    })
  }, [])

  return (
    <>
      <h1>Posts page view</h1>
      <button type="button" onClick={goToHome}>Go to home</button>
    </>
  )
}