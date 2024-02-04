import React from "react";
import "./header.css";

interface HeaderProps {
    currentState: number;
    totalStates: number;
    onNextStep: () => void;
}

const Header: React.FC<HeaderProps> = ({ currentState, totalStates, onNextStep }) => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary align-items-center mb-3">
                <div className="container-fluid">
                    <div className="d-flex">
                        <img className="ms-2 mt-1 logo" src="logo-full-green.svg" alt="TransparentGreen" />
                    </div>
                </div>
            </nav>
            <div className="d-flex justify-content-between align-items-center mb-4">
                <div className="d-flex">
                    {/* Render the remaining steps */}
                    {Array.from({ length: totalStates }, (_, index) => (
                        <>
                            <div className={`step ${index === currentState - 1 ? "active" : ""}`}>{index + 1}</div>
                            {index !== totalStates - 1 && <div className="bar"></div>}
                        </>
                    ))}
                </div>
                <div>
                    {currentState === 4 ? (
                        <>
                            <button type="button" className="btn btn-outline-secondary btn-sm mx-1">
                                Zurück
                            </button>

                            <button type="button" className="btn btn-primary btn-sm mx-1" onClick={onNextStep}>
                                Zum Dashboard hinzufügen
                            </button>
                        </>
                    ) : (currentState === totalStates ? (
                        <></>
                    ) : (
                        <>
                            <button type="button" className="btn btn-outline-secondary btn-sm mx-1">
                                Zurück
                            </button>

                            <button type="button" className="btn btn-primary btn-sm mx-1" onClick={onNextStep}>
                                Weiter
                            </button>
                        </>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Header;