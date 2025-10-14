# Nexus

![GitHub Pages](https://img.shields.io/github/deployments/atillayalinoksuz/nexus/github-pages?label=GitHub%20Pages&logo=github)

Nexus, kişisel olarak derlenmiş ve sık kullanılan platformlar, araçlar ve web siteleri için oluşturulmuş hızlı bir arama motorudur. Bu proje, sık kullanılan kaynaklara anında erişim sağlama amacı taşıyan kişisel bir projedir.

**[Siteyi Ziyaret Et (Live Demo)](https://atillayalinoksuz.github.io/nexus)**

---

## ✨ Özellikler

- **Anında Arama:** 300'den fazla platform, araç ve web sitesi içeren veri setinde başlık, URL ve açıklamaya göre anında arama yapın.
- **Kategori Filtreleme:** Sonuçları "Tüm Platformları Görüntüle" seçeneği ile kategorilere göre gruplandırılmış olarak görün ve belirli bir kategoriye göre filtreleyin.
- **Dinamik Favicon:** Her site için Google'ın Favicon servisi üzerinden dinamik olarak ikonlar çekilir. İkon bulunamazsa, sitenin baş harfi gösterilir.
- **Modern Arayüz:** Tailwind CSS ile oluşturulmuş temiz, karanlık temalı ve modern bir kullanıcı arayüzü.
- **Duyarlı Tasarım:** Masaüstü, tablet ve mobil cihazlarda sorunsuz bir deneyim sunar.
- **Hoş Geldiniz Modalı:** İlk kez ziyaret eden kullanıcılar için projeyi tanıtan bir bilgilendirme ekranı.

## 🚀 Kullanılan Teknolojiler

- **React:** Kullanıcı arayüzünü oluşturmak için.
- **TypeScript:** Tip güvenliği ve daha sağlam kod yapısı için.
- **Vite:** Hızlı ve modern bir geliştirme ortamı için.
- **Tailwind CSS (CDN):** Hızlı ve kullanışlılık odaklı stil oluşturma için.
- **GitHub Pages:** Projenin canlıya dağıtımı için.

## ⚙️ Yerel Geliştirme Ortamı

Projeyi kendi bilgisayarınızda çalıştırmak için aşağıdaki adımları izleyebilirsiniz.

1.  **Projeyi klonlayın:**
    ```bash
    git clone https://github.com/atillayalinoksuz/nexus.git
    ```

2.  **Proje dizinine gidin:**
    ```bash
    cd nexus
    ```

3.  **Gerekli paketleri yükleyin:**
    ```bash
    npm install
    ```

4.  **Geliştirme sunucusunu başlatın:**
    ```bash
    npm run dev
    ```
    Artık projeyi `http://localhost:5173` (veya terminalde belirtilen başka bir port) adresinde görüntüleyebilirsiniz.

## 📦 Dağıtım (Deployment)

Bu proje `gh-pages` paketi kullanılarak GitHub Pages üzerinden dağıtılmaktadır. Yeni bir versiyonu yayınlamak için aşağıdaki komutu çalıştırmanız yeterlidir:

```bash
npm run deploy
```
Bu komut, projeyi `dist` klasörüne build eder ve ardından `gh-pages` branch'ine göndererek siteyi günceller.

---

Atilla Yalın Öksüz tarafından geliştirildi.
