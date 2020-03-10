import utils from '../../helpers/utils';
import './play.scss';

let play = 50;

const playDomStringBuilder = () => {
  let domString = '';
  domString += '<h2>Play</h2>';
  domString += '<div id="button-group">';
  domString += '<button id="super-fun-activity-button">Super Fun Activity</button><br>';
  domString += '<button id="slight-fun-activity-button">Slight Fun Activity</button><br>';
  domString += '</div>';
  domString += `<span id="score">${play}</span>`;
  utils.printToDom('play', domString);
  $('#super-fun-activity-button').click(() => {
    if (play <= 50) {
      play += 50;
    } else {
      play = 100;
    }
    playDomStringBuilder(play);
  });
  $('#slight-fun-activity-button').click(() => {
    if (play <= 97) {
      play += 3;
    } else if (play <= 3) {
      play = 0;
    }
    playDomStringBuilder(play);
  });
};


export default { playDomStringBuilder };
