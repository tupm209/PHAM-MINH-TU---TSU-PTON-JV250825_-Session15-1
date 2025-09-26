let arrNum = new Array(10);
let count = 0;

for (let i = 0; i < arrNum.length; i++) {
  arrNum[i] = Number(prompt("Hãy nhập 10 số nguyên vào mảng!"));
}
console.log(arrNum);

for (const element of arrNum) {
  if (element > 10) {
    count++;
  }
}
alert(`Có ${count} số lớn hơn 10.`);
