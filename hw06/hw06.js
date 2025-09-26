let arrNum = new Array(10);

for (let i = 0; i < arrNum.length; i++) {
  arrNum[i] = Number(prompt("Hãy nhập 10 số nguyên vào mảng!"));
}
console.log(arrNum);

let isArrNum = arrNum.includes(Number(prompt("Hãy nhập số bạn muốn tìm.")));

if (isArrNum === true) {
  console.log(`Number is in the array`);
} else {
  console.log(`Number is not in the array`);
}
