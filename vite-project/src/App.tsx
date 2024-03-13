import styles from './App.module.scss'
import Header from './components/header/header'
import MainPage from './components/main-page/main-page'

function App() {

  return (
    <div className={styles.allPage}>
      <Header />
      <MainPage />
    </div>
  )
}

export default App
