export default function EcoDetails() {
  return (
    <div className="flex flex-col items-center justify-start h-full">
      <table className="mx-2">
        <tr>
          <td className="pr-2">
            <div className="flex items-center my-1">
              <span className="material-symbols-outlined pr-2 text-transparent-green-dark">
                airwave
              </span>
              Treibhausgase
            </div>
          </td>
          <td className="font-bold">119,2 g</td>
        </tr>
        <tr>
          <td>
            <div className="flex items-center my-1">
              <span className="material-symbols-outlined pr-2 text-transparent-green-dark">
                co2
              </span>
              CO₂-Äquivalent
            </div>
          </td>
          <td className="font-bold">131,5 g</td>
        </tr>
        <tr>
          <td>
            <div className="flex items-center pr-12 my-1">
              <span className="material-symbols-outlined pr-2 text-transparent-green-dark">
                water_drop
              </span>
              Wassserverbrauch
            </div>
          </td>
          <td className="font-bold">30 l</td>
        </tr>
        <tr>
          <td>
            <div className="flex items-center pr-12 my-1">
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
