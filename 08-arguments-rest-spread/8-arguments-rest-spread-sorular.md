**1.** Aşağıdaki kodun çıktısı nedir?

```jsx
function topla() {
  console.log(arguments.length);
}
topla(5, 10, 15);
```

A) 0

B) 2

C) 3

D) undefined

✅ **Doğru Cevap: C**

**Açıklama:** `arguments.length` → fonksiyona gönderilen argüman sayısını verir.

---

**2.** Aşağıdaki kodda ne hata vardır?

```jsx
const topla = () => {
  console.log(arguments);
}
topla(1, 2);
```

A) Hata vermez

B) `arguments` boş olur

C) `arguments` arrow function’da tanımlı değildir

D) `arguments.length` yanlış döner

✅ **Doğru Cevap: C**

**Açıklama:** `arguments`, sadece klasik `function` tanımında çalışır. Arrow function'da `undefined` olur.

---

**3.** Aşağıdaki `rest` parametresi kullanımında hangi değer `isim` olur?

```jsx
function selamla(isim, ...digerleri) {
  console.log(isim);
}
selamla("Ayşe", 25, "Ankara");
```

A) "Ayşe"

B) 25

C) "Ankara"

D) ["25", "Ankara"]

✅ **Doğru Cevap: A**

**Açıklama:** İlk parametre `isim`, geri kalanlar `...digerleri` olarak diziye gider.

---

**4.** Aşağıdaki kodun çıktısı nedir?

```jsx
function topla(...sayılar) {
  console.log(sayılar);
}
topla(1, 2, 3);
```

A) 6

B) [1, 2, 3]

C) undefined

D) NaN

✅ **Doğru Cevap: B**

**Açıklama:** `...sayılar` tüm argümanları bir dizi olarak yakalar.

---

**5.** `...spread` operatörü ne işe yarar?

A) Fazla parametreleri siler

B) Dizileri ve objeleri yayar

C) Arrow function içinde `this` tanımlar

D) Fonksiyonu kopyalar

✅ **Doğru Cevap: B**

**Açıklama:** `spread`, dizi veya objeyi "açar", kopyalama ve birleştirme için kullanılır.

---

**6.** Aşağıdaki kod ne yazdırır?

```jsx
const a = [1, 2];
const b = [3, 4];
const birleşik = [...a, ...b];
console.log(birleşik);
```

A) [1, 2]

B) [3, 4]

C) [1, 2, 3, 4]

D) [1, 2, [3, 4]]

✅ **Doğru Cevap: C**

**Açıklama:** `spread` ile iki dizi birleştirilir.

---

**7.** `...rest` parametresi nerede kullanılmalıdır?

A) Fonksiyon çağrısında

B) Obje tanımında

C) Fonksiyon parametrelerinde ve **sonda**

D) Arrow function dışında

✅ **Doğru Cevap: C**

**Açıklama:** `...rest`, fonksiyon parametrelerinin sonunda olmalı.

---

**8.** Aşağıdaki obje birleştirme işleminde `yeniObje.ad` ne olur?

```jsx
const a = { ad: "Ali" };
const b = { ad: "Ayşe" };
const yeniObje = { ...a, ...b };
```

A) "Ali"

B) "Ayşe"

C) undefined

D) Hata verir

✅ **Doğru Cevap: B**

**Açıklama:** Sonraki obje (`b`) aynı anahtarı yazdığı için üzerine yazar.

```jsx
//Çıktısı: { ad: "Ayşe" }
```

---

**9.** Aşağıdaki `arguments` ile `rest` farkını gösteren doğru ifade hangisidir?

A) İkisi de arrow function'da çalışır

B) `arguments` dizi, `rest` değildir

C) `arguments` eski stil, `rest` modern ve dizi yapısındadır

D) `rest` ile tüm argümanlar yakalanamaz

✅ **Doğru Cevap: C**

**Açıklama:** `rest` gerçek dizidir, modern JS’de `arguments`’ın yerini almıştır.

---

**10.** Aşağıdaki kodun çıktısı nedir?

```jsx
function yaz(...değerler) {
  console.log(değerler.length);
}
yaz("a", "b", "c", "d");
```

A) 3

B) 4

C) ["a", "b", "c", "d"]

D) undefined

✅ **Doğru Cevap: B**

**Açıklama:** `...değerler` → gelen tüm argümanları dizi olarak toplar → `length` 4 olur.