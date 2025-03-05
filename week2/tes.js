const datamahasiswa = [
    {
        id: 1,
        nama: "Agus Indigogo",
        semester: 6,
        nilai: {
            daspro: 75,
            basdat: 80,
            web: 70
        },
        aktif: true,
        organisasi: ["Agus Community", "PMR", "Paduan Suara"]
    },
    {
        id: 2,
        nama: "Agus Buta",
        semester: 2,
        nilai: {
            daspro: 75
        },
        aktif: false
    }
]

// semua mhs
console.log(datamahasiswa);

// mhs urutan pertama
const mhs = datamahasiswa[0];
console.log(mhs);

// destructuring objek
const { nama, semester, nilai, aktif, organisasi } = mhs;
console.log("cara lama, nama saya adalah "+nama)
console.log(`Agus Terkuat di Dunia adalah ${nama}`)

// nambah data ke objek
const updatedmahasiswa = {
    ...mhs,
    alamat: "Flat Mars",
    progdi: "Teknik Marketing"
}
console.log(updatedmahasiswa)

// destructuring array
const [firstorganisasi, ...otherorganisasi] = organisasi;
console.log(otherorganisasi);

// nambah data ke array
const newOrganisasi = "Pramuka";
const nowOrganisasi = [...organisasi, newOrganisasi];
console.log(`Organisasi milik ${nama} adalah ${nowOrganisasi}`)


const mhs2 = datamahasiswa[1];
const { nama2, aktif2, organisasi2} = mhs2;

const statusaktif = aktif ? "masih kuliah" : "cuti dulu";
console.log(`Mahasiswa pertama statusnya ${statusaktif}`)

statusmhs = (status) => {
    return status ? "masih kuliah" : "cuti dulu";
}
console.log(`Mahasiswa kedua statusnya ${statusmhs(aktif2)}`)

keaktifan = (organisasi) => {
    return organisasi ?? "kuliah aja";
}
console.log(`Mahasiswa ini ikut ${keaktifan(organisasi2)}`)

const newmahasiswa = {
    id: 99,
    nama: "Joko"    
};

const datamhsbaru = [...datamahasiswa, newmahasiswa];
console.log(datamhsbaru);