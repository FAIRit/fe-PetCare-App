const BASE_URL = 'https://petcare-app-264d9.firebaseio.com/';

function getDoctors() {
  return fetch(`${BASE_URL}/doctors.json`)
    .then(response => response.json())
    .then(data => {
      const keys = Object.keys(data);
      const doctors = keys.map(key => {
        return {
          id: key,
          ...data[key]
        };
      });
      return Promise.resolve(doctors);
    });
}


function getHistory() {
    return fetch(`${BASE_URL}/history.json`)
      .then(response => response.json())
      .then(data => {
        const keys = Object.keys(data);
        const history = keys.map(key => {
          return {
            id: key,
            ...data[key]
          };
        });
        return Promise.resolve(history);
      });
  }
  function getPatients() {
    return fetch(`${BASE_URL}/patients.json`)
      .then(response => response.json())
      .then(data => {
        const keys = Object.keys(data);
        const history = keys.map(key => {
          return {
            id: key,
            ...data[key]
          };
        });
        return Promise.resolve(history);
      });
  }
  function getMedicines() {
    return fetch(`${BASE_URL}/medicines.json`)
      .then(response => response.json())
      .then(data => {
        const keys = Object.keys(data);
        const history = keys.map(key => {
          return {
            id: key,
            ...data[key]
          };
        });
        return Promise.resolve(history);
      });
  }
  function getResults() {
    return fetch(`${BASE_URL}/results.json`)
      .then(response => response.json())
      .then(data => {
        const keys = Object.keys(data);
        const history = keys.map(key => {
          return {
            id: key,
            ...data[key]
          };
        });
        return Promise.resolve(history);
      });
  }
export { getDoctors, getHistory, getPatients, getMedicines, getResults};
