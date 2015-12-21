
function createMainView(title) {
  let body = document.body;
  let scriptTag = document.getElementsByTagName('script')[0];

  let topContainer = document.createElement('div');
  let midContainer = document.createElement('div');
  let btmContainer = document.createElement('div');
  let header = document.createElement('div');
  let headTitle = document.createElement('h1');

  topContainer.classList.add('main-container', 'top');
  midContainer.classList.add('container', 'middle');
  btmContainer.classList.add('container', 'bottom');
  header.className = 'jumbotron main-header';
  headTitle.className = 'main-header-title';

  headTitle.innerHTML = title;
  header.appendChild(headTitle);

  topContainer.appendChild(header);

  body.insertBefore(topContainer, scriptTag);
  body.insertBefore(midContainer, scriptTag);
  body.insertBefore(btmContainer, scriptTag);

}

export default createMainView;
