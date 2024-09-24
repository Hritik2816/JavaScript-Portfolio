document.querySelectorAll('a[href = "#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelectorAll(this.getAttribute('href').scrollIntoView({
      'behavior': smooth,
    }))
  });
})

const subBtns = document.querySelectorAll('.sub-btn');

subBtns.forEach(btn => {
  btn.addEventListener("click", function () {
    alert("work in progress");
  });
});