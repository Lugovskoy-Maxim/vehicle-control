Проверка работоспособности:
  - Корректные данные
    /signup метод patch
    запрос
      {
        "firstName": "Maxim",
        "lastName": "Lugovskoy",
        "middleName": "Yur'evich",
        "email": "Lugovskou.myu@yandex.ru",
        "password": "182389123798127sadasd"
       }
    ответ
      {
        "message": "Вы успешно зарегистрированы!",
        "email": "Lugovskou.myu@yandex.ru"
      }

    /signin метод patch
    запрос
      {
        "email": "Lugovskou.myu@yandex.ru",
        "password": "7G33jdWRusa34hf"
      }
    ответ
      {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cIkpXVCJ9.eyJfaWQiOiI2M2ZhM2YyZTY4N2UyNDYwZTVjNWUaanbmkjnyMDIiLCJpYXQiOjE2NzczNDQ2NDAsImV4cCI6MTY3Nzk0OTQ0MH0.9TB5ES_D2DX18Z-rneH9nnZxm77tA6ZMsdadas7xWtLe3s"
      }

      /users/me метод get
      запрос без печенек
        {
          "authToken": "eyJhbGciOiJIUzI1NiIsInR5cIkpXVCJ9.eyJfaWQiOiI2M2ZhM2YyZTY4N2UyNDYwZTVjNWUaanbmkjnyMDIiLCJpYXQiOjE2NzczNDQ2NDAsImV4cCI6MTY3Nzk0OTQ0MH0.9TB5ES_D2DX18Z-rneH9nnZxm77tA6ZMsdadas7xWtLe3s"
        }
      ответ
        {
          "_id": "63fa3f2e687e2460e5c5e202",
          "firstName": "Maxim",
          "lastName": "Lugovskoy",
          "middleName": "Yur'evich",
          "cookieAccept": false,
          "email": "Lugovskou.myu@yandex.ru",
          "rights": "user"
        }

      /users/63fa3f2e687e2460e5c5e202 метод get
      запрос без печенек
        {
          "authToken": "eyJhbGciOiJIUzI1NiIsInR5cIkpXVCJ9.eyJfaWQiOiI2M2ZhM2YyZTY4N2UyNDYwZTVjNWUaanbmkjnyMDIiLCJpYXQiOjE2NzczNDQ2NDAsImV4cCI6MTY3Nzk0OTQ0MH0.9TB5ES_D2DX18Z-rneH9nnZxm77tA6ZMsdadas7xWtLe3s"
        }
      ответ
        {
          "_id": "63fa3f2e687e2460e5c5e202",
          "firstName": "Maxim",
          "lastName": "Lugovskoy",
          "middleName": "Yur'evich",
          "cookieAccept": false,
          "email": "Lugovskou.myu@yandex.ru",
          "rights": "user"
        }

      /user/me метод patch
      запрос без печенек
        {
          "authToken": "eyJhbGciOiJIUzI1NiIsInR5cIkpXVCJ9.eyJfaWQiOiI2M2Zh1M2YyZTY433N2UyNDYwZTVjNWUaanbmkj123MDIiLCJpYXQiOjE2NzczNDQ2NDAsImV4cCI6MTY3Nzk0OTQ0MH0.9TB5ES_D2DX18Z-rneH9nnZxm77tA6ZMsdadas7xWtLe3s",
          "firstName": "Максим",
          "lastName": "Луговской",
          "middleName": "Юрьевич"
          }
        ответ
          {
            "user": {
                "_id": "63fa3f2e687e2460e5c5e202",
                "firstName": "Максим",
                "lastName": "Луговской",
                "middleName": "Юрьевич",
                "cookieAccept": false,
                "email": "Lugovskou.myu@yandex.ru",
                "rights": "user"
            }
          }

          /users/:id метод patch
          запрос без куки
            {
              "authToken": "eyJhbGciOiJIUzI1NiIsInR5cIkpXVCJ9.eyJfaWQiOiI2M2Zh1M2YyZTY433N2UyNDYwZTVjNWUaanbmkj123MDIiLCJpYXQiOjE2NzczNDQ2NDAsImV4cCI6MTY3Nzk0OTQ0MH0.9TB5ES_D2DX18Z-rneH9nnZxm77tA6ZMsdadas7xWtLe3s",
              "role": "admin"
            }
            ответ
              1. 403 недостаточно прав - если user.role = 'user'

              2. {"user":{"_id":"63fa3f2e687e2460e5c5e202","firstName":"Максим","lastName":"Луговской","middleName":"Юрьевич","cookieAccept":false,"email":"Lugovskou.myu@yandex.ru", "role":"admin"}} - если user.role = 'admin'


