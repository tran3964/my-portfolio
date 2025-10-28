export default function Button({ variant="solid", className="", ...rest }) {
  const base = "px-4 py-2 rounded-xl text-sm transition";
  const styles = variant==="solid"
    ? "bg-white text-black hover:opacity-90"
    : "border border-zinc-700 hover:bg-zinc-800";
  return <button className={`${base} ${styles} ${className}`} {...rest} />;
}
