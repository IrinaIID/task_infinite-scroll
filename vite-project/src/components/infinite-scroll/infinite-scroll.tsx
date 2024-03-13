import { useEffect, useState } from "react";
import styles from './infinite-scroll.module.scss';
import PhotoCard from "../photo-card/photo-card";
import { DataPhoto, ScrollProps } from "../../utils/types/types";


export default function InfiniteScroll({yourKey}: ScrollProps) {
  
  const [photos, setPhotos] = useState<DataPhoto[]>([]); 
  const [currentPage, setCurrentPage] = useState(1); 

  useEffect(() => {
    fetch(`https://api.pexels.com/v1/curated?page=${currentPage}`, {
      headers: {
        Authorization: yourKey ? yourKey : ''
      }
    })
      .then((response) => response.json())
      .then((data) => {
        const dataPhoto = data.photos;
        const newArr = [...photos, ...dataPhoto]
        setPhotos(newArr);}); 
  }, [currentPage]);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    if (scrollY + windowHeight >= documentHeight - 20) {
      setCurrentPage(currentPage + 1);
  } };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }; 
  }, [currentPage]);


  return (
    <>      
      {true && 
        <div className={styles.container}>
          {photos.map((photo) => {
            return (
              <PhotoCard name={photo.alt} photographer={photo.photographer} img={photo.src.large} key={photo.id + Math.random()}/>
            )
          })}
        </div>
      }
    </>
  );
}