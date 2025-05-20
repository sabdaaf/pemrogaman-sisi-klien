// Destructuring Assignment
// destructuring pada object
const mataKuliahList = {
  tahunAjar: 2024,
  mataKuliah: [
    { kode: "MK001", nama: "matematika", sks: 3, tugasP: 25, utsP: 35, uasP: 40 },
    { kode: "MK002", nama: "fisika", sks: 3, tugasP: 25, utsP: 35, uasP: 40 },
    { kode: "MK003", nama: "kimia", sks: 3, tugasP: 25, utsP: 35, uasP: 40 },
  ],
};
const { tahunAjar, mataKuliah } = mataKuliahList;
//console.log(tahunAjar, mataKuliah);

//const [mk001, mk002] = mataKuliahList.mataKuliah;
//console.log(mk001, mk002);

//mataKuliahList.mataKuliah.push({ kode: "MK003", nama: "kimia", sks: 3, tugasP: 25, utsP: 35, uasP: 40 }); // tambah element baru diakhir array
//console.log(mataKuliahList.mataKuliah);

//mataKuliahList.mataKuliah.unshift("bahasa indonesia"); // tambah element baru di awal array
//console.log(mataKuliahList.mataKuliah);

//mataKuliahList.mataKuliah.pop(); // hapus element terakhir di array
//console.log(mataKuliahList.mataKuliah);

//mataKuliahList.mataKuliah.shift(); // hapus element pertama di array
//console.log(mataKuliahList.mataKuliah);

mataKuliahList.mataKuliah = [
  ...mataKuliahList.mataKuliah,
  { kode: "MK004", nama: "biologi", sks: 3, tugasP: 25, utsP: 35, uasP: 40 },
  { kode: "MK005", nama: "sastra indo", sks: 3, tugasP: 25, utsP: 35, uasP: 40 },
  { kode: "MK006", nama: "sastra inggris", sks: 3, tugasP: 25, utsP: 35, uasP: 40 },
]; // tambah element baru diakhir array
//console.log(mataKuliahList.mataKuliah);

//Spread Operator (...)
const newMatkul = { kode: "MK007", nama: "Sistem Operasi", sks: 3, tugasP: 25, utsP: 35, uasP: 40 };

const updatedMataKuliah = {
  ...mataKuliahList,
  mataKuliah: [...mataKuliahList.mataKuliah, newMatkul],
};

console.log(updatedMataKuliah);

//template literal
nama = "sabda";
status = true;
const summary = `${nama} adalah mahasiswa aktif: ${status}.`;
//console.log(summary);

/*
//Arrow Function
const getMatkulName = (kode) => mataKuliahList.mataKuliah.find((m) => m.kode === kode).nama;
console.log(getMatkulName("MK001"));
*/
