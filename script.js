const formInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

const cleanInputString = (str) => {
  const regex = /[^\w]|_/g;
  return str.replace(regex, "");
};

const handleClick = () => {
  const formInputValue = formInput.value;

  if (!formInputValue) {
    alert("Please input a value");
    return;
  }
  palindromeChecker(formInputValue);
};

const displayingResult = (word, isPalindrome) => {
  const HTMLstring = `<b>${word}</b> is ${
    isPalindrome ? "" : "not "
  }a palindrome.`;

  result.innerHTML = HTMLstring;
};

const palindromeChecker = (word) => {
  const theWord = word.split("").reverse().join("").toLowerCase();
  const cleanedWord = cleanInputString(theWord);

  console.log(cleanedWord);
  console.log(cleanInputString(word));

  let isPalindrome = cleanedWord === cleanInputString(word.toLowerCase());

  if (isPalindrome) {
    console.log(word, " is a palindrome.");
    isPalindrome = true;
  } else {
    console.log(word, " not a palindrome.");
    isPalindrome = false;
  }

  displayingResult(word, isPalindrome);

  formInput.value = "";
};

checkBtn.addEventListener("click", handleClick);
