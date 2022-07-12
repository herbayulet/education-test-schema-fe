const findArr = (arr) => {
  let jumlahAngka = 1;
  let hitung = 0;
  let angka;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[i] == arr[j]) hitung++;
      if (jumlahAngka < hitung) {
        jumlahAngka = hitung;
        angka = arr[i];
      }
      //   console.log(arr[i], "ini adalah i");
      //   console.log(arr[j], "ini adalah J");
    }
    hitung = 0;
  }
  console.log(`total data paling banyak keluar adalah ${angka} dengan jumlah ${jumlahAngka}`);
};
findArr([1, 1, 1, 2, 2, 4, 1, 1]);
findArr([2, 1, 2, 2, 2, 8, 1, 1]);
findArr([3, 3, 3, 3, 2, 4, 1, 1]);
