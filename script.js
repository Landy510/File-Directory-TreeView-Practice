const folderLevel1El = document.querySelector('.folder-level-name');
folderLevel1El.addEventListener('click', function (evt) {
  return processClassList(evt);
});

const folderLevel2El = document.querySelector('.folder-level-2-name');
folderLevel2El.addEventListener('click', function (evt) {
  return processClassList(evt);
});

function processClassList(evt) {
  evt.stopPropagation();
  if (!evt.currentTarget.parentElement.classList.contains('is-open')) {
    evt.currentTarget.parentElement.classList.add('is-open');
    evt.currentTarget.children[0].classList.add('is-close');
    evt.currentTarget.children[0].classList.remove('is-open');
    evt.currentTarget.children[1].classList.add('is-open');
    evt.currentTarget.children[1].classList.remove('is-close');
  } else {
    evt.currentTarget.parentElement.classList.remove('is-open');
    evt.currentTarget.children[0].classList.add('is-open');
    evt.currentTarget.children[0].classList.remove('is-close');
    evt.currentTarget.children[1].classList.remove('is-open');
    evt.currentTarget.children[1].classList.add('is-close');
  }
}
