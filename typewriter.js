const sentence = "Hey, ida i love youuuuuu!";
const speed = 5;

let newSentence = sentence + "\n"

for (let i = 0; i < newSentence.length; i++) {
  setTimeout(() => {
    process.stdout.write(newSentence[i])
  }, i * speed);
}