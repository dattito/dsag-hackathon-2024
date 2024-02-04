import Card from "./components/card";
import Curves from "./components/curves";
import EcoDetails from "./components/eco-details";
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
              </div>
            </Card>
            <Card title="Details" className="h-[19.5rem]">
              <EcoDetails />
            </Card>
            <Card duration={0.5} title="Lieferkette">
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
