import React, { useState } from 'react';
import { Send, PhoneCall, Mail, Clock, MessageSquareCode, CheckCircle } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

export const Contact: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    needType: 'Web Sitesi',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [preparedWhatsAppUrl, setPreparedWhatsAppUrl] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const whatsappNumber = "905444766048";
    const text = `*Yeni İş Talebi (Carabina Software)*\n\n` +
                 `*Ad Soyad:* ${formData.name}\n` +
                 `*Firma Adı:* ${formData.company}\n` +
                 `*Telefon:* ${formData.phone}\n` +
                 `*E-posta:* ${formData.email}\n` +
                 `*İhtiyaç Türü:* ${formData.needType}\n\n` +
                 `*Mesaj:*\n${formData.message}`;
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;

    setPreparedWhatsAppUrl(whatsappUrl);
    setIsSubmitted(true);
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="relative py-20 md:py-28 overflow-hidden">
      {/* Decorative Blur BG */}
      <div className="absolute right-[10%] bottom-[10%] w-[350px] h-[350px] bg-brand/5 rounded-full filter blur-[120px] pointer-events-none -z-10 animate-pulse-slow" />
      <div className="absolute left-[10%] top-[10%] w-[350px] h-[350px] bg-brand/5 rounded-full filter blur-[120px] pointer-events-none -z-10 animate-pulse-slow [animation-delay:3s]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Text & Contact Info Column */}
          <motion.div
            className="lg:col-span-5 text-left space-y-6 lg:sticky lg:top-28"
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-brand text-xs font-bold tracking-[0.2em] uppercase">
              İLETİŞİME GEÇİN
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-sans leading-tight">
              İşletmeniz için doğru dijital çözümü birlikte planlayalım.
            </h2>
            <p className="text-gray-400 text-base leading-relaxed">
              Web sitesi, B2B sistem, e-ticaret altyapısı veya işletmenize özel yazılım ihtiyacınız varsa kısa bir görüşme ile size en uygun çözümü belirleyelim.
            </p>

            {/* Quick Contact Info Items */}
            <div className="space-y-4 pt-4">
              <div className="flex items-center space-x-3.5">
                <div className="w-10 h-10 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-center text-brand shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-gray-500 block uppercase font-medium">E-POSTA ADRESİ</span>
                  <a href="mailto:carabinasoftware@gmail.com" className="text-white hover:text-brand transition-colors text-sm font-semibold">
                    carabinasoftware@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3.5">
                <div className="w-10 h-10 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-center text-brand shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-gray-500 block uppercase font-medium">DEMO VE PROJE GÖRÜŞMESİ</span>
                  <span className="text-white text-sm font-semibold">İşletmenize uygun kapsamı birlikte belirleyelim</span>
                </div>
              </div>
            </div>

            {/* CTAs Link Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-6">
              <a
                href="https://wa.me/905444766048"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
              >
                <MessageSquareCode className="w-4.5 h-4.5 mr-2" />
                <span>WhatsApp'tan Yaz</span>
              </a>
              
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-white/5 border border-white/10 hover:border-brand/40 text-white font-semibold text-sm transition-all duration-300 hover:bg-white/10"
              >
                <PhoneCall className="w-4 h-4 mr-2" />
                <span>Ücretsiz Görüşme Planla</span>
              </a>
            </div>
          </motion.div>

          {/* Right Form Card Column */}
          <motion.div
            className="lg:col-span-7"
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/5 shadow-2xl relative">
              
              {isSubmitted ? (
                /* Success Message screen */
                <div className="py-12 px-4 text-center space-y-5 animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(16,185,129,0.1)]">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <div className="space-y-2.5">
                    <h3 className="text-2xl font-bold text-white font-sans">WhatsApp’ta gönderimi tamamlayın</h3>
                    <p className="text-gray-400 text-sm max-w-md mx-auto leading-relaxed">
                      Talebinizin bize ulaşması için WhatsApp ekranında mesajı gönderin. WhatsApp açılmadıysa aşağıdaki bağlantıyı kullanabilirsiniz.
                    </p>
                  </div>
                  <a href={preparedWhatsAppUrl} target="_blank" rel="noopener noreferrer" className="inline-flex rounded-lg bg-emerald-500 px-5 py-3 text-sm font-bold text-white">WhatsApp mesajını aç</a>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-xs text-brand font-bold uppercase tracking-wider bg-brand/10 border border-brand/20 px-5 py-2.5 rounded-lg hover:bg-brand/20 transition-colors"
                  >
                    Bilgileri düzenle
                  </button>
                </div>
              ) : (
                /* Interactive Contact Form */
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="text-left mb-6">
                    <h3 className="text-xl font-bold text-white font-sans">Talep Formu</h3>
                    <p className="text-xs text-gray-500 mt-1">Lütfen aşağıdaki bilgileri eksiksiz doldurun.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name Input */}
                    <div className="text-left space-y-1.5">
                      <label htmlFor="name" className="text-xs font-bold text-gray-400 uppercase tracking-wide">
                        Ad Soyad
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Örn. Ahmet Yılmaz"
                        className="w-full bg-[#050505] border border-white/5 rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-brand/60 focus:ring-1 focus:ring-brand/40 text-sm transition-all duration-300"
                      />
                    </div>

                    {/* Company Input */}
                    <div className="text-left space-y-1.5">
                      <label htmlFor="company" className="text-xs font-bold text-gray-400 uppercase tracking-wide">
                        Firma Adı
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Örn. Aksoy Kırtasiye"
                        className="w-full bg-[#050505] border border-white/5 rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-brand/60 focus:ring-1 focus:ring-brand/40 text-sm transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Phone Input */}
                    <div className="text-left space-y-1.5">
                      <label htmlFor="phone" className="text-xs font-bold text-gray-400 uppercase tracking-wide">
                        Telefon Numarası
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Örn. 0555 123 4567"
                        className="w-full bg-[#050505] border border-white/5 rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-brand/60 focus:ring-1 focus:ring-brand/40 text-sm transition-all duration-300"
                      />
                    </div>

                    {/* Email Input */}
                    <div className="text-left space-y-1.5">
                      <label htmlFor="email" className="text-xs font-bold text-gray-400 uppercase tracking-wide">
                        E-posta Adresi
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Örn. name@company.com"
                        className="w-full bg-[#050505] border border-white/5 rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-brand/60 focus:ring-1 focus:ring-brand/40 text-sm transition-all duration-300"
                      />
                    </div>
                  </div>

                  {/* Need Type Dropdown */}
                  <div className="text-left space-y-1.5">
                    <label htmlFor="need-type" className="text-xs font-bold text-gray-400 uppercase tracking-wide">
                      İhtiyaç Türü
                    </label>
                    <div className="relative">
                      <select
                        id="need-type"
                        name="needType"
                        value={formData.needType}
                        onChange={handleInputChange}
                        className="w-full bg-[#050505] border border-white/5 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-brand/60 focus:ring-1 focus:ring-brand/40 text-sm appearance-none transition-all duration-300 cursor-pointer"
                      >
                        <option value="Web Sitesi">Web Sitesi</option>
                        <option value="AI Menu / QR Menü">AI Menu / QR Menü</option>
                        <option value="E-Ticaret">E-Ticaret</option>
                        <option value="B2B Bayi Sistemi">B2B Bayi Sistemi</option>
                        <option value="CRM / Otomasyon">CRM / Otomasyon</option>
                        <option value="Randevu Sistemi">Randevu Sistemi</option>
                        <option value="Yapay Zeka Çözümü">Yapay Zeka Çözümü</option>
                        <option value="Diğer">Diğer</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
                        ▼
                      </div>
                    </div>
                  </div>

                  {/* Message Input */}
                  <div className="text-left space-y-1.5">
                    <label htmlFor="message" className="text-xs font-bold text-gray-400 uppercase tracking-wide">
                      Mesajınız
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Proje detaylarınızı kısaca anlatın..."
                      className="w-full bg-[#050505] border border-white/5 rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-brand/60 focus:ring-1 focus:ring-brand/40 text-sm transition-all duration-300 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center px-6 py-4 rounded-xl bg-brand text-white font-bold text-sm tracking-wide uppercase shadow-lg shadow-brand/20 hover:shadow-brand/45 active:translate-y-0.5 hover:-translate-y-0.5 disabled:bg-brand/50 disabled:cursor-not-allowed transition-all duration-350"
                  >
                    <span className="flex items-center space-x-2"><span>WhatsApp’ta devam et</span><Send className="w-4 h-4" /></span>
                  </button>

                </form>
              )}

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
