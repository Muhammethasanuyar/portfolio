import './App.css'

function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Ana icerige atla
      </a>

      <div className="app">
        <header className="site-header">
          <div className="container header-inner">
            <h1>Muhammet Hasan Uyar - Full Stack Gelistirici</h1>

            <nav aria-label="Ana navigasyon">
              <ul className="nav-list">
                <li>
                  <a href="#hakkimda">Hakkimda</a>
                </li>
                <li>
                  <a href="#projeler">Projeler</a>
                </li>
                <li>
                  <a href="#iletisim">Iletisim</a>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <main id="main-content">
          <section id="hakkimda" className="section">
            <div className="container about-grid">
              <div>
                <h2>Hakkimda</h2>
                <p>
                  Firat Universitesi Yazilim Muhendisligi 3. sinif ogrencisiyim. Full
                  stack web gelistirme odağinda, universite bunyesinde gonullu
                  projelerde gorev alan, ureten ve kendini surekli gelistirmeye odaklanan
                  bir gelistiriciyim.
                </p>
                <p>
                  Ogrenme surecimde modern web teknolojileri, erisilebilirlik ve iyi
                  yazilim pratiklerine oncelik veriyorum.
                </p>

            <h3>Kullandigim teknolojiler</h3>
            <ul className="skill-tags" role="list" aria-label="Beceri etiketleri">
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>TypeScript</li>
              <li>Node.js</li>
              <li>PHP &amp; Laravel</li>
              <li>MySQL</li>
              <li>Python</li>
              <li>C#</li>
              <li>Java</li>
              <li>FastAPI</li>
              <li>gRPC &amp; Protocol Buffers</li>
              <li>Git</li>
            </ul>
              </div>

              <aside className="profile-card" aria-label="Profil bilgileri">
                <figure>
                  <div className="profile-photo-placeholder" aria-hidden="true" />
                  <figcaption>Muhammet Hasan Uyar</figcaption>
                </figure>

                <ul className="profile-meta">
                  <li>
                    <strong>Unvan:</strong> Full Stack Gelistirici
                  </li>
                  <li>
                    <strong>Universite:</strong> Firat Universitesi
                  </li>
                  <li>
                    <strong>Bolum:</strong> Yazilim Muhendisligi
                  </li>
                  <li>
                    <strong>Sinif:</strong> 3. sinif
                  </li>
                  <li>
                    <strong>Diller:</strong> Ingilizce B2, Almanca A1
                  </li>
                </ul>
              </aside>
            </div>
          </section>

          <section id="projeler" className="section section-alt">
            <div className="container">
              <h2>Projelerim</h2>

              <div className="project-grid">
                <article className="project-card">
                  <header>
                    <h3>AI destekli FarmBot uygulamasi</h3>
                  </header>
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
                  <p className="project-tech">
                    <strong>Teknolojiler:</strong> React, FastAPI, gRPC, Protocol
                    Buffers, Docker
                  </p>
                </article>

                <article className="project-card">
                  <header>
                    <h3>Sempozyum icerik yonetim sistemi</h3>
                  </header>
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
                  <p className="project-tech">
                    <strong>Teknolojiler:</strong> React, PHP, Laravel, MySQL
                  </p>
                </article>
              </div>
            </div>
          </section>

          <section id="iletisim" className="section">
            <div className="container contact-grid">
              <div>
                <h2>Iletisim</h2>
                <p>
                  Benimle iletisime gecmek icin asagidaki formu
                  kullanabilir veya iletisim bilgilerimi kullanarak dogrudan ulasabilirsin.
                </p>

                <div className="contact-info">
                  <p>
                    <strong>Telefon:</strong> <a href="tel:+905533103655">+90 (553) 310 3655</a>
                  </p>
                  <p>
                    <strong>E-posta:</strong>{' '}
                    <a href="mailto:m.hasanuyar@hotmail.com">m.hasanuyar@hotmail.com</a>
                  </p>
                  <p>
                    <strong>LinkedIn:</strong>{' '}
                    <a href="https://www.linkedin.com/in/muhammethasanuyar/">
                      linkedin.com/in/muhammethasanuyar
                    </a>
                  </p>
                  <p>
                    <strong>GitHub:</strong>{' '}
                    <a href="https://github.com/Muhammethasanuyar">
                      github.com/Muhammethasanuyar
                    </a>
                  </p>
                </div>
              </div>

              <div>
                <form action="#" method="POST" noValidate>
                  <fieldset>
                    <legend>Iletisim Formu</legend>

                    <div className="form-group">
                      <label htmlFor="name">Ad Soyad:</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        minLength={2}
                        aria-describedby="name-error"
                      />
                      <small id="name-error" className="error-msg" role="alert" />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">E-posta:</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        aria-describedby="email-error"
                      />
                      <small id="email-error" className="error-msg" role="alert" />
                    </div>

                    <div className="form-group">
                      <label htmlFor="subject">Konu:</label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        aria-describedby="subject-error"
                      >
                        <option value="">-- Seciniz --</option>
                        <option value="is">Is Teklifi</option>
                        <option value="soru">Soru</option>
                        <option value="oneri">Oneri</option>
                      </select>
                      <small id="subject-error" className="error-msg" role="alert" />
                    </div>

                    <div className="form-group">
                      <label htmlFor="message">Mesajiniz:</label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        minLength={10}
                        aria-describedby="message-error"
                      />
                      <small id="message-error" className="error-msg" role="alert" />
                    </div>

                    <button type="submit" className="button-primary">
                      Gonder
                    </button>
                  </fieldset>
                </form>
              </div>
            </div>
          </section>
        </main>

        <footer className="site-footer">
          <div className="container footer-inner">
            <p>© 2025 Muhammet Hasan Uyar. Tum haklari saklidir.</p>
            <p>
              Bu sayfa, Web Tasarimi ve Programlama dersi LAB-1 ve LAB-2 kapsaminda
              gelistirilmis kisisel portfolyo uygulamasidir.
            </p>
          </div>
        </footer>
      </div>
    </>
  )
}

export default App
