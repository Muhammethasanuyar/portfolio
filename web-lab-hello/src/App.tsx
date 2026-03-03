import './App.css'

function App() {
  return (
    <div className="app">
      <header className="hero">
        <h1>Web Tasarimi ve Programlama</h1>
        <h2>LAB -1</h2>
      </header>

      <main className="content">
        <section className="card">
          <h3>Ogrenci Bilgileri</h3>
          <p>
            <strong>Ad Soyad:</strong> Muhammet Hasan Uyar
          </p>
          <p>
            <strong>Ogrenci No:</strong> 000000000
          </p>
          <p>
            <strong>Bolum:</strong> (Bolumunu buraya yaz)
          </p>
        </section>

        <section className="card">
          <h3>Kisa Tanitim</h3>
          <p>
            Modern web teknolojilerini ogrenmek ve portfoyumu gelistirmek icin bu
            dersi aliyorum.
          </p>
          <p>
            Bos zamanlarimda yeni teknolojiler denemeyi ve kisisel projeler
            gelistirmeyi seviyorum.
          </p>
        </section>
      </main>
    </div>
  )
}

export default App
