// ! JANGAN DIMOFIDIKASI
const dataBelanjaan = [
  {
    id: "D-10001",
    nama: "Minyak Goreng Delima",
    harga: 25000,
    kuantitas: 2,
  },
  {
    id: "D-10020",
    nama: "Beras Mamos",
    harga: 48000,
    kuantitas: 1,
  },
  {
    id: "F-00010",
    nama: "Larutan Cap Kaki Empat",
    harga: 7500,
    kuantitas: 8,
  },
];

// boleh dimodifikasi bila ingin menggunakan deklarasi fungsi yang normal
const listBelanjaan = (dataBelanjaan) => {
  let itemBelanjaan = [];

  for (let item = 0; item < dataBelanjaan.length; item++) {
    itemBelanjaan.push(
      "- " + dataBelanjaan[item].nama + " x " + dataBelanjaan[item].kuantitas
    );
  }
  return itemBelanjaan;
};

console.log(listBelanjaan(dataBelanjaan));

// boleh dimodifikasi bila ingin menggunakan deklarasi fungsi yang normal
const totalBelanjaan = (dataBelanjaan) => {
  let totalHarga = 0;

  for (let i = 0; i < dataBelanjaan.length; i++) {
    let hargaPerBarang = dataBelanjaan[i].harga * dataBelanjaan[i].kuantitas;

    totalHarga = totalHarga + hargaPerBarang;
  }

  return totalHarga;
};

// ! JANGAN DIMODIFIKASI
const main = () => {
  console.log("Selamat datang customer");

  console.log("Belanjaan Anda adalah:");
  console.log(listBelanjaan?.(dataBelanjaan)?.join("\n"));
  console.log(
    "\nTotal Belanjaan Anda adalah Rp. " + totalBelanjaan?.(dataBelanjaan)
  );
};

main();

module.exports = {
  dataBelanjaan,
  listBelanjaan,
  totalBelanjaan,
};
