const a = 3;

for (let i = 1; i <= a; i++) {
  let row = '';
  for (let j = 1; j <= i; j++) {
    row += '*';
  }
  console.log(row);
}

const b = 3;

for (let i = 1; i <= b; i++) {
  let row = '';
  for (let j = 1; j <= b; j++) {
    row += '*';
  }
  console.log(row);
}

const c = 3;

for (let i = 1; i <= c; i++) {
  let row = '';
  for (let j = 1; j <= c - i; j++) {
    row += ' ';
  }
  for (let k = 1; k <= i * 2 - 1; k++) {
    row += '*';
  }
  console.log(row);
}
