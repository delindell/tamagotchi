import utils from '../../helpers/utils';

let strength = 100;

const strengthDomStringBuilder = () => {
  let domString = '';
  domString += '<h2>Fight</h2>';
  domString += '<button id="running-away-button">Running Away (bravely)</button><br>';
  domString += '<button id="commiting-violence-button">Commiting Violence</button><br>';
  domString += `${strength}`;
  utils.printToDom('fight', domString);
  $('#running-away-button').click(() => {
    if (strength <= 99) {
      strength += 1;
    } else {
      strength = 100;
    }
    strengthDomStringBuilder(strength);
  });
  $('#commiting-violence-button').click(() => {
    if (strength <= 100 && strength > 10) {
      strength -= 10;
    } else if (strength <= 10) {
      strength = 0;
    }
    strengthDomStringBuilder(strength);
  });
};

export default { strengthDomStringBuilder };
