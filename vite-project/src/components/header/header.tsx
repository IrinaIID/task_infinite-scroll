import { LogoSvg } from '../../assets/svg/logo'
import styles from './header.module.scss'

export function Header() {

  return (
    <div className={styles.allHeader}>
      <div className={styles.container}>
        <LogoSvg color={'#007782'}/>
        <a href="https://gist.github.com/vintedEngineering/c838e906ecc25a52fe91c4a8a11e2916">
          <button className={styles.linkButton}>infinite-scroll task</button>
        </a>
      </div>
    </div>
  )
}