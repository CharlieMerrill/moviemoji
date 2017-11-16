(function(){

    angular
        .module("turtleFacts")
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
            correctAnswer: ["Planes, Trains and Automobiles", "planes, trains and automobiles", "planes trains and automobiles", "planes, trains, and automobiels", "planes, trains, & automobiles", "planes, trains & automobiles", "planes trains & automobiles", "planes trains automobiles"],
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
                emoji: "emojis/symbols/down-arrow.png"
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
            correctAnswer: ["My Big Fat Greek Wedding", "my big fat greek wedding"],
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
                emoji: "emojis/travel/oncoming-automobile.png"
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
            correctAnswer: ["Coming to American", "coming to america"],
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
                emoji: "emojis/"
              },
              {
                emoji: "emojis/"
              },
              {
                emoji: "emojis/"
              }
            ],
            selected: "",
            correct: null,
            correctAnswer: [],
            answered: false
        },
    ];

})();