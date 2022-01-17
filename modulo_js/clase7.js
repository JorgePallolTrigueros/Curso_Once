"use strict"


//Set Timeout solo una vez

let count = 0;
function decincoencinco(){
    if (count <= 100){
        setTimeout(decincoencinco, 5000);
        console.log("El tiempo que pasado", count)
    }
    count+=5
}
decincoencinco();


//Temporizador

const cronometro = () =>{
    console.log('pasa 5 degundos')


}
