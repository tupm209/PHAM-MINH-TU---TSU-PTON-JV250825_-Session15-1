let arrNum = new Array(10);
let maxNum;
let sum = 0;

for (let i = 0; i < arrNum.length; i++) {
  arrNum[i] = Number(prompt("Hãy nhập 10 số nguyên vào mảng!"));
}
console.log(arrNum);

for (let i = 0; i < arrNum.length; i++) {
  if (arrNum[i] > arrNum[arrNum.length - 1]) {
    maxNum = arrNum[i];
  }
  sum += arrNum[i];
}

console.log(`Số lớn nhất có giá trị ${maxNum}.`);
console.log(`Giá trị trung bình là ${sum/arrNum.length}.`)