import utils from '../../helpers/utils';
import './eat.scss';

let full = 100;

const eatDomStringBuilder = () => {
  let domString = '';
  domString += '<h2>Eat</h2>';
  domString += '<div id="button-group">';
  domString += '<button id="healthy-food-button">Healthy Food</button><br>';
  domString += '<button id="unhealthy-food-button">Unhealthy Food</button><br>';
  domString += '</div>';
  domString += `<span id="score">${full}</span>`;
  utils.printToDom('eat', domString);
  $('#healthy-food-button').click(() => {
    if (full <= 90 && full > 0) {
      full += 10;
    } else if (full >= 90) {
      full = 100;
    }
    eatDomStringBuilder(full);
  });
  $('#unhealthy-food-button').click(() => {
    if (full > 3) {
      full -= 3;
    } else {
      full = 0;
    }
    eatDomStringBuilder(full);
  });
};

export default { eatDomStringBuilder };
