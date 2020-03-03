var newLetter = prompt('Enter a letter:');
var lines = 0;
var letters = 0;

for (lines = 0; lines < 11; lines++) {
  for (letters = 0; letters < lines; letters++) {
    document.write(newLetter);
  }
  document.write('<br>');
}
