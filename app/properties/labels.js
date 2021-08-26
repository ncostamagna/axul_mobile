const MONTHS = ["Seleccione Mes","Enero", "Febrero", "Marzo", "Abril","Mayo", "Junio", "Julio", "Agosto","Septiembre", "Octubre", "Noviembre", "Diciembre"]

let DAYS = []
for (let i = 1; i < 32; i++){
    DAYS.push(i.toString().padStart(2, "0"))
}

let YEARS = []
const n = new Date().getFullYear();
for(let i = n; i > (n - 100); i--){
    YEARS.push(i.toString())
}

let EVENT_YEARS = [];
for(let i = 0; i < 5; i++){
    EVENT_YEARS.push((n + i).toString())
}

export {MONTHS, DAYS,YEARS, EVENT_YEARS};