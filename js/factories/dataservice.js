(function(){

    angular
        .module("moviemoji")
        .factory("DataService", DataService);

    function DataService(){

        var dataObj = {
            quizQuestions: quizQuestions,
        };

        return dataObj;
    }

    var quizQuestions  = [
        {
            emojis: [
              {
                emoji: "emojis/people/skull-and-crossbones.png"
              },
              {
                emoji: "emojis/activities/swimmer.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["Deadpool", "deadpool", "dead pool"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/flags/usa.png"
              },
              {
                emoji: "emojis/food/shortcake.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["American Pie", "american pie"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/animals/snake.png"
              },
              {
                emoji: "emojis/animals/snake.png"
              },
              {
                emoji: "emojis/travel/airplane.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["Snakes on a Plane", "snakes on a plane", "snakes in a plane"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/travel/airplane.png"
              },
              {
                emoji: "emojis/travel/steam-locomotive.png"
              },
              {
                emoji: "emojis/travel/automobile.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["Planes, Trains and Automobiles", "planes, trains and automobiles", "planes trains and automobiles", "planes, trains, and automobiles", "planes, trains, & automobiles", "planes, trains & automobiles", "planes trains & automobiles", "planes trains automobiles"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/travel/police-car.png"
              },
              {
                emoji: "emojis/travel/taxi.png"
              },
              {
                emoji: "emojis/travel/recreational-vehicle.png"
              },
              {
                emoji: "emojis/travel/automobile.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["Cars", "cars"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/objects/microphone.png"
              },
              {
                emoji: "emojis/objects/multiple-musical-notes.png"
              },
              {
                emoji: "emojis/nature/cloud-with-rain.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["Singin' in the Rain", "singin' in the rain", "singin in the rain", "singing in the rain"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/nature/water-wave.png"
              },
              {
                emoji: "emojis/nature/water-wave.png"
              },
              {
                emoji: "emojis/nature/water-wave.png"
              },
              {
                emoji: "emojis/nature/water-wave.png"
              },
              {
                emoji: "emojis/nature/water-wave.png"
              },
              {
                emoji: "emojis/nature/water-wave.png"
              },
              {
                emoji: "emojis/nature/water-wave.png"
              },
              {
                emoji: "emojis/nature/water-wave.png"
              },
              {
                emoji: "emojis/nature/water-wave.png"
              },
              {
                emoji: "emojis/nature/water-wave.png"
              },
              {
                emoji: "emojis/nature/water-wave.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["Ocean's 11", "ocean's 11", "oceans 11", "ocean's eleven", "oceans eleven"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/people/bearded-person.png"
              },
              {
                emoji: "emojis/people/male-office-worker.png"
              },
              {
                emoji: "emojis/people/older-man.png"
              },
              {
                emoji: "emojis/people/baby.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["Three Men and a Baby", "three men and a baby", "3 men and a baby"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/people/man.png"
              },
              {
                emoji: "emojis/people/man.png"
              },
              {
                emoji: "emojis/objects/heart.png"
              },
              {
                emoji: "emojis/nature/snow-capped-mountain.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["Brokeback Mountain", "brokeback mountain", "broke back mountain"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/flags/russia.png"
              },
              {
                emoji: "emojis/symbols/plus.png"
              },
              {
                emoji: "emojis/objects/heart.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["From Russia with Loves", "from russia with love"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/symbols/no-entry.png"
              },
              {
                emoji: "emojis/people/face-with-steam.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["Don't Breathe", "don't breathe", "dont breathe"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/symbols/children-crossing.png"
              },
              {
                emoji: "emojis/symbols/left-luggage.png"
              },
              {
                emoji: "emojis/symbols/no-smoking.png"
              },
              {
                emoji: "emojis/symbols/put-litter-in-place.png"
              },
              {
                emoji: "emojis/symbols/warning-sign.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["Signs", "signs"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/people/ear.png"
              },
              {
                emoji: "emojis/people/eyes.png"
              },
              {
                emoji: "emojis/people/nose.png"
              },
              {
                emoji: "emojis/people/pointing.png"
              },
              {
                emoji: "emojis/people/tongue.png"
              },
              {
                emoji: "emojis/symbols/six.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["The Sixth Sense", "the sixth sense", "the 6th sense"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/nature/sun-behind-cloud.png"
              },
              {
                emoji: "emojis/nature/fallen-leaf.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["Skyfall", "skyfall", "sky fall"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/objects/slot-machine.png"
              },
              {
                emoji: "emojis/objects/joker.png"
              },
              {
                emoji: "emojis/objects/dice.png"
              },
              {
                emoji: "emojis/objects/crown.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["Casino Royale", "casino royale", "casino royal"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/people/smiley-halo.png"
              },
              {
                emoji: "emojis/people/smiley-halo.png"
              },
              {
                emoji: "emojis/symbols/plus.png"
              },
              {
                emoji: "emojis/people/smiley-horns.png"
              },
              {
                emoji: "emojis/people/smiley-horns.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["Angels & Demons", "angels & demons", "angels and demons"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/symbols/information.png"
              },
              {
                emoji: "emojis/people/robot.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["I, Robot", "i, robot", "i robot", "irobot"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/people/cowboy.png"
              },
              {
                emoji: "emojis/people/cowboy.png"
              },
              {
                emoji: "emojis/symbols/plus.png"
              },
              {
                emoji: "emojis/people/alien.png"
              },
              {
                emoji: "emojis/people/alien.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["Cowboys & Aliens", "cowboys & aliens", "cowboys and aliens"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/animals/ant.png"
              },
              {
                emoji: "emojis/people/man.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["Ant-Man", "ant-man", "antman", "ant man"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/animals/bat.png"
              },
              {
                emoji: "emojis/people/man.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["Batman", "batman", "bat man"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/animals/bee.png"
              },
              {
                emoji: "emojis/objects/film.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["Bee Movie", "bee movie"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/animals/cat.png"
              },
              {
                emoji: "emojis/people/dark-woman.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["Catwoman", "catwoman", "cat woman"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/animals/dove.png"
              },
              {
                emoji: "emojis/people/man.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["Birdman", "birdman", "bird man"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/animals/lion.png"
              },
              {
                emoji: "emojis/people/prince.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["The Lion King", "the lion king", "lion king"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/animals/spider.png"
              },
              {
                emoji: "emojis/people/man.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["Spiderman", "spiderman", "spider man"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/animals/wolf.png"
              },
              {
                emoji: "emojis/people/man.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["The Wolfman", "the wolfman", "the wolf man", "wolfman", "wolf man"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/travel/globe.png"
              },
              {
                emoji: "emojis/animals/monkey.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["Planet of the Apes", "planet of the apes", "the planet of the apes"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/nature/cloud-with-rain.png"
              },
              {
                emoji: "emojis/people/man.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["Rain Man", "rain man", "rainman"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/people/man-tuxedo.png"
              },
              {
                emoji: "emojis/objects/ring.png"
              },
              {
                emoji: "emojis/people/bride.png"
              },
              {
                emoji: "emojis/flags/greece.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["My Big Fat Greek Wedding", "my big fat greek wedding", "big fat greek wedding"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/travel/airplane.png"
              },
              {
                emoji: "emojis/symbols/one.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["Air Force One", "air force one", "air force 1"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/symbols/hundred-points.png"
              },
              {
                emoji: "emojis/nature/storm.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["The Perfect Storm", "the perfect storm", "perfect storm"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/people/man-tuxedo.png"
              },
              {
                emoji: "emojis/objects/ring.png"
              },
              {
                emoji: "emojis/people/bride.png"
              },
              {
                emoji: "emojis/symbols/collision.png"
              },
              {
                emoji: "emojis/symbols/collision.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["Wedding Crashers", "wedding crashers"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/symbols/twelve-oclock.png"
              },
              {
                emoji: "emojis/people/cowboy.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["Midnight Cowboy", "midnight cowboy"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/people/dark-prince.png"
              },
              {
                emoji: "emojis/symbols/right-arrow.png"
              },
              {
                emoji: "emojis/flags/usa.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["Coming to America", "coming to america"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/animals/monkey.png"
              },
              {
                emoji: "emojis/animals/monkey.png"
              },
              {
                emoji: "emojis/animals/monkey.png"
              },
              {
                emoji: "emojis/animals/monkey.png"
              },
              {
                emoji: "emojis/animals/monkey.png"
              },
              {
                emoji: "emojis/animals/monkey.png"
              },
              {
                emoji: "emojis/animals/monkey.png"
              },
              {
                emoji: "emojis/animals/monkey.png"
              },
              {
                emoji: "emojis/animals/monkey.png"
              },
              {
                emoji: "emojis/animals/monkey.png"
              },
              {
                emoji: "emojis/animals/monkey.png"
              },
              {
                emoji: "emojis/animals/monkey.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["12 Monkeys", "12 monkeys", "twelve monkeys"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/objects/candle.png"
              },
              {
                emoji: "emojis/objects/candle.png"
              },
              {
                emoji: "emojis/objects/candle.png"
              },
              {
                emoji: "emojis/objects/candle.png"
              },
              {
                emoji: "emojis/objects/candle.png"
              },
              {
                emoji: "emojis/objects/candle.png"
              },
              {
                emoji: "emojis/objects/candle.png"
              },
              {
                emoji: "emojis/objects/candle.png"
              },
              {
                emoji: "emojis/objects/candle.png"
              },
              {
                emoji: "emojis/objects/candle.png"
              },
              {
                emoji: "emojis/objects/candle.png"
              },
              {
                emoji: "emojis/objects/candle.png"
              },
              {
                emoji: "emojis/objects/candle.png"
              },
              {
                emoji: "emojis/objects/candle.png"
              },
              {
                emoji: "emojis/objects/candle.png"
              },
              {
                emoji: "emojis/objects/candle.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["Sixteen Candles", "sixteen candles", "16 candles"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/people/kiss.png"
              },
              {
                emoji: "emojis/people/kiss.png"
              },
              {
                emoji: "emojis/symbols/collision.png"
              },
              {
                emoji: "emojis/symbols/collision.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["Kiss Kiss Bang Bang", "kiss kiss bang bang"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/people/crazy-face.png"
              },
              {
                emoji: "emojis/people/crazy-face.png"
              },
              {
                emoji: "emojis/people/crazy-face.png"
              },
              {
                emoji: "emojis/people/crazy-face.png"
              },
              {
                emoji: "emojis/people/crazy-face.png"
              },
              {
                emoji: "emojis/people/crazy-face.png"
              },
              {
                emoji: "emojis/people/crazy-face.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["Seven Psychopaths", "seven psychopaths", "7 psychopaths"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/people/angry-face.png"
              },
              {
                emoji: "emojis/people/angry-face.png"
              },
              {
                emoji: "emojis/people/angry-face.png"
              },
              {
                emoji: "emojis/people/angry-face.png"
              },
              {
                emoji: "emojis/people/angry-face.png"
              },
              {
                emoji: "emojis/people/angry-face.png"
              },
              {
                emoji: "emojis/people/angry-face.png"
              },
              {
                emoji: "emojis/people/angry-face.png"
              },
              {
                emoji: "emojis/people/angry-face.png"
              },
              {
                emoji: "emojis/people/angry-face.png"
              },
              {
                emoji: "emojis/people/angry-face.png"
              },
              {
                emoji: "emojis/people/angry-face.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["12 Angry Men", "12 angry men", "twelve angry men"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/symbols/muted-speaker.png"
              },
              {
                emoji: "emojis/animals/sheep.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["The Silence of the Lambs", "the silence of the lambs", "silence of the lambs"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/nature/droplet.png"
              },
              {
                emoji: "emojis/nature/flame.png"
              },
              {
                emoji: "emojis/nature/wind-face.png"
              },
              {
                emoji: "emojis/nature/snow-capped-mountain.png"
              },
              {
                emoji: "emojis/symbols/five.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["The Fifth Element", "the fifth element", "the 5th element"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/people/alien.png"
              },
              {
                emoji: "emojis/people/alien.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["Aliens", "aliens"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/objects/lock.png"
              },
              {
                emoji: "emojis/objects/chart-up.png"
              },
              {
                emoji: "emojis/objects/cigarette.png"
              },
              {
                emoji: "emojis/objects/oil-drum.png"
              },
              {
                emoji: "emojis/objects/oil-drum.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["Lock, Stock and Two Smoking Barrels", "lock, stock and two smoking barrels", "lock, stock, and two smoking barrels", "lock stock and two smoking barrels", "lock stock two smoking barrels", "lock, stock, two smoking barrels", "lock, stock and 2 smoking barrels", "lock, stock, and 2 smoking barrels", "lock stock and 2 smoking barrels", "lock stock 2 smoking barrels", "lock, stock, 2 smoking barrels"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/objects/pound.png"
              },
              {
                emoji: "emojis/objects/pound.png"
              },
              {
                emoji: "emojis/objects/pound.png"
              },
              {
                emoji: "emojis/objects/pound.png"
              },
              {
                emoji: "emojis/objects/pound.png"
              },
              {
                emoji: "emojis/objects/pound.png"
              },
              {
                emoji: "emojis/objects/pound.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["Seven Pounds", "seven pounds", "7 pounds"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/symbols/up-arrow.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["Up", "up"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/objects/knife.png"
              },
              {
                emoji: "emojis/people/runner.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["Blade Runner", "blade runner", "blade runner 2049"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/nature/moon.png"
              },
              {
                emoji: "emojis/symbols/up-arrow.png"
              },
              {
                emoji: "emojis/travel/castle.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["Moonrise Kingdom", "moonrise kingdom", "moon rise kingdom"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/animals/wolf.png"
              },
              {
                emoji: "emojis/travel/cityscape.png"
              },
              {
                emoji: "emojis/objects/money-bag.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["The Wolf of Wall Street", "the wolf of wall street", "wolf of wall street"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/animals/deer.png"
              },
              {
                emoji: "emojis/objects/pistol.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["The Deer Hunter", "the deer hunter", "deer hunter"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/animals/elephant.png"
              },
              {
                emoji: "emojis/people/man.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["The Elephant Man", "the elephant man", "elephant man"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/flags/china.png"
              },
              {
                emoji: "emojis/travel/houses.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["Chinatown", "chinatown", "china town"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/objects/note-pad.png"
              },
              {
                emoji: "emojis/nature/moon.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["Paper Moon", "paper moon"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/people/woman.png"
              },
              {
                emoji: "emojis/objects/shower.png"
              },
              {
                emoji: "emojis/objects/knife.png"
              },
              {
                emoji: "emojis/people/skull-and-crossbones.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["Psycho", "psycho"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/objects/money.png"
              },
              {
                emoji: "emojis/objects/money.png"
              },
              {
                emoji: "emojis/objects/money.png"
              },
              {
                emoji: "emojis/objects/money.png"
              },
              {
                emoji: "emojis/people/baby.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["Million Dollar Baby", "million dollar baby"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/people/blonde-boy.png"
              },
              {
                emoji: "emojis/food/chocolate.png"
              },
              {
                emoji: "emojis/travel/factory.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["Charlie and the Chocolate Factory", "charlie and the chocolate factory"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/people/princess.png"
              },
              {
                emoji: "emojis/objects/snowflake.png"
              },
              {
                emoji: "emojis/objects/snowman.png"
              },
              {
                emoji: "emojis/objects/multiple-musical-notes.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["Frozen", "frozen"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/objects/magnifying-glass.png"
              },
              {
                emoji: "emojis/animals/fish.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["Finding Nemo", "finding nemo"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/people/bride.png"
              },
              {
                emoji: "emojis/people/bride.png"
              },
              {
                emoji: "emojis/people/bride.png"
              },
              {
                emoji: "emojis/people/bride.png"
              },
              {
                emoji: "emojis/people/skull-and-crossbones.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["Four Weddings and a Funeral", "four weddings and a funeral", "4 weddings and a funeral"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/objects/hammer.png"
              },

              {
                emoji: "emojis/nature/lightning.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["Thor", "thor"],
            answered: false
        },
        {
            emojis: [

              {
                emoji: "emojis/flags/brazil.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["Brazil", "brazil"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/people/boy.png"
              },
              {
                emoji: "emojis/objects/ring.png"
              },
              {
                emoji: "emojis/nature/volcano.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["The Lord of the Rings", "the lord of the rings", "lord of the rings"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/symbols/up-arrow.png"
              },
              {
                emoji: "emojis/objects/pistol.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["Top Gun", "top gun"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/people/boy.png"
              },
              {
                emoji: "emojis/people/alien.png"
              },
              {
                emoji: "emojis/travel/bike.png"
              },
              {
                emoji: "emojis/nature/moon.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["E.T. the Extra-Terrestrial", "e.t. the exta-terrestrial", "e.t.", "et", "et the extra-terrestrial", "e.t. the extra terrestrial"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/people/smiley-horns.png"
              },
              {
                emoji: "emojis/objects/dress.png"
              },
              {
                emoji: "emojis/objects/high-heel.png"
              },
              {
                emoji: "emojis/objects/handbag.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["The Devil Wears Prada", "the devil wears prada", "devil wears prada"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/people/dancer.png"
              },
              {
                emoji: "emojis/symbols/plus.png"
              },
              {
                emoji: "emojis/animals/wolf.png"
              },
              {
                emoji: "emojis/animals/wolf.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["Dances with Wolves", "dances with wolves"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/nature/droplet.png"
              },
              {
                emoji: "emojis/travel/globe.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["Waterworld", "waterworld", "water world"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/objects/memo.png"
              },
              {
                emoji: "emojis/objects/kimono.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["Memoirs of a Geisha", "memoirs of a geisha"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/animals/dog-face.png"
              },
              {
                emoji: "emojis/food/pasta.png"
              },
              {
                emoji: "emojis/animals/dog-face.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["Lady and the Tramp", "lady and the tramp"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/people/surfer.png"
              },
              {
                emoji: "emojis/travel/bank.png"
              },
              {
                emoji: "emojis/objects/pistol.png"
              },
              {
                emoji: "emojis/objects/money-bag.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["Point Break", "point break"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/animals/shark.png"
              },
              {
                emoji: "emojis/nature/tornado.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["Sharknado", "sharknado"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/objects/calendar-day.png"
              },
              {
                emoji: "emojis/symbols/cycle.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["Groundhog Day", "groundhog day", "ground hog day"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/people/smiley.png"
              },
              {
                emoji: "emojis/people/footprints.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["Happy Feet", "happy feet"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/people/adult-dark.png"
              },
              {
                emoji: "emojis/travel/canoe.png"
              },
              {
                emoji: "emojis/animals/tiger.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["Life of Pi", "life of pi", "the life of pi"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/objects/syringe.png"
              },
              {
                emoji: "emojis/objects/gem.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["Blood Diamond", "blood diamond"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/symbols/x.png"
              },
              {
                emoji: "emojis/people/man.png"
              },
              {
                emoji: "emojis/people/man.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["X-Men", "x-men", "xmen", "x men"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/flags/italy.png"
              },
              {
                emoji: "emojis/travel/automobile.png"
              },
              {
                emoji: "emojis/travel/automobile.png"
              },
              {
                emoji: "emojis/travel/automobile.png"
              },
              {
                emoji: "emojis/objects/money-bag.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["The Italian Job", "the italian job", "italian job"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/flags/australia.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["Australia", "australia"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/flags/madagascar.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["Madagascar", "madagascar"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/flags/kazakhstan.png"
              },
              {
                emoji: "emojis/people/man.png"
              },
              {
                emoji: "emojis/symbols/thumbs-up.png"
              },
              {
                emoji: "emojis/symbols/right-arrow.png"
              },
              {
                emoji: "emojis/flags/usa.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["Borat", "borat", "borat: cultural learnings of america for make benefit glorious nation of kazakhstan", "borat cultural learnings of america for make benefit glorious nation of kazakhstan"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/objects/karate-uniform.png"
              },
              {
                emoji: "emojis/people/fist.png"
              },
              {
                emoji: "emojis/animals/panda.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["Kung Fu Panda", "kung fu panda"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/people/fist.png"
              },
              {
                emoji: "emojis/objects/boxing-glove.png"
              },
              {
                emoji: "emojis/objects/karate-uniform.png"
              },
              {
                emoji: "emojis/symbols/club.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["Fight Club", "fight club"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/animals/octopus.png"
              },
              {
                emoji: "emojis/animals/cat.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["Octopussy", "octopussy"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/food/pineapple.png"
              },
              {
                emoji: "emojis/travel/steam-locomotive.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["Pineapple Express", "pineapple express"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/flags/australia.png"
              },
              {
                emoji: "emojis/animals/crocodile.png"
              },
              {
                emoji: "emojis/people/cowboy.png"
              },
              {
                emoji: "emojis/symbols/right-arrow.png"
              },
              {
                emoji: "emojis/flags/usa.png"
              },
              {
                emoji: "emojis/travel/statue-of-liberty.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["Crocodile Dundee", "crocodile dundee"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/symbols/white.png"
              },
              {
                emoji: "emojis/travel/house.png"
              },
              {
                emoji: "emojis/symbols/down-arrow.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["White House Down", "white house down", "whitehouse down"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/travel/traffic-light.png"
              },
              {
                emoji: "emojis/travel/police-car.png"
              },
              {
                emoji: "emojis/travel/automobile.png"
              },
              {
                emoji: "emojis/travel/lorry.png"
              },
              {
                emoji: "emojis/travel/recreational-vehicle.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["Traffic", "traffic"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/people/pilot.png"
              },
              {
                emoji: "emojis/flags/usa.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["Captain America", "captain america"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/travel/automobile.png"
              },
              {
                emoji: "emojis/people/older-woman.png"
              },
              {
                emoji: "emojis/nature/blossom.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["Driving Miss Daisy", "driving miss daisy"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/people/poop.png"
              },
              {
                emoji: "emojis/people/dancer.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["Dirty Dancing", "dirty dancing"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/people/angry-face.png"
              },
              {
                emoji: "emojis/animals/ox.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["Raging Bull", "raging bull"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/nature/flame.png"
              },
              {
                emoji: "emojis/animals/chick.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["The Hot Chick", "hot chick", "the hot chick"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/people/screaming-face.png"
              },
              {
                emoji: "emojis/objects/film.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["Scary Movie", "scary movie"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/travel/house.png"
              },
              {
                emoji: "emojis/symbols/white.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["Casablanca", "casablanca", "casa blanca"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/travel/bus.png"
              },
              {
                emoji: "emojis/symbols/dash.png"
              },
              {
                emoji: "emojis/objects/bomb.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["Speed", "speed"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/food/ice-cream.png"
              },
              {
                emoji: "emojis/nature/sun-behind-cloud.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["Vanilla Sky", "vanilla sky"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/travel/automobile.png"
              },
              {
                emoji: "emojis/symbols/collision.png"
              },
              {
                emoji: "emojis/travel/recreational-vehicle.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["Crash", "crash"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/people/pedestrian.png"
              },
              {
                emoji: "emojis/symbols/minus.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["Walk the Line", "walk the line"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/objects/clock.png"
              },
              {
                emoji: "emojis/food/tangerine.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["A Clockwork Orange", "a clockwork orange", "clockwork orange"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/people/princess.png"
              },
              {
                emoji: "emojis/objects/memo.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["The Princess Diaries", "the princess diaries", "princess diaries"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/people/ghost.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["Ghost", "ghost"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/people/graduate.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["The Graduate", "the graduate", "graduate"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/nature/volcano.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["Volcano", "volcano"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/people/mechanic.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["The Mechanic", "the mechanic", "mechanic"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/people/artist.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["The Artist", "the artist", "artist"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/people/cop.png"
              },
              {
                emoji: "emojis/objects/graduation-cap.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["Police Academy", "police academy"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/people/santa.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["The Santa Clause", "the santa clause", "santa clause"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/objects/ring.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["The Ring", "the ring", "ring"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/animals/lion.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["Lion", "lion"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/animals/ant.png"
              },
              {
                emoji: "emojis/animals/ant.png"
              },
              {
                emoji: "emojis/animals/ant.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["Antz", "antz"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/animals/scorpion.png"
              },
              {
                emoji: "emojis/people/prince.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["The Scorpion King", "the scorpion king", "scorpion king"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/food/milk.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["Milk", "milk"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/people/baby.png"
              },
              {
                emoji: "emojis/travel/automobile.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["Baby Driver", "baby driver"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/food/honey.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["Honey", "honey"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/objects/dice.png"
              },
              {
                emoji: "emojis/objects/slot-machine.png"
              },
              {
                emoji: "emojis/objects/joker.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["Casino", "casino"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/objects/clock.png"
              },
              {
                emoji: "emojis/travel/map.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["Cloud Atlas", "cloud atlas"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/symbols/red.png"
              },
              {
                emoji: "emojis/nature/sunrise.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["Red Dawn", "red dawn"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/symbols/red.png"
              },
              {
                emoji: "emojis/animals/dragon.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["Red Dragon", "red dragon"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/people/smiley-horns.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["Devil", "devil"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/people/smiley-horns.png"
              },
              {
                emoji: "emojis/people/skull-and-crossbones.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["The Evil Dead", "the evil dead", "evil dead"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/objects/syringe.png"
              },
              {
                emoji: "emojis/symbols/left-arrow.png"
              },
              {
                emoji: "emojis/objects/syringe.png"
              },
              {
                emoji: "emojis/objects/syringe.png"
              },
              {
                emoji: "emojis/objects/syringe.png"
              },
              {
                emoji: "emojis/objects/syringe.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["First Blood", "first blood", "rambo: first blood", "rambo first blood", "rambo"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/objects/basketball.png"
              },
              {
                emoji: "emojis/objects/memo.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["The Basketball Diaries", "the basketball diaries", "basketball diaries"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/nature/water-wave.png"
              },
              {
                emoji: "emojis/travel/sailboat.png"
              },
              {
                emoji: "emojis/animals/elephant.png"
              },
              {
                emoji: "emojis/animals/tiger.png"
              },
              {
                emoji: "emojis/animals/ox.png"
              },
              {
                emoji: "emojis/animals/deer.png"
              },
              {
                emoji: "emojis/animals/zebra.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["Noah", "noah"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/flags/usa.png"
              },
              {
                emoji: "emojis/animals/wolf.png"
              },
              {
                emoji: "emojis/symbols/right-arrow.png"
              },
              {
                emoji: "emojis/flags/france.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["An American Werewolf in Paris", "an american werewolf in paris", "american werewolf in paris"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/symbols/white.png"
              },
              {
                emoji: "emojis/animals/chick.png"
              },
              {
                emoji: "emojis/animals/chick.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["White Chicks", "white chicks"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/animals/crocodile.png"
              },
              {
                emoji: "emojis/animals/ox.png"
              },
              {
                emoji: "emojis/animals/dog-face.png"
              },
              {
                emoji: "emojis/animals/tiger.png"
              },
              {
                emoji: "emojis/travel/house.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["Animal House", "animal house"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/flags/uk.png"
              },
              {
                emoji: "emojis/symbols/plus.png"
              },
              {
                emoji: "emojis/flags/spain.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["Spanglish", "spanglish"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/objects/pistol.png"
              },
              {
                emoji: "emojis/objects/pistol.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["2 Guns", "2 guns", "two guns"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/animals/dove.png"
              },
              {
                emoji: "emojis/animals/duck.png"
              },
              {
                emoji: "emojis/animals/eagle.png"
              },
              {
                emoji: "emojis/animals/owl.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["The Birds", "the birds", "birds"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/people/astronaut.png"
              },
              {
                emoji: "emojis/symbols/right-arrow.png"
              },
              {
                emoji: "emojis/people/bride.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["The Astronaut's Wife", "the astronaut's wife", "the astronauts wife", "astronauts wife", "astronaut's wife"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/nature/droplet.png"
              },
              {
                emoji: "emojis/people/boy.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["The Waterboy", "the waterboy", "the water boy", "waterboy", "water boy"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/people/chef.png"
              },
              {
                emoji: "emojis/animals/rat.png"
              },
              {
                emoji: "emojis/objects/plate.png"
              },
              {
                emoji: "emojis/flags/france.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["Ratatouille", "ratatouille"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/objects/umbrella.png"
              },
              {
                emoji: "emojis/people/woman.png"
              },
              {
                emoji: "emojis/objects/handbag.png"
              },
              {
                emoji: "emojis/flags/uk.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["Mary Poppins", "mary poppins"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/objects/heart.png"
              },
              {
                emoji: "emojis/people/angry-face.png"
              },
              {
                emoji: "emojis/symbols/black-heart.png"
              },
              {
                emoji: "emojis/people/screaming-face.png"
              },
              {
                emoji: "emojis/symbols/blue-heart.png"
              },
              {
                emoji: "emojis/people/tear-face.png"
              },
              {
                emoji: "emojis/symbols/green-heart.png"
              },
              {
                emoji: "emojis/people/smiley-squinting.png"
              },
              {
                emoji: "emojis/symbols/purple-heart.png"
              },
              {
                emoji: "emojis/people/unamused-face.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["Inside Out", "inside out", "insideout"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/objects/snowflake.png"
              },
              {
                emoji: "emojis/symbols/white.png"
              },
              {
                emoji: "emojis/people/princess.png"
              },
              {
                emoji: "emojis/symbols/plus.png"
              },
              {
                emoji: "emojis/people/nerd.png"
              },
              {
                emoji: "emojis/people/angry-face.png"
              },
              {
                emoji: "emojis/people/sleepy.png"
              },
              {
                emoji: "emojis/people/smiley-squinting.png"
              },
              {
                emoji: "emojis/people/bashful.png"
              },
              {
                emoji: "emojis/people/sneezy.png"
              },
              {
                emoji: "emojis/people/crazy-face.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["Snow White and the Seven Dwarfs", "snow white and the seven dwarfs", "snow white and the 7 dwarfs", "snow white and the seven dwarves", "snow white and the 7 dwarves", "snow white"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/people/sleepy.png"
              },
              {
                emoji: "emojis/people/princess.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["Sleeping Beauty", "sleeping beauty"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/people/woman-turban.png"
              },
              {
                emoji: "emojis/people/princess-dark.png"
              },
              {
                emoji: "emojis/people/genie.png"
              },
              {
                emoji: "emojis/animals/monkey.png"
              },
              {
                emoji: "emojis/objects/crystal-ball.png"
              },
              {
                emoji: "emojis/travel/mosque.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["Aladdin", "aladdin"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/people/swearing.png"
              },
              {
                emoji: "emojis/objects/drum.png"
              },
              {
                emoji: "emojis/people/bandage-face.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["Whiplash", "whiplash", "whip lash"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/activities/swimmer.png"
              },
              {
                emoji: "emojis/animals/shark.png"
              },
              {
                emoji: "emojis/symbols/red.png"
              },
              {
                emoji: "emojis/people/skull.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["Jaws", "jaws"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/people/clown.png"
              },
              {
                emoji: "emojis/objects/balloon.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["It", "it"],
            answered: false
        },
        {
            emojis: [
              {
                emoji: "emojis/symbols/dash.png"
              },
              {
                emoji: "emojis/symbols/six.png"
              },
              {
                emoji: "emojis/symbols/zero.png"
              },
              {
                emoji: "emojis/objects/stopwatch.png"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: ["Gone in 60 Seconds", "gone in 60 seconds", "gone in sixty seconds"],
            answered: false
        },
    ];

})();
