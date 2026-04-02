export default function BackgroundOrbs() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute left-[-120px] top-[8%] h-[320px] w-[320px] rounded-full bg-fuchsia-500/20 blur-3xl animate-orb-1" />
      <div className="absolute right-[-100px] top-[15%] h-[280px] w-[280px] rounded-full bg-violet-500/20 blur-3xl animate-orb-2" />
      <div className="absolute bottom-[-120px] left-[15%] h-[300px] w-[300px] rounded-full bg-purple-500/20 blur-3xl animate-orb-3" />
      <div className="absolute bottom-[10%] right-[20%] h-[220px] w-[220px] rounded-full bg-pink-500/20 blur-3xl animate-orb-4" />
    </div>
  );
}