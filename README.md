# Kütüphaneler

- motion : animasyonlar için
- react-paginate : sayfalama için
- react-router-dom : url de parametler üzerinden hangi sayfada hangi filtrelemelyi yaptı yönetmek için
- react-select : seçim yapabilmek için
- axios : api istekleri için
- tailwindcss : stillendirme için
- typescript
- react

# Kaynaklar

- Araç API: https://public.opendatasoft.com/explore/dataset/all-vehicles-model/information/?sort=year

# Proje Yayınlama Adımları

1. Projenizi Hazırlayın (Build alınabilmeli)
2. Projeyi Github'a Yükle
3. Hosting platformu seç ve deploy et (yayınla) (sunucu projeme bir ip adresi atar, ör: 127.987.54.34 gibi. bu adresi yazan herkes projeme ulaşır)
4. Alan adı (Domain) kirala ve DNS ayarlarını yapıp ip adresini domain adıyla değiştir. (ör: www carhub.com)
5. SEO iyileştirmesi (domain adımın aramalarda en üstte çıkması için)

# Build (Derleme)

- Projenin dağıtıma hazır hale getirme işlemidir.
- `npm run build` ile optimize edilmiş JS ve CSS dosyaları oluşturulur.

# Hosting (Barındırma)

- Frontend projesinin derlenmiş dosyalarını internet üzerinden erişilebilir hale gelmesi için bir sunucuya yüklememiz gerekir.

## Hosting Seçenekleri

1. Modern Çözümler

- Projeyi github reposu üzerinden tek tıkla yayınlayabiliyoruz
- Otomatik SSL sertifikası
- Otomatik CDN (cage kullanarak aynı resmi daha hızlı şekilde getirebiliyor)
- Otomatik CI/CD (Sürekli Geliştirme ve Sürekli Dağıtım)

Hosting platformları

- Vercel : kullanım açısından en iyisi
- Netlify
- AWS : bu da fena değil, kampanya döneminde ücretsiz verebiliyor.
- Azure
- Google Cloud
- Firebase
- GitHub Pages

2. Klasik Çözüm

- Kendi sunucumuzu kiralayıp, her şeyi linux komutları ile (linux olduğunu varsayarak) kendimiz kurup yönetiriz.
- VPS (Virtual Private Server) : Sanal özel sunucu

Hosting platformları

- IBM
- DigitalOcean
- Contabo
  bu sunucular üzerinden aylık bedel ile hosting kiralama yapılır. bu sunucunun sadece ip adresi ve şifresini veriyor. Hiçbirşey yüklü değil. tamamen kendimiz bütün dosyaları, buildi vs yapmamız gerek.

# Deploy (Yayınlama)

- Projenin geliştirme ortamından sunucuya aktarılma sürecidir.
- Dist klasörünün (Build esnasında oluşan) sunucuya yüklenmesi

# Domain

- Alan adı
- www.carhub.com
- Sunucular normalde IP adresi üzerinden erişilebilir ama ip adresleri akılda kalıcı olmadığından bir alan adı tercih ederiz.

Alan adı platformları (fiyat olarak en uygun olandan alabilirsin)

- Namecheap
- odaddy
- İsimtescil

## DNS Ayarları
