let DOCTORS = [
    {
        id: 1,
        name: 'Gasprid',
        type: 'tabletki',
        dosage: '1 tabletka dziennie',
        other: '',
        date:'',
        doctor: 'Przychodnia Vet Care',

    }, {
        id: 2,
        name: 'Semintra',
        type: 'roztwór',
        dosage: '3 ml dziennie, doustnie',
        other: 'Początkowo dawkowano 6 ml, w marcu, po badaniu ciśnienia, zmieniono dawkę na 3 ml',
        date:' 12.12.2019 - 26.03.2020',
        doctor: 'Przychodnia Vet Care',



    },
    {
        id: 3,
        name: 'Neoplasmoxan',
        type: 'tabletki',
        dosage: '',
        other: 'suplement',
        date:'',
        doctor: ''




    },
    {
        id: 4,
        name: 'Enroton Flavour',
        type: 'tabletki',
        dosage: '',
        other: '',
        date:'',
        doctor: 'dr Agnieszka Antczak',


    }
    ,
    {
        id: 5,
        name: 'Cystaid Plus',
        type: 'tabletki',
        dosage: '2 razy dziennie po 1 tabletce',
        other: '',
        date:'',
        doctor: 'Przychodnia Vet Care',


    }
    ,
    {
        id: 6,
        name: 'Flora Balance',
        type: 'tabletki',
        dosage: '',
        other: 'suplement',
        date:'',
        doctor: '',

    }
    ,
    {
        id: 7,
        name: 'Nefrokrill',
        type: 'tabletki',
        dosage: '',
        other: 'suplement',
        date:'',
        doctor: '',


    },
    {
        id: 8,
        name: 'Kalmvet',
        type: 'tabletki',
        dosage: '1 tabletka dziennie, doustnie lub do jedzenia',
        other: '',
        date:'',
        doctor: 'Przychodnia Vet Care'

    }, {
        id: 9,
        name: 'CBD',
        type: 'proszek',
        dosage: '0.5 saszetki dziennie, do jedzenia',
        other: '',
        date:'',
        doctor: '',


    },
    {
        id: 10,
        name: 'Płyn ringera',
        type: 'roztwór',
        dosage: '100ml co dwa dni, podskórnie',
        other: '',
        date:'',
        doctor: 'Przychodnia Vet Care',


    },
    {
        id: 11,
        name: 'Gabapentyna',
        type: 'tabletki',
        dosage: '1/3 tabletki na dzień',
        other: '',
        date:'',
        doctor: 'dr Sylwana Rzepczyk'


    }
    , {
        id: 12,
        name: 'Clavaseptin',
        type: 'tabletki',
        dosage: '1 tabletka rano, jedna wieczorem',
        other: '',
        date:'',
        doctor: 'dr Sylwana Rzepczyk'


    }
    , {
        id: 13,
        name: 'Hyalutidin',
        type: 'roztwór',
        dosage: '2 ml dziennie, doustnie',
        other: '',
        date:'',
        doctor: 'dr Sylwana Rzepczyk'


    }
];

const calculateNextId = list => ((list || []).slice(-1)[0] ?.id ?? 0) + 1;

export const getData = () => Promise.resolve(DOCTORS);

export const addDoctor = doctor => {
    DOCTORS = [...DOCTORS, ({ ...doctor, id: calculateNextId(DOCTORS) })];
    return Promise.resolve();
};