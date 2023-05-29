function isPalindrome(word) {
    word = word.toLowerCase().replace(/[^a-z]/g, "");
    return word === word.split("").reverse().join("");
  }

  function checkPalindrome() {
    var word = document.getElementById("word").value;
    var result = isPalindrome(word);
    if (result) {
      document.getElementById("result").innerHTML = "Sim, é um palíndromo!";
    } else {
      document.getElementById("result").innerHTML = "Não é um palíndromo.";
    }
  }
  