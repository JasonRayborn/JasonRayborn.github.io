// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
var males = _.filter(array, function(personObj, index, collection) {
    if (personObj["gender"] === "male") {
        return true;
    } else {
        return false;
    }
});
return males.length;
};

var femaleCount = function(array) {
    return _.reduce(array, function(ladies, personObj) {
        if (personObj.gender === "female") {
            ladies++;
        }
        return ladies;
    }, 0);
};

var oldestCustomer = function(array) {
    let oldObj;
    let oldestCustomer = _.reduce(array, function(perviousReturn, currentElement, currentIndex) {
        if (perviousReturn < currentElement.age) {
            perviousReturn = currentElement.age;
            oldObj = currentElement;
        }
        return perviousReturn;
    }, 0);
    return oldObj.name;
}

var youngestCustomer = function(array) {
    let youngestAge = 300;
    let youngestName = "";
    _.each(array, function(personObj) {
        if (personObj.age < youngestAge) {
            youngestAge = personObj.age;
            youngestName = personObj.name;
            
        }
        
    })
    return youngestName;
}


var averageBalance = function(array) {
    // Assign reduce to balance variable
   let balance = _.reduce(array, function(acc, curr) {
       // Used parseFloat to convert number string to number and replace
       // special chars 
        let custbal = parseFloat(curr.balance.replace("$", "").replace(",", ""));
        //assign custbal to alter curr 
        return acc + custbal;
        
    }, 0)
    let avg = balance / array.length;
    return avg;
}

var firstLetterCount = function(array, letter) {
    return array.reduce(function(acc, curr) {
        if (curr.name[0].toLowerCase() === letter.toLowerCase()) {
            acc++;
        }
        return acc;
    }, 0);
}

var friendFirstLetterCount = function(array, customer, letter) {
    let member = array.find(function(personObj) {
        return personObj.name.toLowerCase() === customer.toLowerCase();
    });
    return member.friends.reduce(function(acc, curr) {
        if (curr.name[0].toLowerCase() === letter.toLowerCase()) {
            acc++;
        }
        return acc;
    }, 0);
};

var friendsCount = function(array, name) {
    let friends = [];
    
    _.each(array, function(person) {
        _.each(person.friends, function(friend) {
            if (name === friend.name) {
                friends.push(person.name);
            }
        });
    });
    return friends;
};

var topThreeTags = function(array) {
  let objArray = [];
   let objectCount = array.map(function(personObj){
        return personObj.tags
    }).reduce(function(acc, curr) {
        return acc.concat(curr)
    }).reduce(function(acc, curr) {
        if (!acc[curr]) {
            acc[curr] = 1
        } else {
            acc[curr]++
        }
        return acc;
    }, {})
  for (let key in objectCount) {
    let newObj = {}
    newObj.name = key;
    newObj.count = objectCount[key]
    objArray.push(newObj)
  } 
let newArray = objArray.sort(function(a,b){
  return b.count - a.count;
}).slice(0,3)
let top3Tags = newArray.map(tag => tag.name)
return top3Tags
}

var genderCount = array => array.map(person => 
  person.gender).reduce((genderObj, num) => {
  if (!genderObj[num]) {
    genderObj[num] = 1
  } else {
    genderObj[num] += 1
  }
  return genderObj
},{})

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
