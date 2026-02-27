import { Button } from "flowbite-react";

export const MarketplacePreview = () => {
  return (
    <section className="w-full py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-black text-white italic uppercase">Market<span className="text-blue-600">place</span></h2>
            <p className="text-gray-400 font-medium">Verified high-end vehicles ready for global transit.</p>
          </div>
          <Button color="blue" pill>
            View All Inventory
          </Button>
        </div>

        {/* Grid of Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="group bg-gray-900/80 border border-white/10 rounded-3xl overflow-hidden hover:border-blue-500/50 transition-all">
              <div className="h-64 bg-gray-800 relative">
                <div className="absolute top-4 left-4 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">Verified</div>
                {/* Placeholder for car image */}
                <div className="w-full h-full flex items-center justify-center text-gray-700">Vehicle Image {item}</div>
              </div>
              <div className="p-6">
                <h3 className="text-white text-xl font-bold">2024 luxury Vehicle Model</h3>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-blue-500 font-black text-2xl">$120,000</span>
                  <span className="text-gray-500 text-sm">Dubai, UAE</span>
                </div>
                <button className="w-full mt-6 py-3 bg-white/5 hover:bg-white text-white hover:text-black font-bold rounded-xl transition-all border border-white/10">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
