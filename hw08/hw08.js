let arrA = new Array(10);
let arrB = new Array(10);
let arrC = new Array(20);

for (let i = 0; i < arrA.length; i++) {
  arrA[i] = Number(prompt("Hãy nhập 10 số nguyên vào mảng a!"));
}
console.log(`Mảng a ${arrA}`);

for (let i = 0; i < arrB.length; i++) {
  arrB[i] = Number(prompt("Hãy nhập 10 số nguyên vào mảng b!"));
}
console.log(`Mảng b ${arrB}`);

arrC = arrA.concat(arrB);
console.log(`Mảng c ${arrC}`);
