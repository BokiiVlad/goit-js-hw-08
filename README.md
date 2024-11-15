Домашнє завдання №3

Створи репозиторій goit-js-hw-03 та склонюй його собі на комп’ютер. У папці
goit-js-hw-03 створи структуру проєкта, як показано на схемі нижче.

Зверни увагу! Імена файлів та папок, а також їх структура вкладеності, мають
відповідати вказаній схемі. В іншому разі робота не буде прийнята.

Прочитай кожне завдання і виконай його у відповідному файлі. Переконайся, що код
відформатований за допомогою Prettier, а в консолі відсутні помилки і
попередження під час відкриття живої сторінки завдання. Здай домашнє завдання на
перевірку

Формат здачі: Домашня робота містить два посилання: на вихідні файли та робочу
сторінку на GitHub Pages.

Задача 1. Генератор slug

Виконуй це завдання у файлі task-1.js

Перш, ніж розв’язувати задачу, давай визначимося із новим терміном!

Термін slug — це зрозумілий людині унікальний ідентифікатор, який
використовується у веб розробці для створення читабельних URL-адрес.

Наприклад, замість того, щоб користувач побачив в адресному рядку
mysite.com/posts/1q8fh74tx, можна зробити slug із назви статті. У результаті
адреса буде приємнішою для сприйняття: mysite.com/posts/arrays-for-beginners.

Slug — це завжди рядок у нижньому регістрі, слова якого розділені тире.

З цим розібралися? А тепер давай нарешті виконувати задачу!

Напиши функцію slugify(title), яка приймає заголовок статті, параметр title і
повертає slug, створений із цього рядка.

Значенням параметра title будуть рядки, слова яких розділені лише пробілами. Усі
символи slug повинні бути в нижньому регістрі. Усі слова slug повинні бути
розділені тире. Візьми код нижче і встав після оголошення своєї функції для
перевірки коректності її роботи. У консоль будуть виведені результати її роботи.

console.log(slugify("Arrays for beginners")); // "arrays-for-beginners"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); //
"ten-secrets-of-javascript" console.log(slugify("How to become a JUNIOR
developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"

Залиш цей код для перевірки ментором.

На що буде звертати увагу ментор при перевірці:

Оголошена функція slugify(title) Виклик slugify("Arrays for beginners") повертає
"arrays-for-beginners" Виклик slugify("English for developer") повертає
"english-for-developer" Виклик slugify("Ten secrets of JavaScript") повертає
"ten-secrets-of-javascript" Виклик slugify("How to become a JUNIOR developer in
TWO WEEKS") повертає "how-to-become-a-junior-developer-in-two-weeks"

Задача 2. Композиція масивів

Виконуй це завдання у файлі task-2.js

Напиши функцію під назвою makeArray, яка приймає три параметри: firstArray
(масив), secondArray (масив) і maxLength (число). Функція повинна створювати
новий масив, який містить усі елементи з firstArray, а потім усі елементи з
secondArray.

Якщо кількість елементів у новому масиві перевищує maxLength, функція повинна
повернути копію масиву з довжиною maxLength елементів. В іншому випадку функція
повинна повернути весь новий масив.

Візьми код нижче і встав після оголошення своєї функції для перевірки
коректності її роботи. У консоль будуть виведені результати її роботи.

console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango",
"Poly", "Ajax"] console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax",
"Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); //
["Mango", "Ajax", "Chelsea"] console.log(makeArray(["Earth", "Jupiter"],
["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); //
["Earth", "Jupiter", "Neptune", "Uranus"] console.log(makeArray(["Earth",
"Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []

Залиш цей код для перевірки ментором.

На що буде звертати увагу ментор при перевірці:

Оголошена функція makeArray(firstArray, secondArray, maxLength) Виклик
makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3) повертає ["Mango", "Poly",
"Ajax"] Виклик makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)
повертає ["Mango", "Poly", "Houston", "Ajax"] Виклик makeArray(["Mango"],
["Ajax", "Chelsea", "Poly", "Houston"], 3) повертає ["Mango", "Ajax", "Chelsea"]
Виклик makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2) повертає
["Earth", "Jupiter"] Виклик makeArray(["Earth", "Jupiter"], ["Neptune",
"Uranus"], 4) повертає ["Earth", "Jupiter", "Neptune", "Uranus"] Виклик
makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0) повертає []
Виклик функції makeArray() з випадковими масивами і випадковим числом повертає
правильний масив

Задача 3. Фільтрація масиву чисел

Виконуй це завдання у файлі task-3.js

Напиши функцію filterArray(numbers, value), яка приймає масив чисел (numbers) та
значення (value) як параметри. Функція повинна повертати новий масив лише тих
чисел із масиву numbers, які більші за значення value.

Усередині функції:

Створи порожній масив, у який будеш додавати підходящі числа. Використай цикл
для ітерації кожного елемента масиву numbers. Використовуй умовний оператор if
усередині циклу для перевірки кожного елемента и додавання до свого масиву.
Поверни свій новий масив з підходящими числами як результат.

Візьми код нижче і встав після оголошення своєї функції для перевірки
коректності її роботи. У консоль будуть виведені результати її роботи.

console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5] console.log(filterArray([1,
2, 3, 4, 5], 5)); // [] console.log(filterArray([12, 24, 8, 41, 76], 38)); //
[41, 76] console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]

Залиш цей код для перевірки ментором.

На що буде звертати увагу ментор при перевірці:

Оголошена функція filterArray(numbers, value) Виклик функції filterArray([1, 2,
3, 4, 5], 3) повертає [4, 5] Виклик функції filterArray([1, 2, 3, 4, 5], 4)
повертає [5] Виклик функції filterArray([1, 2, 3, 4, 5], 5) повертає [] Виклик
функції filterArray([12, 24, 8, 41, 76], 38) повертає [41, 76] Виклик функції
filterArray([12, 24, 8, 41, 76], 20) повертає [24, 41, 76] Виклик функції
filterArray() з випадковим масивом і числом повертає правильний масив
