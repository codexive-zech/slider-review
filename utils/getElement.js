// functionality to check the class and id of an element that will take in effect
const getElement = (selection) => {
  // getting the HTML element that will take in effect
  const element = document.querySelector(selection);
  //   checking to see if the element with the class or id does exist
  if (element) {
    //   the element is returned back
    return element;
  } else {
    //   give out a descriptive error when the class or id of the element does not exist
    throw new Error(`Selection ${selection} does not exist`);
  }
};

export default getElement;
