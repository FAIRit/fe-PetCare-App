let PATIENTS = [
    {
        id: 1,
        name: 'Dąbek',
        type: 'Kot',
        breed: "europejska",
        age: '12',
        weight: '6 kg',
        color: "biały, czarny",
        medicalHistory: 'Przewlekła niewydolność nerek, przeybyty kostniakomięsak (lewe ucho), uszkodzenie kręgosłupa, złamany ogon, uszkodzenie nerwów dna miednicy, problemy z oddawaniem moczu.',
        other: 'kot przez lata był wolnożyjący, brak informacji o alergiach, kot stosuje dietę dla kotów chorych na pnn',
        ownerContact: 'Pomorski koci dom tymczasowy: Wioletta Pisała, Opiekun z domu tymczasowego: Natalia Nowak',
        idnumber: "brak"

    },
    {
        id: 2,
        name: 'Burek',
        type: 'Pies',
        breed: "europejska",
        age: '6',
        weight: '8 kg',
        color: "brązowy",
        medicalHistory: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque orci orci, accumsan ac orci ac, hendrerit lobortis risus. Phasellus eu ornare enim.',
        other: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque orci orci, accumsan ac orci ac, hendrerit lobortis risus. Phasellus eu ornare enim.',
        ownerContact: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque orci orci, accumsan ac orci ac, hendrerit lobortis risus. Phasellus eu ornare enim.',
idnumber:""
    },
    {
        id: 3,
        name: 'Alex',
        type: 'źółw',
        breed: "",
        age: 4,
        color: "",
        medicalHistory: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque orci orci, accumsan ac orci ac, hendrerit lobortis risus. Phasellus eu ornare enim.',
        other: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque orci orci, accumsan ac orci ac, hendrerit lobortis risus. Phasellus eu ornare enim.',
        ownerContact: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque orci orci, accumsan ac orci ac, hendrerit lobortis risus. Phasellus eu ornare enim.',
idnumber:""
    },
    {
        id: 4,
        name: 'Ann',
        type: 'papuga',
        breed: "",
        age: 1,
        color: "",
        medicalHistory: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque orci orci, accumsan ac orci ac, hendrerit lobortis risus. Phasellus eu ornare enim.',
        other: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque orci orci, accumsan ac orci ac, hendrerit lobortis risus. Phasellus eu ornare enim.',
        ownerContact: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque orci orci, accumsan ac orci ac, hendrerit lobortis risus. Phasellus eu ornare enim.',
idnumber:""
    }
];

const calculateNextId = list => ((list || []).slice(-1)[0] ?.id ?? 0) + 1;

export const getData = () => Promise.resolve(PATIENTS);

export const addDoctor = doctor => {
    PATIENTS = [...PATIENTS, ({ ...doctor, id: calculateNextId(PATIENTS) })];
    return Promise.resolve();
};