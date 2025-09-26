let arrNum = new Array(10);

for (let i = 0; i < arrNum.length; i++) {
  arrNum[i] = Number(prompt("Hãy nhập 10 số nguyên vào mảng!"));
}
console.log(
  `Mảng sắp xếp theo thứ tự giảm dần ${arrNum.sort((a, b) => b - a)}`
);
