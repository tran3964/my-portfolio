export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 py-6">
      <div className="max-w-5xl mx-auto px-4 text-sm text-zinc-400">
        © {new Date().getFullYear()} Nguyen Tran — All rights reserved.
      </div>
    </footer>
  );
}
