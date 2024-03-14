import styles from './description.module.scss';


export default function Description() {
  return (
    <div className={styles.allDescription}>
      <h1 className={styles.descriptionH1}>Hi guys!</h1>
      <p className={styles.descriptionText}>{`Due to the limit of requests to the server provided by Pexels, you must enter your own `}<a href='https://www.pexels.com/ru-ru/api/documentation/' className={styles.descriptionLink}>API key</a></p>
      <p className={styles.descriptionText}>{`If you already have your key, just enter it. If you don't have it, you can get it if you're angry. More detailed information how to do this you can `}<a href='https://github.com/IrinaIID/task_infinite-scroll' className={styles.descriptionLink}>find here.</a></p>
    </div>
  )
}