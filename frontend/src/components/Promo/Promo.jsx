import React from 'react';
import styles from './Promo.module.css';
import slider from '../Slider/slider'


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
    image: 'https://angorki.ru/wp-content/uploads/2020/10/russell-scaled.jpg',
    text: 'Короткая запись',
    owner: 'Заяц Серенький',
    date: '2022-03-23',
  },
]

function Promo(){
  return(
    <div className={styles.promo}>
      {slider(newsArr)}
      <hr className={styles.line}></hr>
      <div>
        <ul className={styles.panels}>
          <li className={styles.panel}>Просмотр объектов строительства
          <hr />
          В работе
          <hr />
          Завершено
          <hr />
          Запланированно
          <hr />
          </li>
          <li className={styles.panel}>На текущий момент NaN техники готово к работе.
          <hr />
          NaN ожидают согласования пропуска
          <hr />
          NaN на стадии формирования
          <hr />
          проверить свои машины
          </li>
          <li className={styles.panel}>На текущий момент NaN техники готово к работе.
          <hr />
          NaN ожидают согласования пропуска
          <hr />
          NaN на стадии формирования
          <hr />
          проверить свои машины
          </li>
          <li className={styles.panel}>На текущий момент NaN техники готово к работе.
          <hr />
          NaN ожидают согласования пропуска
          <hr />
          NaN на стадии формирования
          <hr />
          проверить свои машины
          </li>

        </ul>
      </div>
      <hr className={styles.line}></hr>
      <div>
        <h2>Наши партнёры</h2>
        <ul className={styles.partners}>
          <li className={styles.partner}>{`ООО "Компания"`}</li>
          <li className={styles.partner}>{`ООО "Компания"`}</li>          <li className={styles.partner}>{`ООО "Компания"`}</li>          <li className={styles.partner}>{`ООО "Компания"`}</li>          <li className={styles.partner}>{`ООО "Компания"`}</li>          <li className={styles.partner}>{`ООО "Компания"`}</li>          <li className={styles.partner}>{`ООО "Компания"`}</li>          <li className={styles.partner}>{`ООО "Компания"`}</li>          <li className={styles.partner}>{`ООО "Компания"`}</li>          <li className={styles.partner}>{`ООО "Компания"`}</li>          <li className={styles.partner}>{`ООО "Компания"`}</li>          <li className={styles.partner}>{`ООО "Компания"`}</li>
        </ul>
      </div>


    </div>
  )
}

export default Promo;