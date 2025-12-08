export default function DashboardMockup(){
  <div className="animate-float relative rounded-xl overflow-hidden shadow-2xl bg-slate-900 border border-slate-700 aspect-[16/9] w-full max-w-4xl mx-auto transform transition-transform hover:scale-[1.01] duration-500">
    <div className="bg-slate-950 h-8 flex items-center px-4 space-x-2 border-b border-slate-800">
      <div className="w-3 h-3 rounded-full bg-red-400"></div>
      <div className="w-3 h-3 rounded-full bg-amber-400"></div>
      <div className="w-3 h-3 rounded-full bg-green-400"></div>
    </div>
    <div className="flex h-full">
      <div className="w-16 md:w-48 bg-slate-900 border-r border-slate-800 p-4 hidden sm:flex flex-col gap-4">
        <div className="h-8 bg-slate-800 rounded w-3/4 mb-4"></div>
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="w-6 h-6 bg-slate-800 rounded-full"></div>
            <div className="h-4 bg-slate-800 rounded w-full hidden md:block"></div>
          </div>
        ))}
      </div>
      <div className="flex-1 p-6 bg-slate-950/50">
        <div className="flex justify-between items-center mb-8">
          <div>
            <div className="h-6 w-32 bg-slate-800 rounded mb-2"></div>
            <div className="h-4 w-48 bg-slate-800/50 rounded"></div>
          </div>
          <div className="h-10 w-10 rounded-full bg-rose-500/20"></div>
        </div>
        <div className="grid grid-cols-3 gap-4 mb-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-slate-900 p-4 rounded-lg shadow-sm border border-slate-800">
              <div className="h-8 w-8 rounded bg-rose-900/30 mb-2"></div>
              <div className="h-6 w-16 bg-slate-800 rounded mb-1"></div>
              <div className="h-4 w-12 bg-slate-800/50 rounded"></div>
            </div>
          ))}
        </div>
        <div className="bg-slate-900 rounded-lg shadow-sm border border-slate-800 p-4 h-full">
           <div className="flex justify-between mb-4">
              <div className="h-4 w-24 bg-slate-800 rounded"></div>
              <div className="h-8 w-24 bg-slate-950 rounded"></div>
           </div>
           {[1, 2, 3, 4].map(i => (
             <div key={i} className="h-12 border-b border-slate-800 flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-slate-800"></div>
                <div className="flex-1 h-3 bg-slate-800 rounded"></div>
                <div className="w-20 h-6 bg-green-900/20 rounded-full"></div>
             </div>
           ))}
        </div>
      </div>
    </div>
  </div>
};