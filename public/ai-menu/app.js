'use strict';
const periodButtons = [...document.querySelectorAll('[data-period]')];
const payment = document.querySelector('#payment');
const packageSelect = document.querySelector('#package');
function setPeriod(period) {
  if (!['monthly', 'yearly'].includes(period)) return;
  periodButtons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.period === period)));
  document.querySelectorAll('[data-period-label]').forEach(label => {
    label.textContent = period === 'yearly' ? '12 aylık hizmet · Peşin ödeme teklifi' : 'Aylık abonelik';
  });
  document.querySelector('#period-note').textContent = period === 'yearly'
    ? '12 aylık hizmet için avantajlı peşin ödeme teklifi isteyin. Toplam bedel ve aylık kullanım hakkı teklifte açıklanır.'
    : 'Aylık ödeme ile başlayın. Paket kapsamı ve kullanım hakkı teklifinizde belirtilir.';
  payment.value = period;
}
periodButtons.forEach(button => button.addEventListener('click', () => setPeriod(button.dataset.period)));
payment.addEventListener('change', () => setPeriod(payment.value));
document.querySelectorAll('.package-select').forEach(button => button.addEventListener('click', () => {
  packageSelect.value = button.dataset.package;
  document.querySelector('#demo').scrollIntoView({behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'});
  document.querySelector('#business').focus({preventScroll:true});
}));
document.querySelector('#demo-form').addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  const values = new FormData(form);
  const business = String(values.get('business') || '').trim();
  if (!business) { document.querySelector('#business').focus(); return; }
  const preference = values.get('payment') === 'yearly' ? 'Yıllık peşin ödeme' : 'Aylık ödeme';
  const message = [
    'Merhaba, Carabina AI Menu için demo görüşmesi istiyorum.',
    'İşletme: ' + business,
    'İşletme türü: ' + values.get('type'),
    'Masa sayısı: ' + values.get('tables'),
    'Paket: ' + values.get('package'),
    'Ödeme tercihi: ' + preference,
    'Kaynak: AI Menu tanıtım sayfası'
  ].join('\n');
  window.location.assign('https://wa.me/905444766048?text=' + encodeURIComponent(message));
});
document.querySelector('#year').textContent = new Date().getFullYear();
