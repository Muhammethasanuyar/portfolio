import { Link } from 'react-router-dom'
import Button from '../components/Button'
import Input from '../components/Input'
import Card from '../components/Card'
import Alert from '../components/Alert'

export default function UIKit() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 p-8 space-y-12">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          UI Kit
        </h1>
        <Link
          to="/"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          ← Portfolyo
        </Link>
      </div>

      {/* --- BUTTONS --- */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
          Buttons
        </h2>
        <div className="flex flex-wrap gap-3">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
        <div className="flex flex-wrap items-end gap-3">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button variant="primary" disabled>
            Disabled
          </Button>
        </div>
      </section>

      {/* --- INPUTS --- */}
      <section className="space-y-4 max-w-md">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
          Inputs
        </h2>
        <Input id="ui-name" label="Normal Input" placeholder="Bir sey yazin ..." />
        <Input
          id="ui-err"
          label="Hatali Input"
          error="Bu alan zorunludur"
        />
        <Input
          id="ui-help"
          label="Help Text"
          type="email"
          helpText="E-posta adresinizi girin"
        />
        <Input
          id="ui-dis"
          label="Disabled"
          disabled
          value="Duzenlenemez"
        />
      </section>

      {/* --- CARDS --- */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
          Cards
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card variant="elevated" title="Elevated Card">
            <p>Golge ile yukseltilmis kart.</p>
          </Card>
          <Card variant="outlined" title="Outlined Card">
            <p>Cerceveli kart.</p>
          </Card>
          <Card variant="filled" title="Filled Card" footer={<Button size="sm">Detay</Button>}>
            <p>Dolgulu arka plan.</p>
          </Card>
        </div>
      </section>

      {/* --- ALERTS --- */}
      <section className="space-y-4 max-w-xl">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
          Alerts
        </h2>
        <Alert variant="info" title="Bilgi">
          Bilgilendirme mesaji.
        </Alert>
        <Alert variant="success" title="Basarili">
          Islem tamamlandi.
        </Alert>
        <Alert variant="warning" title="Uyari">
          Dikkat edilmesi gereken durum.
        </Alert>
        <Alert
          variant="error"
          title="Hata"
          dismissible
          onDismiss={() => console.log('kapatildi')}
        >
          Bir hata olustu.
        </Alert>
      </section>
    </div>
  )
}
