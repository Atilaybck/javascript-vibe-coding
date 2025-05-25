// 🔹 Soru 1
// Aşağıdaki `kullanici` objesine bir `email` alanı ekle:
const kullanici = { ad: "Ayşe", aktif: true };
kullanici.email = "ayse@example.com";

// 🔹 Soru 2
// Aşağıdaki `urun` objesinin `fiyat` değerini "100" olarak güncelle:
const urun = { isim: "Kalem", fiyat: 80 };
urun.fiyat = 100;

// 🔹 Soru 3
// Aşağıdaki `film` objesinden `imdb` alanını sil:
const film = { ad: "Interstellar", imdb: 8.6, tur: "Bilim Kurgu" };
delete film.imdb;

// 🔹 Soru 4
// `kisi` objesine dinamik olarak bir `meslek` anahtarı ekle, değeri "Mühendis" olsun:
const kisi = { ad: "Can" };
const key = "meslek";
kisi[key] = "Mühendis";

// 🔹 Soru 5
// Aşağıdaki `kitap` objesine:
// - `sayfa` adlı alanı ekle, değeri 328 olsun
// - `yazar` alanını "G. Orwell" olarak güncelle
// - `sayfa` alanını sil
const kitap = { isim: "1984", yazar: "George Orwell" };
kitap.sayfa = 328;
kitap.yazar = "G. Orwell";
delete kitap.sayfa;
