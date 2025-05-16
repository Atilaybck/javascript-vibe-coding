**31.** Aşağıdaki fonksiyon çağrıldığında ne olur?

```jsx
function test(a = b, b = 3) {
  return a + b;
}
console.log(test());
```

A) 6

B) undefined

C) ReferenceError

D) NaN

✅ **Doğru Cevap: C**

**Açıklama:** `a = b` satırında `b` henüz tanımlanmadığı için `ReferenceError` hatası oluşur.

---

**32.** Aşağıdaki kullanımda `y` değeri ne olur?

```jsx
function hesapla(x = 2, y = x * 2) {
  return y;
}
console.log(hesapla(undefined, undefined));
```

A) 4

B) NaN

C) undefined

D) Hata

✅ **Doğru Cevap: A**

**Açıklama:** `x = 2`, `y = x * 2` → `y = 4`, çünkü ikisi de `undefined` olarak verildiği için varsayılanlar çalışır.

---

**33.** Aşağıdaki `do...while` döngüsü çıktısı nedir?

```jsx
let i = 10;
do {
  console.log(i);
  i++;
} while (i < 5);
```

A) Hiçbir şey yazmaz

B) 10

C) 10 11 12 13 14

D) Sonsuz döngü

✅ **Doğru Cevap: B**

**Açıklama:** `do...while` döngüsü koşulu kontrol etmeden bir kez çalışır.

---

**34.** Aşağıdaki kod bloğu ne yazdırır?

```jsx
let a = 5;
let b = "5";
console.log(a === b);
```

A) true

B) false

C) undefined

D) Hata

✅ **Doğru Cevap: B**

**Açıklama:** `===` hem türü hem değeri karşılaştırır. Sayı ve string farklıdır → `false`.

---

**35.** Aşağıdaki `for` döngüsü çıktısı nedir?

```
for (let i = 0; i < 5; i++) {
  if (i === 3) break;
  console.log(i);
}
```

A) 0 1 2 3 4

B) 1 2 3

C) 0 1 2

D) 0 1 2 3

✅ **Doğru Cevap: C**

**Açıklama:** `i === 3` olduğunda `break` çalışır, döngü o anda biter.

---

**36.** Aşağıdaki fonksiyonlardan hangisi `undefined` döner?

```jsx
const f1 = () => {};
const f2 = () => "merhaba";
const f3 = () => null;
const f4 = () => 0;
```

A) f1

B) f2

C) f3

D) f4

✅ **Doğru Cevap: A**

**Açıklama:** `f1` içinde `return` veya değer yok → otomatik `undefined` döner.

---

**37.** Aşağıdaki kodda `this.isim` neyi gösterir?

```jsx
const kişi = {
  isim: "Zeynep",
  selamla: () => "Merhaba " + this.isim
};
console.log(kişi.selamla());
```

A) "Zeynep"

B) undefined

C) kişi nesnesi

D) Global `this`

✅ **Doğru Cevap: D**

**Açıklama:** Arrow function `this` bağlamını oluşturmaz; dış (global) scope’tan alır.

---

**38.** `NaN` ile ilgili hangisi doğrudur?

A) `NaN === NaN` → true

B) `typeof NaN === "number"`

C) `NaN == undefined` → true

D) `isNaN(null)` → true

✅ **Doğru Cevap: B**

**Açıklama:** `NaN` ilginç şekilde `number` türündedir. `NaN === NaN` → false verir.

---

**39.** Aşağıdaki kodun çıktısı nedir?

```jsx
let sonuc = (function(x, y) {
  return x + y;
})(3, 4);
console.log(sonuc);
```

A) 3

B) 4

C) 7

D) undefined

✅ **Doğru Cevap: C**

**Açıklama:** Bu bir IIFE (Immediately Invoked Function Expression). Hemen çalışır, sonucu 7’dir.

---

**40.** Aşağıdaki `continue` satırı hangi değerde çalışır?

```jsx
for (let i = 0; i < 5; i++) {
  if (i % 2 === 0) continue;
  console.log(i);
}
```

A) 0 2 4

B) 1 3

C) 0 1 2 3 4

D) 1 2 3 4

✅ **Doğru Cevap: B**

**Açıklama:** `i % 2 === 0` olan değerler (çiftler) atlanır. Geriye `1`, `3` kalır.