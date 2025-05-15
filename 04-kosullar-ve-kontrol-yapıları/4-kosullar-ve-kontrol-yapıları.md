- **4. Koşullar ve Kontrol Yapıları**
    
    Koşullarla, belirli durumlara göre farklı işlemler yapabiliriz.
    
    ### **4.1 `if`, `else if`, `else`**
    
    En yaygın kullanılan koşul yapısıdır.
    
    ```jsx
    let not = 85;
    
    if (not >= 90) {
      console.log("Pekiyi");
    } else if (not >= 70) {
      console.log("İyi");
    } else {
      console.log("Kaldı");
    }
    ```
    
    - `if`: Koşul doğruysa çalışır.
    - `else if`: Önceki `if` çalışmazsa, buradaki koşulu dener.
    - `else`: Hiçbir koşul sağlanmazsa çalışır.
    
    ### **4.2 `switch`**
    
    Çoklu karşılaştırmalar için daha okunabilir alternatif.
    
    ```jsx
    let gün = "çarşamba";
    
    switch (gün) {
      case "pazartesi":
        console.log("Haftaya başladık");
        break;
      case "çarşamba":
        console.log("Haftanın ortası");
        break;
      case "cuma":
        console.log("Hafta bitiyor");
        break;
      default:
        console.log("Hafta içi değil");
    }
    
    //Çıktı: Haftanın ortası
    ```
    
    - `break`: Diğer durumlara geçmemesi için kullanılır.
    - `default`: Hiçbir case eşleşmezse çalışır.
    
    ---
    
    ### **4.3 Ternary Operatörü**
    
    Kısa ifadesiyle if-else yapısına alternatif:
    
    ```jsx
    let yas = 18;
    let mesaj = yas >= 18 ? "Yetişkin" : "Çocuk";
    console.log(mesaj); // "Yetişkin"
    ```
    
    Yapısı:
    
    `koşul ? doğruysa_değer : yanlışsa_değer`