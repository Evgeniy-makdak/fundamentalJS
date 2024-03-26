//                                              ТИПЫ ДАННЫХ:

// Примитивные типы данных:
let number = 123; // Число (числовое значение)
let bigint = 123n; // BigInt (большие целые числа)
let string = 'Hello'; // Строка (текстовые данные)
let boolean = true; // Булево (логическое значение true или false)
let nullValue = null; // Значение null (представляет отсутствие значения)
let undefinedValue = undefined; // Значение undefined (представляет неопределенное значение)
let symbol = Symbol('foo'); // Символ (уникальное и неизменяемое значение)
// Ссылочные типы данных:
let object = { key: 'value' }; // Объект (хранит набор ключ-значение)
let array = [1, 2, 3]; // Массив (хранит упорядоченный набор значений)
let regexp = /pattern/; // Регулярное выражение (используется для сопоставления текста с шаблоном)
let date = new Date(); // Дата (хранит дату и время)
let functionValue = function () {}; // Функция (блок кода, который может быть вызван)

//                                    ****************************************
//                                            МЕТОДЫ РАБОТЫ С МАССИВОМ:

// Методы изменения массива:
[1, 2, 3].pop(); // Удаляет последний элемент и возвращает его: 3
[1, 2, 3].push(4); // Добавляет элемент(ы) в конец и возвращает новую длину массива: 4
[1, 2, 31].reverse(); // Переворачивает порядок элементов: [3, 2, 1]
[1, 2, 31].shift(); // Удаляет первый элемент и возвращает его: 1
[1, 2, 31].splice(1, 1, 4); // Изменяет содержимое, удаляя и/или добавляя элементы: [2]
[1, 2, 3].unshift(0); // Добавляет элемент(ы) в начало и возвращает новую длину массива: 4
[72, 11, 88, 0, 297, -3].toSorted(); // Сортирует элементы в порядке возрастания (только по первому символу!) [-3, 0, 11, 297, 72, 88]
[72, 11, 88, 0, 297, -3].sort((a, b) => a - b) // Сортирует элементы от меньшего к большему по абсолютному значению [ -3, 0, 11, 72, 88, 297 ]
// Методы доступа к элементам:
[1, 2, 3].concat(4, 5); // Объединяет два или более массивов и возвращает новый массив: [1, 2, 3, 4, 5]
[1, 2, 31].slice(1, 2); // Возвращает новый массив: [2]
[1, 2, 31].join(','); // Соединяет элементы массива в строку: ™1, 2, 3"
[1, 2, 3].toString(); // Возвращает строковое представление массива: "1, 2, 3"
// Методы поиска и фильтрации:
[1, 2, 31].indexof(2); // Возвращает индекс первого вхождения: 1
[1, 2, 3, 2].lastIndex0f(2); // Возвращает индекс последнего вхождения: 3
[1, 2, 31].find((item) => item > 1); // Возвращает первый элемент, удовлетворяющий условию: 2
[1, 2, 31].findIndex((item) => item > 1); // Возвращает индекс первого элемента, удовлетворяющего условию: 1
//. Методы итерации:
[1, 2, 3].forEach((item) => console.log(item)); // Выполняет функцию для каждого элемента 1 2 3
[1, 2, 3].map((item) => item * 2); // Создает новый массив с результатами вызова функции для каждого элемента [2, 4, 6]
[1, 2, 31].filter((item) => item > 1); // Создает новый массив с элементами, прошедшими проверку [2, 31]
[1, 2, 31].reduce((acc, cur) => acc + cur, 0); //. Свертывает массив в одно значение [34]
// Методы проверки условий:
[1, 2, 31].every((item) => item > 0); // Проверяет, все ли элементы удовлетворяют условию (true)
[1, 2, 31].some((item) => item > 2); // Проверяет, хотя бы один ли элемент удовлетворяет условию (true)

//                                    ****************************************
//                                              МЕТОДЫ ОБЪЕКТОВ:

Object.assign(); // Копирует значения всех собственных перечислимых свойств из исходных объектов в целевой
Object.create(); // Создает новый объект с указанным прототипом и свойствами
Object.defineProperty(); // Определяет или изменяет собственное свойство объекта
Object.defineProperties(); // Определяет или изменяет собственные свойства обьекта
Object.entries(); // Возвращает массив пар [ключ, значение] для перечислимых свойств объекта
Object.freeze(); // Замораживает объект, запрещая добавление или удаление свойств
Object.fromEntries(); // Преобразует пары [ключ,значение] в объект
Object.getOwnPropertyDescriptor(); // Возвращает дескриптор свойства объекта
Object.getOwnPropertyDescriptors(); // Возвращает дескрипторы всех свойств объекта
Object.getOwnPropertyName(); // Возвращает массив имен всех собственных свойств объекта
Object.getOwnPropertySymbols(); // Возвращает массив всех символьных ключей объекта
Object.getPrototypeOf(); // Возвращает прототип обьекта
Object.is(); // Сравнивает значения для определения их равенства
Object.isExtensible(); // Определяет, можно ли добавлять новые свойства к объекту
Object.isFrozen(); // Определяет,заморожен ли объект
Object.isSealed(); // Определяет, запечатан ли объект
Object.keys(); // Возвращает массив имен перечислимых свойств объекта
Object.preventExtensions(); // Запрещает добавление новых свойств к объекту
Object.seal(); // Запрещает добавление и удаление свойств из объекта
Object.setPrototypeof(); // Устанавливает прототип объекта
Object.values(); // Возвращает массив значений перечислимых свойств объекта
const obj = { a: 1, b: 2, c: 3 };
const keys = Object.keys(obj);
console.log(keys); // Выведет ['a', 'b', 'c']
// ----------
const obj2 = { a: 1, b: 2, c: 3 };
const values = Object.values (obj2);
console.log(values); // Выведет [1, 2, 3]
//---------
const obj3 = { a: 1, b: 2, c: 3 };
const entries = Object.entries (obj3);
console.log(entries); // Выведет [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]
//---------
const obj4 = { a: 1, b: 2 };
const obj5 = { c: 3, d: 4 };
const mergedObj = Object.assign({}, obj4, obj5);
console.log (mergedObj); // Выведет { a: 1, b: 2, c: 3, d: 4 }
//----------
const obj6 = { a: 1, b: 2};
Object.freeze(obj6);
obj6.a = 10; // Изменение будет проигнорировано
console.log(obj6); // Выведет ( a: 1, b: 2 }
const obj7 = { a: 1 };
const descriptor = Object.getOwnPropertyDescriptor(obj7, 'a');
console.log(descriptor); // Выведет { value: 1, writable: true, enumerable: true, configurable: true }
//----------
const obj8 = { a: 1, b: 2};
console.log(obj8.hasOwnProperty('a')); // Выведет true
console.log(obj8.hasOwnProperty('c')); // Выведет false


//                                    ****************************************
//                                              ФУНКЦИИ ОБРАБОТЧИКОВ СОБЫТИЙ:

// Функция для обработки события клика на кнопку
function handleClick(event) {
  console.log('Кнопка была нажата!');
}
// Функция для обработки события двойного клика на кнопку
function handleDoubleClick(event) {
  console.log('Кнопка была дважды нажата!');
}
// Функция для обработки события наведения курсора на кнопку
function handleMouseOver(event) {
  console.log('Курсор наведен на кнопку!');
}
// Функция для обработки события увода курсора с кнопки
function handleMouseOut(event) {
  console.log('Курсор уведен с кнопки!');
}
// Функция для обработки события нажатия клавиши на кнопке
function handleKeyDown(event) {
  console.log('Клавиша нажата!');
}
// Функция для обработки события отпускания клавиши на кнопке
function handleKeyUp(event) {
  console.log('Клавиша отпущена!');
}
// Функция для обработки события фокусировки на кнопке
function handleFocus(event) {
  console.log('Кнопка в фокусе!');
}
// Функция для обработки события потери фокуса кнопкой
function handleBlur(event) {
  console.log('Кнопка потеряла фокус!');
}
// Функция для обработки события отправки формы
function handleSubmit(event) {
  console.log('Форма отправлена!');
}
// Функция для обработки события изменения значения в поле ввода
function handleInput(event) {
  console.log('Значение поля ввода изменено!');
}
// Функция для обработки события изменения значения в поле ввода (после потери фокуса)
function handleChange(event) {
  console.log('Значение поля ввода изменено (после потери фокуса)!');
}

//                                    ****************************************
//                                              ОСНОВНЫЕ ОПЕРАТОРЫ:

// Арифметические операторы
let addition = 5 + 3; // Сложение (8)
let subtraction = 5 - 3; // Вычитание (2)
let multiplication = 5 * 3; // Умножение (15)
let division = 6 / 2; // Деление (3)
let modulus = 5 % 3; // Остаток от деления (2)
let increment = ++5; // Инкремент (6)
let decrement = --5; // Декремент (4)
// Операторы сравнения
let equal = 5 == '5'; // Равно по значению (true)
let strictEqual = 5 === '5'; // Равно по значению и типу данных (false)
let notEqual = 5 != 10; // Не равно по значению (true) 
let strictNotEqual = 5 !== '5'; // Не равно по значению и типу данных (true)
let greaterThan = 5 > 3; // Больше чем (true)
let lessThan = 5 < 3; // Меньше чем (true)
let greaterThanOrEqual = 5 >= 5; // Больше или равно (true)
let = 5 <= 5; // Меньше или равно (true)
// Логические операторы
let and = true && false; // Логическое И (false)
let or = true || false; // Логическое ИЛИ (true)
let not = !true; // Логическое НЕ (false)
// Операторы присваивания
let x = 10;
x += 5; // Сложение с присваиванием (15)
x -= 3; // Вычитание с присваиванием (12)
x *= 2; // Умножение с присваиванием (24)
x /= 4; // Деление с присваиванием (6)
x %= 3; // Остаток от деления с присваиванием (0)
// Битовые
let bitwiseAnd = 5 & 3; // Побитовое и (1)
let bitwiseOr = 5 | 3; // Побитовое ИЛИ (7)
let bitwiseXor = 5 ^ 3; // Побитовое исключающее или (6)
let bitwiseNot = ~5; // Побитовое НЕ (-6)
let leftShift = 5 << 1; // Побитовый СДВИГ влево (10)
let rightShift = 5 >> 1; // Побитовый СДВИГ вправо (2)
let zeroFillRightShift = 5 >>> 1; // Побитовый СДВИГ вправо с заполнением нулями (2)
let resultComma = (5, 3); // Оператор запятой (3)
// Оператор нулевого слияния (оператор объединения с null)
let result = null ?? 'default'; // result содержит 'default', потому что null объединяется с 'default'
// Тернарный оператор (условный оператор)
let age = 20;
let message = (age < 18) ? "Молодой" : "Взрослый"; // message содержит 'Взрослый, так как аде больше или равно 18

//                                    ****************************************
//                                              ОБРАБОТЧИКИ СОБЫТИЙ:

// Получение ссылки на элемент
const button = document.querySelector('button');
// Обработчик события клика на кнопку
button.addEventListener('click', handleClick);
// Обработчик события двойного клика на кнопку
button.addEventListener( 'dblclick', handleDoubleClick);
// Обработчик события наведения курсора на кнопку
button.addEventListener('mouseover', handleMouseOver);
// Обработчик события увода курсора с кнопки
button.addEventListener('mouseout', handleMouseOut);
// Обработчик события нажатия клавиши на кнопке
button.addEventListener('keydown', handleKeyDown);
// Обработчик события отпускания клавиши на кнопке
button.addEventListener('keyup', handleKeyUp);
// Обработчик события фокусировки на кнопке
button.addEventListener('focus', handleFocus);
// Обработчик события потери фокуса кнопкой
button.addEventListener('blur', handleBlur);
// Обработчик события отправки формы
document.querySelector('form').addEventListener ('submit', handleSubmit);
// Обработчик события изменения значения в поле ввода
document.querySelector('input').addEventListener('input', handleInput);
// Обработчик события изменения значения в поле ввода (после потери фокуса)
document.querySelector('input').addEventListener('change', handleChange);
// Добавление обработчика события клика на кнопку
button.addEventListener('click', handleClick);
// Удаление обработчика события клика на кнопку
button.removeEventListener('click', handleClick);

//                                    ****************************************
//                                              РАБОТА С DOM:

// Получение элемента по идентификатору
let myElement = document.getElementById('myId');
// Получение элемента по селектору
let elementBySelector = document.querySelector('#myId.myClass');
// Изменение текстового содержимого элемента
myElement.textContent = 'Новый текст';
// Изменение HTML содержимого элемента
myElement.innerHTML = '<р>Новый HTML</р>';
// Изменение стилей элемента
myElement.style.color = 'red';
myElement.style.fontSize = '16px';
// Добавление класса к элементу
myElement.classList.add('newClass');
// Удаление класса из элемента
myElement. classList.remove('oldClass');
// Проверка наличия класса у элемента
let hasClass = myElement.classList.contains('checkClass');
// Обработка события клика на элементе
myElement.addEventListener('click', function() {
alert('Кликнули на элемент!');
});
// Создание нового элемента
let newElement = document.createElement('div');
// Добавление нового элемента в DOM
document.body.appendChild(newElement);
// Удаление элемента из DOM
myElement.remove();
// Получение размеров и позиции элемента
let rect = myElement.getBoundingClientRect();


//                                    ****************************************
//                                              МЕТОДЫ СТРОК:

"FRONTEND".toLowerCase( ) // Возвращает строку с из прописных символов (frontend)
"frontend".toLocaleUpperCase() // Возвращает строку с из заглавных символов (FRONTEND)
"Frontend".charAt(2) // Возвращает символ с указанным в аргументе индексом (o)
"Frontend".concat(" @Code Ready") // Склеивание (конкатенация) строк (Frontend @Code Ready)
"Frontend".startsWith("F") // Начинается ли строка с искомого значения (учитываетя регистр) (true)
"Frontend".endsWith("s") // Оканчивается ли строка на искомое значение (учитываетя регистр) (false)
"Frontend".includes("a") // Включает ли строка искомое значение (учитываетя регистр) (false)
"Frontend".indexOf("n") //  Первое вхождение искомого значения (учитываетя регистр) (3)
"Frontend".lastIndexOf("n") // Последнее вхождение искомого значения (учитываетя регистр) (6)
"Frontend".match("/[A-Z]/g") // Для поиска совпадений в строке. В данном случае всех заглавных символов латиницы. флаг g указывает, что 
// поиск происходит во всей строке, а не только для первого попавшегося (F)
"Frontend".padStart(10, "s") // Добавляет в начало строки указанный символ столько раз, чтобы длина строки в итоге получилась равна
// указанному в качестве первого аргумента значению (в данном случае 10) (ssFrontend)
"Frontend".padEnd (11, "s") // Добавляет в конец строки указанный символ столько раз, чтобы длина строки в итоге получилась равна
// указанному в качестве первого аргумента значению (в данном случае 11)Frontendsss
"Frontend".repeat ("Frontend") //  Повтор строки (FrontendFrontend)
"Frontend".replace( "Front", "Back") // Замена исходного значения ПОДСТРОКИ на указанное (Backend)
"Frontend".search("t") // Ищет искомое значение и возвращает его индекс (4)
"Frontend".slice(0, 5) // Обрезает строку от первого до последнего индекса не включая последний. Если startIndex больше endIndex,
// то они будут автоматически поменяны местами. Если один из индексов отрицательный или больше длины строки, то они будут
// заменены на 0 или длину строки соответственно (Front)
"Frontend".split("") // Преобразует строку в массив символов. В качестве параметра выступает 
// свойство, по которому происходит разделение ['F', 'r', 'o', 'n', 't', 'e', 'n', 'd']
"Frontend".substring(0, 5) // По сути то же самое, что и slice, но если startIndex больше endIndex, то они будут поменяны местами.
// Отрицательные значения индексов отсчитываются с конца строки (Front)
" Frontend ".trim() // Удаление пробелов в начале и конце строки ("Frontend")
" Frontend ".trimStart() // Удаление пробела в начале строки ("Frontend ")
" Frontend ".trimEnd() // Удаление пробела в конце строки (" Frontend")

//                                    ****************************************
//                                              ОБЪЕКТ Math:

// Округление
Math.round (3.7); // Возвращает 4 - Округляет число до ближайшего целого
Math.floor (3.7); // Возвращает 3 - Округляет число в меньшую сторону до целого
Math.ceil(3.7); // Возвращает 4 - Округляет число в большую сторону до целого
// Минимум и максимум
Math.min (5, 2, 9, 1); // Возвращает 1
Math.max (5, 2, 9, 1); // Возвращает 9
// Случайные числа
Math. floor (Math. random() * 10) + 1; // Выведет случайное целое число от 1 до 10
// Возведение в степень
Math. pow (2, 3); // Возвращает 8 (2 в степени 3)
// Квадратный корень
Math. sqrt (16); // Возвращает 4 (квадратный корень из 16)
// Абсолютное значение числа
Math. abs (-5); // Выведет 5

//                                    ****************************************
//                                              ОПЕРАТОР Spread:

// Копирование массива
const arr1 = [1, 2, 3];
const arr2 = [...arr1];
console.log(arr2); // [1, 2, 3];
// Распаковка элементов массива
const arr3 = [1, 2, 3];
const arr4 = [...arr3, 4, 5];
console.log(arr4); // [1, 2, 3, 4, 5];
// Объединение объектов:
const obj1 = { a: 1, b: 2 };
const obj6 = { c: 3, ...obj1 };
console.log(obj6); // { c: 3, a: 1, b: 2 };
// Передача аргументов в фукнцию
function sum(a, b, c) {
  console.log(a); // 1
  console.log(b); // 2
  console.log(c); // 3
  return a + b + c;
}
const numbers = [1, 2, 3];
const resultSpread = sum(...numbers) ;
console.log(resultSpread); // 6
