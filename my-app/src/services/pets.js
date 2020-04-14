let PATIENTS = [
    {
        id: 1,
        name: 'Dąbek',
        type: 'Kot',
        species: "kot",
        breed: "europejska",
        age: '12',
        weight: '6 kg',
        color: "biały, czarny",
        medicalHistory: 'Przewlekła niewydolność nerek, przeybyty kostniakomięsak (lewe ucho), uszkodzenie kręgosłupa, złamany ogon, uszkodzenie nerwów dna miednicy, problemy z oddawaniem moczu.',
        other: 'kot przez lata był wolnożyjący, brak informacji o alergiach, kot stosuje dietę dla kotów chorych na pnn',
        ownerContact: 'Pomorski koci dom tymczasowy: Wioletta Pisała, Opiekun z domu tymczasowego: Natalia Nowak',
        idnumber: "brak"

    },
];

const calculateNextId = list => ((list || []).slice(-1)[0] ?.id ?? 0) + 1;

export const getData = () => Promise.resolve(PATIENTS);

export const addDoctor = doctor => {
PATIENTS = [...PATIENTS, ({ ...doctor, id: calculateNextId(PATIENTS) })];
return Promise.resolve();
};