function hitungIPK(matakuliah) {
  let totalBobotNilai = 0;
  let totalSKS = 0;

  matakuliah.forEach(({ sks, nilai }) => {
    let bobot = konversiNilaiKeBobot(nilai);
    totalBobotNilai += bobot * sks;
    totalSKS += sks;
  });

  return totalSKS > 0 ? (totalBobotNilai / totalSKS).toFixed(2) : 0;
}

function konversiNilaiKeBobot(nilai) {
  switch (nilai.toUpperCase()) {
    case "A":
      return 4.0;
    case "B":
      return 3.0;
    case "C":
      return 2.0;
    case "D":
      return 1.0;
    case "E":
      return 0.0;
    default:
      return 0.0;
  }
}

// Contoh penggunaan:
const matakuliah = [
  { sks: 3, nilai: "A" },
  { sks: 2, nilai: "B" },
  { sks: 4, nilai: "C" },
];

console.log("IPK: ", hitungIPK(matakuliah));
