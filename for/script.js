// Data una lista della spesa:
// const list = [
//     'Latte',
//     'Cacao',
//     'Insalata',
//     'Carote',
//     'Pomodori',
//     'Piatti pronti'
// ];
// Stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente.

const list = [
    'Latte',
    'Cacao',
    'Insalata',
    'Carote',
    'Pomodori',
    'Piatti pronti'
];

// prendo la ul con id "list"
const listElement = document.getElementById("list");

// ciclo for che scorre l'array e crea un li per ogni elemento
for (let i = 0; i < list.length; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = list[i];
    listElement.append(listItem);
}
