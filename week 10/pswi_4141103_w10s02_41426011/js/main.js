//nomor 4
const daftar = document.querySelector("#daftar");
const li = document.createElement("li");
li.textContent = "<b>Rina</b>";
daftar.append(li);

// nomor 5
let peserta = [{ id: 1, nama: "Rina" }, { id: 2, nama: "Budi" }];


// nomor 6
const pesan = document.querySelector("#pesan");
pesan.textContent = peserta.length ? "" : "Belum ada peserta";
