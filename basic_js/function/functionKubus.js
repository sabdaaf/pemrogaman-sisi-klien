function jumlahVolumeKubus(a, b) {
  var volume1;
  var volume2;
  var jumlahVolumeKubus;

  volume1 = a * a * a;
  volume2 = b * b * b;
  jumlahVolumeKubus = volume1 + volume2;

  return jumlahVolumeKubus;
}

console.log(jumlahVolumeKubus(1, 3));
