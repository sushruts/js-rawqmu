function getMiddleChars(word) {
  let index;
  if (word.length % 2) {
    index = word.length / 2;
    return word.substring(index, index + 1);
  } else {
    index = word.length / 2 - 1;
    return word.substring(index, index + 2);
  }
}
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Even String Output ::  ${getMiddleChars('ABCD')}</h1>
 <h1>Odd String Outpu :: ${getMiddleChars('XYZ')}</h1>`;
