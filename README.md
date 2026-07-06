# CarabinaSoft

CarabinaSoft resmi web sitesi. Proje Vite + React + TypeScript ile hazırlanmıştır.

## Geliştirme

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```

Build çıktısı `dist` klasörüne üretilir.

## GitHub Pages Deploy

- `main` branch canlı/prod branch olarak kullanılır.
- `develop` branch geliştirme branch'i olarak kullanılır.
- Yeni özellikler `feature/*` branch'lerinde geliştirilir ve önce `develop`, ardından yayın için `main` branch'ine alınır.
- `main` branch'e push yapılınca GitHub Actions otomatik deploy eder.
- Repository ayarlarında GitHub Pages source olarak `GitHub Actions` seçilmelidir.
- GitHub Pages custom domain değeri `carabinasoft.com` olmalıdır.
- DNS tarafında `carabinasoft.com` alan adı GitHub Pages'a yönlendirilmelidir.
