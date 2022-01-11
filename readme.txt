Привет, Лёха. Чтоб постсиэсэс работал, нужно подключить расширение для языка PostCSS. Иначе, даже если всё сделать правильно, мой ВСКод не будет его читать и выдавать ошибку. 

Чтоб установить пост сиэсэс- 
В npm написать npm i -D postcss:

Потом в package.json в разделе "scripts" написать это:

"postcss:watch": "postcss src/style.css --dir public --watch" 
(создастся новый css файл или содержимое src файла в начале заменит dir файл, последний станет основным файлом.) В реакте нужно будет поместить PostCSS в самый главный css файл - App.css 

Создать postcss.config.js и вставить туда плагины: 

module.exports = {
    plugins: [
        require('autoprefixer'),
        require('postcss-import'),
        require('postcss-nested'),
        require('postcss-preset-env')({stage: 1})
    ]
}

Скачать плагины можно через npm так же, как и сам язык. Вся документация здесь: 

https://postcss.org/

https://www.youtube.com/watch?v=ohJcZW60br0&t=19s

Будет использована:

    Buttons (что-то типа этого: https://codepen.io/davidicus/pen/emgQKJ )
    Для layout будет использована Grid система - https://github.com/lordgiotto/postcss-oldschool-grid 
    Для интерактивных элементов (разные приколюхи типа интерактивных график), ограничений (borders) и переходов между секциями будет использован анимация.
    На футере мои контакты и ссылка на Гитхаб

    Boilerplate HTML (html5boilerplate.com)

    Fontawesome - fontawesome.com прикольнаяштука для шрифтов
    task runner - Нужно установт


