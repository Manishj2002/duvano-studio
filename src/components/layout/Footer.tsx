import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-dark-secondary p-6 text-center">
      <div className="container mx-auto">
        <p className="text-white-highlight mb-4">© 2025 Duvano Studio. All rights reserved.</p>
        <div className="flex justify-center space-x-4">
          <Link href="https://discord.gg/duvano" className="text-neon-blue hover:text-soft-red">Discord</Link>
          <Link href="https://instagram.com/duvanostudio" className="text-neon-blue hover:text-soft-red">Instagram</Link>
          <Link href="https://youtube.com/duvanostudio" className="text-neon-blue hover:text-soft-red">YouTube</Link>
        </div>
      </div>
    </footer>
  );
}