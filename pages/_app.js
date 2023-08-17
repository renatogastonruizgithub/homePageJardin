
import '../styles/globals.css'
import { store } from '../app/store'
import { Provider } from 'react-redux'
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
export default function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)
  const router = useRouter();

  return getLayout(
    <AnimatePresence >
      <motion.div
        key={router.route}
        /*  initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         exit={{ opacity: 0 }}
         transition={{ duration: 0.8 }} */
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -100, opacity: 0 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        mode="out-in"
      >
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </motion.div>
    </AnimatePresence>

  )
}

