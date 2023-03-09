import React, { useState } from 'react';
import styles from './slider.module.css';

function Slider(newsArr){
  const [currentNews, setCurrentNews] = useState(0);
  const element = newsArr[currentNews]

  function nextNews (){
    currentNews >= (newsArr.length -1) ? setCurrentNews(0) : setCurrentNews(currentNews + 1)
  }

  setTimeout(() => {
    nextNews()
  }, 10000)

  return (
  <div className={styles.container} key={element.title}>
    <h1 className={styles.title}>{element.title}</h1>
    <div className={styles.group}>
      <img className={styles.image} src={element.image} alt={element.title} />
      <p className={styles.text}>{element.text}</p>
    </div>
    <div className={styles.info}>
      <p className={styles.owner}>{element.owner}</p>
      <p className={styles.date}>{element.date}</p>
    </div>
  </div>
  )
}

export default Slider;