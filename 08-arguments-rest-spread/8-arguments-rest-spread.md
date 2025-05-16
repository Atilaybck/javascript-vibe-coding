- **8. `arguments`, `rest`, `spread`**
    
    ### **8.1 `arguments` objesi**
    
    - **Tanım:** Fonksiyonlara gönderilen **tüm argümanlara** erişmeni sağlar. Dizi **gibi** davranır ama gerçek bir dizi değildir.
        
        **Küçük Bir Not:**
        
        | **Terim** | **Ne anlama gelir?** |
        | --- | --- |
        | **Parametre** | Fonksiyon tanımındaki isimler |
        | **Argüman** | Fonksiyon **çağrılırken** verilen değerler |
        | `arguments` | Çağrı sırasında verilen tüm argümanları (değerleri) yakalayan özel yapı |
    - **Sadece normal (function) tanımında** çalışır, **arrow function'da çalışmaz.**
        
        Yani basitçe:
        
        Bir fonksiyona kaç tane değer (parametre) gönderirsen gönder, **hepsini içeren özel bir yapı**dır.
        
    
    ```jsx
    function topla() {
      console.log(arguments);
    }
    topla(5, 10, 20);
    ```
    
    📌 Yukarıdaki kod, `[5, 10, 20]` değerlerini konsola yazar.
    
    `arguments`, bir **dizi gibi** görünür ancak tam dizi değildir. `map` gibi dizilere özel fonksiyonlar çalışmaz.
    
    - `arguments.length` → kaç argüman geldiğini verir.
    - `arguments[0]`, `arguments[1]` → tek tek erişilebilir.
    
    > ✅ Kullanımı modern JS'de azaldı, yerine ...rest kullanılıyor.
    > 
    
    ---
    
    ### **8.2 `...rest` parametreleri**
    
    - **Tanım:** Fonksiyon parametrelerinde **birden fazla değeri** bir dizi olarak toplar.
    - `...` ile kullanılır ve **son parametre** olmalıdır.
    
    **Basitçe:**  Fonksiyona gelen **fazla parametreleri bir diziye toplar**.
    
    ```jsx
    function topla(...sayılar) {
      console.log(sayılar); // [1, 2, 3]
    }
    topla(1, 2, 3);
    ```
    
    Bu, `arguments` yerine kullanılır. Gerçek dizidir, daha kullanışlıdır.
    
    - Normal parametrelerle birlikte kullanılabilir:
    
    ```jsx
    function selamla(isim, ...digerleri) {
      console.log(isim); // Ali
      console.log(digerleri); // [25, "İstanbul"]
    }
    selamla("Ali", 25, "İstanbul");
    ```
    
    ---
    
    ### **8.3 `...spread` ile kopyalama ve birleştirme**
    
    - **Tanım:** Diziler ve objelerin **içeriğini açmak/kopyalamak/birleştirmek** için kullanılır.
    - `...` sembolü, array veya objeyi "açar" ve yayar.
    
    **Dizi birleştirme:**
    
    ```jsx
    const dizi1 = [1, 2];
    const dizi2 = [3, 4];
    const birlesik = [...dizi1, ...dizi2];
    console.log(birlesik); // [1, 2, 3, 4]
    ```
    
    **Kopyalama:**
    
    ```jsx
    const sayılar = [10, 20];
    const kopya = [...sayılar];
    ```
    
    **Obje birleştirme:**
    
    ```jsx
    const kisi = { ad: "Ali" };
    const yas = { yas: 25 };
    const yeniObje = { ...kisi, ...yas }; // { ad: "Ali", yas: 25 }
    ```
    
    **Not:** Obje birleştirmede aynı anahtar varsa **sonraki değeri** alır.
    
    ---

## 📌 Özet:

| Kullanım     | Amacı                                | Nerede kullanılır?              |
|--------------|---------------------------------------|----------------------------------|
| `arguments`  | Eski stil, tüm argümanlar             | Sadece `function` içinde         |
| `...rest`    | Fazla parametreleri yakalamak         | Fonksiyon parametrelerinde       |
| `...spread`  | Yaymak, kopyalamak, birleştirmek      | Dizi/obje işlemlerinde           |
