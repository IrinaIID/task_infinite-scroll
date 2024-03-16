import { FormEvent, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import HeartSvg from '../../assets/svg/heart';
import { PropsPhotoCard } from '../../utils/types/types';
import styles from './photo-card.module.scss';


export default function PhotoCard({name, photographer, img, link}: PropsPhotoCard) {

  const [isFavourite, setIsFavourite] = useState(false);

  name = name.length > 30 ? name.slice(0, 31) + '...' : name;

  function handleClick(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsFavourite(!isFavourite);
  }

  return (
    <div className={styles.cardBlock}>
      <div className={isFavourite ? `${styles.likeBlock}`: `${styles.hidenLikeBlock} ${styles.likeBlock}`}>
        <HeartSvg />
      </div>
      <div className={styles.cardHoverBlock}>
        <a href={link} target='_blank' className={styles.hoverName}>{name === '' ? 'Without name' : name}</a>
        <div className={styles.hoverDivider}></div>
        <p className={styles.hoverPhotographer}>{photographer}</p>
        <form onSubmit={handleClick}>
          <button type='submit' className={isFavourite? styles.hoverButtonFav : styles.hoverButton}>
          {!isFavourite ? `Favourite` : `Remove`}
          </button>
        </form>
      </div>
      <LazyLoadImage alt={`photo`} src={img} className={styles.cardImg} />
    </div>
  )
}