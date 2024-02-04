export default function EcoDetails() {
  return (
    <div className="flex flex-col items-center">
      <table className="mx-8">
        <tr>
          <td className="pr-2">
            <div className="flex items-center">
              <span className="material-symbols-outlined pr-2 text-transparent-green-dark">
                airwave
              </span>
              Treibhausgase
            </div>
          </td>
          <td className="font-bold">0,2kg</td>
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
          <td className="font-bold">0,2kg</td>
        </tr>
        <tr>
          <td>
            <div className="flex items-center pr-2">
              <span className="material-symbols-outlined pr-2 text-transparent-green-dark">
                water_drop
              </span>
              Wassserverbrauch
            </div>
          </td>
          <td className="font-bold">150l</td>
        </tr>
      </table>
    </div>
  );
}
