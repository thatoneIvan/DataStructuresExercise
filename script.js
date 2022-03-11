// 1a
const jedi = [];


// 1b
jedi[0] = "Luke";
console.log();

// 1c
jedi.push("Obi-Wan Kenobi");
console.log(jedi);//Luke, Obi-Wan Kenobi

// 1d
jedi.unshift("Yoda")
console.log(jedi);

// 1e
console.log(jedi[1]);

// 1f
jedi.pop();
console.log(jedi);

// const force = jedi.pop();
// console.log(jedi);

// 1g 
jedi.shift();
console.log(jedi);

// const dark = jedi.shift();
// console.log(jedi);
//console.log(dark);
//console.log(jedi.slice(1));

// 2a
const sithLords = [
    `Darth Vader`,
    `Darth Sidious`,
    `Darth Maul`
];

// 2b
const imperialOfficers = [
    `Grand Moff Tarkin`,
    `Orson Krennic`
]

// 2c
const starWarsVillains = sithLords.concat(imperialOfficers);
console.log(starWarsVillains);

// 2d
console.log(starWarsVillains.slice(0,2));

// 3a
const droids = {
    astromech: `R2-D2`,
    protocol: `C-3PO`,
    assassin: `IG-88`
};
console.log(droids);

// 3b
console.log(droids[`astromech`]);

// 3c
console.log(droids.protocol);

// 3d
//droids[`assassin`] = `IG-11`
//console.log(droids);

droids.assassin = `IG-11`;
console.log(droids.assassin);
console.log(droids);

//BONUS 
//4 
console.log(`Darth Vader`[6]);//6

// 5
//console.log(starWarsVillains.slice(-4,-3));
console.log(sithLords.slice(-2,-1));

// 6a
const starWarsMovies = [

    {
        episodeOne: `The Phantom Menace`, 
        episodeTwo: `Attack of the Clones`,
        episodeThree: `Revenge of the Sith`
    },
    {
        episodeFour: `A New Hope`,
        episodeFive: `Attack of the Clones`,
        episodeSix: `Revenge of he Sith`
    },
    {
        episodeSeven:"The Force Awakens", 
        episodeEight: "The Last Jedi",
        episodeNinth: "The Rise of Skywalker"
        
    }
    
];

// 6b
starWarsMovies.splice(1, 0, `Solo`,`Rogue One`)