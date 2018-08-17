function objek() {
  var motor = {
    Type: 'Matic',
    harga: 14000000,
    warna: "Hitam",
    tahun:  [2010,2011,2012,2013,2014]
  }
  console.log(motor);
  console.log(motor.Type);//objek js
  console.log(motor.tahun);//objek array
  console.log(motor.tahun[3]);//mengambil objek spesifik array
}
objek()
