let brandsSwiper = null
let techniqueSwiper = null

function initSwipers() {
  // НАСТРОЙКИ для всех свайперов
  const swiperSettings = {
    slidesPerView: 1.3,
    spaceBetween: 0,
    breakpoints: {
      400: { slidesPerView: 1.6 },
      500: { slidesPerView: 1.8 },
      600: { slidesPerView: 2.2 },
      700: { slidesPerView: 2.5 },
      767: { slidesPerView: 2.8 },
    },
  }

  // === Свайпер брендов ===
  const brandsContainer = document.querySelector('.brands__swiper')
  if (brandsContainer) {
    if (window.innerWidth <= 768) {
      if (!brandsSwiper) {
        brandsSwiper = new Swiper('.brands__swiper', {
          ...swiperSettings,
          pagination: {
            el: '.brands__pagination',
            clickable: true,
          },
        })
      }
    } else {
      if (brandsSwiper) {
        brandsSwiper.destroy(true, true)
        brandsSwiper = null
      }
    }
  }

  // === Свайпер техники ===
  const techniqueContainer = document.querySelector('.repair-technique__swiper')
  if (techniqueContainer) {
    if (window.innerWidth <= 768) {
      if (!techniqueSwiper) {
        techniqueSwiper = new Swiper('.repair-technique__swiper', {
          ...swiperSettings,
          pagination: {
            el: '.repair-technique__pagination',
            clickable: true,
          },
        })
      }
    } else {
      if (techniqueSwiper) {
        techniqueSwiper.destroy(true, true)
        techniqueSwiper = null
      }
    }
  }
}

// инициализация свайперов
window.addEventListener('resize', initSwipers)
