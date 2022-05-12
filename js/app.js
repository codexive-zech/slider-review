import people from './data.js';
import getElement from '../utils/getElement.js';

const sliderContainer = getElement('.slider-container');
const prevBtn = getElement('.prev-btn');
const nextBtn = getElement('.next-btn');

// a func to display each person review
const displayPersonReview =
  // iterate over the people data {object} which was imported
  people
    .map((person, reviewIndex) => {
      // destructed the properties form the people object which is need to be displayed in the HTML
      const { name, job: title, text, img } = person;
      //   getting all index position of the people object array and by default give it to position next
      let position = 'next';
      //   checking to see if the index of people object array is 0
      if (reviewIndex === 0) {
        //   let that review have the position of active
        position = 'active';
      }
      //  checking to see if the index of people object array is the last review
      else if (reviewIndex === people.length - 1) {
        //   let that review have the position of last
        position = 'last';
      }
      //  dynamically return and display each single slider and added the destructured properties into the need HTML space
      return `<!-- Single slide -->
        <article class="slide ${position}">
          <!-- img -->
          <img
            src="${img}"
            alt="${name}"
            class="img"
          />
          <!-- name -->
          <h4>${name}</h4>
          <!-- job title -->
          <p class="title">${title}</p>
          <!-- job info -->
          <p class="text">
            ${text}
          </p>
          <!-- quote -->
          <div class="quote-icon">
            <i class="fas fa-quote-right"></i>
          </div>
        </article>
        <!-- End of Single slide -->`;
    })
    .join('');
// dynamically inserting each person review in the HTML
sliderContainer.innerHTML = displayPersonReview;

// having a func expression that take in most functionality for prev and next button
const startSlider = (type) => {
  // selecting all three classes that was added dynamically into the HTML using the position of the review index
  const active = getElement('.active');
  const last = getElement('.last');
  // using let since value changes getting the next review after the class of active
  let next = active.nextElementSibling;
  // if the is not more data for next in the people object array (last person review in the people data) i.e when next is detail does not exist
  if (!next) {
    // let next take in a new value of the first review detail in the people object array
    next = sliderContainer.firstElementChild;
  }

  // removing each classes that was added dynamically into the HTML from the position of the review index and pass in the array bracket because they are multiple classes
  active.classList.remove(['active']);
  last.classList.remove(['last']);
  next.classList.remove(['next']);

  if (type === 'prev') {
    // adding each classes to elements by their side, swapping classes
    // when clicked the active element will be next
    active.classList.add('next');
    // when clicked the last element will be active
    last.classList.add('active');
    // getting the previous element after last and setting it as next
    next = last.previousElementSibling;
    // if the is not more data for next in the people object array (first person review in the people data) i.e when next is detail does not exist
    if (!next) {
      next = sliderContainer.lastElementChild;
    }
    // removing the class
    next.classList.remove(['next']);
    // when clicked the next element will be last
    next.classList.add('last');
    return;
  }

  // adding each classes to elements by their side, swapping classes
  // when clicked the active element will be last
  active.classList.add('last');
  // when clicked the last element will be next
  last.classList.add('next');
  // when clicked the next will be active
  next.classList.add('active');
};

// listening for a click event on the next button
nextBtn.addEventListener('click', () => {
  // invoking the start slider func
  startSlider();
});

// listening for a click event on the prev button
prevBtn.addEventListener('click', () => {
  // invoking the start slider func
  startSlider('prev');
});
