const letters = ['a', 'b', 'c', 'd']
const letlersMap = letters.map((element)=> element + '++' )

//vs

const lettersFor = []

for (let i = 0; i < letters.length; i++) {
    lettersFor.push(letters[i] + '++')
}

console.log({
    letters,
    letlersMap,
    lettersFor
})

//Reto 1 pero con map

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
  
  const retoMap = tasks.map(({ task, time, status }) => {
    return `
          <li>
          <input type='checkbox' id='${task}' name='${task}' ${status && "checked"}/>
          <label for='${task}'>${task} requiere ${time}min</label><br>
          </li>
      `;
  });

  reto.innerHTML = retoMap.join('')