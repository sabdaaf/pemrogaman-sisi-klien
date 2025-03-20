function penjumlahan(a, b) {
  return a + b;
}

function perkalian(a, b) {
  return a * b;
}

var hasil = perkalian(penjumlahan(2, 1), penjumlahan(3, 3));
console.log(hasil);

//jika parameter lebih sedikit dari argument
//maka argument kelebihannya akan diabaikan
//contoh
var hasil = penjumlahan(20, 20, 20); //argument ke-3 diabaikan
console.log(hasil);

//jika parameter lebih banyak dari argument
//maka parameter kelebihannya akan diisi dengan nilai undefine
function tambah(a, b, c) {
  return a + b;
}
var coba = tambah(5, 10); //nilai c undefine

//reminder argument beda dengan arguments
//arguments aaray yang berisi nilai yang dikirim saat fungsi dipanggil
function tambah2() {
  return arguments;
}

var coba = tambah2(5, 10, "hi", true);
console.log(coba);

function tambah() {
  var hasil = 0;
  for (var i = 0; i < arguments.length; i++) {
    hasil += arguments[i];
  }
  return hasil;
}

var coba = tambah(1, 7, 9, 8);
console.log(coba);

