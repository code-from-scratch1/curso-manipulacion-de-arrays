const orders = [
    {
      customerName: "Nicolas",
      total: 60,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Santiago",
      total: 180,
      delivered: true,
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
    },
  ]

  function buscar(e){
    
  }
   
  const input = document.getElementById('buscador')
  const search = document.getElementById('search')
  const valueSearched = input.value
  const respuesta = document.getElementById('respuesta')
  input.addEventListener('keydown', buscar(e => {
    console.log(e)
  }))
  search.addEventListener('click', buscar) //buscar(valueSearched)
  
  respuesta.innerText = 0
  

  const addTaxes = orders.map(prop => {
    return {
      ...prop,
      taxes: parseInt(Math.floor(prop.total * 0.19))
      
    }
  })

const map = document.getElementById('mapMethod')

addTaxes.forEach((prop) =>{
  map.innerHTML += `
  <li>
  <input type='checkbox' id='${prop.customerName}' name='${prop.customerName}' ${prop.delivered && "checked"}/>
  <label for='${prop.customerName}'>${prop.customerName} debe pagar ${prop.total} mas ${prop.taxes} en impuesto, total ${prop.total + prop.taxes}</label><br>
  </li>
`;
})




