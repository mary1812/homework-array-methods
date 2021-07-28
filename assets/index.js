/*
  cоздать функцию конструктор Phone 
   у телефона есть такие свойства:%
    модель
    производитель
    цена
    цвет
    comments (массив строк)
    в наличии (boolean)
    1. Создать массив с 50 телефонами (с разными данными)
*/

function Phone(model, manufacturer, price, color, exist) {
 this.model = model;
 this.manufacturer = manufacturer;
 this.price = price;
 this.color = color;
 this.comments = [];
 this.exist = exist;
}
 
function getRandomInt(min, max) {
 min = Math.ceil(min);
 max = Math.floor(max);
 return Math.floor(Math.random() * (max - min)) + min;
}
 
function getPhones(amount) {
 const newPhones = [];
 
 for (let i = 0; i < amount; i++) {
   newPhones.push(
     new Phone(
       `Model ${i}`,
       "Panasonic",
       getRandomInt(5, 50000),
       "black",
       Math.random() >= 0.5
     )
   );
 }
 
 return newPhones;
}
 
const phones = getPhones(50);
 
console.table(phones);
 

// 1. Посчитать количество моделей телефонов в наличии и вывести в консоль 

function getAvaliblePhonesNumber(phonesArray){
  let amount = 0;

const forEachCallback = function(phone, index, array) {
  if (phone.exist) {
    amount ++;
  }
};

phonesArray.forEach(forEachCallback);

return amount;
}

//Вывести в консоль для каждого элемента массива строку следующего вида:
//'<Производитель> <Модель> со стоимостью <цена> сейчас <в наличии / нет в наличии>'

function getPhonesData (phonesArray) {
  const callback = function(phone) {
    const phoneStockMessage = phone.exist ? 'в наличии' : 'нет в наличии';
    console.log(`${phone.manufacturer} ${phone.model} со стоимостью ${phone.price} UAH сейчас ${phoneStockMessage} `);
  }
  phonesArray.forEach(callback);

}

//2 Получить массив тех телефонов, которые есть в наличии

const phonesInStock = phones.filter(function (phone) {
    return phone.exist;
});
console.table(phonesInStock)


// 3. Получить массив телефонов для праздничной распродажи. Всем телефонам которые стоят больше 30000 снизить цену на 30%. Работать только с телефонами, которые есть в наличии

const phonesWithDiscount = phonesInStock.map(function (phone){
  if(phone.price > 30000){
    phone.price = Math.round(phone.price *=  0.7);
  }
  return phone;
});

// Advanced

// 2. Отсортировать массив телефонов по цене (от дорогих к дешевым)
// const sortedArray = phones.sort(function(firstPhone, secondPhone) {
// //   if(firstPhone.price > secondPhone.price) {
// //     return -1;
// //   }

// return secondPhone.price - firstPhone.price; - работает только потому что это числа
// });
//найти решение получше !!!!!!


// 3. Создать массивы с строками - именами производителей и массив с возможными цветами телефонов.
// Переделать логику генерируемых телефонов чтобы они получали случайного производителя и цвет из списков