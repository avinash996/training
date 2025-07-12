function displayPalindromeOrNot(isPalindrome) {
    if (isPalindrome) {
        console.log("True");
    } else {
        console.log("False");
    }
}

function findPalindromeOrNot(str, callback) {
    console.log("Start of findPalindromeOrNot");

    setTimeout(function () {
        console.log("Started Processing of Palindrome function.....");
        let reversedStr = str.split('').reverse().join('');
        let result = (str === reversedStr);
        callback(result);
    }, 3000);

    console.log("End of findPalindromeOrNot");
}

function Main() {
    console.log("Start of Main");
    findPalindromeOrNot("madam", displayPalindromeOrNot);
    console.log("End of Main");
}

Main();
