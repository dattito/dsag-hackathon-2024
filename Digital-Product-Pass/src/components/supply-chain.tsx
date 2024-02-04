import "./supply-chain.css";

export default function SupplyChain() {
  return (
    <>
      <div className="trip" id="litr::timeline">
        <Place title="Al-Jubail" description="Saudi-Arabien" logo="adjust" />
        <Transport title="Schiff" logo="directions_boat" co2e="10-20" />
        <Place title="Guangzhou" description="China" logo="adjust" />
        <Transport title="Schiff" logo="directions_boat" co2e="10-20" />
        <Transport title="LKW" logo="local_shipping" co2e="60-150" />
        <Place title="Stuttgart" description="Deutschland" logo="adjust" />
        <Transport title="LKW" logo="local_shipping" co2e="60-150" />
        <Place
          title="Mannheim"
          description="Deutschland (Verkauf)"
          logo="storefront"
        />
        <div className="bar"></div>
      </div>

      <div className="text-xs text-gray-600 mt-4 mr-4 text-right">
        *g CO₂e/tkm = Gramm CO₂-Äquivalente pro Tonne und Kilometer
      </div>
    </>
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
    <div className="d-flex justify-content-start align-items-center bg-white trip_entry">
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

function Transport({
  title,
  logo,
  co2e,
}: {
  title: string;
  logo: string;
  co2e: string;
}) {
  return (
    <div className="d-flex justify-content-start align-items-centr bg-white trip_entry text-gray-500">
      <div className="symbol">
        <span className="material-symbols-outlined bg-white">{logo}</span>
      </div>
      <div className="details">
        <div className="font-semibold">{title}</div>
        <div className="text-xs">{co2e} g CO₂e/tkm*</div>
      </div>
    </div>
  );
}
