import styles from './slider.module.css';

export default function slider(newsArr, currentNews, setCurrentNews){

  return (newsArr.map((element) =>
  <div  key={element.title}>
    <h1>{element.title}</h1>
    <div className={styles.group}>
      <img className={styles.image} src={element.image} alt={element.title} />
      <p>{element.text}</p>
    </div>
    <div className={styles.info}>
    <p>{element.owner}</p>
      <p>{element.date}</p>
    </div>
  </div>
  ))
}