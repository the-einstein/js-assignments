import _ from 'lodash';

function component() {
    const element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  const elemen = document.createElement('dev');
  elemen.innerHTML = "Hello";
    return elemen;

  }
  
  document.body.appendChild(component());