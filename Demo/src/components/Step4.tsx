import React from "react";

import "./Step4.css";

const Step4: React.FC = () => {
  return (
    <>
      <h2>Ergebnisse überprüfen</h2>
      <div className="card mb-5">
        <div className="card-body">
          <table className="table">
            <tbody>
              <tr>
                <th>Berechnungsmethode</th>
                <td>GHG-Protokoll</td>
              </tr>
              <tr>
                <th>Domäne</th>
                <td>Upstream Transportation and Distribution</td>
              </tr>
              <tr>
                <th>Scope</th>
                <td>
                  <span className="badge bg-primary">Scope 3</span>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="row">
            <div className="col-5 p-1">
              <div className="card bg-light">
                <div className="card-body">
                  <div className="number_title">CO₂ Emissionen</div>
                  <div className="number_number">131,5</div>
                  <div className="number_unit">g CO₂e pro Stück</div>
                </div>
              </div>
            </div>
            <div className="col-5 p-1">
              <div className="card bg-light">
                <div className="card-body">
                  <div className="number_title">Zurückgelegte Strecke</div>
                  <div className="number_number">25.300</div>
                  <div className="number_unit">km pro Produkt</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h3 className="d-none">Vorschau anzeigen</h3>
      <div className="card d-none">
        <div className="card-body">
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Strecke</th>
                <th>Verbrauch</th>
                <th>Beladung</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>147 km</td>
                <td>34 l/100km</td>
                <td>76%</td>
              </tr>
              <tr>
                <td>2</td>
                <td>145 km</td>
                <td>35,3 l/100km</td>
                <td>88%</td>
              </tr>
              <tr>
                <td>3</td>
                <td>152 km</td>
                <td>38 l/100km</td>
                <td>99,7%</td>
              </tr>
              <tr>
                <td colSpan={4} className="text-center">
                  <button
                    type="button"
                    className="btn btn-outline-primary btn-sm"
                  >
                    Mehr laden
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Step4;
