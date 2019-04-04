console.log('*************Namu darbas 5.****************');
 


function isrinktiRaides( tekstas, raide ) { // tekstas - tekstas, raide - kelinta raide
    if ( typeof(tekstas) !== "string" ) {
        return "Pirmasis kintamasis yra netinkamo tipo.";
    }
    if ( tekstas.length == 0 || tekstas.length > 100 ) {
        return "Pirmojo kintamojo reikšmė yra netinkamo dydžio.";
    }
    if ( typeof(raide) !== "number" ) {
        return "Antrasis kintamasis yra netinkamo tipo.";
    }
    if ( raide <= 0 ) {
        return "Antrasis kintamasis turi būti didesnis už nulį.";
    }
    if ( raide > tekstas.length ) {
        return "Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.";
    }
    

}

console.log( isrinktiRaides( "abcdefg", 2 ) );
console.log( isrinktiRaides( "abcdefghijkl", 3 ) );
console.log( isrinktiRaides( "abc", 0 ) );
console.log( isrinktiRaides( "abc", 4 ) );
console.log( isrinktiRaides( 1561, 2 ) );
console.log( isrinktiRaides( "" , 6));