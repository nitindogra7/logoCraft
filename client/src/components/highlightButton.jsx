export default function HighlightButton({ text }) {
  return (
    <div className="px-4 w-fit py-1.5 bg-sky-500/10 border border-sky-500/20 text-sky-400 rounded-full text-xs font-medium font-inter tracking-widest uppercase">
      {text}
    </div>
  );
}