let num = 121;
let str = num.toString();
let a = 0;
let b = Array.length - 1;
let isPalindrome = true;

while(a < b) {
    if (str[a] != str[b]){
        isPalindrome = false;
        break;
    } 
    a++;
    b--;
}

if(isPalindrome){
    console.log("It is palindrome");
}
else {
    console.log("It is not palindrome");
}