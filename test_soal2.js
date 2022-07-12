let validateString = (str) => {
  let split = str.split(" ");
  let txt = "";
  let regex = /[0-9]+/; //regex untuk angka
  if (str.match(regex)) {
    txt += `Sistem kami menolak untuk inputan berisi angka ${split[2]}`;
  } else {
    txt += `Sistem memeriksa data anda valid dengan ketentuan kami dengan inputan ${str}`;
  }
  return txt;
};
console.log(validateString("hallo jesika 24 selamat datang!"));
console.log(validateString("hallo anggun selamat datang!"));
console.log(validateString("hallo ** selamat datang!"));
console.log(validateString("hallo Mariage 889120! selamat datang!"));
