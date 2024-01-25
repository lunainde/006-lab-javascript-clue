// ITERATION 1
// adjust DATA.md file and copy here:

// Suspects Array 

const suspectsArray = [
    {
        firstName: 'Jacob',
        lastName: 'Green',
        occupation: 'Entrepreneur',
        age: 45,
        description: 'He has a lot of connections',
        image: 'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg',
        color: 'green',
    },
    {
        firstName: 'Doctor',
        lastName: 'Orchid',
        occupation: 'Scientist',
        age: 26,
        description: 'PhD in plant toxicology. Adopted daughter of Mr. Boddy',
        image: 'http://www.radiotimes.com/uploads/images/Original/111967.jpg',
        color: 'white',
    },
    {
        firstName: 'Victor',
        lastName: 'Plum',
        occupation: 'Designer',
        age: 22,
        description: 'Billionaire video game designer',
        image: 'https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg',
        color: 'purple',
    },
    {
        firstName: 'Kasandra',
        lastName: 'Scarlet',
        occupation: 'Actor',
        age: 31,
        description: 'She is an A-list movie star with a dark past',
        image: 'https://www.radiotimes.com/uploads/images/Original/111967.jpg',
        color: 'red',
    },
    {
        lastName: 'Peacock',
        firstName: 'Eleanor',
        occupation: 'Socialité',
        age: 36,
        description: 'She is from a wealthy family and uses her status and money to earn popularity',
        image: 'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg',
        color: 'blue',
    },
    {
        firstName: 'Jack',
        lastName: 'Mustard',
        occupation: 'Retired Football player',
        age: 62,
        description: 'He is a former football player who tries to get by on his former glory',
        image: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg',
        color: 'yellow',
    },
];

// Rooms Array

const roomsArray = [
    { name: 'Dining Room' },
    { name: 'Conservatory' },
    { name: 'Kitchen' },
    { name: 'Study' },
    { name: 'Library' },
    { name: 'Billiard Room' },
    { name: 'Lounge' },
    { name: 'Ballroom' },
    { name: 'Hall' },
    { name: 'Spa' },
    { name: 'Living Room' },
    { name: 'Observatory' },
    { name: 'Theater' },
    { name: 'Guest House' },
    { name: 'Patio' },
];

// Weapons Array

const weaponsArray = [
    { name: 'rope', weight: 10 },
    { name: 'knife', weight: 8 },
    { name: 'candlestick', weight: 2 },
    { name: 'dumbbell', weight: 30 },
    { name: 'poison', weight: 2 },
    { name: 'axe', weight: 15 },
    { name: 'bat', weight: 13 },
    { name: 'trophy', weight: 25 },
    { name: 'pistol', weight: 20 },
];


// ITERATION 2
//At the beginning of the game, players shuffle each of the card stacks to create a combination of suspect, weapon and room. This will be the mystery to solve.
// Random selector: to select one element from a card stack randomly. The function should expect an array as an argument and should return a random element from the array.

function selectRandom(suspectsArray) {
    if (suspectsArray.length === 0) {                  
        return undefined;
    //if array is empty ==> undefined
    }
    //Math.floor ==> rounds down to the nearest whole number
    //Math.random() ==> random between 0 and 1
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random ==> Math.floor(Math.random() * max);      ==> max.[length]
    //store new value ==> const randomSuspect
    const randomIndex = Math.floor(Math.random() * suspectsArray.length);
    //return new array(w/randomSuspect)
    return suspectsArray[randomIndex]
}
console.log("Suspect: "+ selectRandom(suspectsArray).firstName);

//because the function selectRandome(){} is already defined above ▲ it is possible replacing the (parametersArray▼):
function pickMystery() {
    return {
        suspect: selectRandom(suspectsArray),
        weapon: selectRandom(weaponsArray),
        room: selectRandom(roomsArray)
    };
  }
  console.log(pickMystery());


// ITERATION 3 | Reveal the mystery

// Declare a function named revealMystery that receives an (envelope) object 
// with the shape of the object returned by pickMystery ==> suspect weapon room as the single argument
// and returns a revealing message in the following format:
// <FIRST NAME> <LAST NAME> killed Mr. Boddy using the <WEAPON> in the <ROOM>!
    // ${envelope.suspect.firstName} 
    // ${envelope.suspect.lastName} killed Mr. Boddy using the 
    // ${envelope.weapon.name} in the 
    // ${envelope.room.name}!`;

    //envelope => new parameter for revealM function, 
    //but suspect/weapon/room come from pickM => selectRandom(allArrays)

function revealMystery(envelope) {
    return `${envelope.suspect.firstName} ${envelope.suspect.lastName} killed Mr. Boddy using the ${envelope.weapon.name} in the ${envelope.room.name}!`;
  }
  console.log(revealMystery(pickMystery()))

  //==========================================================
  //   [suspectArray] | [weaponArray] | [roomArray]
  //          ▼              ▼           ▼
  //f(x)              selectRandom(){} 
  //                         ▼
  //f(x)               pickMystery(){}     => selectRandom x3Arrays
  //                         ▼
  //f(x)              revealMystery(){}    => var from pickMystery + selectRandom operations
  //===========================================================
