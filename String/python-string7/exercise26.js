/**
 * Write a JS program to display formatted text (width=50) as output. 
 * sample_text = " Python is a widely used high-level, general-purpose, interpreted, dynamic programming language. Its design philosophy emphasizes code readability, and its syntax allows programmers to express concepts in fewer lines of code than possible in languages such as C++ or Java. "
 */

const sample_text = `
Python is a widely used high-level, general-purpose, interpreted,
dynamic programming language. Its design philosophy emphasizes
code readability, and its syntax allows programmers to express
concepts in fewer lines of code than possible in languages such
as C++ or Java.
`;

function formatText(text, width) {
  const words = text.trim().split(/\s+/);
  let line = "";
  let result = "";

  words.forEach(word => {
    if ((line + word).length > width) {
      result += line.trim() + "\n";
      line = "";
    }
    line += word + " ";
  });

  // Add the last line
  if (line.length > 0) {
    result += line.trim();
  }

  return result;
}

const formatted = formatText(sample_text, 50);
console.log(formatted);