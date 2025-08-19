/*
You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.*/

function diamond(n){
  let returnStr = ''
  if (!(n % 2 == 0 || n < 1)){
    for (let i=1; i <= n; i+= 2){
      returnStr += `${' '.repeat((n-i)/2)}${i % 2 == 1 ? '*'.repeat(i) : '*'.repeat(0)}\n`
    }
    for (let i=n-2; i >= 1; i-= 2){
      returnStr += `${' '.repeat((n-i)/2)}${i % 2 == 1 ? '*'.repeat(i) : '*'.repeat(0)}\n`
    }
    return returnStr
  }
  else {
    return null;
  }
}