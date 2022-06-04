const toggleBtns = document.querySelectorAll('.faq-toggle');

toggleBtns.forEach(btn => {
  // console.log(btn);
  btn.addEventListener('click', event => {
    console.log('click');
  });
});
