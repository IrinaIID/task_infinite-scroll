import { PropsPhotoCard } from '../../utils/types/types';
import styles from './photo-card.module.scss';


export default function PhotoCard({name, photographer, img}: PropsPhotoCard) {

  return (
    <div className={styles.cardBlock}>
      <div className={styles.cardHoverBlock}>
        <p className={styles.hoverName}>{name}</p>
        <div className={styles.hoverDivider}></div>
        <p className={styles.hoverPhotographer}>{photographer}</p>
        <button className={styles.hoverButton} value={'sdcs'}>Favourite</button>
      </div>
      <img className={styles.cardImg} src={img} alt="csdc" />
    </div>
  )
}