const buttons = document.querySelectorAll('button'),
  toaste = document.querySelector('.toaste');
(closeIcon = document.querySelector('.close')), (progress = document.querySelector('.progress'));

let timer1, timer2;

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    toaste.classList.add('active');
    progress.classList.add('active');

    timer1 = setTimeout(() => {
      toaste.classList.remove('active');
    }, 5000);

    timer2 = setTimeout(() => {
      progress.classList.remove('active');
    }, 5300);
  });
});

closeIcon.addEventListener('click', () => {
  toaste.classList.remove('active');

  setTimeout(() => {
    progress.classList.remove('active');
  }, 300);

  clearTimeout(timer1);
  clearTimeout(timer2);
});

let navbar = document.querySelector('.navbar');
