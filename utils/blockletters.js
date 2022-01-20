const { printA, printB, printC } = require('./letters.js')
module.exports = {


  blockLetter: function(letter) {
    switch (letter) {
      case 'A':
        printA();
        break;
     case 'B':
       printB();
       break;
     case 'C':
       printC();
       break;
        /* <<--- letters.js does not have functions D-Z.
     case 'D':
       printD();
       break;
     case 'E':
       printE();
       break;
     case 'F':
       printF();
       break;
     case 'G':
       printG();
       break;
     case 'H':
       printH();
       break;
     case 'I':
       printI();
       break;
     case 'J'
       printJ();
       break;
     case 'K':
       printK();
       break;
     case 'L':
       printL();
       break;
     case 'M':
       printM();
       break;
     case 'N':
       printN();
       break;
     case 'O':
       printO();
       break;
     case 'P':
       printP();
       break;
     case 'Q':
       printQ();
       break;
     case 'R': 
       printR();
       break;
     case 'S':
       printS();
       break;
     case 'T':
       printT();
       break;
     case 'U':
       printU();
       break;
     case 'V':
       printV();
       break;
     case 'W':
       printW();
       break;
     case 'X':
       printX();
       break;
     case 'Y':
       printY();
       break;
     case 'Z':
       printZ();
       break;
    */     
     default:
       console.log(`${letter} is not a valid input!`);
    }
  },
  


};
