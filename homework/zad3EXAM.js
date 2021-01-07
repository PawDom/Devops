//Podział na mniejsz tablice - START
// Funkcja działa tak, że bieże wskazaną tablice i dzieli ją na mniejsze tablice o ilości wartości "len".
// Zapisuje je w zmiennej "smallerArrays" która jest tablicą zwierającą mniejsze tablice, czyli "chunks".
function splitArrayIntoChunksOfLen(arr, len) {
  let chunks = [];
  let i = 0;
  let n = arr.length;
  while (i < n) {
    chunks.push(arr.slice(i, i += len));
  }
  return chunks;
}
var arr8Balls = [1, 1, 1, 1, 2, 1, 1, 1];
var smallerArrays = splitArrayIntoChunksOfLen(arr8Balls, 3); //split into chunks of 3
//END

// Etap 2 - Szukam jedynm (na grupę) ważeniem odpowiedniej kuli.
// Za pierwszym razem porównuje pierwszą wartość tablicy z drugą, jeśli pierwsza wartość jest mniejsza, wyświetlam drugą,
// jeśli nie biorę drugą wartość i porównuje ją z trzecią, jeśli dalej są równę biorę kolejną tablicę.
// Powtarzam powyższe aż do znalezienia wyższej wartości.

for (let a = 0; a < smallerArrays.length; a++) {
  if ((smallerArrays[a])[0] < (smallerArrays[a])[1]) {
    console.log((smallerArrays[a])[1]);
  } else if ((smallerArrays[a])[1] < (smallerArrays[a])[2]) {
    console.log((smallerArrays[a])[2]);
  }
}

//Poprzednia wersja, po rozwikłaju logiki skróciłem do powyższej wersji z pętlą for
// if((smallerArrays[0])[0]<(smallerArrays[0])[1]){
//   console.log((smallerArrays[0])[1]);
// }else if((smallerArrays[0])[1]<(smallerArrays[0])[2]){
//   console.log((smallerArrays[0])[2]);
// }else if((smallerArrays[1])[0]<(smallerArrays[1])[1]){
//   console.log((smallerArrays[1])[1]);
// }else if((smallerArrays[1])[1]<(smallerArrays[1])[2]){
//   console.log((smallerArrays[1])[2]);
// }else if((smallerArrays[2])[0]<(smallerArrays[2])[1]){
//   console.log((smallerArrays[2])[1]);
// }else if((smallerArrays[2])[1]<(smallerArrays[2])[2]){
//   console.log((smallerArrays[2])[2]);
// }




