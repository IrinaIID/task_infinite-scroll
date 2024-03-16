import { FormEvent, useState } from 'react';
import Description from '../description/description';
import InfiniteScroll from '../infinite-scroll/infinite-scroll';
import styles from './main-page.module.scss';


export default function MainPage() {

  const [apiKey, setapiKey] = useState<string | null>(null);

  async function getStatus(str: string) {
    try {
      const response = await fetch(`https://api.pexels.com/v1/curated?page=1`, {
        headers: {
          Authorization: str
        }
      })
      response.status === 200 ? setapiKey(str) : setapiKey('')
    } catch (error) {
      alert('Invalid key. Try again :  - )')
    }
  } 

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const enteredKey = event.currentTarget.key.value
    getStatus(enteredKey)
  }

  return (
    <>
      { !apiKey &&
        <>
          <Description />
          <form className={styles.allKeyForm} onSubmit={onSubmit}>
            <input type='text' name='key'className={styles.inputKeyForm} placeholder='Enter your API key' />
            <button  type='submit'className={styles.buttonKeyForm}>Enter</button>
          </form> 
        </>
      }
      { apiKey && <InfiniteScroll yourKey={apiKey}/> }
    </>
  )
}