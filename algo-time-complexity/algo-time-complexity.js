/**
 * Identify the Big-O time complexity of the following functions,
 * relative to the size of the input
 */

const TimeComplexity = {
  FIX_ME: 'wrong answer',
  CONSTANT: 'constant',
  LOGARITHMIC: 'logarithmic',
  LINEAR: 'linear',
  QUADRATIC: 'quadratic',
  EXPONENTIAL: 'exponential',
};


// TODO: Update this constant and explain your reasoning
const sortedIndexOfTimeComplexity = TimeComplexity.FIX_ME;
const sortedIndexOf = (array, targetElement) => {
  let minIndex = 0;
  let maxIndex = array.length - 1;
  let currentIndex;
  let currentElement;

  while (minIndex <= maxIndex) {
    currentIndex = Math.floor((minIndex + maxIndex) / 2);
    currentElement = array[currentIndex];

    if (currentElement < targetElement) {
      minIndex = currentIndex + 1;
    } else if (currentElement > targetElement) {
      maxIndex = currentIndex - 1;
    } else {
      return currentIndex;
    }
  }

  return -1;
};


// TODO: Update this constant and explain your reasoning
const findDuplicatesTimeComplexity = TimeComplexity.FIX_ME;
const findDuplicates = (string) => {
  const tracker = {};
  const result = [];
  for (let i = 0; i < string.length; i++) {
    const letter = string[i];
    tracker[letter] = tracker[letter] || 0;

    if (tracker[letter] === 1) {
      result.push(letter);
    }

    tracker[letter] += 1;
  }
  return result;
};


// TODO: Update this constant and explain your reasoning
const bruteForcePasswordTimeComplexity = TimeComplexity.FIX_ME;
const bruteForcePassword = (max) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  const findPassword = (attempt) => {
    if (attempt.length > 0) {
      console.log('Trying ' + attempt);
    }
    if (attempt.length <= max) {
      for (let i = 0; i < alphabet.length; i++) {
        findPassword(attempt.concat(alphabet[i]));
      }
    }
  };

  findPassword('');
};


// TODO: Update this constant and explain your reasoning
const hasDuplicatesTimeComplexity = TimeComplexity.FIX_ME;
const hasDuplicates = (array) => {
  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    if (array.slice(i + 1).indexOf(item) !== -1) {
      return true;
    }
  }
  return false;
};


// TODO: Update this constant and explain your reasoning
const removeLastThreeElementsTimeComplexity = TimeComplexity.FIX_ME;
const removeLastThreeElements = (array) => {
  let numberOfElementsToRemove = 3;

  while (numberOfElementsToRemove-- > 0) {
    array.pop();
  }
};


// TODO: Update this constant and explain your reasoning
const increasingStepTimeComplexity = TimeComplexity.FIX_ME;
const increasingStep = (number) => {
  for (let i = 1; i < number; i *= 2) {
    console.log(i);
  }
};


// TODO: Update this constant and explain your reasoning
const makeRangeTimeComplexity = TimeComplexity.FIX_ME;
const makeRange = (array) => {
  array.forEach((item) => {
    for (let i = 1; i < 10; i++) {
      console.log(item + i);
    }
  });
};
