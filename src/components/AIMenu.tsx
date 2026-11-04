import { ArrowUpRight, QrCode, ClipboardList, Settings2 } from 'lucide-react';

export function AIMenu() {
  return (
    <section id="ai-menu" className="relative px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 rounded-3xl border border-brand/20 bg-brand/[0.04] p-6 sm:p-10 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-brand">Restoran, kafe ve barlar için</p>
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">Carabina AI Menu<br /><span className="text-brand">Menüden siparişe, tek akış.</span></h2>
          <p className="mt-5 max-w-xl text-sm leading-7 text-gray-400">Müşteriniz menüyü telefonunda incelesin, ekibiniz siparişi ekranından takip etsin. Ürünleri, kategorileri ve masa QR kodlarını yönetim panelinizden düzenleyin.</p>
          <ul className="my-7 space-y-4 text-sm text-gray-300">
            <li className="flex items-center gap-3"><QrCode aria-hidden="true" className="h-5 w-5 text-brand" />QR menü ve masa kodları</li>
            <li className="flex items-center gap-3"><ClipboardList aria-hidden="true" className="h-5 w-5 text-brand" />Müşteri siparişi ve kasa takibi</li>
            <li className="flex items-center gap-3"><Settings2 aria-hidden="true" className="h-5 w-5 text-brand" />Ürün, kategori ve masa yönetimi</li>
          </ul>
          <a href="/ai-menu/" className="inline-flex items-center gap-3 rounded-lg bg-brand px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-brand/80">Ürünü incele ve demo iste<ArrowUpRight aria-hidden="true" className="h-4 w-4" /></a>
          <p className="mt-3 text-xs leading-6 text-gray-500">Aylık abonelik ve yıllık peşin ödeme seçenekleri. İşletmenize uygun kapsam için görüşelim.</p>
        </div>
        <figure className="min-w-0">
          <a href="/ai-menu/#ekranlar" className="block overflow-hidden rounded-xl border border-white/10" aria-label="AI Menu gerçek uygulama ekranlarını incele"><img src="/ai-menu/cashier.png" width="1265" height="889" loading="lazy" alt="Carabina AI Menu örnek kasa ekranında Masa 1 siparişinin ayrıntıları" className="h-auto w-full" /></a>
          <figcaption className="mt-3 text-xs leading-6 text-gray-500">Demo Cafe ve test siparişinden alınmış gerçek uygulama ekranı.</figcaption>
        </figure>
      </div>
    </section>
  );
}
