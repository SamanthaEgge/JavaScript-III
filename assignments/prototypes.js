/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing
  several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of
  the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/

function GameObject(attributes) {
  this.createdAt = attributes.createdAt;
  this.name = attributes.name;
  this.dimensions = attributes.dimensions;
}

GameObject.prototype.destroy = function() {
  return `${this.name} was removed from the game.`
}

//console.log(GameObject)
/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

function CharacterStats (charAttributes) {
  GameObject.call(this, charAttributes);
  this.healthPoints = charAttributes.healthPoints;
  this.speedStat = charAttributes.speedStat;
  this.damageStat = charAttributes.damageStat;
}
CharacterStats.prototype = Object.create(GameObject.prototype);
CharacterStats.prototype.takeDamage = function() {
  return `${this.name} took damage.`
}

/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/
function Humanoid (humanoidAttr) {
  CharacterStats.call(this, humanoidAttr);
  this.team = humanoidAttr.team;
  this.weapons = humanoidAttr.weapons;
  this.language = humanoidAttr.language;
};

Humanoid.prototype = Object.create(CharacterStats.prototype);
Humanoid.prototype.greet = function () {
  return `${this.name} offers a greeting in ${this.language}.`
}

// console.log(Humanoid);
/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/
//------Villain Prototype------
function Villain (villainAttr) {
  Humanoid.call(this, villainAttr);
  this.evilLaugh = villainAttr.evilLaugh;
}

Villain.prototype = Object.create(Humanoid.prototype);

function Hero (heroAttr) {
  Humanoid.call(this, heroAttr);
  this.cape = heroAttr.cape;
}

Hero.prototype = Object.create(Humanoid.prototype);


function battle (object1, object2) {
  while (object1.healthPoints > 0 && object2.healthPoints > 0) {
    if (object1.speedStat > object2.speedstat) {
      let damageNumber1 = Math.floor(Math.random() * (10-1)) + 1;
      object2.healthPoints = object2.healthPoints - damageNumber1;
      console.log(`${object1.name} hit ${object2.name} for ${damageNumber1}. They are now at ${object2.healthPoints}`)
      let damageNumber2 = Math.floor(Math.random() * (10-1)) + 1;
      object1.healthPoints = object1.healthPoints - damageNumber2;
      console.log(`${object2.name} hit ${object1.name} for ${damageNumber2}. They are now at ${object1.healthPoints}`)
    }
    else {
      let damageNumber = Math.floor(Math.random() * (10-1)) + 1;
      object1.healthPoints = object1.healthPoints - damageNumber;
      console.log(`${object2.name} hit ${object1.name} for ${damageNumber}. They are now at ${object1.healthPoints}`)
      let damageNumber1 = Math.floor(Math.random() * (10-1)) + 1;
      object2.healthPoints = object2.healthPoints - damageNumber1;
      console.log(`${object1.name} hit ${object2.name} for ${damageNumber1}. They are now at ${object2.healthPoints}`)
    }
  }
  
  if (object1.healthPoints <= 0) {
    console.log(object1.destroy());
  }
  else {
    console.log(object2.destroy());
  }
}


////Testing my damage stat
//let damageNumber = Math.floor(Math.random() * (10-1)) + 1;
//console.log(`Damage Test # ${damageNumber}`)


// Test you work by un-commenting these 3 objects and the list of console logs below:

  const hero = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 50,
    speedStat: 7,
    name: 'The Phoenix',
    team: 'None',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
    cape: 'No capes'
  })

  const villian = new Villain({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 50,
    speedStat: 5,
    name: 'Bruce',
    team: 'Thieves Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
    evilLaugh: 'Muhahahaha'
  })

  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

//  console.log(archer);

  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.

battle(hero, villian);

  // Stretch task: 
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villains different methods that could be used to remove health points
  // * from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villain and one a hero and fight it out with methods!