let segitigaSikuKiri = (n) => {
  let hasil = "";
  for (i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      hasil += "* ";
    }
    hasil += "\n";
  }
  return hasil;
};
console.log(segitigaSikuKiri(6));

let segitigaSikuKanan = (n) => {
  let hasil = "";
  for (let i = 0; i <= n; i++) {
    for (let j = 1; j <= n - i; j++) {
      hasil += " ";
    }
    for (let k = 1; k <= i; k++) {
      hasil += "*";
    }
    hasil += "\n";
  }
  return hasil;
};
console.log(segitigaSikuKanan(5));
