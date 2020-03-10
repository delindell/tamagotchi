import utils from '../../helpers/utils';
import './sleep.scss';

let energy = 50;

const energyDomStringBuilder = () => {
  let domString = '';
  domString += '<h2>Sleep</h2>';
  domString += '<div id="button-group">';
  domString += '<button id="nap-button">Take a Nap</button><br>';
  domString += '<button id="deep-slumber-button">Deep Slumber</button><br>';
  domString += '</div>';
  domString += `<span id="score">${energy}</span>`;
  utils.printToDom('sleep', domString);
  $('#nap-button').click(() => {
    if (energy <= 50) {
      energy += 50;
    } else {
      energy = 100;
    }
    energyDomStringBuilder(energy);
  });
  $('#deep-slumber-button').click(() => {
    if (energy <= 40) {
      energy += 60;
    } else {
      energy = 100;
    }
    energyDomStringBuilder(energy);
  });
};

export default { energyDomStringBuilder };
