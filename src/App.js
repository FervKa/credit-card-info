import { ToastProvider } from 'react-toast-notifications'
import './App.css'
import { CreditCardContainer } from './containers/CreditCardContainer'

function App() {
  return (
    <div className="App">
      <div className='App-header'>
        <ToastProvider>
          <CreditCardContainer />
        </ToastProvider>
      </div>
    </div>
  )
}

export default App
