// Destructuring Assignment
// destructuring pada object
const mataKuliahList = {
  tahunAjar: 2024,
  mataKuliah: ["matematika", "fisika", "kimia"],
};
const { tahunAjar, mataKuliah } = mataKuliahList;
console.log(tahunAjar, mataKuliah);

const [mk1, mk2] = mataKuliahList.mataKuliah;
console.log(mk1, mk2);

mataKuliahList.mataKuliah.push("biologi"); // tambah element baru diakhir array
console.log(mataKuliahList.mataKuliah);

mataKuliahList.mataKuliah.unshift("bahasa indonesia"); // tambah element baru di awal array
console.log(mataKuliahList.mataKuliah);

mataKuliahList.mataKuliah.pop(); // hapus element terakhir di array
console.log(mataKuliahList.mataKuliah);

mataKuliahList.mataKuliah.shift(); // hapus element pertama di array
console.log(mataKuliahList.mataKuliah);

mataKuliahList.mataKuliah = [...mataKuliahList.mataKuliah, "biologi", "sastra indo", "sastra inggris"]; // tambah element baru diakhir array
console.log(mataKuliahList.mataKuliah);
