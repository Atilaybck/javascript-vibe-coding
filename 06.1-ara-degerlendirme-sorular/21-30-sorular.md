**21.** Aşağıdaki kodun çıktısı nedir?

```jsx
function selam(isim = "Ziyaretçi") {
  console.log("Merhaba " + isim);
}
selam(undefined);
```

A) Merhaba undefined

B) Merhaba Ziyaretçi

C) Hata

D) "isim" tanımsız

✅ **Doğru Cevap: A**

**Açıklama:** `undefined` açıkça verildiğinde varsayılan değer devreye girmez.

---

**22.** Aşağıdaki fonksiyon çağrıldığında ne yazılır?

```jsx
function mesaj(icerik = "Boş mesaj") {
  return icerik.length;
}
console.log(mesaj());
```

A) 9

B) 10

C) 11

D) undefined

✅ **Doğru Cevap: C**

**Açıklama:** `"Boş mesaj"` ifadesi 11 karakterlidir, `length` sonucu 11’dir.

---

**23.** Aşağıdaki `while` döngüsü kaç kez çalışır?

```jsx
let i = 1;
while (i < 4) {
  console.log(i);
  i++;
}
```

A) 2

B) 3

C) 4

D) Sonsuz

✅ **Doğru Cevap: B**

**Açıklama:** `i` 1, 2, 3 iken döngü çalışır; 3 kez çalışır.

---

**24.** `break` komutu ne işe yarar?

A) Döngünün sadece o adımını atlar

B) Döngüyü durdurur

C) Döngüyü yeniden başlatır

D) Koşulu değiştirir

✅ **Doğru Cevap: B**

**Açıklama:** `break`, döngüyü tamamen sonlandırır.

---

**25.** Aşağıdaki arrow function tanımı neden yanlış çalışır?

```jsx
const çarp = (a, b) => { a * b };
console.log(çarp(2, 3));
```

A) Parantez eksik

B) Fonksiyon hatalı yazılmış

C) return kullanılmadığı için undefined döner

D) a ve b parametresi yok

✅ **Doğru Cevap: C**

**Açıklama:** `{}` kullanıldığı için `return` yazılmalıydı; aksi halde `undefined` döner.

---

**26.** Aşağıdakilerden hangisi bir `function` tanımıdır?

A) `let x = 5 + 3;`

B) `console.log("Merhaba");`

C) `function merhaba() { console.log("Selam"); }`

D) `if (true) {}`

✅ **Doğru Cevap: C**

**Açıklama:** C seçeneğinde fonksiyon tanımı doğru şekilde yapılmış.

---

**27.** Aşağıdaki `for` döngüsü çıktısı nedir?

```
for (let i = 0; i < 3; i++) {
  console.log(i);
}
```

A) 1 2 3

B) 0 1 2

C) 0 1 2 3

D) 1 2

✅ **Doğru Cevap: B**

**Açıklama:** `i` sırasıyla 0, 1, 2 değerlerini alır, 3’te döngü sonlanır.

---

**28.** `typeof null` çıktısı nedir?

A) "null"

B) "object"

C) "undefined"

D) "NaN"

✅ **Doğru Cevap: B**

**Açıklama:** JavaScript’te bilinen bir bug nedeniyle `typeof null` `"object"` döner.

---

**29.** Aşağıdaki `switch` yapısında hangi ifade eksikse tüm case'ler çalışabilir?

A) case

B) break

C) default

D) switch

✅ **Doğru Cevap: B**

**Açıklama:** `break` olmazsa eşleşen case’ten sonra diğer case’ler de çalışır (fall-through).

---

**30.** Aşağıdaki arrow function’ın çıktısı nedir?

```jsx
const çiftMi = sayı => sayı % 2 === 0;
console.log(çiftMi(6));
```

A) true

B) false

C) undefined

D) NaN

✅ **Doğru Cevap: A**

**Açıklama:** `6 % 2 === 0` → `true`, fonksiyon doğru şekilde tanımlanmış.