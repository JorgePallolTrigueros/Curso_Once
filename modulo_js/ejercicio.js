
"use strict";

/**
 * Utiliza los métodos funcionales de array para resolver las siguientes propuestas:
 *
 *  - 1. Obtén la suma total de todas las edades de las personas.
 *  - 2. Obtén la suma total de todas las edades de las personas francesas.
 *  - 3. Obtén un array con el nombre de todas las mascotas.
 *  - 4. Obtén un array con las personas que tengan gato.
 *  - 5. Obtén un array con los coches de los españoles.
 *  - 6. Obtén un array con las personas que tengan un coche de la marca Ford.
 *  - 7. ¡Bonus point! Obtén un array con todas las personas en el que cada persona tenga toda
 *       la info de su coche. Ejemplo a continuación:
 *
 *      [
 *          {
 *               name: 'Berto',
 *               country: 'ES',
 *               age: 44,
 *               car: {
 *                  id: 'LU9286V',
 *                  brand: 'Citroen',
 *                  model: 'Xsara'
 *               },
 *               pet: {
 *                   name: 'Moon',
 *                   type: 'perro'
 *               }
 *           },
 *           (...)
 *      ]
 *
 *  Tip: en algún caso es probable que el método "nombreArray.find()" te sea de ayuda.
 *
 */

"use strict";

const persons = [
  {
    name: "Berto",
    country: "ES",
    age: 44,
    car: "LU9286V",     
    pet: {
      name: "Moon",
      type: "perro",
    },
  },
  {
    name: "Jess",
    country: "UK",
    age: 29,
    car: "GB2913U",
    pet: {
      name: "Kit",
      type: "gato",
    },
  },
  {
    name: "Tom",
    country: "UK",
    age: 36,
    car: "GB8722N",
    pet: {
      name: "Rex",
      type: "perro",
    },
  },
  {
    name: "Alexandre",
    country: "FR",
    age: 19,
    car: "FT5386P",
    pet: {
      name: "Aron",
      type: "gato",
    },
  },
  {
    name: "Rebeca",
    country: "ES",
    age: 32,
    car: "MD4578T",
    pet: {
      name: "Carbón",
      type: "gato",
    },
  },
  {
    name: "Stefano",
    country: "IT",
    age: 52,
    car: "LP6572I",
    pet: {
      name: "Bimbo",
      type: "perro",
    },
  },
  {
    name: "Colette",
    country: "FR",
    age: 22,
    car: "FU8929P",
    pet: {
      name: "Amadeu",
      type: "gato",
    },
  },
];
console.log("********  Ejercicio   1   *********:");

// - 1. Obtén la suma total de todas las edades de las personas.

const sumaTotal = persons.reduce(function(a, b) {
  return a + b.age;
}, 0);
console.log(`La suma total de todas las personas es: ${sumaTotal}`);

console.log("********  Ejercicio   2   *********:");
// 2. Obtén la suma total de todas las edades de las personas francesas.

const sumaTotalFranceses = persons.reduce(function(a, b) {
  if (b.country === "FR") return a + b.age;
  return a;
}, 0);
console.log(`La suma total de todas las personas es: ${sumaTotalFranceses}`);

console.log("********  Ejercicio   3   *********:");

// -3. Obtén un array con el nombre de todas las mascotas.

const mascotas = [];
for (let i = 0; i < persons.length; i++) {
  mascotas.push(persons[i].pet.name);
}
console.log(`Todas las mascotas son: ${mascotas}`);

console.log("********  Ejercicio  4    *********:");


// 4. Obtén un array con las personas que tengan gato.

/*const personasConGato = [];
for (let i = 0; i < persons.length; i++) {
  if(persons[i].pet.type==="gato") personasConGato.push(persons[i]);
}*/
const personasConGato = persons.filter(function(a) {
  return a.pet.type === 'gato';
});
console.log(`Todas las personas con mascotas que son gatos son:`);
console.log(personasConGato); 









const cars = [
  {
    id: "LU9286V",
    brand: "Citroen",
    model: "Xsara",
  },
  {
    id: "GB2913U",
    brand: "Fiat",
    model: "Punto",
  },
  {
    id: "GB8722N",
    brand: "Opel",
    model: "Astra",
  },
  {
    id: "FT5386P",
    brand: "Ford",
    model: "Focus",
  },
  {
    id: "MD4578T",
    brand: "Opel",
    model: "Corsa",
  },
  {
    id: "LP6572I",
    brand: "Ford",
    model: "Fiesta",
  },
  {
    id: "FU8929P",
    brand: "Fiat",
    model: "Uno",
  },
];

console.log("********  Ejercicio   5   *********:");
// - 5. Obtén un array con los coches de los españoles.


//La forma Correcta
//1-Filtro de personas para quedarme con los españoles
const espanolas = persons.filter((person) =>person.country ==="ES");
//2-Uso map para tener el objeto del coche por cada una de las personas españolas
const cochesEsp = espanolas.map(espanol =>{
    //Busco el coche cuyo id coincida con el 
    const coche = cars.find(car =>car.id === espanol.car)

    return coche;

});
console.log("Los coches españoles son " , cochesEsp);



        //En una sentencia
            const coches1sentencia=persons
            .filter((person) => person.country==="ES")
            .map((Espanol)=>cars.find((coche)=>coche.id===car));

            console.log("Los coches españoles son " , coches1sentencia);

// La propuesta por mi
            const cochesEspañoles = [];

for (let i = 0; i < persons.length; i++) {
  if (persons[i].country === 'ES') {
    const cocheEspañol = cars.filter(function(a) {
      return a.id === persons[i].car;
    })
    cochesEspañoles.push(cocheEspañol[0]);
  }
}
console.log("Los coches de las personas que son españolas son:");
console.log(cochesEspañoles);

console.log("********  Ejercicio   6   *********:");
// - 6. Obtén un array con las personas que tengan un coche de la marca Ford.
const personasConFord = [];
for (let i = 0; i < cars.length; i++) {
  if (cars[i].brand === "Ford") {
    const personaConFord = persons.filter(function(a) {
      return a.car === cars[i].id;
    })
    personasConFord.push(personaConFord[0]);
  }
}
console.log("Las personas con un coche de marca Ford son:");
console.log(personasConFord);

//- 7. ¡Bonus point! Obtén un array con todas las personas en el que cada persona tenga toda
// *       la info de su coche. Ejemplo a continuación:


console.log("********  Ejercicio   7   *********:");
// Un array vacio con las personas con coche
const personas2 = [];
//2 for para recorrer los 2 array y luego saber que personas tiene 
//los coches que estan en el array coches
for (let i = 0; i < persons.length; i++) {
  for (let j = 0; j < cars.length; j++) {
    if (persons[i].car === cars[j].id) {
      personas2.push({...persons[i]});
      personas2[i].car = {...cars[j]};
    }
  }
}
//Dar el resultado con el array de 2 dimensiones que me han pedido
console.log("Las personas con la info de su coche incluida en el objeto son:");
console.log(personas2);