import utils from '../helpers/utils'
import tamagotchiData from '../helpers/data/tamagotchiData'

const playDomStringBuilder = () => {
  let domString = '';
  domString += '<h2>Play</h2>';
  domString += '<button id="super-fun-activity-button">Super Fun Activity</button><br>';
  domString += '<button id="slight-fun-activity-button">Slight Fun Activity</button><br>';
  domString += `${tamagotchiData.getTamagotchiInfo().play}`;
  utils.printToDom('play', domString);
  $('#super-fun-activity-button').click(() => {
    if (full <= 90 && full > 0) {
      full += 10;
      console.error(full);
    } else if (full < 89) {
      full = 100;
      console.error(full);
      playDomStringBuilder();
    };
  $('#slight-fun-activity-button').click(() => {
    if (full <= 100 && full > 3) {
      full -= 15;
      console.error(full);
      playDomStringBuilder();
    };
});

export default { playDomStringBuilder };
