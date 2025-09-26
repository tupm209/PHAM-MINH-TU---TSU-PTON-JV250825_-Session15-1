let arrNum = new Array(10);

for (let i = 0; i < arrNum.length; i++) {
  arrNum[i] = Number(prompt("Hãy nhập 10 số nguyên vào mảng!"));
}
console.log(arrNum);
console.log(`Đây là mảng đã bị đảo ngược ${arrNum.reverse()}.`);