const items = [4,4,4,6,1,0,3,6,4,8,2,8,3,5,9,1,5,7,3,0,1,9,2,8,3,7,4,6,5]

const res = items.reduce((a,b) => {
    if(!a[b]){
        a[b] = 1
    }else{
        a[b]++
    }
    return a
},{})

 console.log(res)

 const data = [
    {
      name: "Nicolas",
      level: "low",
    },
    {
      name: "Andrea",
      level: "medium",
    },
    {
      name: "Zulema",
      level: "hight",
    },
    {
      name: "Santiago",
      level: "low",
    },
    {
      name: "Valentina",
      level: "medium",
    },
    {
      name: "Lucia",
      level: "hight",
    },
  ];

const levels = data
.map(prop => {return prop.level})
.reduce((a,b) => {
    if(!a[b]){
        a[b] = 1
    }else{
        a[b]++
    }
    return a
},{})

const levelsReduced = levels


console.log(levels)

const exercise = [1,9,2,8,3,7,4,6,5,6,5,7,4,8,3,9,2,8,1,7,2,6,3,5,4,4,5,3,6,2,7,1,8,7,2,6,3,5,4,4,5,3,6,2,7,1,8,2,9,3,8,4,7,5,6,6,5,7,4,8,3]

const conteo = exercise
.reduce((a,b)=>{
    if(!a[b]){
        a[b] = 1
    }else{
        a[b]++
    }
    return a
},{})

console.log(conteo)

const asnwer = exercise
.reduce((obj,valor) =>{
    if(valor < 4 && !obj['1-3']){
        obj['1-3'] = 1
    }else if(valor < 4 && obj['1-3']){
        obj['1-3']++
    }else if(valor < 7 && !obj['4-6']){
        obj['4-6'] = 1
    }else if(valor < 7 && obj['4-6']){
        obj['4-6']++
    }else if(valor > 6 && !obj['7-9']){
        obj['7-9'] = 1
    }else if(valor > 6 && obj['7-9']){
        obj['7-9'] ++
    }
    return obj
},{})

console.log(asnwer)