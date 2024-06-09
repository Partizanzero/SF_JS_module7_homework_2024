//Var1
const arr = [1, 2, 7, 4, 5, 2, 1]; //исходный массив
const set = new Set(arr); //сетом получили только уники
const newArr = Array.from(set); //обратно в массив из сета

 //создаем новый отсортированный массив через filter
const filteredNumbers = newArr.filter(() => {
  return newArr.sort(); //сортируем массив, у sort по умолчанию - по возрастанию
})
console.log(filteredNumbers);


//Var1
const arr = [1, 2, 7, 4, 5, 2, 1];

//получаем уники:
//reduce - обойдет каждый элемент item массива arr
//accumulator накопит результат применения ф-ции к каждому элементу item массива arr
//начальное значение аккумултора не задаем, т.к. это будет первое значение при обходе массива
//includes проверит есть ли искомый элемент item массива arr в аккумуляторе accumulator 
//если значение уже есть, то просто возвращаем аккумулятор
//если значения нет, то добавляем его к аккумулятору и возвращаем новый аккумулятор
//... - оператор расширения — он сделает из массива отдельные значения, которые будут использоваться как параметры
const newArr = arr.reduce((accumulator, item, arr) => {
  if(accumulator.includes(item)){
    return accumulator
  } return [...accumulator, item];
}, []);

//создаем новый отсортированный массив через filter
const filteredNumbers = newArr.filter(() => {
  return newArr.sort(); //сортируем массив, у sort по умолчанию - по возрастанию
})
console.log(filteredNumbers);
