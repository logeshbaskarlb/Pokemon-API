let head = document.createElement("h1");
head.innerHTML = "Pokemon API";
head.setAttribute("id", "heading");
//...........................
let container = document.createElement("div");
container.setAttribute("class", "container");
//............
document.body.append(head, container);
//..................................................
function pokemonCards(data) {
  let div_s1 = document.createElement("div");
  div_s1.setAttribute("class", "div_s1");
  let main_div = document.createElement("div");
  main_div.setAttribute("id", "main_div");
  //........................................
  let name = document.createElement("h2");
  name.setAttribute("id", "name");
  name.innerHTML = data.name;
  //....................................................
  let img_center = document.createElement("div");
  img_center.setAttribute("id", "img_center");
  let img = document.createElement("img");

  img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${data.id}.png`;
  //.......................................................
  let abilities = document.createElement("h3");
  abilities.setAttribute("id", "abilities");
  abilities.innerHTML = "Abilities : -";

  let dummy_div = document.createElement("div");
  dummy_div.setAttribute("id", "dummy_div");
  let add = document.getElementById("dummy_div");

  for (let i = 0; i < data.abilities.length; i++) {
    let para = document.createElement("p");
    para.setAttribute("id", "para");
    para.innerHTML = data.abilities[i].ability.name;
    dummy_div.append(para);
  }
  //...........................................
  let moves = document.createElement("h3");
  moves.setAttribute("id", "moves");
  moves.innerHTML = "Moves : -";
  //.......................

  let dummy_div1 = document.createElement("div");
  dummy_div1.setAttribute("id", "dummy_div1");
  let add1 = document.getElementById("dummy_div1");

  for (let i = 0; i < 4; i++) {
    let move = document.createElement("p");
    move.setAttribute("id", "para1");
    move.innerHTML = data.moves[i].move.name;
    dummy_div1.append(move);
  }
  //...........................................

  let weight = document.createElement("h3");
  weight.setAttribute("id", "weight");
  weight.innerHTML = `Weight : ${data.weight}`;
  div_s1.append(main_div);

  container.append(div_s1);
  main_div.append(
    name,
    img_center,
    abilities,
    dummy_div,
    moves,
    dummy_div1,
    weight
  );
  img_center.append(img);
}
//................................................................................
let button_div = document.createElement("div");
button_div.setAttribute("id", "button_div");

let button1 = document.createElement("button");
button1.innerHTML = 1;
button1.setAttribute("id", "button1");

let button2 = document.createElement("button");
button2.innerHTML = 2;
button2.setAttribute("id", "button2");

let button3 = document.createElement("button");
button3.innerHTML = 3;
button3.setAttribute("id", "button3");

let button4 = document.createElement("button");
button4.innerHTML = 4;
button4.setAttribute("id", "button4");

let button5 = document.createElement("button");
button5.innerHTML = 5;
button5.setAttribute("id", "button5");

let button6 = document.createElement("button");
button6.innerHTML = 6;
button6.setAttribute("id", "button6");

let button7 = document.createElement("button");
button7.innerHTML = 7;
button7.setAttribute("id", "button7");

let button8 = document.createElement("button");
button8.innerHTML = 8;
button8.setAttribute("id", "button8");

let button9 = document.createElement("button");
button9.innerHTML = 9;
button9.setAttribute("id", "button9");

let button10 = document.createElement("button");
button10.innerHTML = 10;
button10.setAttribute("id", "button10");

document.body.append(button_div);
button_div.append(
  button1,
  button2,
  button3,
  button4,
  button5,
  button6,
  button7,
  button8,
  button9,
  button10
);
//..............................................................................
function insitial_load() {
  document.querySelectorAll(".div_s1").forEach((e) => e.remove());
  for (let i = 1; i <= 5; i++) {
    const getData = async (id) => {
      try {
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        pokemonCards(data);
      } catch (error) {
        console.error(error);
      }
    };
    getData(i);
  }
}
insitial_load();
//.................................................................................
let a1 = document.getElementById("button1");
a1.addEventListener("click", () => {
  document.querySelectorAll(".div_s1").forEach((e) => e.remove());
  for (let i = 1; i <= 5; i++) {
    const getData = async (id) => {
      try {
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        pokemonCards(data);
      } catch (error) {
        console.error(error);
      }
    };
    getData(i);
  }
});
let a2 = document.getElementById("button2");
a2.addEventListener("click", () => {
  document.querySelectorAll(".div_s1").forEach((e) => e.remove());
  for (let i = 6; i <= 10; i++) {
    const getData = async (id) => {
      try {
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        pokemonCards(data);
      } catch (error) {
        console.error(error);
      }
    };
    getData(i);
  }
});
let a3 = document.getElementById("button3");
a3.addEventListener("click", () => {
  document.querySelectorAll(".div_s1").forEach((e) => e.remove());
  for (let i = 11; i <= 15; i++) {
    const getData = async (id) => {
      try {
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        pokemonCards(data);
      } catch (error) {
        console.error(error);
      }
    };
    getData(i);
  }
});
let a4 = document.getElementById("button4");
a4.addEventListener("click", () => {
  document.querySelectorAll(".div_s1").forEach((e) => e.remove());
  for (let i = 16; i <= 20; i++) {
    const getData = async (id) => {
      try {
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        pokemonCards(data);
      } catch (error) {
        console.error(error);
      }
    };
    getData(i);
  }
});
let a5 = document.getElementById("button5");
a5.addEventListener("click", () => {
  document.querySelectorAll(".div_s1").forEach((e) => e.remove());
  for (let i = 21; i <= 25; i++) {
    const getData = async (id) => {
      try {
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        pokemonCards(data);
      } catch (error) {
        console.error(error);
      }
    };
    getData(i);
  }
});
let a6 = document.getElementById("button6");
a6.addEventListener("click", () => {
  document.querySelectorAll(".div_s1").forEach((e) => e.remove());
  for (let i = 26; i <= 30; i++) {
    const getData = async (id) => {
      try {
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        pokemonCards(data);
      } catch (error) {
        console.error(error);
      }
    };
    getData(i);
  }
});
let a7 = document.getElementById("button7");
a7.addEventListener("click", () => {
  document.querySelectorAll(".div_s1").forEach((e) => e.remove());
  for (let i = 31; i <= 35; i++) {
    const getData = async (id) => {
      try {
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        pokemonCards(data);
      } catch (error) {
        console.error(error);
      }
    };
    getData(i);
  }
});
let a8 = document.getElementById("button8");
a8.addEventListener("click", () => {
  document.querySelectorAll(".div_s1").forEach((e) => e.remove());
  for (let i = 36; i <= 40; i++) {
    const getData = async (id) => {
      try {
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        pokemonCards(data);
      } catch (error) {
        console.error(error);
      }
    };
    getData(i);
  }
});
let a9 = document.getElementById("button9");
a9.addEventListener("click", () => {
  document.querySelectorAll(".div_s1").forEach((e) => e.remove());
  for (let i = 41; i <= 45; i++) {
    const getData = async (id) => {
      try {
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        pokemonCards(data);
      } catch (error) {
        console.error(error);
      }
    };
    getData(i);
  }
});
let a10 = document.getElementById("button10");
a10.addEventListener("click", () => {
  document.querySelectorAll(".div_s1").forEach((e) => e.remove());
  for (let i = 46; i <= 50; i++) {
    const getData = async (id) => {
      try {
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        pokemonCards(data);
      } catch (error) {
        console.error(error);
      }
    };
    getData(i);
  }
});