let mahasiswaList = [
  { nim: "20211002", nama: "Siti Aminah", tugas: 80, uts: 85, uas: 90, aktif: true },
  { nim: "20211003", nama: "Ahmad Fauzi", tugas: 75, uts: 80, uas: 70, aktif: true },
  { nim: "20211004", nama: "Dewi Lestari", tugas: 90, uts: 95, uas: 85, aktif: false },
  { nim: "20211005", nama: "Rudi Hartono", tugas: 60, uts: 65, uas: 70, aktif: true },
];

function showMahasiswa() {
  const tbody = document.getElementById("mahasiswaTableBody");
  if (!tbody) return;
  tbody.innerHTML = "";
  mahasiswaList.forEach((mhs, index) => {
    let row = document.createElement("tr");
    row.className = "even:bg-gray-100 odd:bg-white";
    row.innerHTML = `
        <td class="py-2 px-4">${mhs.nim}</td>
        <td class="py-2 px-4">${mhs.nama}</td>
        <td class="py-2 px-4 text-center space-x-2">
          <button class="bg-yellow-500 text-white px-2 py-1 rounded" onclick="editMahasiswa(${index})">Edit</button>
          <button class="bg-red-500 text-white px-2 py-1 rounded" onclick="deleteMahasiswa(${index})">Hapus</button>
        </td>`;
    tbody.appendChild(row);
  });
}

function openModal() {
  document.getElementById("modal").classList.remove("hidden");
}

function closeModal() {
  document.getElementById("modal").classList.add("hidden");
  document.getElementById("mahasiswaForm").reset();
  document.getElementById("mahasiswaForm").removeAttribute("data-index");
  document.getElementById("modalTitle").innerText = "Tambah Mahasiswa";
}

function editMahasiswa(index) {
  let mahasiswa = mahasiswaList[index];
  document.getElementById("nim").value = mahasiswa.nim;
  document.getElementById("nama").value = mahasiswa.nama;
  document.getElementById("modalTitle").innerText = "Edit Mahasiswa";
  document.getElementById("mahasiswaForm").setAttribute("data-index", index);
  openModal();
}

function submitForm(event) {
  event.preventDefault();
  let nim = document.getElementById("nim").value;
  let nama = document.getElementById("nama").value;
  let index = document.getElementById("mahasiswaForm").getAttribute("data-index");

  if (index !== null && index !== "") {
    mahasiswaList[parseInt(index)].nim = nim;
    mahasiswaList[parseInt(index)].nama = nama;
  } else {
    mahasiswaList.push({ nim, nama, tugas: 0, uts: 0, uas: 0, aktif: true });
  }

  closeModal();
  showMahasiswa();
}

function deleteMahasiswa(index) {
  if (confirm("Apakah Anda yakin ingin menghapus mahasiswa ini?")) {
    mahasiswaList.splice(index, 1);
    showMahasiswa();
  }
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("mahasiswaForm").addEventListener("submit", submitForm);
});

showMahasiswa();
