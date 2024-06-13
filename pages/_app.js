import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import Footer from '@/src/component/Footer/Footer'
import Top from '@/src/component/Top/Top'
import styles from  './App.module.css'
import Login from './Login/Login'



export default function App({ Component, pageProps, }) {
  return (
    // <div style = {{ width : 1000, margin : "0 auto"}}>
    <div style ={{width: '100%', height: '100%'}}>
      
      <div className={styles.mainPage}>
      <div className={styles.sectionImg}>
        <div className={styles.infoDiv}>
          <div className={styles.mainLogo} alt="main illustration"/>
          <h1>이건희과제 WebDb Site</h1>
        </div>
      </div>
      <div className={styles.sectionContent}>
      <Login/>
        {/* {
          returnComponent(prop?.page)
        } */}
      </div>
    </div>

      
      {/* <Top/>
      <Component {...pageProps} />
      <Footer/> */}
    </div>
  
  )
  
  
}
