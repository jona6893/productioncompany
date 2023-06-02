import Image from 'next/image'
import Menu from './components/Menu'
import Gallery from './components/Gallery'

export default function Home() {
  return (
    <main className="grid mainGrid mt-12 gap-4 p-4">
      <div>
      <Menu />
      </div>
      <Gallery />
    </main>
  );
}
