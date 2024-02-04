import "./supply-chain.css";
export default function SupplyChain() {
  return (
    <div className="mx-1 mt-5">
      <div className="trip" id="litr::timeline">
        <div className="d-flex justify-content-start align-items-center trip_entry">
          <div className="symbol">
            <div className="symbol1">
              <div className="symbol2">
                <div className="symbol3"></div>
              </div>
            </div>
          </div>
          <div className="details">
            <div className="title">
              Basel <span className="flag-icon flag-icon-ch ms-2"></span>
            </div>
            <div className="category">Basel</div>
            <div className="date">13.08.2023 bis 13.08.2023</div>
            <div className="notizen mt-2 text-[12px]">Test</div>
          </div>
        </div>

        <div className="d-flex justify-content-start align-items-center trip_entry">
          <div className="symbol">
            <div className="symbol1">
              <div className="symbol2">
                <div className="symbol3"></div>
              </div>
            </div>
          </div>
          <div className="details">
            <div className="title">
              Zürich <span className="flag-icon flag-icon-ch ms-2"></span>
            </div>
            <div className="category">Zürich</div>
            <div className="date">13.08.2023 bis 13.08.2023</div>
            <div className="notizen mt-2 text-[12px]">Test</div>
          </div>
        </div>
        <div className="d-flex justify-content-start align-items-center trip_entry">
          <div className="symbol">
            <div className="symbol1">
              <div className="symbol2">
                <div className="symbol3"></div>
              </div>
            </div>
          </div>
          <div className="details">
            <div className="title">
              Zürich <span className="flag-icon flag-icon-ch ms-2"></span>
            </div>
            <div className="category">Zürich</div>
            <div className="date">13.08.2023 bis 13.08.2023</div>
            <div className="notizen mt-2 text-[12px]">Test</div>
          </div>
        </div>
        <div className="bar"></div>
      </div>
    </div>
  );
}
