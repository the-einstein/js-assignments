import _ from 'lodash';

function component() {
    
  const main = document.createElement('div');
  main.innerHTML = 'MAIN';
  const search = document.createElement('div');
  search.innerHTML = 'SEARCH';
  const library = document.createElement('div');
  library.innerHTML = 'LIBRARY';
  const settings = document.createElement('div');
  settings.innerHTML='SETTINGS';
  return main;


  }
  
  document.body.appendChild(component());