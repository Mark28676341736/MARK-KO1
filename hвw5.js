let drink = "Чай";

switch (drink) {
  case "Кава":
    console.log("ви обрали каву");
    break;
  case "Чай":
    console.log("ви обрали чай");
    break;
  case "Сік":
    console.log("ви обрали сік");
    break;
  default:
    console.log("ви не обрали напій з списку ");
}

// Робочі та вихідні дні
let day = "понеділок";

switch (day.toLowerCase()) {
  case "понеділок":case "вівторок":case "середа":case "четвер":case "п'ятниця":
    console.log("це робочі дні");
    break;
  case "субота":
  case "неділя":
    console.log("це не робочі дні");
    break;
  default:
    console.log("невідомий день");
}


let month = 5;

switch (month) {
  case 1: case 2: case 12:
    console.log("Зима");
    break; case 3: case 4:case 5:
    console.log("Весна");
    break;case 6:case 7:case 8:
    console.log("Літо");
    break;case 9:case 10:case 11:
    console.log("Осінь");
    break;
  default:
    console.log("не є місяць");
}

// Кольори
let color = "жовтий";

switch (color.toLowerCase()) {
  case "червоний":
    console.log("стоп");
    break;
  case "жовтий":
    console.log("увага");
    break;
  case "зелений":
    console.log("йти");
    break;
  default:
    console.log("не колір");
}