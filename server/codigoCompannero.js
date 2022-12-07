const app = document.getElementById('app');

const tasks = [
    { title: 'make dinner', done: false },
    { title: 'sweep the floor', done: true },
    { title: 'feed the kittens', done: true },
    { title: 'buy groceries', done: false },
    { title: 'take a bath', done: true },
];

tasks.forEach(({ title, done }) => {
    const element = `
         <li>
          	 <input 
                     type='checkbox' 
                     id='${title}' 
                     name='${title}' 
                     ${done && 'checked'} />
                  <label for='${title}' >${title} </label>   
         </li>`;
app.innerHTML += element });