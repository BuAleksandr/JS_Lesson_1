let n = Math.floor(Math.random() * 1000);

console.log(n);

while(true) {
  number = prompt("Введите число: ");
  console.log(number);
  if (isNaN(number)) {
    alert("Вы ввели не число!");
  } else {
    if (number > n) { 
    alert("Загаданное число меньше вашего")
    } else if (number < n) {
      alert("Загаданное число больше вашего");
    } else {
      alert("Вы угадали!");{
        break;
      }
    }
  }
}