var newLetter = prompt('Enter a letter:');
var lines = 0;
var letters = 0;

if (newLetter == 'b') {
  for (lines = 0; lines < 10; lines++) {

    for (letters = 0; letters < lines ; letters++) {
      document.write(newLetter);
    }
    document.write('<br>');
  }
}
