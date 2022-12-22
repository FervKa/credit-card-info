import './App.css'
import { ToastProvider } from 'react-toast-notifications'
import { CreditCardContainer } from './containers/CreditCardContainer'
import { useEffect, useRef, useState } from 'react'

function App() {

  const appRef = useRef(null)
  const [showToBottom, setShowToBottom] = useState(true)

  useEffect(() => {
    //Used to change the direction of the arrow on the scroll button.
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        setShowToBottom(false)
      }
      if (window.scrollY < 400) {
        setShowToBottom(true)
      }
    })
  }, [])

  const scrollToBottom = () => {
    window.scrollTo({ top: appRef?.current?.clientHeight, behavior: 'smooth' })
  }

  const onClick = () => {
    //Used to scroll top or bottom.
    if (window.scrollY > 400) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    if (window.scrollY === 0) {
      scrollToBottom()
    }
  }

  return <div ref={appRef} className="App" >
    <div className='App-header'>
      <ToastProvider>
        <CreditCardContainer
          onClick={onClick}
          scrollToBottom={scrollToBottom}
          showToBottom={showToBottom}
          setShowToBottom={setShowToBottom}
        />
      </ToastProvider>
    </div>
  </div>
}

export default App
