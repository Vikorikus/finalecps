//ищем кнопки и слайды
const btnShowAll = document.querySelectorAll('.btn-show-all')
const slidesBrands = document.querySelectorAll('.brands__slide')
const slidesTechniques = document.querySelectorAll('.repair-technique__slide')
//перебираем коллекцию и добавляем обработчик
for (let i = 0; i < btnShowAll.length; i++) {
  //кнопка для брендов
  if (i === 0) {
    btnShowAll[i].addEventListener('click', () => {
      showSlidesBrands()
      btnShowAll[i].classList.toggle('btn-show-all--pressed')

      if (btnShowAll[i].classList.contains('btn-show-all--pressed')) {
        btnShowAll[i].innerHTML = 'Закрыть'
      } else {
        btnShowAll[i].innerHTML = 'Показать все'
      }
    })
  }

  //кнопка для техники
  if (i === 1) {
    btnShowAll[i].addEventListener('click', () => {
      showSlidesTechniques()
      btnShowAll[i].classList.toggle('btn-show-all--pressed')

      if (btnShowAll[i].classList.contains('btn-show-all--pressed')) {
        btnShowAll[i].innerHTML = 'Закрыть'
      } else {
        btnShowAll[i].innerHTML = 'Показать все'
      }
    })
  }
}
//свайпер для брендов
function showSlidesBrands() {
  if (window.innerWidth >= 768) {
    for (let i = 0; i < slidesBrands.length; i++) {
      slidesBrands[i].classList.toggle('brands-slide--visible')
    }
  }
}

//свайпер для техники
function showSlidesTechniques() {
  for (let i = 0; i < slidesTechniques.length; i++) {
    slidesTechniques[i].classList.toggle('repair-technique-slide--visible')
  }
}
