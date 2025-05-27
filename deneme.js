const urun = {
  ad: "Laptop",
  fiyat: 20000
};


urun.indirimliFiyat = function() {
    return 0.9*this.fiyat;
};

const indirimli = urun.indirimliFiyat();

console.log(indirimli);