//link: https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/roman-numeral-converter/

function convertToRoman(num) {
    let getLetter = (num) => {
        switch(num){
            case 0: return 'M';
            case 1: return 'D';
            case 2: return 'C';
            case 3: return 'L';
            case 4: return 'X';
            case 5: return 'V';
            case 6: return 'I';
        }
    }

    let roman = "";
    let qntArr = [];

    qntArr[0] = Math.floor(num / 1000); num %= 1000; // M:1000
    qntArr[1] = Math.floor(num / 500); num %= 500; // D:500
    qntArr[2] = Math.floor(num / 100); num %= 100; // C:100
    qntArr[3] = Math.floor(num / 50); num %= 50; // L:50
    qntArr[4] = Math.floor(num / 10); num %= 10; // X:10
    qntArr[5] = Math.floor(num / 5); num %= 5; // V:5
    qntArr[6] = Math.floor(num); // I:1

    for(let i=0; i<qntArr.length; i++){
        let letter = getLetter(i);
        
        for(let j=0; j<qntArr[i]; j++)
            roman += letter;
            
        if(i%2 == 0 && i<qntArr.length-2 && qntArr[i+1] == 1 && qntArr[i+2] == 4) {
            roman += getLetter(i+2) + letter;
            qntArr[i+1] = qntArr[i+2] = 0;
        }
        else if(i%2 == 1 && i<qntArr.length-1 && qntArr[i+1] == 4) {
            roman += getLetter(i+1) + letter;
            qntArr[i+1] = 0;
        }
    }

    return roman;
}

console.log(convertToRoman(29));
