$('.owl-carousel').owlCarousel({
     loop: true,
     margin: 45,
     nav: true,
     responsive: {
          0: {
               items: 1,
               nav: false
          },
          650: {
               items: 2,
               margin: 30,
          },
          800: {
               items: 3,
               margin: 35
          },
          1000: {
               items: 4
          }
     }
})