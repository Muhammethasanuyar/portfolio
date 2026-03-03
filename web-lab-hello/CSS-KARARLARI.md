# CSS Kararlari

## 1. Breakpoint Secimi

- 640px ve 1024px degerlerini mobil → tablet → masaustu akisini net sekilde ayirmak icin sectim.
- Icerik 640px uzerinde iki sutunlu Hakkimda ve yan yana iletisim/kart duzenine, 1024px uzerinde ise daha genis bir 3 sutunlu proje gridine geciyor.

## 2. Layout Tercihleri

- Header icin Flexbox kullandim; cunku logo/baslik ile navigasyon ogelerini tek eksende hizalamak ve wrap ile tasmalari yonetmek bu yapi icin en basit ve okunabilir cozumdu.
- Proje kartlari icin Grid sectim; kart sayisi degistiginde satir/sutun duzeni otomatik ayarlanabiliyor ve repeat(auto-fit, minmax(280px, 1fr)) ile ek media query yazmadan responsive bir ızgara elde ediliyor.

## 3. Design Tokens

- Renk paletini koyu zemin uzerinde yuksek kontrast verecek sekilde (bg icin koyu lacivert, metin icin acik gri, vurgu icin mavi/mor tonlari) tanimladim.
- Spacing skalasini 4/8/16/24/32/48/64 px adimlarina karsilik gelen rem degerleriyle olusturdum; boylece tum bosluklar var(--space-*) uzerinden tutarli yonetiliyor.
- Fluid typography icin baslik ve govde metinleri icin clamp() degerlerini min 1rem uzerinde, rem + vw karisimi kullanarak ayarladim; boylece hem zoom erisilebilirligi korunuyor hem de ekran genisligine gore akici boyutlanma saglaniyor.

## 4. Responsive Stratejiler

- Mobile-first yaklasimi ile once en dar ekranda calisan basit layout'u tanimladim, sonra min-width media query'leriyle sadece gerekli durumlarda ek kurallar ekledim.
- Breakpoint'lerde degisen temel elemanlar: Hakkimda bolumu (tek sutundan iki sutuna), Projeler gridindeki sutun sayisi, iletisim bolumundeki kolon dagilimi ve section padding degerleri.
- Gorsel boyutlari icin img'lere max-width: 100% ve project kart gorsellerine object-fit: cover verdim; boylece hem tasma engelleniyor hem de farkli oranlardaki gorseller kart yapisini bozmeden goruntulenebiliyor.

