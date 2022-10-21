// Результат сравнения имеет логический тип

// Больше/меньше: a > b, a < b.
// Больше/меньше или равно: a >= b, a <= b.
// Равно: a == b.
// Не равно: != b.

// Результат сравнения можно присвоить переменной, как и любое значение
let result = 5 > 4; // результат сравнения присваивается переменной result
alert( result ); // true

// строки сравниваются посимвольно.
alert( 'Я' > 'А' ); // true
alert( 'Коты' > 'Кода' ); // true
alert( 'Сонный' > 'Сон' ); // true

// Сравнение разных типов
// При сравнении значений разных типов JavaScript приводит каждое из них к числу.
alert( '2' > 1 ); // true, строка '2' становится числом 2
alert( '01' == 1 ); // true, строка '01' становится числом 1
alert( true == 1 ); // true
alert( false == 0 ); // true

let a = 0;
alert( Boolean(a) ); // false
let b = "0";
alert( Boolean(b) ); // true
alert(a == b); // true!

// Строгое сравнение
// Оператор строгого равенства === проверяет равенство без приведения типов.

// При использовании математических операторов и других операторов сравнения < > <= >=
// Значения null/undefined преобразуются к числам: null становится 0, а undefined – NaN.

// Правило null/undefined
// При строгом равенстве ===
alert( null === undefined ); // false (Эти значения различны, так как различны их типы)

// При нестрогом равенстве ==
alert( null == undefined ); // true (Эти значения равны друг другу и не равны никаким другим значениям. Это специальное правило языка)

alert( null > 0 );  // (1) false
alert( null == 0 ); // (2) false
alert( null >= 0 ); // (3) true

alert( undefined > 0 ); // false (1)
alert( undefined < 0 ); // false (2)
alert( undefined == 0 ); // false (3)

5 > 4                 // true Очевидно, true.
"ананас" > "яблоко"   // true Используется посимвольное сравнение, поэтому false. "а" меньше, чем "я".
"2" > "12"            // false Снова посимвольное сравнение. Первый символ первой строки "2" больше, чем первый символ второй "1".
undefined == null     // true Специальный случай. Значения null и undefined равны только друг другу при нестрогом сравнении.
undefined === null    // false Строгое сравнение разных типов, поэтому false.
null == "\n0\n"       // false Аналогично (4), null равен только undefined.
null === +"\n0\n"     // false Строгое сравнение разных типов.

// Оператор нулевого слияния ??
// быстрый способ выбрать первое «определённое» значение из списка.
// Используется для присвоения переменным значений по умолчанию:

// будет height=100, если переменная height равна null или undefined
height = height ?? 100;

// Оператор ?? имеет очень низкий приоритет, лишь немного выше, чем у ? и =, поэтому при использовании его в выражении, скорее всего, потребуются скобки.

// Запрещено использовать вместе с || или && без явно указанного приоритета, то есть без скобок.
