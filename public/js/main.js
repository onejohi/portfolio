const generateRandomRange = (min, max) => {
  return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min)) + Math.ceil(min));
}

const classExists = ({ elementId, backgroundClasses }) => {
  const { classList } = document.getElementById(elementId);
  const navActiveClasses = [];
  classList.forEach(navClass => navActiveClasses.push(navClass));
  return navActiveClasses.find(activeClass => backgroundClasses.includes(activeClass));
}

const removeClass = ({ elementId, className }) => {
  document.getElementById(elementId).classList.remove(className);
}

const addClass = ({ elementId, className }) => {
  document.getElementById(elementId).classList.add(className);
};

const matchRandomNumberWithClass = () => {
  const backgrounds = ['bg-primary', 'bg-secondary', 'bg-success', 'bg-dark', 'bg-danger', 'bg-warning'];
  const index = generateRandomRange(0, (backgrounds.length - 1));
  const bgSetTo = classExists({ elementId: 'sideNav', backgroundClasses: [ ...backgrounds ]});
  if (bgSetTo) {
    removeClass({ elementId: 'sideNav', className: bgSetTo });
    addClass({ elementId: 'sideNav', className: backgrounds[index] });
  }
  if (bgSetTo === undefined) {
    addClass({ elementId: 'sideNav', className: backgrounds[0] });
  }
}

setInterval(() => {
  matchRandomNumberWithClass();
}, 10000);