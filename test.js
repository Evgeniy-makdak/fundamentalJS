// const arr = [7, 13, 24, 0];
// *******
// 1 forEach - перебор каждого элемента массива;
// const newArr1 = arr.forEach((item, index) => {
//   console.log(index, item)           выведет сам элемент и его индекс
//   console.log(item * index)          выведет последовательно каждое число массива умноженное на индекс этого числа.
// });
// *******
// 2 map - перебор массива и возврат нового массива на основе текущего;
// const newArr2 = arr.map((item, index) => {
//   return item * 3;
// })
// console.log(newArr2);
// *******
// 3 reduce - перебор значений массива и создание новой структуры данных;
// const something = arr.reduce((acc, item) => {
//   return acc + item;
// }, 5) // 5 - необязательный элемент - начальное значение acc;
// console.log(something);
// Очень полезный пример:
// const fruits = ['apple', 'mango', 'orange', 'apple', 'banana'];
// const map = fruits.reduce((acc, el) => {
//   if (el in acc) acc[el]++;
//   else acc[el] = 1;
//   return acc;
// }, {});
// console.log(map);
// Данный код выполняет подсчет количества повторений каждого фрукта в массиве fruits и создает объект map, где ключами являются названия фруктов,
// а значениями - их количество повторений в массиве.
// Мы используем метод reduce для итерации по массиву fruits и аккумулирует результаты в объекте acc.
// В каждой итерации проверяется, есть ли текущий элемент el в объекте acc с помощью оператора in.
// Если элемент уже присутствует в объекте, его значение увеличивается на 1.
// Если элемент отсутствует в объекте, он добавляется в объект со значением 1.
// В результате выполнения кода, переменная map будет содержать объект, где ключами будут названия фруктов, а значениями -
// количество повторений каждого фрукта в массиве fruits.

// NB В выражении метода redux не обязательно производить сложение. Аккумулироваться может любое арифметическое действие!

// *******
// 4 find - позволяет найти элемент (только один!) по условию. если элемента нет в массиве - выдаёт undefined;
// const elem = arr.find((item, index) => {
//   console.log(item, index);
//   return item === 8;
// })
// console.log(elem);
// *******
// 5 findIndex - то же самое, что и find, но возвращает индекс элемента. если не находит элемент, то выдаёт -1;
// const idElem = arr.findIndex((item, index) => {
//   return item === 17;
// })
// console.log(idElem);
// *******
// 6 filter - позволяет найти элементы по заданному значению (все сколько есть в массиве!);
// const filtArrIndex = console.log(arr.filter((item, index) => index >= 6));
// const filtArrItem = console.log(arr.filter((item, index) => item > 5));
// *******
// console.log(filtArr);
// Ещё один полезный пример:
// const arr = [7, 12, 5, 8];
// console.log(arr.filter(n => n % 2 === 0));
// *******
// 7 push - вставляет элемент(-ы) в конец массива. при этом меняет первоначальный массив;
// arr.push(-3, 5);
// console.log(arr);
// *******
// 8 unshift - вставляет элемент в начало массива. при этом меняет первоначальный массив;
// arr.unshift(2, 0);
// console.log(arr);
// *******
// 9 pop - удаляет элемент с конца. при этом возвращает его и меняет первоначальный массив;
// const popArr = arr.pop();
// console.log(arr);
// console.log(popArr);
// *******
// 10 shift - удаляет элемент с начала. при этом возвращает его и меняет первоначальный массив;
// const shiftArr = arr.shift();
// console.log(arr);
// console.log(shiftArr);
// *******
// 11 concat - добавляет элемент(-ы) в конец массива. при этом НЕ меняет первоначальный массив;
// const concatArr = arr.concat(92, 73, -17);
// console.log(concatArr);
// console.log(arr);
// *******
// 12 join - объединяет все элементы массива в одну строку, используя указанный разделитель;
// split - преобразует строку в массив
// const str = 'slowly';
// splitStr = str.split('');
// console.log(splitStr);
// joinStr = splitStr.join(' ');
// console.log(joinStr);
// *******
// 13 sort - сортирует массив по возрастанию. однако делает он это приминительно к строковым значениям.
// поэтому, чтобы было корректное сравнение цифр, применяется внутри метода функция:
// const sortArr = arr.sort((a, b) => a - b);
// console.log(sortArr);
// *******
// 14 isArray - проверяет, является ли массивом поданная сущность?
// console.log(Array.isArray(arr));
// *******
// 15 splice - позволяет удалять и вставлять элементы;
// arr.splice(index, сколько элементов удалить (если оставить 0, то не удалится, но можно вставить новые элементы
// на его место, какие элементы вставляем (независимо от того удалили мы прежний элемент, или нет.)));
// arr.splice(2, 1, 'qwerty'); // заменили элемент с индексом 2 на строку qwerty;
// console.log(arr);
// *******
// 16 slice - возвращает подмассив, собранный из элементов с индексами от первого, указанного в параметрах метода
// до последнего не включая его;
// console.log(arr.slice(2, arr.length));
// console.log(arr.slice(0, -2));
// *******
// 17 indexOf - возвращает индекс искомого элемента. если такого элемента нет, то вернёт -1
// если поставить вторым параметром ещё одно значение, то оно будет означать с какого индекса
// производить поиск элемента;
// console.log(arr.indexOf(17));
// console.log(arr.indexOf(17, 3));
// *******
// 18 lastIndexOf - возвращает индекс искомого элемента, начиная поиск с конца массива.
// console.log(arr.lastIndexOf(17));
// console.log(arr.lastIndexOf(17, 1));
// *******
// 19 includes - ищет в массиве указанное значение и возвращает true или false в зависимости от результата поиска;
// console.log(arr.includes(17));
// console.log(arr.includes(-17));
// *******
// 20 reverse - переворачивает массив;
// console.log(arr.reverse());
// const isPalindrome = '123219';
// isPalindrome === isPalindrome.split('').reverse().join('') ? console.log(true) : console.log(false)
// *******
// 21 [...new Set(arr)] - создаёт новый массив из уникальных значений старого массива:
// let unic_arr = [...new Set(arr)];
// console.log(unic_arr);
// *******
// 22 преобразование числа в строку:
// const num = 11;
// const str_num = num + '';
// console.log(typeof str_num);
// *******
// 23 разбиваем многомерный массив на одномерный:
// const stereo_arr = [72, [7, 18, 1], -5, 0, [101, 98]];
// const mono_arr = [].concat(...stereo_arr);
// console.log(mono_arr);
// второй вариант:
// const mono2_arr = stereo_arr.flat();
// console.log(mono2_arr);
// *******
// 24 уменьшаем длину массива:
// console.log(arr.length);
// arr.length = 3;
// console.log(arr, arr.length);
// *******
// 25 метод for of - перебор значений массива (с возможностью мутировать их):
// for (let value of arr) {
//   console.log(value * 2);
// }
// *******
// 26 метод array.match(regexp)
// Метод match() возвращает новый массив, содержащий все совпадения, найденные в исходном массиве.
// Если совпадений не найдено, то метод возвращает null.
// const numbers = [1, 2, 3, 4, 5];
// const evenNumbers = numbers.match(/[02468]/g);
// console.log(evenNumbers); // [2, 4]
// *******
// 27 Метод repeat() повторяет содержимое строки указанное количество раз.
// let s = 's';
// let multipliedString = s.repeat(3);
// console.log(multipliedString);   // 'sss'
// *******
// проверка на равенство с NaN:
// console.log(Number.isNaN(0))      // false
// console.log(Number.isNaN(NaN))   // true
// *******
// 28 Метод endsWith() определяет, заканчивается ли строка символами этой строки, возвращая true или false в зависимости от ситуации.
// Этот метод чувствителен к регистру.
// const str = "To be, or not to be, that is the question.";
// console.log(str.endsWith("question.")); // true
// console.log(str.endsWith("to be") ); // false
// console.log(str.endsWith("to be", 19)); //
// *******
// 29 Метод some() принимает функцию колбэк и возвращает true или false в зависимости от проверки условия, записанного в логике метода:
// arr.some(num => console.log(num % 2 === 0));
// arr.some(num => {
//     if (num != 0 && num % 2 === 0) console.log(num);
// });
// *******
// 30 Метод trim() позволяет убрать пробел в начале и конце строки. Если нужно либо в начале, либо в конце, используем trimStart(), trimEnd():
// const str = '  я памятник себе воздвиг нерукотворный!      '
// console.log(str.trim().length);

// *******
// Преобразование типов:

// Преобразование строкового выражения в число с выполнением арифметических операций:
// let a = '17 + 3';
// let b = eval(a);
// console.log(b);         // 20 - число!
//-----------------------------------------------------------------------//

// Работа с датой:
// let date = new Date('2007-12-27');
// let dayOfWeek = date.getDay();
// let monthOfYear = date.getMonth();
// let year = date.getFullYear();
// console.log(dayOfWeek);
// console.log(monthOfYear + 1);
// console.log(year);

//-----------------------------------------------------------------------//
// Взаимодействие с элементами DOM на примере различных сущностей:

// Обращение к элементу DOM:    document.querySelector('.(или # в зависимости от того класс это или id)nameOfClass').innerHTML(или value))

//                                                        *  АБЗАЦ: *
// {
//     tagName: "p",
//     className: "paragraph",
//     innerHTML: "12345",
//     ...
//   }
//                                                         * INPUT: *
// {
//     tagName: "input",
//     className: "paragraph",
//     value: "12345",
//     onChange(event => event.target.value) - способ обращения через слушатель событий, где target - сам DOM элемент, а value - значение в нём.
//     ...
//   }
//                                                         * Ссылка: *
// {
//     tagName: "a",
//     className: "paragraph",
//     href: "https://example.com",
//     textContent: "Click me",
//     ...
//   }
//                                                          * Кнопка: *
// {
//     tagName: "button",
//     className: "paragraph",
//     innerHTML: "Click me",
//     ...
//   }
//                                        * Изменение стилей элемента, добавление, удаление классов: *

// Например, мы обращаемся к элементу с классом paragraph:
// const sentance = document.querySelector('.paragraph');

// Для изменения стилей элемента DOM можно использовать свойство style объекта элемента. Например, чтобы изменить цвет текста элемента,
// можно использовать следующий код:

// document.querySelector('.paragraph').style.color = "red";

// Аналогично, можно изменить другие стили элемента, такие как фон, шрифт и т.д. Например:

// document.querySelector('.paragraph').style.backgroundColor = "blue";
// document.querySelector('.paragraph').style.fontFamily = "Arial";

// Также можно использовать метод classList для добавления или удаления классов у элемента.
// Например, чтобы добавить класс "highlight" к элементу, можно использовать следующий код:

// document.querySelector('.paragraph').classList.add("highlight");

// А чтобы удалить класс "paragraph", можно использовать метод remove:

// document.querySelector('.paragraph').classList.remove("paragraph");

// Также можно добавить новые элементы DOM, например элементы списка:
//

//-----------------------------------------------------------------------//

//                                        * Контекст и области выдимости: *

// области видимости переменных var - функциональная, let и const - блочная:

// В данном случае выведутся оба user, так как у них разные блочные области видимости:
// Блок - это всё, что заключено в фигурные скобки. как видно, let user = 'Makdak'; не заключен ни в какие скобки,
// но он находится на верхнем уровне иерархии, в области блока global в данном примере (если мы бы рассматривали
// все эти примеры в браузере, то был бы не global, а window).
// let user = 'Makdak';

// {
//     let user = 'Willivonki'
//     console.log(user);
// }

// console.log(user);

// // В этом случае переменная user1 просто перезапишется и будет выведено дважды Potter:

// var user1 = 'Garry';

// {
//     var user1 = 'Potter'
//     console.log(user1);
// }

// console.log(user1);

// this - контекст вызова: Используется для объявления контекста вызова (то, откуда вызывается
// переменная). При объявлении функции, её название == переменная, которая автоматически создаётся
// в глобальной области (window, если это браузарная версия, либо global, если это node).
// call и apply - методы, позволяющие задать контекст вызова, то есть откуда будет взывана переменная.
//

// const user1 = {
//     name: 'Evgeniy',
//     getName() {
//         return this.name
//     }
// }

// const user2 = {
//     name: 'Natalya',
// };

// console.log(user1.getName.call(user2));

//-----------------------------------------------------------------------//

// Замыкания. Это способ изолирования любой переменной от видимости извне. То есть переменная, объявленная внутри блока
// имеет изолированность от внешнего изменения. Со стороны другой сущности её не видно.
// Классический пример замыкания - переменная count обёрнута в функцию setCounter(). К ней нет доступа ниоткуда, кроме как
// изнутри этой функции и в этом большое преимущество - она не засоряет глобальную область видимости, поэтому нет оснований
// предполагать, что при неправильном использовании переменной с аналогичным именем, порушится весь код. А функцию можно
// переиспользовать в любом месте приложения независимо от других случаев её использования.

// function setCounter() {
//   let count = 0;

//   return {
//     increase: function () {
//       count++;
//     },
//     getCount: function () {
//       return new Promise((resolve, rejcet) => {
//         setTimeout(() => {
//           resolve(console.log(`'Good!!!' ${count}`));
//         }, 2000);
//       });
//     },
//   };
// }

// const count1 = setCounter();
// count1.increase();
// count1.increase();
// count1.increase();
// count1.increase();
// count1.getCount();

// В данном примере мы создали функцию setCounter(), в ней вернули в виде объекта а) функцию, которая увеличивает значение count на единицу
// каждый раз при вызове метода increase, но ничего не возвращает (просто запоминает новое значение count), б) функцию, показывающую
// текущее значение count при вызове getCount(), в) метод setTimeout(), моделирующий задержку выполнения вызова функции getCount.

//-----------------------------------------------------------------------//
// Как работает setInterval() и как его остановить:

// let counterInterval = 0;
// function count() {
//   let interval = setInterval(() => {
//     counter++;
//     console.log(counter);
//     if (counter >= 7) {
//       clearInterval(interval);    // останов при достижении условия;
//     }
//   }, 1000);
// }

// countInterval();
//-----------------------------------------------------------------------//
// То же самое с использованием setTimeout():

// let counter = 0;

// function countTimeout() {
//   if (counter <= 7) {
//     setTimeout(() => {
//       console.log(counter);
//       counter++;
//       countTimeout()
//     }, 1000);
//   };
// };

// countTimeout();
//-----------------------------------------------------------------------//

// Пример использоания .call для определения контекста вызова функции. В функции upEmploy определены значения имени и профессии
// через ключевое слово this, которое и определяет контекст выполнения. То есть, подставляя вместо this значение переменной, мы
// определяем (привязываем) выполнение функции именно в контексте значений этой переменной!

// const user1 = {
//   name: 'Leo',
//   profession: 'developr junior',
//   employ: 1300
// }

// const user2 = {
//   name: 'Meggi',
//   profession: 'intern',
//   employ: 700
// }

// function upEmploy(newProffession, newEmploy) {
//   this.profession = newProffession
//   this.employ = newEmploy;
//   return this.name + ' ' + this.profession + " " + this.employ;
// };

// console.log(user2.employ);
// console.log(upEmploy.call(user1, 'middle developer', 2300));
// console.log(upEmploy.call(user2, 'junior developer', 1300));
// console.log(user1.name);
// console.log(user2.employ);

//-----------------------------------------------------------------------//
//-----------------------------------------------------------------------//

//                                                       *   TYPESCRIPT   *

// Для того, чтобы установить глобально компилятор TS -> JS нужно выполнить команду: sudo npm install -g typescript
// Чтобы скомпилировать созданный файл name.ts в js, нужно выполнить команду: tsc name.ts

//-----------------------------------------------------------------------//

//                                                       *   Регулярные выражения  *

// Соответствует одной или более цифр
// const regeNumber = /^\d+$/:
// console. log(regexNumber.test ('123')): // true
// console. log(regexNumber.test('abc')); // false
// // Соответствует правильному формату email
// const regexEmail = /^[\w. -]+@[a-zA-Z_-]+?\. [a-zA-Z112, F$/:
// console. log(regexEmail.test('test@example.com' )); // true
// console. log(regexEmail.test('invalid_email')); // false
// // Проверка на соответствие URL
// const regexURL = /^(https? |ftp):\/\/[^\s/$.?#]. [^\s]*$/;
// console. log(regexURL.test'http://example.com')); // true
// console. log(regexURL. test('invalid_url')); // false
// // Находит все числа в строке.
// const regexSearchNUMBER = /\d+/g;
// const price = 'Цена 99.95 рублей';
// const numbers = price.match(regexSearchNUMBER) ;
// console. log(numbers); // Output: ["99", "95"]
// // Находит все отдельные слова в строке.
// const regex = /\b\w+\b/g;
// const str = 'I love Javascript';
// const words = str.match (regex);
// console.log(words); // Output: ["I", "love", "Javascript"]

//-----------------------------------------------------------------------//

// Полезные сниппеты при работе с VS Code:

// React:
// rsc - создаёт шаблон нового компонента с уже вписанным в функцию и экспорт названием:
// import React from 'react';

// const test = () => {
//     return (
//         <div>

//         </div>
//     );
// };

// export default test;
// rsf - создаёт шаблон нового функционального компонента с передаваемыми пропсами:
// import React from 'react';

// function test(props) {
//     return (
//         <div>

//         </div>
//     );
// }

// export default test;

//                                                       *   Циклы  *

// В JS есть 4 вида циклов: while, do/while, for и for/in/of. Остальные методы, такие как reduce, map, forEach не являются циклами, но имеют
// под капотом механизм перебора итерируемых значений, поэтому на них тоже остановлюсь в данном разделе.

//                                                       **   while  **

// Данный цикл работает пока выполняется условие, прописанное в этом цикле:

// let num = 0;
// let factorial = 1;

// while (num >= 1) {
//     factorial *= num;
//     num -= 1;
// }

// console.log(factorial);

//                                                       **   for  **

// Цикл for перебирает каждое значение итерируемого объекта по условию, заданному в этом цикле:

// let num = 7;
// let factorial = 1;

// for (let i = 1; i <= num; i++) {
//     factorial *= i;
// }

// console.log(factorial);

//                                                       **   for in  **

//                           ПРИМЕНЯЕТСЯ ДЛЯ ПЕРЕБОРА КЛЮЧЕЙ ИТЕРИРУЕМОГО ОБЪЕКТА, то есть выводит ИНДЕКСЫ, а на ЗНАЧЕНИЯ!!!!!!!
// Не забываем, что массив - это, по сути, объект с ключами - индексами. И строка также является итерируемым объектом. Поэтому при применении
// этого цикла для строки будем получать индексы каждой буквы, а для получения значения нужно обращаться через str[i];

// const obj = {
//   1: 'one',
//   2: 'two',
//   3: 'three',
//   foul: 'two',
// };

// мы будем перебирать значения объекта obj по ключам с помощью for...in:

// for (let key in obj) {
//     console.log(`${key} => ${obj[key]}`);
// }

// out:
// 1 => one
// 2 => two
// 3 => three
// foul => two

// Пример со строкой:

// const str = 'example';

// for (let i in str) {
//     console.log(str[i]);
// };

// out:
// e
// x
// a
// m
// p
// l
// e

// этот цикл также можно применять и к массивам точно так же как и к строкам.

//                                                       **   for of  **

//                                              ПРИМЕНЯЕТСЯ ДЛЯ ПЕРЕБОРА ЗНАЧЕНИЙ ИТЕРИРУЕМОГО ОБЪЕКТА!!!!!!!

// const str = 'example';

// for (let letter of str) {
//     console.log(letter);
// };

// out:
// e
// x
// a
// m
// p
// l
// e

// Пример с объектом. Чтобы была возможность перебора значений объекта, его нужно сделать итерабельным. Для этого в условии цикла добавляем
// Object:

// const user = {
//     name: 'Evgeniy',
//     age: 43,
//     weigth: 76
// }

// for (key of Object.keys(user)) {
//     console.log(key, user[key]);
// }

// либо такой вариант:
// выводит только значения (первый вариант, обратите внимание, выведет только ключи, при запросе console.log(key);)
// for (key of Object.values(user)) {
//     console.log(key);
// }

// let z = 1
// if(true) {
// var f = 10
// let a = 10
// b = 4
// let z = 5
// console.log(z);
// }
// const d = {}
// d['a'] = 10
// // d = {...d }           выдаёт ошибку, так как d константа и не может быть деструктурирована
// // console.log(a)        выдаёт ошибку, так как a не определена в функциональной области, а let имеет блочную область видимости
// console.log(b)
// console.log(z)
// console.log(d)
// console.log(f)

// let a = 1;
// a.toString();
// if (typeof(a) == 'number') console.log('why?');   // в данном случае a остаётся number, так как метод toString() просто возвращает значение
// // с типом строка, а сама переменная остаётся числом, как и объявлена вначале

const obj0 = {'3': 1, '71': 12};
console.log(Object.entries(obj0).sort((a, b) => b[1] - a[1]));