let PATIENTS = [
    {
        id: 1,
        name: "Dąbek",
        species: "kot",
        breed: "europejska",
        age: 12,
        color: "biały, czarny",
        owner: "Wioletta Pisała - PKDT, Natalia Nowak - dom tymczasowy",
        idnumber: "brak"

    },
    {
        id: 2,
        name: "Dąbek",
        species: "kot",
        breed: "europejska",
        age: 12,
        color: "biały, czarny",
        owner: "Wioletta Pisała - PKDT, Natalia Nowak - dom tymczasowy",
        idnumber: "brak"

    }, {
        id: 3,
        name: "Dąbek",
        species: "kot",
        breed: "europejska",
        age: 12,
        color: "biały, czarny",
        owner: "Wioletta Pisała - PKDT, Natalia Nowak - dom tymczasowy",
        idnumber: "brak"

    }, {
        id: 4,
        name: "Dąbek",
        species: "kot",
        breed: "europejska",
        age: 12,
        color: "biały, czarny",
        owner: "Wioletta Pisała - PKDT, Natalia Nowak - dom tymczasowy",
        idnumber: "brak"

    },
];

const calculateNextId = list => ((list || []).slice(-1)[0] ?.id ?? 0) + 1;

export const getData = () => Promise.resolve(PATIENTS);

export const addDoctor = doctor => {
    PATIENTS = [...PATIENTS, ({ ...doctor, id: calculateNextId(PATIENTS) })];
    return Promise.resolve();
};