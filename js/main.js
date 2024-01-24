// ?Snack 1:

// Dwayne Johnson ci ha chiesto di creare i segnaposto per il tavolo degli invitati alla sua mega festa vip.
// Ci ha lasciato il nome del tavolo ("Tavolo Vip") e la lista degli invitati in ordine di posto.
// La tipografia per stampare il tutto vuole che le mandiamo una lista di ospiti in un formato specifico, 
// per cui dobbiamo fare in modo che ogni ospite sia un oggetto javascript che ha come attributi:
// - nome del tavolo,
// - nome dell'ospite,
// - posto occupato.
// Generiamo e stampiamo in console l'array di oggetti per i segnaposto.

const vips = [
    'Dwayne Johnson',
    'Brad Pitt',
    'Johnny Depp',
    'Lady Gaga',
    'Cristiano Ronaldo',
    'Georgina Rodriguez',
    'Chiara Ferragni',
    'Fedez',
    'George Clooney',
    'Amal Clooney',
    'Maneskin',
];

const guestList = vips.map((vip, index) => {
    return {
        numberTable: 'Tavolo Vip',
        guestName: vip,
        seatNumber: index + 1,
    }
});
console.log(guestList);

// ?Snack 2:

// Abbiamo un elenco degli studenti di una facoltà, identificati da id, Nome e somma totale dei loro voti di esame.
// Per preparare l'aula di un nuovo corso abbiamo bisogno dei seguenti dati:
// Un array di stringhe contenente il loro nome tutto in maiuscolo. ES (Marco della Rovere => MARCO DELLA ROVERE);
// Un array di oggetti "studente" che hanno un totale di voti superiore a 70
// Un array di oggetti "studente" che hanno un totale di voti superiore a 70 e id superiore a 120
// Questo è l'elenco degli studenti:

// | Id  | Name                  | Grades |
// | --- | --------------------- | ------ |
// | 213 | Marco della Rovere    | 78     |
// | 110 | Paola Cortellessa     | 96     |
// | 250 | Andrea Mantegna       | 48     |
// | 145 | Gaia Borromini        | 74     |
// | 196 | Luigi Grimaldello     | 68     |
// | 102 | Piero della Francesca | 50     |
// | 120 | Francesca da Polenta  | 84     |

const students = [
    {
        id: 213,
        name: "Marco della Rovere",
        grades: 78
    },
    {
        id: 110,
        name: "Paola Cortellessa",
        grades: 96
    },
    {
        id: 250,
        name: "Andrea Mantegna",
        grades: 48
    },
    {
        id: 145,
        name: "Gaia Borromini",
        grades: 74
    },
    {
        id: 196,
        name: "Luigi Grimaldello",
        grades: 68
    },
    {
        id: 102,
        name: "Piero della Francesca",
        grades: 50
    },
    {
        id: 120,
        name: "Francesca da Polenta",
        grades: 84
    }
]

const nameUpperCase = students.map((student) => student.name.toUpperCase());
console.log(nameUpperCase);

const betterGrades = students.filter((student) => student.grades > 70);
console.log("Gli studenti migliori sono: ", betterGrades);

const listGradesId = students.filter((student) => student.grades > 70 && student.id > 120);
console.log("Gli studenti con id maggiore di 120 e il voto più alto sono: ", listGradesId);


