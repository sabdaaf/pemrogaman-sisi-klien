//cara nulis objek ada 3 : literal, function declaration, sama constructor
//literal
var mahasiswa = {
  nama: "yukari",
  lulus: true,
  ipSemester: [3.7, 3.4, 3.25, 3.31],
  ipk: function () {
    var total = 0;
    var ips = this.ipSemester;
    for (var i = 0; i < ips.length; i++) {
      total = total + ips[i];
    }
    return total / ips.length;
  },
};

console.log(mahasiswa);
console.log(mahasiswa.ipk());

//function declaration
function buatObjek(nama, lulus, ips) {
  var mhs = {};
  mhs.nama = nama;
  mhs.lulus = lulus;
  mhs.ips = ips;
  mhs.ipk = function () {
    var total = 0;
    for (var i = 0; i < ips.length; i++) {
      total += ips[i];
    }
    return total / ips.length;
  };
  return mhs;
}

var mhs2 = buatObjek("apple", true, [3.8, 3.7, 3.4, 3.9]);
console.log(mhs2);
console.log(mhs2.ipk());

//constructor

function Mahasiswa(nama, lulus, ips) {
  this.nama = nama;
  this.lulus = lulus;
  this.ips = ips;
  this.ipk = function () {
    var total = 0;
    for (var i = 0; i < this.ips.length; i++) {
      total += this.ips[i];
    }
    return total / this.ips.length;
  };
}

var mhs3 = new Mahasiswa("sabda", false, [3.7, 3.1, 4, 4]);
console.log(mhs3);
console.log(mhs3.ipk());
