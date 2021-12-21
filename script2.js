divBoxes.forEach((box) => {
  box.classList.toggle("active");
  if (box.className === "lotteryNum active") {
    const numRate = Math.random();
    if (numRate < 0.218 && numRate >= 0) {
      let preValue = Math.random() * (10 - 1) + 1;
      let value = Math.round(preValue);
      if (lotteryNum.includes(value)) {
        lotteryNum.push(Math.round(Math.random() * (10 - 1) + 1));
        box.innerText = Math.round(Math.random() * (10 - 1) + 1);
      } else {
        lotteryNum.push(value);
        box.innerText = value;
      }
    } else if (numRate < 0.448 && numRate >= 0.218) {
      let preValue = Math.random() * (20 - 11) + 11;
      let value = Math.round(preValue);
      if (lotteryNum.includes(value)) {
        lotteryNum.push(Math.round(Math.random() * (20 - 11) + 11));
        box.innerText = Math.round(Math.random() * (20 - 11) + 11);
      } else {
        lotteryNum.push(value);
        box.innerText = value;
      }
    } else if (numRate < 0.661 && numRate >= 0.448) {
      let preValue = Math.random() * (30 - 21) + 21;
      let value = Math.round(preValue);
      if (lotteryNum.includes(value)) {
        lotteryNum.push(Math.round(Math.random() * (30 - 21) + 21));
        box.innerText = Math.round(Math.random() * (30 - 21) + 21);
      } else {
        lotteryNum.push(value);
        box.innerText = value;
      }
    } else if (numRate < 0.887 && numRate >= 0.661) {
      let preValue = Math.random() * (40 - 31) + 31;
      let value = Math.round(preValue);
      if (lotteryNum.includes(value)) {
        lotteryNum.push(Math.round(Math.random() * (40 - 31) + 31));
        box.innerText = Math.round(Math.random() * (40 - 31) + 31);
      } else {
        lotteryNum.push(value);
        box.innerText = value;
      }
    } else if (numRate < 1 && numRate >= 0.887) {
      let preValue = Math.random() * (45 - 41) + 41;
      let value = Math.round(preValue);
      if (lotteryNum.includes(value)) {
        lotteryNum.push(Math.round(Math.random() * (45 - 41) + 41));
        box.innerText = Math.round(Math.random() * (45 - 41) + 41);
      } else {
        lotteryNum.push(value);
        box.innerText = value;
      }
    }
  }
  console.log(lotteryNum);
});
