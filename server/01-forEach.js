const products = [
  { name: "pizza", price: 38 },
  { name: "burger", price: 22 },
  { name: "HotDog", price: 22 },
  { name: "Chiken Tenders", price: 28 },
];

const app = document.querySelector("#app");

products.forEach((product) => {
  app.innerHTML += `<li>El producto es: ${product.name} S/.${product.price}</li>`;
});

// Reto de Tareas
//Hay que hacer una lista de tareas, las cuales deben renderizarse en HTML
//para ello debemos usar un forEach y mostrar un checkBox si la tarea esta completada

const tasks = [
  { task: "Hacer desayuno", time: 30, status: true },
  { task: "Pasear la mascota", time: 30, status: true },
  { task: "Preparar Cafe", time: 10, status: true },
  { task: "Lectura del dia", time: 20, status: true },
  { task: "Revisar Pendientes", time: 10, status: true },
  { task: "Estudiar", time: 120, status: false },
  { task: "Practicar leccion dia anterior", time: 40, status: false },
  { task: "brerak", time: 15, status: true },
  { task: "Revisar Codigo", time: 60, status: true },
  { task: "Feedback", time: 30, status: true },
  { task: "Preparar almuerzo", time: 45, status: false },
  { task: "almorzar", time: 20, status: false },
];

const reto = document.querySelector("#reto");

tasks.forEach(({ task, time, status }) => {
  let render = `
        <li>
        <input type='checkbox' id='${task}' name='${task}' ${status && "checked"}/>
        <label for='${task}'>${task} requiere ${time}min</label><br>
        </li>
    `;

  reto.innerHTML += render;
});
