**11.** Aşağıdaki arrow function çıktısı nedir?

```jsx
const f = (a, b) => {
  return;
  a + b;
};
console.log(f(3, 4));
```

A) 7

B) undefined

C) NaN

D) Hata

✅ **Doğru Cevap: B**

**Açıklama:** `return` ifadesinden sonra gelen satır çalışmaz. Bu yüzden `undefined` döner.

---

**12.** Aşağıdakilerden hangisi `typeof []` çıktısıdır?

A) "array"

B) "object"

C) "function"

D) "undefined"

✅ **Doğru Cevap: B**

**Açıklama:** JavaScript’te diziler aslında objedir, `typeof []` sonucu `"object"` verir.

---

**13.** Aşağıdaki fonksiyon çağrıldığında çıktısı ne olur?

```jsx
function yaz(ad = "Ziyaretçi") {
  return ad.toUpperCase();
}
console.log(yaz());
```

A) undefined

B) "ZİYARETÇİ"

C) "Ziyaretçi"

D) Hata

✅ **Doğru Cevap: B**

**Açıklama:** Varsayılan değer `"Ziyaretçi"` atanır ve `toUpperCase()` metodu sonucu büyük harf yapar.

---

**14.** `continue` ifadesi aşağıdaki kodda nasıl davranır?

```
for (let i = 0; i < 5; i++) {
  if (i === 2) continue;
  console.log(i);
}
```

A) 0 1 2 3 4

B) 0 1 3 4

C) 2 3 4

D) 1 2 3

✅ **Doğru Cevap: B**

**Açıklama:** `i === 2` olduğunda o tur atlanır ve `console.log(i)` çalışmaz.

---

**15.** Aşağıdaki `switch` yapısında çıktı nedir?

```
let x = "salı";
switch (x) {
  case "pazartesi":
  case "salı":
    console.log("Hafta içi");
    break;
  default:
    console.log("Hafta sonu");
}
```

A) Hafta sonu

B) Hafta içi

C) Hata

D) undefined

✅ **Doğru Cevap: B**

**Açıklama:** `"salı"` case’e eşleşir, `"Hafta içi"` yazılır, `break` ile çıkılır.

---

**16.** Arrow function'larda `this` bağlamı nasıl çalışır?

A) Kendi `this`’ini oluşturur

B) Fonksiyon içindeki `this` undefined olur

C) Global scope'a bağlanır

D) `arguments` nesnesini kullanır

✅ **Doğru Cevap: C**

**Açıklama:** Arrow function kendi `this` bağlamını oluşturmaz, dışarıdan alır.

---

**17.** `return` ifadesi olmayan bir fonksiyon ne döner?

```jsx
function test() {}
console.log(test());
```

A) null

B) undefined

C) ""

D) 0

✅ **Doğru Cevap: B**

**Açıklama:** Fonksiyon içinde `return` yoksa otomatik olarak `undefined` döner.

---

**18.** Aşağıdaki kullanımda hangi satır çalışmaz?

```jsx
function örnek() {
  return 1;
  console.log("test");
}
```

A) return 1

B) console.log("test")

C) fonksiyon tanımı

D) hepsi çalışır

✅ **Doğru Cevap: B**

**Açıklama:** `return` sonrası satırlar atlanır, çalışmaz.

---

**19.** Aşağıdaki fonksiyon çağrıldığında `yas` değeri ne olur?

```jsx
function bilgi(isim = "Anonim", yas = yeniYas()) {
  return `${isim}, ${yas}`;
}
function yeniYas() {
  console.log("Yaş hesaplandı");
  return 30;
}
bilgi("Elif");
```

A) undefined

B) 30

C) Hata

D) "Elif, undefined"

✅ **Doğru Cevap: B**

**Açıklama:** `yas` verilmediği için `yeniYas()` çağrılır ve 30 döner.

```
Yaş hesaplandı
"Elif, 30"
```

---

**20.** Aşağıdaki fonksiyonun çıktısı nedir?

```jsx
const kişi = {
  isim: "Ahmet",
  selamla: () => "Merhaba " + this.isim
};
console.log(kişi.selamla());
```

A) Merhaba Ahmet

B) Merhaba undefined

C) Hata

D) this çalışmaz

✅ **Doğru Cevap: B**

**Açıklama:** Arrow function `this` bağlamını dış scope’tan aldığı için `this.isim` undefined olur.