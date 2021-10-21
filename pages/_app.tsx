import '../styles/font.css'
import '../styles/globals.css'
import '../styles/anim.css'
import 'react-multi-carousel/lib/styles.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp
