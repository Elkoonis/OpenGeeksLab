// ----------- вариант 1 ------------------------
var moveZeros = function (arr) {

    let zeros = []; // для нулей
    let other_numbers = []; // для остальных цифр
    let res = []; // результат

    for (let i = 0; i <= arr.length - 1; i++) { // перебор массива
        if (arr[i] === 0) { // сравниваем элементы массива ождественным равенством
            zeros.push(arr[i]); // все нули отправляем в массив zeros
        }
        else {
            other_numbers.push(arr[i]); // все остальные цифры в other_numbers
        }
    }
    res = other_numbers.concat(zeros); // добавляем к другим числам массив нулей(они добавляются в конец) можно 
    console.log(res); // выводим  результат в консоль [false, 1, 1, 2, 1, 3, "a", 0, 0]
    return res; // возвращаем результат

}
moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]);

// ----------  вариант 2   ----------
 var arr = [false, 1, 0, 1, 2, 0, 1, 3, "a"];


for (var i = 0; i < arr.length; i++) { // перебор массива

    if (arr[i] === 0) { arr.push(arr.splice(i, 1).pop()); } // сравниваем элементы массива если тождественно равно 0 ,
                                                            //добавляем в конец 1 удаленный  элемент по данному  индексу
                                                            // и с помощью pop удаляемя массив и возвращаем число (если это 0)

}

console.log(arr); // полученный результат выводим в консоль для проверки [false, 1, 1, 2, 1, 3, "a", 0, 0]
