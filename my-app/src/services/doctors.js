let DOCTORS = [
    {
      id: 1,
      firstname: "wielu lekarzy",
      surname: "-\\-",
      vetClinic: "Przychodnia weterynaryjna VetCare, Gdynia"
    },
    {
      id: 2,
      firstname: "Agnieszka",
      surname: "Antczak",
      vetClinic: "Przychodnia CrisVet Gdynia, ul. Warszawska"
    },
    {
      id: 3,
      firstname: "Sylwana",
      surname: "Rzepczyk",
      vetClinic: "Przychodnia VetCentrum Gdynia, ul. Chylońska 230"
    }
  ];
  
  const calculateNextId = list => ((list || []).slice(-1)[0]?.id ?? 0) + 1;

  export const getData = () => Promise.resolve(DOCTORS);
  
  export const addDoctor = doctor => {
    DOCTORS = [...DOCTORS, ({ ...doctor, id: calculateNextId(DOCTORS)})];
    return Promise.resolve();
  };