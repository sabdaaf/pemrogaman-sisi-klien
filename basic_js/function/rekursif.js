//rekursif
function cetakAngka(n) {
  if (n == 0) return;
  console.log(n);
  cetakAngka(n - 1);
}

cetakAngka(10);

//faktorial
function faktorial(n) {
  if (n == 0) return 1;
  return n * faktorial(n - 1);
}

console.log(faktorial(5));

/**
 * 5*faktorial(5-1)
 * 4*faktorial(4-1)
 * 3*faktorial(3-1)
 * 2*faktorial(2-1)
 * 1*faktorial(1)kembali ke nilai 1
 * setelah tiap tugas dihitung mereka akan dijumlahkan(cara kerja rekursif)
 * jadi hasilnya 1*2*3*4*5
 */

//semua looping bisa dibikin rekursif tapi tidak sebaliknya
