import "./supply-chain.css";

export default function SupplyChain() {
  return (
    <div className="trip" id="litr::timeline">
      <Place title="Al-Jubail" description="Saudi-Arabien" logo="adjust" />
      <Transport title="Schiff" logo="directions_boat" />
      <Place title="Guangzhou" description="China" logo="adjust" />
      <Transport title="Schiff" logo="directions_boat" />
      <Transport title="LKW" logo="local_shipping" />
      <Place title="Stuttgart" description="Deutschland" logo="adjust" />
      <Transport title="LKW" logo="local_shipping" />
      <Place title="Mannheim" description="Deutschland" logo="adjust" />
      <div className="bar"></div>
    </div>
  );
}

function Place({
  title,
  description,
  logo,
}: {
  title: string;
  description: string;
  logo: string;
}) {
  return (
    <div className="d-flex justify-content-start align-items-center trip_entry">
      <div className="symbol">
        <span className="material-symbols-outlined bg-white text-transparent-green-dark">
          {logo}
        </span>
      </div>
      <div className="details">
        <div className="font-semibold">{title}</div>
        {description && (
          <div className="text-xs text-gray-600">{description}</div>
        )}
      </div>
    </div>
  );
}

function Transport({ title, logo }: { title: string; logo: string }) {
  return (
    <div className="d-flex justify-content-start align-items-center trip_entry text-gray-500">
      <div className="symbol">
        <span className="material-symbols-outlined bg-white">{logo}</span>
      </div>
      <div className="pb-2 text-sm">{title}</div>
    </div>
  );
}
