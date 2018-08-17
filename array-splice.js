function panggilSplice() {
  var kota = ["Palembang","Surabaya","Jakarta","Medan"];
  console.log(kota);
  console.log("============");
  kota.splice(2,0,"Padang");// (2=>aray keberapa yang akan kita sisipkan,0=>keberapa yang akan dihapus jika 0 maka tidak ada yang dihapus,""=>aray yang akan kita sisipkan)
  return kota;
}
console.log(panggilSplice());
