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
      //  dynamically return and display each single slider and added the destructured properties into the need HTML space

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
