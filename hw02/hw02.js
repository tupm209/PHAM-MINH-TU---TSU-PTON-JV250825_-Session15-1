let arrNum = new Array(10);
let maxNum;

for (let i = 0; i < arrNum.length; i++) {
  arrNum[i] = Number(prompt("Hãy nhập 10 số nguyên khác nhau vào mảng!"));
}
console.log(arrNum);

for (let i = 0; i < arrNum.length; i++) {
  if (arrNum[i] > arrNum[arrNum.length - 1]) {
    maxNum = arrNum[i];
  }
}
console.log(`Số lớn nhất có giá trị ${maxNum}.`);
console.log(`Vị trí của phần tử đó tại index ${arrNum.indexOf(maxNum)}.`);
