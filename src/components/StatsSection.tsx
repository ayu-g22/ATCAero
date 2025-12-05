import {
  LiaCertificateSolid,
  LiaGlobeSolid,
  LiaPaperPlaneSolid,
  LiaMapSolid,
} from "react-icons/lia";

export const StatsSection = () => {
  return (
    <section className="relative w-full bg-red py-24">

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 text-center">

        {/* 1 - Pilots */}
        <div className="flex flex-col items-center">
          <LiaCertificateSolid size={85} className="text-gold pb-2" />

          <h3 className="font-montserrat font-bold text-6xl text-white">
            89<span className="text-gold text-4xl">+</span>
          </h3>

          <p className="font-montserrat py-5 text-white/80 text-3xl font-bold">
            Pilots
          </p>

          <div className="h-[3px] w-40 bg-gold mt-6" />
        </div>

        {/* 2 - World Airports */}
        <div className="flex flex-col items-center">
          <LiaGlobeSolid size={85} className="text-gold2 pb-2" />

          <h3 className="font-montserrat font-semibold text-6xl text-white">
            289<span className="text-gold text-4xl">+</span>
          </h3>

          <p className="font-montserrat py-5 text-white/80 text-3xl font-bold">
            World Airports
          </p>

          <div className="h-[3px] w-40 bg-gold mt-6" />
        </div>

        {/* 3 - Jet Airplanes */}
        <div className="flex flex-col items-center">
          <LiaPaperPlaneSolid size={85} className="text-gold2 pb-2 " />

          <h3 className="font-montserrat font-semibold text-6xl text-white">
            59<span className="text-gold text-4xl">+</span>
          </h3>

          <p className="font-montserrat py-5 text-white/80 text-3xl font-bold">
            Jet Airplanes
          </p>

          <div className="h-[3px] w-40 bg-gold mt-6" />
        </div>

        {/* 4 - Directions */}
        <div className="flex flex-col items-center">
          <LiaMapSolid size={85} className="text-gold2 pb-2" />

          <h3 className="font-montserrat font-semibold text-6xl text-white">
            129<span className="text-gold text-4xl">+</span>
          </h3>

          <p className="font-montserrat py-5 text-white/80 text-3xl font-bold">
            Directions
          </p>

          <div className="h-[3px] w-40 bg-gold mt-6" />
        </div>

      </div>
    </section>
  );
};
