import Notiflix from 'notiflix';
export function fetchCountries(name) {
  const URL = `https://restcountries.com/v3.1/name/${name}`;
  return fetch(URL, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(response => {
      if (!response.ok)  Notiflix.Notify.failure("Oops, there is no country with that name");
      return response.json();
    })
    .then(body => {
      return body;
    })
    .catch(error => console.error(error));
}