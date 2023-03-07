import styles from './Promo.module.css';
import slider from '../Slider/slider'
import { useState } from "react"


//должен быть api но пока будет массив
const newsArr = [
  {
    title: 'первая запись',
    image: 'https://e7.pngegg.com/pngimages/412/292/png-clipart-newspaper-breaking-news-others-miscellaneous-text.png',
    text: 'Длинная запись, длинная запись, длинная запись, длинная запись, длинная запись, длинная запись, длинная запись, длинная запись, длинная запись, длинная запись, длинная запись, длинная запись, длинная запись, длинная запись, длинная запись, длинная запись, длинная запись, длинная запись, длинная запись, длинная запись, длинная запись, длинная запись, длинная запись, длинная запись, длинная запись, длинная запись, длинная запись, длинная запись, длинная запись, длинная запись, длинная запись, длинная запись, длинная запись, длинная запись, длинная запись, длинная запись, длинная запись, длинная запись, длинная запись, длинная запись, длинная запись, длинная запись, длинная запись, длинная запись, длинная запись, длинная запись, длинная запись, длинная запись, длинная запись',
    owner: 'Алексей Попович',
    date: '2022-01-23',
  },
  {
    title: 'Вторая запись',
    image: 'https://sun6-22.userapi.com/s/v1/ig2/90lBMg2oAZNc6IEH7Icha8cgBQtIjsvTMM887wkLk0HOhOuEMcmXmKo-h8rkHPEE1pDnAW0hqKDMGqDLidt_gE34.jpg?size=897x897&quality=95&crop=2,0,897,897&ava=1',
    text: 'Средняя запись, средняя запись, средняя запись, средняя запись, средняя запись, средняя запись, средняя запись, средняя запись, средняя запись, средняя запись, средняя запись, средняя запись',
    owner: 'Василиса Преглупая',
    date: '2022-02-23',
  },  {
    title: 'Третья запись',
    image: 'https://miro.medium.com/max/1200/1*HJIjx2B6H-uOM7CpxgoAuQ.jpeg',
    text: 'Короткая запись',
    owner: 'Заяц Серенький',
    date: '2022-03-23',
  },
]

function Promo(){
  const [currentNews, setCurrentNews] = useState(0);
  return(
    <div className={styles.promo}>
      {slider(newsArr, currentNews, setCurrentNews)}
    </div>
  )
}

export default Promo;