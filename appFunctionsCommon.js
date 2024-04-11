// Function that converts a number to a Roman Numeral
function convertToRoman(num) {
  const romanNumerals = [
    { value: 1000, numeral: 'M' },
    { value: 900, numeral: 'CM' },
    { value: 500, numeral: 'D' },
    { value: 400, numeral: 'CD' },
    { value: 100, numeral: 'C' },
    { value: 90, numeral: 'XC' },
    { value: 50, numeral: 'L' },
    { value: 40, numeral: 'XL' },
    { value: 10, numeral: 'X' },
    { value: 9, numeral: 'IX' },
    { value: 5, numeral: 'V' },
    { value: 4, numeral: 'IV' },
    { value: 1, numeral: 'I' }
  ];

  let result = '';

  romanNumerals.forEach(({ value, numeral }) => {
    while (num >= value) {
      result += numeral;
      num -= value;
    }
  });

  return result;
};

//Function Transforms Roman Numerals into Numbers
function romanToNumber(roman) {
  const romanNumerals = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  };

  let result = 0;

  for (let i = 0; i < roman.length; i++) {
    let currentChar = roman[i];
    let currentValue = romanNumerals[currentChar];
    let nextChar = roman[i + 1];
    let nextValue = romanNumerals[nextChar];

    if (nextValue > currentValue) {
      result += nextValue - currentValue;
      i++;
    } else {
      result += currentValue;
    }
  }

  return result;
};

//Function to delete a letter from a string
function deL(str, letterToDelete) {
  return str.split(letterToDelete).join('');
};

// Function Between, Gives the first String between the FIRST and LAST Strings Inputed of the String INPUT
function between(FIRST, LAST, INPUT) {
  const startIndex = INPUT.indexOf(FIRST) + FIRST.length;
  const subINPUT = INPUT.substring(startIndex, INPUT.length - 1);
  const endIndex = subINPUT.indexOf(LAST) + INPUT.length - subINPUT.length;
  const BETWEEN = INPUT.substring(startIndex, endIndex);
  return BETWEEN;

};

//Function Transforms a String into a Ballet Class Object
function stringToBallet(string) {
  let stepLength = 1;
  while (string.includes(`Step ${stepLength + 1}`)) {
    stepLength++;
  }
};

// Gets the pointed Block and transforms it into a String
function balletBlockText(navBlock, navPhrase, navStep, balletClass) {
  return balletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].place + balletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].hip + balletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].feetPosition + balletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].feetOrder + balletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].feetOpenClose + balletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].variants + balletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].step + balletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].number + balletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].legForm + balletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].legCardinal + balletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].legSide + balletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].directionCardinal + balletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].directionSide + balletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].spin + balletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].leftArmPosition + balletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].leftArmSide + balletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].leftArmForm + balletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].rightArmPosition + balletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].rightArmSide + balletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].rightArmForm + balletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].head;
};

// Gets the pointed Phrase and transforms it into a String
function balletPhraseText(navPhrase, navStep, balletClass) {
  let index = 0;
  let phrase = '';
  while (index < balletClass.classBody[navStep].stepBody[navPhrase].phraseBody.length) {
    if (balletClass.classBody[navStep].stepBody[navPhrase].phraseBody[index].division === 0 && balletClass.classBody[navStep].stepBody[navPhrase].phraseBody[index].lastOnDivision === false) {
      phrase += balletBlockText(index, navPhrase, navStep, balletClass) + '|';
    } else if (balletClass.classBody[navStep].stepBody[navPhrase].phraseBody[index].division === 0 && balletClass.classBody[navStep].stepBody[navPhrase].phraseBody[index].lastOnDivision === true) {
      phrase += balletBlockText(index, navPhrase, navStep, balletClass) + ',';
    } else if (balletClass.classBody[navStep].stepBody[navPhrase].phraseBody[index].division === 1 && balletClass.classBody[navStep].stepBody[navPhrase].phraseBody[index].lastOnDivision === false) {
      phrase += balletBlockText(index, navPhrase, navStep, balletClass) + ',';
    } else if (balletClass.classBody[navStep].stepBody[navPhrase].phraseBody[index].division === 1 && balletClass.classBody[navStep].stepBody[navPhrase].phraseBody[index].lastOnDivision === true) {
      phrase += balletBlockText(index, navPhrase, navStep, balletClass) + '|';
    } else if (balletClass.classBody[navStep].stepBody[navPhrase].phraseBody[index].division === 2 && balletClass.classBody[navStep].stepBody[navPhrase].phraseBody[index].lastOnDivision === false) {
      phrase += balletBlockText(index, navPhrase, navStep, balletClass) + ',,';
    } else if (balletClass.classBody[navStep].stepBody[navPhrase].phraseBody[index].division === 2 && balletClass.classBody[navStep].stepBody[navPhrase].phraseBody[index].lastOnDivision === true && Math.floor(balletClass.classBody[navStep].stepBody[navPhrase].phraseBody[index].order) !== Math.floor(balletClass.classBody[navStep].stepBody[navPhrase].phraseBody[index + 1].order)) {
      phrase += balletBlockText(index, navPhrase, navStep, balletClass) + '|';
    } else {
      phrase += balletBlockText(index, navPhrase, navStep, balletClass) + ',';
    }
    index++
  }
  return phrase;
};

// Gets the pointed Step and trnasforms it into a String
function balletStepText(navStep, balletClass) {
  let phrasePart = '';
  let index = 0;
  while (index < balletClass.classBody[navStep].stepBody.length) {
    phrasePart += `${convertToRoman(index + 1)}\t${balletPhraseText(index, navStep, balletClass)}\n`;
    index++
  }

  let finalPart = `Step ${navStep + 1} : ${balletClass.classBody[navStep].stage} : ${balletClass.classBody[navStep].kind}\n\n${phrasePart}\n`;

  return finalPart;
};


// Transforms the Ballet Class Object into String
function balletClassText(balletClass) {
  let stepPart = '';
  let index = 0;
  while (index < balletClass.classBody.length) {
    stepPart += `${balletStepText(index, balletClass)}---\n\n`;
    index++
  }

  let finalPart = `Master: ${balletClass.master}\nDate: ${balletClass.mounth} ${balletClass.day} ${balletClass.year}\nCountry: ${balletClass.country}\n---\n\n${stepPart}`;

  return finalPart;
};



// Adds another Step Into a Ballet Class Object
function AddStepToBalletClass(balletClass) {
  balletClass.classBody.push(
    {
      order: balletClass.classBody.length + 1,
      stage: '',
      kind: '',
      stepBody: [
        {
          order: 1,
          phraseBody: [
            {
              order: 1,
              division: 0,
              lastOnDivision: false,
              place: '',
              hip: '',
              feetPosition: '',
              feetOrder: '',
              feetOpenClose: '',
              variants: '',
              step: '',
              number: '',
              legForm: '',
              legCardinal: '',
              legSide: '',
              directionCardinal: '',
              directionSide: '',
              spin: '',
              leftArmPosition: '',
              leftArmSide: '',
              leftArmForm: '',
              rightArmPosition: '',
              rightArmSide: '',
              rightArmForm: '',
              head: ''
            },
            {
              order: 2,
              division: 0,
              lastOnDivision: false,
              place: '',
              hip: '',
              feetPosition: '',
              feetOrder: '',
              feetOpenClose: '',
              variants: '',
              step: '',
              number: '',
              legForm: '',
              legCardinal: '',
              legSide: '',
              directionCardinal: '',
              directionSide: '',
              spin: '',
              leftArmPosition: '',
              leftArmSide: '',
              leftArmForm: '',
              rightArmPosition: '',
              rightArmSide: '',
              rightArmForm: '',
              head: ''
            },
            {
              order: 3,
              division: 0,
              lastOnDivision: false,
              place: '',
              hip: '',
              feetPosition: '',
              feetOrder: '',
              feetOpenClose: '',
              variants: '',
              step: '',
              number: '',
              legForm: '',
              legCardinal: '',
              legSide: '',
              directionCardinal: '',
              directionSide: '',
              spin: '',
              leftArmPosition: '',
              leftArmSide: '',
              leftArmForm: '',
              rightArmPosition: '',
              rightArmSide: '',
              rightArmForm: '',
              head: ''
            },
            {
              order: 4,
              division: 0,
              lastOnDivision: false,
              place: '',
              hip: '',
              feetPosition: '',
              feetOrder: '',
              feetOpenClose: '',
              variants: '',
              step: '',
              number: '',
              legForm: '',
              legCardinal: '',
              legSide: '',
              directionCardinal: '',
              directionSide: '',
              spin: '',
              leftArmPosition: '',
              leftArmSide: '',
              leftArmForm: '',
              rightArmPosition: '',
              rightArmSide: '',
              rightArmForm: '',
              head: ''
            },
            {
              order: 5,
              division: 0,
              lastOnDivision: false,
              place: '',
              hip: '',
              feetPosition: '',
              feetOrder: '',
              feetOpenClose: '',
              variants: '',
              step: '',
              number: '',
              legForm: '',
              legCardinal: '',
              legSide: '',
              directionCardinal: '',
              directionSide: '',
              spin: '',
              leftArmPosition: '',
              leftArmSide: '',
              leftArmForm: '',
              rightArmPosition: '',
              rightArmSide: '',
              rightArmForm: '',
              head: ''
            },
            {
              order: 6,
              division: 0,
              lastOnDivision: false,
              place: '',
              hip: '',
              feetPosition: '',
              feetOrder: '',
              feetOpenClose: '',
              variants: '',
              step: '',
              number: '',
              legForm: '',
              legCardinal: '',
              legSide: '',
              directionCardinal: '',
              directionSide: '',
              spin: '',
              leftArmPosition: '',
              leftArmSide: '',
              leftArmForm: '',
              rightArmPosition: '',
              rightArmSide: '',
              rightArmForm: '',
              head: ''
            },
            {
              order: 7,
              division: 0,
              lastOnDivision: false,
              place: '',
              hip: '',
              feetPosition: '',
              feetOrder: '',
              feetOpenClose: '',
              variants: '',
              step: '',
              number: '',
              legForm: '',
              legCardinal: '',
              legSide: '',
              directionCardinal: '',
              directionSide: '',
              spin: '',
              leftArmPosition: '',
              leftArmSide: '',
              leftArmForm: '',
              rightArmPosition: '',
              rightArmSide: '',
              rightArmForm: '',
              head: ''
            },
            {
              order: 8,
              division: 0,
              lastOnDivision: false,
              place: '',
              hip: '',
              feetPosition: '',
              feetOrder: '',
              feetOpenClose: '',
              variants: '',
              step: '',
              number: '',
              legForm: '',
              legCardinal: '',
              legSide: '',
              directionCardinal: '',
              directionSide: '',
              spin: '',
              leftArmPosition: '',
              leftArmSide: '',
              leftArmForm: '',
              rightArmPosition: '',
              rightArmSide: '',
              rightArmForm: '',
              head: ''
            }
          ]
        }
      ]
    }
  );

  return balletClass;
};

function AddPhraseToStep(navStep, balletClass) {
  balletClass.classBody[navStep].stepBody.push(
    {
      order: balletClass.classBody[navStep].stepBody.length + 1,
      phraseBody: [
        {
          order: 1,
          division: 0,
          lastOnDivision: false,
          place: '',
          hip: '',
          feetPosition: '',
          feetOrder: '',
          feetOpenClose: '',
          variants: '',
          step: '',
          number: '',
          legForm: '',
          legCardinal: '',
          legSide: '',
          directionCardinal: '',
          directionSide: '',
          spin: '',
          leftArmPosition: '',
          leftArmSide: '',
          leftArmForm: '',
          rightArmPosition: '',
          rightArmSide: '',
          rightArmForm: '',
          head: ''
        },
        {
          order: 2,
          division: 0,
          lastOnDivision: false,
          place: '',
          hip: '',
          feetPosition: '',
          feetOrder: '',
          feetOpenClose: '',
          variants: '',
          step: '',
          number: '',
          legForm: '',
          legCardinal: '',
          legSide: '',
          directionCardinal: '',
          directionSide: '',
          spin: '',
          leftArmPosition: '',
          leftArmSide: '',
          leftArmForm: '',
          rightArmPosition: '',
          rightArmSide: '',
          rightArmForm: '',
          head: ''
        },
        {
          order: 3,
          division: 0,
          lastOnDivision: false,
          place: '',
          hip: '',
          feetPosition: '',
          feetOrder: '',
          feetOpenClose: '',
          variants: '',
          step: '',
          number: '',
          legForm: '',
          legCardinal: '',
          legSide: '',
          directionCardinal: '',
          directionSide: '',
          spin: '',
          leftArmPosition: '',
          leftArmSide: '',
          leftArmForm: '',
          rightArmPosition: '',
          rightArmSide: '',
          rightArmForm: '',
          head: ''
        },
        {
          order: 4,
          division: 0,
          lastOnDivision: false,
          place: '',
          hip: '',
          feetPosition: '',
          feetOrder: '',
          feetOpenClose: '',
          variants: '',
          step: '',
          number: '',
          legForm: '',
          legCardinal: '',
          legSide: '',
          directionCardinal: '',
          directionSide: '',
          spin: '',
          leftArmPosition: '',
          leftArmSide: '',
          leftArmForm: '',
          rightArmPosition: '',
          rightArmSide: '',
          rightArmForm: '',
          head: ''
        },
        {
          order: 5,
          division: 0,
          lastOnDivision: false,
          place: '',
          hip: '',
          feetPosition: '',
          feetOrder: '',
          feetOpenClose: '',
          variants: '',
          step: '',
          number: '',
          legForm: '',
          legCardinal: '',
          legSide: '',
          directionCardinal: '',
          directionSide: '',
          spin: '',
          leftArmPosition: '',
          leftArmSide: '',
          leftArmForm: '',
          rightArmPosition: '',
          rightArmSide: '',
          rightArmForm: '',
          head: ''
        },
        {
          order: 6,
          division: 0,
          lastOnDivision: false,
          place: '',
          hip: '',
          feetPosition: '',
          feetOrder: '',
          feetOpenClose: '',
          variants: '',
          step: '',
          number: '',
          legForm: '',
          legCardinal: '',
          legSide: '',
          directionCardinal: '',
          directionSide: '',
          spin: '',
          leftArmPosition: '',
          leftArmSide: '',
          leftArmForm: '',
          rightArmPosition: '',
          rightArmSide: '',
          rightArmForm: '',
          head: ''
        },
        {
          order: 7,
          division: 0,
          lastOnDivision: false,
          place: '',
          hip: '',
          feetPosition: '',
          feetOrder: '',
          feetOpenClose: '',
          variants: '',
          step: '',
          number: '',
          legForm: '',
          legCardinal: '',
          legSide: '',
          directionCardinal: '',
          directionSide: '',
          spin: '',
          leftArmPosition: '',
          leftArmSide: '',
          leftArmForm: '',
          rightArmPosition: '',
          rightArmSide: '',
          rightArmForm: '',
          head: ''
        },
        {
          order: 8,
          division: 0,
          lastOnDivision: false,
          place: '',
          hip: '',
          feetPosition: '',
          feetOrder: '',
          feetOpenClose: '',
          variants: '',
          step: '',
          number: '',
          legForm: '',
          legCardinal: '',
          legSide: '',
          directionCardinal: '',
          directionSide: '',
          spin: '',
          leftArmPosition: '',
          leftArmSide: '',
          leftArmForm: '',
          rightArmPosition: '',
          rightArmSide: '',
          rightArmForm: '',
          head: ''
        }
      ]
    }
  );

  return balletClass;
}

// Gives us an Initial Ballet Class Object to Work With
function initBalletClass() {
  const initClass = {
    master: '',
    mounth: 'January',
    day: 1,
    year: 2024,
    country: '',
    classBody: [
      {
        order: 1,
        stage: '',
        kind: '',
        stepBody: [
          {
            order: 1,
            phraseBody: [
              {
                order: 1,
                division: 0,
                lastOnDivision: false,
                place: '',
                hip: '',
                feetPosition: '',
                feetOrder: '',
                feetOpenClose: '',
                variants: '',
                step: '',
                number: '',
                legForm: '',
                legCardinal: '',
                legSide: '',
                directionCardinal: '',
                directionSide: '',
                spin: '',
                leftArmPosition: '',
                leftArmSide: '',
                leftArmForm: '',
                rightArmPosition: '',
                rightArmSide: '',
                rightArmForm: '',
                head: ''
              },
              {
                order: 2,
                division: 0,
                lastOnDivision: false,
                place: '',
                hip: '',
                feetPosition: '',
                feetOrder: '',
                feetOpenClose: '',
                variants: '',
                step: '',
                number: '',
                legForm: '',
                legCardinal: '',
                legSide: '',
                directionCardinal: '',
                directionSide: '',
                spin: '',
                leftArmPosition: '',
                leftArmSide: '',
                leftArmForm: '',
                rightArmPosition: '',
                rightArmSide: '',
                rightArmForm: '',
                head: ''
              },
              {
                order: 3,
                division: 0,
                lastOnDivision: false,
                place: '',
                hip: '',
                feetPosition: '',
                feetOrder: '',
                feetOpenClose: '',
                variants: '',
                step: '',
                number: '',
                legForm: '',
                legCardinal: '',
                legSide: '',
                directionCardinal: '',
                directionSide: '',
                spin: '',
                leftArmPosition: '',
                leftArmSide: '',
                leftArmForm: '',
                rightArmPosition: '',
                rightArmSide: '',
                rightArmForm: '',
                head: ''
              },
              {
                order: 4,
                division: 0,
                lastOnDivision: false,
                place: '',
                hip: '',
                feetPosition: '',
                feetOrder: '',
                feetOpenClose: '',
                variants: '',
                step: '',
                number: '',
                legForm: '',
                legCardinal: '',
                legSide: '',
                directionCardinal: '',
                directionSide: '',
                spin: '',
                leftArmPosition: '',
                leftArmSide: '',
                leftArmForm: '',
                rightArmPosition: '',
                rightArmSide: '',
                rightArmForm: '',
                head: ''
              },
              {
                order: 5,
                division: 0,
                lastOnDivision: false,
                place: '',
                hip: '',
                feetPosition: '',
                feetOrder: '',
                feetOpenClose: '',
                variants: '',
                step: '',
                number: '',
                legForm: '',
                legCardinal: '',
                legSide: '',
                directionCardinal: '',
                directionSide: '',
                spin: '',
                leftArmPosition: '',
                leftArmSide: '',
                leftArmForm: '',
                rightArmPosition: '',
                rightArmSide: '',
                rightArmForm: '',
                head: ''
              },
              {
                order: 6,
                division: 0,
                lastOnDivision: false,
                place: '',
                hip: '',
                feetPosition: '',
                feetOrder: '',
                feetOpenClose: '',
                variants: '',
                step: '',
                number: '',
                legForm: '',
                legCardinal: '',
                legSide: '',
                directionCardinal: '',
                directionSide: '',
                spin: '',
                leftArmPosition: '',
                leftArmSide: '',
                leftArmForm: '',
                rightArmPosition: '',
                rightArmSide: '',
                rightArmForm: '',
                head: ''
              },
              {
                order: 7,
                division: 0,
                lastOnDivision: false,
                place: '',
                hip: '',
                feetPosition: '',
                feetOrder: '',
                feetOpenClose: '',
                variants: '',
                step: '',
                number: '',
                legForm: '',
                legCardinal: '',
                legSide: '',
                directionCardinal: '',
                directionSide: '',
                spin: '',
                leftArmPosition: '',
                leftArmSide: '',
                leftArmForm: '',
                rightArmPosition: '',
                rightArmSide: '',
                rightArmForm: '',
                head: ''
              },
              {
                order: 8,
                division: 0,
                lastOnDivision: false,
                place: '',
                hip: '',
                feetPosition: '',
                feetOrder: '',
                feetOpenClose: '',
                variants: '',
                step: '',
                number: '',
                legForm: '',
                legCardinal: '',
                legSide: '',
                directionCardinal: '',
                directionSide: '',
                spin: '',
                leftArmPosition: '',
                leftArmSide: '',
                leftArmForm: '',
                rightArmPosition: '',
                rightArmSide: '',
                rightArmForm: '',
                head: ''
              }
            ]
          }
        ]
      }
    ]

  }

  return initClass;
}

function initBlock() {
  let initBlock = {
    order: 1,
    division: 0,
    lastOnDivision: false,
    place: '',
    hip: '',
    feetPosition: '',
    feetOrder: '',
    feetOpenClose: '',
    variants: '',
    step: '',
    number: '',
    legForm: '',
    legCardinal: '',
    legSide: '',
    directionCardinal: '',
    directionSide: '',
    spin: '',
    leftArmPosition: '',
    leftArmSide: '',
    leftArmForm: '',
    rightArmPosition: '',
    rightArmSide: '',
    rightArmForm: '',
    head: ''
  };
  return initBlock;
};


// Function that takes a Block in String and the Order and gives us the Object
function stringBlockToObject(blockString, blockOrder, blockDivision, blockLastOnDivision) {
  let block = initBlock();

  //Order (Provided by the user)
  block.order = blockOrder;

  //Division (Provided by the user)
  block.division = blockDivision;

  //Last On Division (Provided by the user)
  block.lastOnDivision = blockLastOnDivision;


  //Place
  const placeRegex = /0;|1;|2;|3;|4;|5;|6;|7;|8;/;
  let placeMatch = blockString.match(placeRegex);
  block.place = placeMatch ? placeMatch[0] : '';

  //Hip
  const hipRegex = /1:|2:|3:|4:|5:|6:|7:|8:/;
  let hipMatch = blockString.match(hipRegex);
  block.hip = hipMatch ? hipMatch[0] : '';

  //Feet 
  const feetRegex = /(1|2|3|4|5)(\+|-|=)¬?/;
  let feetMatch = blockString.match(feetRegex);
  let Feet = feetMatch ? feetMatch[0] : '';

  //Feet Position
  const feetPositionRegex = /1|2|3|4|5/;
  let feetPositionMatch = Feet.match(feetPositionRegex);
  block.feetPosition = feetPositionMatch ? feetPositionMatch[0] : '';

  //Feet Order
  const feetOrderRegex = /\+|-|=/;
  let feetOrderMatch = Feet.match(feetOrderRegex);
  block.feetOrder = feetOrderMatch ? feetOrderMatch[0] : '';

  //Feet OpenClose
  const feetOpenCloseRegex = /¬/;
  let feetOpenCloseMatch = Feet.match(feetOpenCloseRegex);
  block.feetOpenClose = feetOpenCloseMatch ? feetOpenCloseMatch[0] : '';

  //Step
  const stepRegex = /as|bn|bt|bm|bs|br|bi|cb|cp|ch|cs|ct|cv|cx|cl|cn|db|dg|dt|dv|dl|ep|ev|eb|en|fi|fc|ff|fn|ft|fp|gg|gl|jt|je|pa|pp|po|ps|pm|pn|pq|py|pl|pe|pr|px|rv|rl|rn|re|rc|rj|rt|rp|ry|sr|sn|st|sp|tc|tf|tv|tl|tn|tb|tj|vs|tr/;
  let stepMatch = blockString.match(stepRegex);
  block.step = stepMatch ? stepMatch[0] : '';

  //Number
  const numberRegex = /1\.|2\.|3\.|4\.|5\.|6\.|7\.|8\./;
  let numberMatch = blockString.match(numberRegex);
  block.number = numberMatch ? numberMatch[0] : '';

  //Leg 
  const legRegex = /(#|\$|%|\/)(\+|-|=)!?/;
  let legMatch = blockString.match(legRegex);
  let Leg = legMatch ? legMatch[0] : '';

  //Leg Form
  const legFormRegex = /#|\$|%|\//;
  let legFormMatch = Leg.match(legFormRegex);
  block.legForm = legFormMatch ? legFormMatch[0] : '';

  //Leg Cardinal
  const legCardinalRegex = /\+|-|=/;
  let legCardinalMatch = Leg.match(legCardinalRegex);
  block.legCardinal = legCardinalMatch ? legCardinalMatch[0] : '';

  //Leg Side
  const legSideRegex = /!/;
  let legSideMatch = Leg.match(legSideRegex);
  block.legSide = legSideMatch ? legSideMatch[0] : '';

  //Direction 
  const directionRegex = /(\+|-|=)!+/;
  let directionMatch = blockString.match(directionRegex);
  let Direction = directionMatch ? directionMatch[0] : '';

  //Direction Cardinal
  const directionCardinalRegex = /\+|-|=/;
  let directionCardinalMatch = Direction.match(directionCardinalRegex);
  block.directionCardinal = directionCardinalMatch ? directionCardinalMatch[0] : '';

  //Direction Side
  const directionSideRegex = /!+/;
  let directionSideMatch = Direction.match(directionSideRegex);
  block.directionSide = directionSideMatch ? directionSideMatch[0] : '';

  //Spin
  const spinRegex = /<|>/;
  let spinMatch = blockString.match(spinRegex);
  block.spin = spinMatch ? spinMatch[0] : '';

  //Head
  const headRegex = /1\*|2\*|3\*|4\*|5\*|6\*|7\*|8\*/;
  let headMatch = blockString.match(headRegex);
  block.head = headMatch ? headMatch[0] : '';

  //LeftArm 
  const leftArmRegex = /(0|1|2|3|4|5|6|7|8|9)![°']+/;
  let leftArmMatch = blockString.match(leftArmRegex);
  let LeftArm = leftArmMatch ? leftArmMatch[0] : '';

  //LeftArm Position
  const leftArmPositionRegex = /0|1|2|3|4|5|6|7|8|9/;
  let leftArmPositionMatch = LeftArm.match(leftArmPositionRegex);
  block.leftArmPosition = leftArmPositionMatch ? leftArmPositionMatch[0] : '';

  //LeftArm Side
  const leftArmSideRegex = /!/;
  let leftArmSideMatch = LeftArm.match(leftArmSideRegex);
  block.leftArmSide = leftArmSideMatch ? leftArmSideMatch[0] : '';

  //LeftArm Form
  const leftArmFormRegex = /[°']+/;
  let leftArmFormMatch = LeftArm.match(leftArmFormRegex);
  block.leftArmForm = leftArmFormMatch ? leftArmFormMatch[0] : '';

  //RightArm 
  const rightArmRegex = /(0|1|2|3|4|5|6|7|8|9)(\?)[°']+/;
  let rightArmMatch = blockString.match(rightArmRegex);
  let RightArm = rightArmMatch ? rightArmMatch[0] : '';

  //RightArm Position
  const rightArmPositionRegex = /0|1|2|3|4|5|6|7|8|9/;
  let rightArmPositionMatch = RightArm.match(rightArmPositionRegex);
  block.rightArmPosition = rightArmPositionMatch ? rightArmPositionMatch[0] : '';

  //RightArm Side
  const rightArmSideRegex = /\?/;
  let rightArmSideMatch = RightArm.match(rightArmSideRegex);
  block.rightArmSide = rightArmSideMatch ? rightArmSideMatch[0] : '';

  //RightArm Form
  const rightArmFormRegex = /[°']+/;
  let rightArmFormMatch = RightArm.match(rightArmFormRegex);
  block.rightArmForm = rightArmFormMatch ? rightArmFormMatch[0] : '';

  //Variants
  const variantsRegex = /[DTPLRQGEVACFNB]+/;
  let variantsMatch = blockString.match(variantsRegex);
  block.variants = variantsMatch ? variantsMatch[0] : '';

  return block;

};

//Function that take a Time String and the Order (1-8) and gives an array of the block Objects
function timeStringToBlockObjectArray(timeString, order) {

  let firstDivisionArray = timeString.split(/(?<!,),(?!,)/);

  //CASE 1: NO COMMAS NO SPLIT, single object and BlockString
  if (firstDivisionArray.length === 1) {
    return [stringBlockToObject(timeString, order, 0, false)];
  }

  //CASE 2: ONE COMMA, ONE SPLIT
  else if (firstDivisionArray.length === 2) {
    let firstHalf = [];
    let secondHalf = [];

    let secondDivisionArray1 = firstDivisionArray[0].split(/,,/);
    //CASE 2.1.1: NO SUBSPLIT IN THE FIRST PART
    if (secondDivisionArray1.length === 1) {
      firstHalf = [stringBlockToObject(secondDivisionArray1[0], order, 1, false)];
    }
    //CASE 2.1.2: SINGLE SPLIT IN THE FIRST PART
    else if (secondDivisionArray1.length === 2) {
      firstHalf = [stringBlockToObject(secondDivisionArray1[0], order, 2, false), stringBlockToObject(secondDivisionArray1[1], order + 0.25, 2, true)];
    }
    //CASE 3.1.3: DOUBLE SPLIT IN THE FIRST PART
    else {
      firstHalf = [stringBlockToObject(secondDivisionArray1[0], order, 1, false), stringBlockToObject(secondDivisionArray1[1], order + 0.165, 2, false), stringBlockToObject(secondDivisionArray1[2], order + 0.33, 2, true)];
    }

    let secondDivisionArray2 = firstDivisionArray[1].split(/,,/);
    //CASE 2.2.1: NO SUBSPLIT IN THE SECOND PART
    if (secondDivisionArray2.length === 1) {
      secondHalf = [stringBlockToObject(secondDivisionArray2[0], order + 0.5, 1, true)];
    }
    //CASE 2.2.2: SINGLE SPLIT IN THE SECOND PART
    else if (secondDivisionArray2.length === 2) {
      secondHalf = [stringBlockToObject(secondDivisionArray2[0], order + 0.5, 2, false), stringBlockToObject(secondDivisionArray2[1], order + 0.75, 2, true)];
    }
    //CASE 3.2.3: DOUBLE SPLIT IN THE SECOND PART
    else {
      secondHalf = [stringBlockToObject(secondDivisionArray2[0], order + 0.5, 2, false), stringBlockToObject(secondDivisionArray2[1], order + 0.665, 2, false), stringBlockToObject(secondDivisionArray2[2], order + 0.83, 2, true)];
    }

    return [...firstHalf, ...secondHalf];

  }

  else {
    //CASE 3: TWO COMMAS, TWO SPLITS
    let firstThird = [];
    let secondThird = [];
    let thirdThird = [];

    let secondDivisionArray1 = firstDivisionArray[0].split(/,,/);
    //CASE 3.1.1: NO SUBSPLIT IN THE FIRST PART
    if (secondDivisionArray1.length === 1) {
      firstThird = [stringBlockToObject(secondDivisionArray1[0], order, 1, false)];
    }
    //CASE 3.1.2: SINGLE SPLIT IN THE FIRST PART
    else if (secondDivisionArray1.length === 2) {
      firstThird = [stringBlockToObject(secondDivisionArray1[0], order, 2, false), stringBlockToObject(secondDivisionArray1[1], order + 0.165, 2, true)];
    }
    //CASE 3.1.3: DOUBLE SPLIT IN THE FIRST PART
    else {
      firstThird = [stringBlockToObject(secondDivisionArray1[0], order, 2, false), stringBlockToObject(secondDivisionArray1[1], order + 0.11, 2, false), stringBlockToObject(secondDivisionArray1[2], order + 0.22, 2, true)];
    }


    let secondDivisionArray2 = firstDivisionArray[1].split(/,,/);
    //CASE 3.2.1: NO SUBSPLIT IN THE SECOND PART
    if (secondDivisionArray2.length === 1) {
      secondThird = [stringBlockToObject(secondDivisionArray2[0], order + 0.33, 1, false)];
    }
    //CASE 3.2.2: SINGLE SPLIT IN THE SECOND PART
    else if (secondDivisionArray2.length === 2) {
      secondThird = [stringBlockToObject(secondDivisionArray2[0], order + 0.33, 2, false), stringBlockToObject(secondDivisionArray2[1], order + 0.495, 2, true)];
    }
    //CASE 3.2.3: DOUBLE SPLIT IN THE SECOND PART
    else {
      secondThird = [stringBlockToObject(secondDivisionArray2[0], order + 0.33, 2, false), stringBlockToObject(secondDivisionArray2[1], order + 0.44, 2, false), stringBlockToObject(secondDivisionArray2[2], order + 0.55, 2, true)];
    }


    let secondDivisionArray3 = firstDivisionArray[2].split(/,,/);
    //CASE 3.3.1: NO SUBSPLIT IN THE THIRD PART
    if (secondDivisionArray3.length === 1) {
      thirdThird = [stringBlockToObject(secondDivisionArray3[0], order + 0.66, 1, true)];
    }
    //CASE 3.3.2: SINGLE SPLIT IN THE THIRD PART
    else if (secondDivisionArray3.length === 2) {
      thirdThird = [stringBlockToObject(secondDivisionArray3[0], order + 0.66, 2, false), stringBlockToObject(secondDivisionArray3[1], order + 0.825, 2, true)];
    }
    //CASE 3.3.3: DOUBLE SPLIT IN THE THIRD PART
    else {
      thirdThird = [stringBlockToObject(secondDivisionArray3[0], order + 0.66, 2, false), stringBlockToObject(secondDivisionArray3[1], order + 0.77, 2, false), stringBlockToObject(secondDivisionArray3[2], order + 0.88, 2, true)];
    }

    return [...firstThird, ...secondThird, ...thirdThird];

  }


};

//Function that takes a Phrase String and gives us a Phrase Object
function stringPhraseToObject(phraseString) {

  let phraseRegex = /(.*)\t(.*)\|(.*)\|(.*)\|(.*)\|(.*)\|(.*)\|(.*)\|(.*)\|/;
  let phraseMatch = phraseString.match(phraseRegex);


  const phraseObject = {
    order: romanToNumber(phraseMatch[1]),
    phraseBody: [
      ...timeStringToBlockObjectArray(phraseMatch[2], 1),
      ...timeStringToBlockObjectArray(phraseMatch[3], 2),
      ...timeStringToBlockObjectArray(phraseMatch[4], 3),
      ...timeStringToBlockObjectArray(phraseMatch[5], 4),
      ...timeStringToBlockObjectArray(phraseMatch[6], 5),
      ...timeStringToBlockObjectArray(phraseMatch[7], 6),
      ...timeStringToBlockObjectArray(phraseMatch[8], 7),
      ...timeStringToBlockObjectArray(phraseMatch[9], 8)
    ]
  };

  return phraseObject;


};

// Function that transforms a Step in String Format into an Step Object
function stringStepToObject(stringStep) {

  const initStep = {
    order: 1,
    stage: '',
    kind: '',
    stepBody: []
  };

  let stepRegex = /Step (\d+) : (.*) : (.*)\n\n([\s\S]*)\n\n/;
  let stepMatch = stringStep.match(stepRegex);
  initStep.order = stepMatch[1];
  initStep.stage = stepMatch[2];
  initStep.kind = stepMatch[3];

  let bodyStepString = stepMatch[4];

  let stepArray = bodyStepString.split('\n');
  initStep.stepBody = stepArray.map(stringPhraseToObject);

  return initStep;

};


//Function to transform a String into a Ballet Class (provided the String is Properly Formatted)
function balletStringToObject(stringBallet) {

  //First We Initialize the Ballet Class
  const initClass = {
    master: '',
    mounth: 'January',
    day: 1,
    year: 2024,
    country: '',
    classBody: []
  };

  let classRegex = /Master: (.*)\nDate: (.*) (.*) (.*)\nCountry: (.*)\n---\n\n([\s\S]*)\n\n$/;
  let balletMatch = stringBallet.match(classRegex);

  initClass.master = balletMatch[1];
  initClass.mounth = balletMatch[2];
  initClass.day = balletMatch[3];
  initClass.year = balletMatch[4];
  initClass.country = balletMatch[5];

  let bodyClassString = balletMatch[6];

  let classArray = bodyClassString.split('---\n\n');
  initClass.classBody = classArray.map(stringStepToObject);

  return initClass;


};



//Function that Divides a certain Block in 2, takes a Phrase (and array of block objects)
// and also takes the index where the division is done
function Division2(phrase, index) {


  //space will be the order space between the index block and 
  // the next index block allowing for good ordering
  let space = 0;
  if (index === phrase.length - 1) {
    space = phrase[index].order - phrase[index - 1].order;
  } else {
    space = phrase[index + 1].order - phrase[index].order;
  }

  if (phrase[index].division < 2) {


    let firstBlock = phrase[index];
    let secondBlock = initBlock();
    secondBlock.division = firstBlock.division;

    firstBlock.division += 1;
    secondBlock.division += 1;

    firstBlock.lastOnDivision = false;
    secondBlock.lastOnDivision = true;

    firstBlock.order = phrase[index].order;
    secondBlock.order = phrase[index].order + space * 0.5;

    phrase.splice(index, 1, firstBlock, secondBlock);


    return phrase;

  } else {
    return phrase;
  };
};

//Function that Divides a certain Block in 3, takes a Phrase (and array of block objects)
// and also takes the index where the division is done
function Division3(phrase, index) {

  //space will be the order space between the index block and 
  // the next index block allowing for good ordering
  let space = 0;
  if (index === phrase.length - 1) {
    space = 1;
  } else {
    space = phrase[index + 1].order - phrase[index].order;
  }

  if (phrase[index].division < 2) {

    let firstBlock = phrase[index];
    let secondBlock = initBlock();
    let thirdBlock = initBlock();
    secondBlock.division = firstBlock.division;
    thirdBlock.division = firstBlock.division;

    firstBlock.division += 1;
    secondBlock.division += 1;
    thirdBlock.division += 1;

    firstBlock.lastOnDivision = false;
    secondBlock.lastOnDivision = false;
    thirdBlock.lastOnDivision = true;

    firstBlock.order = phrase[index].order;
    secondBlock.order = phrase[index].order + space * 0.33;
    thirdBlock.order = phrase[index].order + space * 0.66;

    phrase.splice(index, 1, firstBlock, secondBlock, thirdBlock);

    return phrase;

  } else {
    return phrase;
  };
};

module.exports = {
  balletStringToObject,
  Division2,
  Division3,
  stringStepToObject,
  stringPhraseToObject,
  timeStringToBlockObjectArray,
  stringBlockToObject,
  initBalletClass,
  AddPhraseToStep,
  AddStepToBalletClass,
  balletClassText,
  balletStepText,
  balletPhraseText,
  balletBlockText,
  stringToBallet
};