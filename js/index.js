const drink = prompt("Виберіть напой");

switch (drink) {
    case "Кава":
        alert("Кава");
        break;
    case "Чай":
        alert("Чай");
        break;
    case "Сік":
        alert("Сік");
        break;
    default:
        alert("Такого немає")
        break;
}

const day = prompt("Введіть день тижня");

switch (day) {
    case "Понеділок":
    case "Вівторок":
    case "Середа":
    case "Четвер":
    case "П'ятниця":
        alert("Робочий день")
        break;
    case "Субота":
    case "Неділя":
        alert("Вихiдний день")
        break;
    default:
        alert("Такого немає")
        break;
}

const month = prompt("Введiть місяць");

    switch (month) {
        case "Грудень":
        case "Січень":
        case "Лютий":
            alert("Зима")
            break;
        case "Березень":
        case "Квітень":
        case "Травень":
            alert("Весна")
            break;
        case "Червень":
        case "Липень":
        case "Серпень":
            alert("Лiтo")
            break;
        case "Вересень":
        case "Жовтень":
        case "Листопад":
            alert("Осiнь")
            break;
        default:
            alert("Такого немає")
            break;
}

const numberMonth = Number(prompt("Напишіть любий номер місяця"));
switch (numberMonth) {
    case 1:
        alert("Сiчень 31 день");
        break;
    case 2:
        alert("Лютий 29 день");
        break;
    case 3:
        alert("Березень 31 день");
        break;
    case 4:
        alert("Квiтен 30 день");
        break;
    case 5:
        alert("Травень 31 день");
        break;
    case 6:
        alert("Червень 30 день");
        break;
    case 7:
        alert("Липень 31 день");
        break;
    case 8:
        alert("Серпень 31 день");
        break;
    case 9:
        alert("Вересень 30 день");
        break;
    case 10:
        alert("Жовтень 31 день");
        break;
    case 11:
        alert("Листопад 30 день");
        break;
    case 12:
        alert("Грудень 31 день");
        break;
    default:
        alert("Такого немає")
        break;
}

const color = prompt("Введіть колiр світлофора")

switch (color) {
    case "Червоний":
        action = "Стий";
        break;
    case "Зелений":
        action = "Йти";
        break;
    case "Жовтий":
        action = "Чекай";
        break;
    default:
        alert("Такого немає")
        break;
}

const number1 = Number(prompt("Перше число"));
const number2 = Number(prompt("Друге число"));
const selector = prompt("Яку дiю зробити?");

switch (selector) {
    case '+':
        alert(`${number1 + number2}`);
        break;
    case '-':
        alert(`${number1 - number2}`);
        break;
    case '/':
        alert(`${number1 / number2}`);
        break;
    case '*':
        alert(`${number1 * number2}`);
        break;
    default:
        console.log("Такого немає");
        break;
}