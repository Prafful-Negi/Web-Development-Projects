(function ($) {
    "use strict";

     // Date and time picker
     $('.date').datetimepicker({
        format: 'L'
    });
    $('.time').datetimepicker({
        format: 'LT'
    });
})


// function datee() {
//     document.getElementById("date").innerHTML = datetimepicker;
//   }

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  // for (i = 0; i < dots.length; i++) {
  //   dots[i].className = dots[i].className.replace(" active", "");
  // }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


// ---------------------------------------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', function() {
  const carList = document.querySelector('.car-list');

  // Mock data for featured cars
  const featuredCars = [
      { name: 'Toyota Camry', image: 'car1.jpg', price: '$50/day' },
      { name: 'Honda Accord', image: 'car2.jpg', price: '$55/day' },
      { name: 'BMW 3 Series', image: 'car3.jpg', price: '$70/day' },
  ];

  // Populate featured cars
  featuredCars.forEach(car => {
      const carItem = document.createElement('div');
      carItem.classList.add('car-item');

      const carImage = document.createElement('img');
      carImage.src = `images/${car.image}`;
      carImage.alt = car.name;
      
      const carName = document.createElement('h3');
      carName.textContent = car.name;
      
      const carPrice = document.createElement('p');
      carPrice.textContent = `Price: ${car.price}`;

      carItem.appendChild(carImage);
      carItem.appendChild(carName);
      carItem.appendChild(carPrice);

      carList.appendChild(carItem);
  });
});