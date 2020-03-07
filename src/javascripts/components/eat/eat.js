import utils from '../../helpers/utils';

let full = 100;

const eatDomStringBuilder = () => {
  let domString = '';
  domString += '<h2>Eat</h2>';
  domString += '<button id="healthy-food-button">Healthy Food</button><br>';
  domString += '<button id="unhealthy-food-button">Unhealthy Food</button><br>';
  domString += `${full}`;
  utils.printToDom('eat', domString);
  $('#healthy-food-button').click(() => {
    if (full <= 90 && full > 0) {
      full += 10;
      console.error(full);
    } else if (full < 89) {
      full = 100;
      console.error(full);
    }
    eatDomStringBuilder(full);
  });
  $('#unhealthy-food-button').click(() => {
    if (full <= 100 && full > 3) {
      full -= 15;
      console.error(full);
      eatDomStringBuilder(full);
    }
  });
};

export default { eatDomStringBuilder };
