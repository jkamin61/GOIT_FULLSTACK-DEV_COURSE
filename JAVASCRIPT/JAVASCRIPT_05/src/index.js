import './css/styles.css';
import { fetchCountries } from './fetchCountries';
import Notiflix from 'notiflix';
import _ from 'lodash';

const DEBOUNCE_DELAY = 300;
const input = document.querySelector('#search-box');
const list = document.querySelector('.country-list');
const block = document.querySelector('.country-info');
input.addEventListener('input', _.throttle((event) => {
  const finalCountryName = input.value.trim();
  if (!finalCountryName) {
    list.innerHTML = '';
    block.innerHTML = '';
    return;
  }
  if (finalCountryName) {
    fetchCountries(finalCountryName)
      .then(body => {
        console.log(body);
        if (body.length > 10) {
          Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
        } else {
          list.innerHTML = '';
          for (const element of body) {
            const countryInformation = document.createElement('li');
            countryInformation.style.display = 'flex';
            countryInformation.style.flexDirection = 'row';
            countryInformation.style.alignItems = 'center';
            countryInformation.style.gap = '10px';
            countryInformation.style.fontSize = '24px';
            countryInformation.innerHTML = `<img src='${element.flags.svg}' height='40px' width='40px'> <p><b>${element.name.common}</b></p>`;
            list.append(countryInformation);
            if (body.length === 1) {
              const languages = Object.values(element.languages).join(', ');
              block.innerHTML = `<p><b>Capital:</b> ${element.capital}</p> <p><b>Population:</b> ${element.population}</p> <p><b>Languages:</b> ${languages}</p>`;
            } else {
              block.innerHTML = '';
            }
          }
        }
      })
      .catch(error => console.error(error))
      .finally(() => console.log('Request finished'));
  }
}, DEBOUNCE_DELAY));
