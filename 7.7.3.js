const user1 = {
  name: "Lena",
  age: 7
};

const user2 = {
  name: "Ira",
  age: 25
};

const user3 = {
  name: "Olga",
  age: 34
};

const users = [user1, user2, user3];

//получаем пользователей с возрастом больше 18-ти лет
const userAge = users.filter((item) => {
   return item.age >=18;
});

console.log(userAge);

//получаем имена пользователей
const userName = users.map((item) => {
  return item.name;
});

console.log(userName);
