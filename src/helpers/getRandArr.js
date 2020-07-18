export default function getRandArr (itemList) {
  const arr = [];
  for (let i = 0; i < 6; i++) {
    arr.push(itemList[Math.floor(Math.random() * itemList.length)]);
  }
  return arr;
};