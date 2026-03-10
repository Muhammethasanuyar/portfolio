import { Link } from 'react-router-dom'
import Button from '../components/Button'
import Input from '../components/Input'
import Card from '../components/Card'

export default function Portfolio() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Ana icerige atla
      </a>

      <header className="sticky top-0 z-40 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col sm:flex-row justify-between items-center gap-3">
          <h1 className="text-xl font-bold text-blue-800 dark:text-blue-300">
            Muhammet Hasan Uyar - Full Stack Gelistirici
          </h1>
          <nav aria-label="Ana navigasyon">
            <ul className="flex flex-wrap gap-2">
              <li>
                <a
                  href="#hakkimda"
                  className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors"
                >
                  Hakkimda
                </a>
              </li>
              <li>
                <a
                  href="#egitim"
                  className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors"
                >
                  Egitim
                </a>
              </li>
              <li>
                <a
                  href="#projeler"
                  className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors"
                >
                  Projeler
                </a>
              </li>
              <li>
                <a
                  href="#sertifikalar"
                  className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors"
                >
                  Sertifikalar
                </a>
              </li>
              <li>
                <a
                  href="#iletisim"
                  className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors"
                >
                  Iletisim
                </a>
              </li>
              <li>
                <Link
                  to="/ui-kit"
                  className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors"
                >
                  UI Kit
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="main-content" className="min-h-screen bg-gray-50 dark:bg-gray-950">
        <section
          id="hakkimda"
          className="py-16 px-4"
        >
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
            <figure className="shrink-0">
              <div
                className="w-40 h-40 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 shadow-lg"
                aria-hidden="true"
              />
              <figcaption className="text-center font-semibold mt-2 text-gray-900 dark:text-white">
                Muhammet Hasan Uyar
              </figcaption>
            </figure>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 text-center md:text-left">
                Hakkimda
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                Firat Universitesi Yazilim Muhendisligi 3. sinif ogrencisiyim.
                Full-stack web gelistirme odağinda, universite bunyesinde gonullu
                projelerde gorev alan, ureten ve kendini surekli gelistirmeye odaklanan
                bir gelistiriciyim.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                Staj deneyimlerimde React, Node.js, FastAPI, Laravel ve Docker gibi
                modern teknolojilerle calistim. Ogrenme surecimde modern web
                teknolojileri, erisilebilirlik ve iyi yazilim pratiklerine oncelik
                veriyorum.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                Ingilizce B2 ve Almanca A1 seviyesinde yabanci dil bilgisine sahibim.
              </p>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                Kullandigim teknolojiler
              </h3>
              <ul
                className="flex flex-wrap gap-2"
                role="list"
                aria-label="Beceri etiketleri"
              >
                {[
                  'HTML5',
                  'CSS3',
                  'JavaScript',
                  'React',
                  'TypeScript',
                  'Node.js',
                  'PHP & Laravel',
                  'MySQL',
                  'Python',
                  'C#',
                  'Java',
                  'FastAPI',
                  'gRPC & Protocol Buffers',
                  'Git',
                ].map((tech) => (
                  <li
                    key={tech}
                    className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="egitim" className="py-16 px-4 bg-gray-100 dark:bg-gray-900">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">
              Egitim
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <article className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-5 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-300 mb-2">
                  Firat Universitesi
                </h3>
                <p className="font-semibold text-sm mb-1">Yazilim Muhendisligi – Lisans</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  Eylul 2023 – Haziran 2027
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Full-stack web gelistirme, veri tabanlari ve yazilim muhendisligi
                  temelleri uzerine egitim aliyorum.
                </p>
              </article>
              <article className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-5 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-300 mb-2">
                  Selcuklu Anadolu Lisesi
                </h3>
                <p className="font-semibold text-sm mb-1">Lise Diplomasi</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  Eylul 2017 – Haziran 2021
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Lise egitimimi tamamladim; bu donemde bilgisayar ve yazilima olan
                  ilgim basladi.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="projeler" className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">
              Projelerim
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card
                variant="elevated"
                title="AI destekli FarmBot uygulamasi"
              >
                <p>
                  Stajim kapsaminda web tabanli, yapay zeka destekli bir FarmBot
                  uygulamasinin gelistirilmesinde gorev aldim. gRPC ve Protocol
                  Buffers kullanarak servisler arasi yuksek performansli iletisim,
                  FastAPI ile guvenli ve olceklenebilir backend API tasarimi ve
                  ReactJS ile kullanici dostu bir arayuz uzerinde calistim.
                </p>
                <p>
                  Ayrica API entegrasyonu, veri akisi optimizasyonu ve Docker
                  tabanli dagitim sureclerinde aktif rol ustlendim.
                </p>
                <p className="text-sm font-medium">
                  Teknolojiler: React, FastAPI, gRPC, Protocol Buffers, Docker
                </p>
              </Card>
              <Card
                variant="elevated"
                title="Sempozyum icerik yonetim sistemi"
              >
                <p>
                  Firat Universitesi Dijital Donusum Ofisi icin React, MySQL, PHP ve
                  Laravel kullanarak bir sempozyum sitesi gelistirdim. Icerik
                  yonetimi ve guncellemeleri kolaylastirmak icin kapsamli bir admin
                  paneli tasarladim.
                </p>
                <p>
                  Proje kapsaminda kullanici rolleri, guvenli giris ve duyuru
                  yonetimi gibi fonksiyonlari hayata gecirdim.
                </p>
                <p className="text-sm font-medium">
                  Teknolojiler: React, PHP, Laravel, MySQL
                </p>
              </Card>
              <Card
                variant="elevated"
                title="Kimlik karti okuma tabanli is takip uygulamasi"
              >
                <p>
                  Airobos Teknoloji A.S. stajim kapsaminda React ve Node.js
                  kullanarak kimlik karti okuma tabanli bir is takip uygulamasi
                  gelistirdim. Calisanlarin giris-cikis saatlerinin kaydi,
                  raporlama ve guvenli oturum yonetimi uzerinde calistim.
                </p>
                <p className="text-sm font-medium">Teknolojiler: React, Node.js</p>
              </Card>
            </div>
          </div>
        </section>

        <section id="sertifikalar" className="py-16 px-4 bg-gray-100 dark:bg-gray-900">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-4">
              Sertifikalar
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-center mb-8">
              Universite ve cevrimici platformlar uzerinden edindigim sertifikalar:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Web Programlama (2024–2025)',
                'Java Programlama Dili',
                'Python Programlama Dili',
                'C# Programlama Dili',
                'PHP / Laravel',
                'React',
                'Code23 Firat – Web Programlama ve Gelistirme (2024–2025)',
                'BTK Akademi – Web Programlama ve Gelistirme',
              ].map((cert) => (
                <li
                  key={cert}
                  className="p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 text-sm"
                >
                  {cert}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="iletisim" className="py-16 px-4">
          <div className="max-w-lg mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
              Iletisim
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-center mb-6">
              Benimle iletisime gecmek icin asagidaki formu kullanabilir veya
              iletisim bilgilerimi kullanarak dogrudan ulasabilirsin.
            </p>
            <div className="space-y-4 mb-8">
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <strong>Telefon:</strong>{' '}
                <a
                  href="tel:+905533103655"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  +90 (553) 310 3655
                </a>
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <strong>E-posta:</strong>{' '}
                <a
                  href="mailto:m.hasanuyar@hotmail.com"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  m.hasanuyar@hotmail.com
                </a>
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <strong>LinkedIn:</strong>{' '}
                <a
                  href="https://www.linkedin.com/in/muhammethasanuyar/"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  linkedin.com/in/muhammethasanuyar
                </a>
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <strong>GitHub:</strong>{' '}
                <a
                  href="https://github.com/Muhammethasanuyar"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  github.com/Muhammethasanuyar
                </a>
              </p>
            </div>
            <form className="space-y-4" action="#" method="POST" noValidate>
              <Input id="name" label="Ad Soyad" required />
              <Input id="email" label="E-posta" type="email" required />
              <div className="space-y-1">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Konu
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">-- Seciniz --</option>
                  <option value="is">Is Teklifi</option>
                  <option value="soru">Soru</option>
                  <option value="oneri">Oneri</option>
                </select>
              </div>
              <div className="space-y-1">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Mesajiniz
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <Button variant="primary" size="lg" type="submit">
                Gonder
              </Button>
            </form>
          </div>
        </section>

        <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 text-center py-6 px-4 text-gray-500 dark:text-gray-400 text-sm">
          <p>© 2025 Muhammet Hasan Uyar. Tum haklari saklidir.</p>
          <p>
            Bu sayfa, Web Tasarimi ve Programlama dersi LAB-1, LAB-2, LAB-3 ve
            LAB-4 kapsaminda gelistirilmis kisisel portfolyo uygulamasidir.
          </p>
        </footer>
      </main>
    </>
  )
}
