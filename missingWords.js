function missingWords(sentence, wordsArr) {
  let sentenceArr = sentence.split(" ");
  let newSentence = [];
  let i = 0;
  for (let elem in sentenceArr) {
    if (sentenceArr[elem] === "_") {
      newSentence.push(wordsArr[i]);
      i++;
    } else {
      newSentence.push(sentenceArr[elem]);
    }
  }
  console.log(newSentence.join(" "));
}

missingWords("i _ go _ ", ["want to", "out"]);
