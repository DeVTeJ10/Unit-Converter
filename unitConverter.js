let convertBtn = document.getElementById("converter")
let numbersEl = document.getElementById("number")
let values = []


function converter(){
    values.push(numbersEl.value)
    Converter()
}
    
 function Converter(){
     for ( let i = 0; i < values.length; i++){
         if ( values[i] = numbersEl.value ){
             length1.textContent =  "Metre to Feet: " + (values[i] * 3.28084).toFixed(2) + ", " + "Feet to Metre: " + (values[i] * 0.3084).toFixed(2)
             volume.textContent = "Litres to Gallon: " + (values[i] * 0.264172).toFixed(2) + ", " + "Gallon to Litres: " + (values[i] * 3.78541253).toFixed(2)
             mass.textContent = "Kilograms to Pounds: " + (values[i] * 2.2).toFixed(2) + ", " + "Pounds to Kilogram: " + (values[i] * 0.354592).toFixed(2)
     }
    }
    }
    
    

