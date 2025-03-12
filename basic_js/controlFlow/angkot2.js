var jumlahAngkot = 10;
var angkotBeroperasi = 6;
var noAngkot = 1;

while (noAngkot <= angkotBeroperasi) {
  console.log("angkot no" + noAngkot + " beroperasi dengan baik");
  noAngkot++;
}

for (var i = angkotBeroperasi + 1; i <= jumlahAngkot; i++) {
  console.log("angkot no" + i + " sedang tidak beroperasi");
}

/*for (angkotBeroperasi + 1; angkotBeroperasi <= jumlahAngkot; angkotBeroperasi++) {
  console.log("angkot no" + angkotBeroperasi + " sedang tidak beroperasi");
}*/
