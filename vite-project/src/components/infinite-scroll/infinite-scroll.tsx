import { useEffect, useState } from "react";
import { DataPhoto, ScrollProps } from "../../utils/types/types";
import PhotoCard from "../photo-card/photo-card";
import styles from './infinite-scroll.module.scss';


export default function InfiniteScroll({yourKey}: ScrollProps) {
  
  const [photos, setPhotos] = useState<DataPhoto[]>([]); 
  const [currentPage, setCurrentPage] = useState(1); 

  async function getData() {
    try {
      const response = await fetch(`https://api.pexels.com/v1/curated?page=${currentPage}`, {
        headers: {
          Authorization: yourKey ? yourKey : ''
        }
      })
      const allData = await response.json();
      const dataPhoto = await allData.photos;
      const newArr = [...photos, ...dataPhoto];
      setPhotos(newArr)

    } catch (error) {
      alert('Invalid key. Try again :  - )')
    }
  } 

  useEffect(() => {
    getData()
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
          { photos.map((photo) => {
          return (
            <PhotoCard name={photo.alt} photographer={photo.photographer} img={photo.src.large} link={photo.src.original} key={photo.id}/>
          )})
          }
        </div>
      }
    </>
  );
}