// Data una lista della spesa:
const list = [
    'Latte',
    'Cacao',
    'Insalata',
    'Carote',
    'Pomodori',
    'Piatti pronti'
];
// Stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente.



// prendo la ul con id "list"
const listElement = document.getElementById("list");

// inizializzo una variabile che traccia l'indice dell'array
let i = 0;

// creo il ciclo while per stampare ogni elemento
while (i < list.length) {
  const listItem = document.createElement("li");
  listItem.textContent = list[i];
  listElement.append(listItem);
  i++;
}