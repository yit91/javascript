function panggilShift() {
  var kota = ['Jakarta','Bandung','Surabaya','Palembang','Medan'];
  console.log(kota);
  var  kota2 = kota.shift();
  console.log(kota2);
  return kota;
}
console.log(panggilShift());
