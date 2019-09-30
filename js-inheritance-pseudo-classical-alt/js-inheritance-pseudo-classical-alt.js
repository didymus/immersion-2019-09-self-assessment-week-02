// We've provided `makeHorse` and `makeFlyingHorse` for you, written using the
// functional pattern. Your task is to rewrite these classes to use the
// pseudoclassical pattern. They should have all the same methods as the
// objects returned from the maker functions except in pseudo classical style.
// You must be able to use your new functions to create new horse instances,
// just like this:
//
//   const myHorse = new Horse();
//   const myFlyingHorse = new FlyingHorse();
//

// DO NOT MODIFY FUNCTIONS 'makeHorse' AND 'makeFlyingHorse'
// USE THE CONSTRUCTOR FUNCTIONS LOCATED AT THE END OF THIS FILE

const makeHorse = function(name) {
  const result = {};
  result.name = name;
  result.goSomewhere = function(destination) {
    return name + ' is galloping to ' + destination + '!';
  };
  return result;
};

const makeFlyingHorse = function(name, color) {
  const result = makeHorse(name);
  const oldGoSomewhere = result.goSomewhere;

  result.color = color;
  result.goSomewhere = function(destination, milesToDestination) {
    if (milesToDestination < 10) {
      return oldGoSomewhere(destination);
    } else {
      return name + ' is flying to ' + destination + '!';
    }
  };

  return result;
};

// YOUR WORK GOES BELOW
// Here's some starter code to get you going!
// Do not use the ES6 `class` keyword; use ES5 to create your classes.

const Horse = function(name) {
  this.name = name;
  this.goSomewhere = function (destination) {
    return name + ' is galloping to ' + destination + '!';
  };
};


const FlyingHorse = function(name, color) {
  Horse.call(this, name);
  const oldGoSomewhere = this.goSomewhere;
  this.color = color;
  this.goSomewhere = function (destination, milesToDestination) {
    if (milesToDestination < 10) {
      return oldGoSomewhere(destination);
    } else {
      return name + ' is flying to ' + destination + '!';
    }
  };
};




window.makeHorse = makeHorse;
window.makeFlyingHorse = makeFlyingHorse;
window.Horse = Horse;
window.FlyingHorse = FlyingHorse;
