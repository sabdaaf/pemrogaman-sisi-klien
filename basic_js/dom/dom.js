//dom selection

//------------selection----------------------
//getElementById
const judul = document.getElementById("judul");
judul.innerHTML = "hello again";
judul.style.backgroundColor = "#83a0ee";

//getElementbyTag
const tag = document.getElementsByTagName("p");

for (let i = 0; i < tag.length; i++) {
  tag[i].style.backgroundColor = "#FFFFF0";
}

//getElementbyClassName
const className = document.getElementsByClassName("p1");
className[0].innerHTML = "paragraf 1(nyoba pake getElementByClassName)";
/**getElementById mengembalikan element(bisa langsung diubah)
 * sedangkan getElement sisanya mengembalikan HTML collection disimpan dalam bentuk array jadi mesti di tunjukin di index mana, kalo yang ditunjuk lebih dari 1 bisa pake looping
 */

//----------------dom manipulation---------------------
/**pada dom manipulation yang di manipulasi ada 2 (element dan node)
 * ada beberapa method yang sering digunakan
 * 1.innerHTML = untuk mengubah isi dari element
 * 2.innerText = untuk mengubah text dari element
 * 3.style = untuk mengubah style dari element
 * 4.setAttribute = untuk mengubah attribute dari element
 * 5.getAttribute = untuk mengambil attribute dari element
 * 6.removeAttribute = untuk menghapus attribute dari element
 * 7.classList = untuk mengubah class dari element
 */

const a = document.querySelector("section#a a"); //mengambil element a yang ada di dalam section a

a.getAttribute("href"); //mengambil attribute href dari element a
a.setAttribute("id", "ini isi dari id"); //mengubah attribute href dari element a
a.removeAttribute("id"); //menghapus attribute href dari element a
//set attribute itu nimpa jadi pake classlist kalo mau nambahin class baru

const p2 = document.querySelector(".p2");
p2.classList.add("label"); //menambahkan class label ke element p2
p2.classList.remove("label"); //menghapus class label dari element p2
p2.classList.toggle("label"); //menambahkan class label ke element p2 jika belum ada, jika sudah ada maka dihapus

p2.classList.item(0); //mengambil class ke 0 dari element p2
p2.classList.contains("label"); //mengecek apakah class label ada di element p2
p2.classList.replace("label", "label2"); //mengganti class label menjadi label2

//dom manipulation untuk node
const liNew = document.createElement("li");
const liText = document.createTextNode("paragraf baru");
liNew.appendChild(liText); //menambahkan text ke dalam liNew

const ul = document.querySelector("ul");
const li = ul.querySelector("li:nth-child(2)"); //mengambil li ke 2 dari ul

ul.insertBefore(liNew, li); //menambahkan liNew sebelum li ke 2

//-------------------event---------------------
function ubahWarna() {
  container.style.backgroundColor = "#3f704d"; //mengubah warna background dari element yang di klik
}

const p4 = document.querySelector("section#b p");
p4.addEventListener("click", function () {
  const ul = document.querySelector("section#b ul");
  const liNew = document.createElement("li");
  const liText = document.createTextNode("paragraf baru");
  liNew.appendChild(liText); //menambahkan text ke dalam liNew
  ul.appendChild(liNew); //menambahkan liNew ke dalam ul
});
