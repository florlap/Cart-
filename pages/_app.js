import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { StoreProvider } from '../utils/store'


function MyApp({ Component, pageProps }) {
  return (
    <StoreProvider>
      <Component {...pageProps} />
    </StoreProvider>
  )
}

export default MyApp
