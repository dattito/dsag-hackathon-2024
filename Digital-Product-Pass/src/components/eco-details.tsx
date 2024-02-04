export default function EcoDetails() {
  return (
    <div className="flex flex-col items-center">
      <table className="mx-4">
        <tr>
          <td className="pr-2">
            <div className="flex items-center">
              <span className="material-symbols-outlined pr-2 text-transparent-green-dark">
                airwave
              </span>
              Treibhausgase
            </div>
          </td>
          <td className="font-bold">0,2 kg</td>
        </tr>
        <tr>
          <td>
            <div className="flex items-center">
              <span className="material-symbols-outlined pr-2 text-transparent-green-dark">
                co2
              </span>
              CO₂-Äquivalent
            </div>
          </td>
          <td className="font-bold">0,2 kg</td>
        </tr>
        <tr>
          <td>
            <div className="flex items-center pr-12">
              <span className="material-symbols-outlined pr-2 text-transparent-green-dark">
                water_drop
              </span>
              Wassserverbrauch
            </div>
          </td>
          <td className="font-bold">150 l</td>
        </tr>
        <tr>
          <td>
            <div className="flex items-center pr-12">
              <span className="material-symbols-outlined pr-2 text-transparent-green-dark">
                route
              </span>
              Zurückgelegte Distanz
            </div>
          </td>
          <td className="font-bold">25.300 km</td>
        </tr>
      </table>
    </div>
  );
}
