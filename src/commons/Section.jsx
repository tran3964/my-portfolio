export default function Section({ title, children }) {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-semibold mb-3">{title}</h2>
      <div className="rounded-2xl border border-zinc-800 p-5">{children}</div>
    </section>
  );
}
