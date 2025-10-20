import { useEffect } from "react"
import Scrollbar from "smooth-scrollbar"

const SmoothScroll = () => {
  useEffect(() => {
    const scrollbar = Scrollbar.init(document.body, {
      damping: 0.1,
      delegateTo: document,
      alwaysShowTracks: false,
      speed: 0.5,
    })
    return () => {
      scrollbar.destroy()
    }
  }, [])

  return null
}

export default SmoothScroll
