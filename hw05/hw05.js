let arrNum = [-1, 1, -3, 2, 4, 6, -2, 8, -9];
let count = 0;

for (const element of arrNum) {
  if (element < 0 && element % 1 === 0) {
    count++;
  }
}
console.log(arrNum);
console.log(`Có ${count} số nguyên âm trong mảng.`);
