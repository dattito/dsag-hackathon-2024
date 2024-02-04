import Card from "./components/card";
import Curves from "./components/curves";
import FAQ from "./components/faq";
import Product from "./components/product";
import Score from "./components/score";
import SupplyChain from "./components/supply-chain";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <>
      <Curves>
        <div className="flex flex-col items-center w-full">
          <div className="flex flex-col items-center lg:items-start lg:grid lg:grid-cols-2 xl:grid-cols-3 gap-2 p-1 w-full">
            <Card title="Nachhaltigskeitsscore" className="h-[19.5rem]">
              <div className="flex flex-col items-center">
                <Score score={84} maxScore={100} />
              </div>
            </Card>
            <Card
              title="Wasserflasche CyberDrink"
              className="row-span-2 h-[40rem]"
            >
              <div className="flex flex-col items-center">
                <Product />
                <div className="mt-4">
                  <table>
                    <tr>
                      <td>Seriennummer:</td>
                      <td>45678998456733</td>
                    </tr>
                    <tr>
                      <td>Farbe:</td>
                      <td>Blau</td>
                    </tr>
                  </table>
                </div>
              </div>
            </Card>
            <Card title="Details" className="h-[19.5rem]">
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
                  <td>0,2kg</td>
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
                  <td>0,2kg</td>
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
                  <td>150l</td>
                </tr>
              </table>
            </Card>
            <Card duration={0.5} title="Lieferkette" className="h-[30rem]">
              <SupplyChain />
            </Card>
            <Card duration={0.5} title="End of Life">
              <FAQ />
            </Card>
          </div>
        </div>
      </Curves>
      <Analytics />
    </>
  );
}

export default App;
