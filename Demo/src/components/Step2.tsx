import React from "react";
import { motion } from "framer-motion";

import './Step2.css';

const Step2: React.FC = () => {
    return (
        <>
            <h2>Strategie auswählen</h2>
            <motion.div className="card" initial={{ display: "block" }} animate={{ display: "none" }} transition={{ duration: 0, delay: 3 }}>
                <div className="card-body">
                    <div className="analytics d-flex align-items-center flex-column">
                        <div className="spinner-border mb-3" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <p className="text-center">
                            Ihre Daten werden analysiert...
                        </p>
                    </div>
                </div>
            </motion.div>
            <motion.div className="mb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 3 }}>
                <div className="mb-4">
                    <ul className="list-group">
                        <li className="list-group-item disabled" aria-disabled="true">
                            <span className="material-symbols-rounded inline text-primary me-1"> upload_file </span>lkw_data.csv
                            <button type="button" className="btn btn-outline-primary btn-sm change">Ändern</button>
                        </li>
                        <li className="list-group-item disabled" aria-disabled="true">
                            <span className="material-symbols-rounded inline text-primary me-1"> local_shipping </span>Überland <span className="material-symbols-rounded inline"> navigate_next </span> LKW
                            <button type="button" className="btn btn-outline-primary btn-sm change">Ändern</button>
                        </li>
                        <li className="list-group-item disabled" aria-disabled="true">
                            <span className="material-symbols-rounded inline text-primary me-1"> pin_drop </span>Start- und Zieladresse
                            <button type="button" className="btn btn-outline-primary btn-sm change">Ändern</button>
                        </li>
                        <li className="list-group-item disabled" aria-disabled="true" style={{borderTop : '#999 1.5px solid'}}>
                            <span className="material-symbols-rounded inline text-primary me-1"> co2 </span>Scope 3 <span className="material-symbols-rounded inline"> navigate_next </span> Upstream Transportation and Distribution
                            
                            <button type="button" className="btn btn-outline-primary btn-sm change">Ändern</button>
                        </li>
                    </ul>
                </div>
                <h3>Tabellenfelder</h3>
                <div className="">
                    <ul className="list-group">
                        <li className="list-group-item disabled" aria-disabled="true">
                            <span className="material-symbols-rounded inline text-success me-1"> check_circle </span>
                            lkw_verbrauch
                            <select className="form-select form-select-sm changeSelect" aria-label="Small select example" disabled>
                                <option selected>Verbrauch in l/100km</option>
                            </select>
                        </li>
                        <li className="list-group-item disabled" aria-disabled="true">
                            <span className="material-symbols-rounded inline text-success me-1"> check_circle </span>
                            lkw_beladung
                            <select className="form-select form-select-sm changeSelect" aria-label="Small select example" disabled>
                                <option selected>Beladung in Tonnen</option>
                            </select>
                        </li>
                        <li className="list-group-item text-danger">
                            <span className="material-symbols-rounded inline text-danger me-1"> error </span>
                            abholort
                            <select className="form-select form-select-sm changeSelect is-invalid" aria-label="Small select example" onChange={(event) => { event.target.classList.remove('is-invalid') }}>
                                <option selected>Bitte wählen</option>
                                <option>Adresse des Startorts</option>
                                <option>Koordinaten des Startorts</option>
                                <option>Mehr anzeigen...</option>
                            </select>
                        </li>
                        <li className="list-group-item disabled" aria-disabled="true">
                            <span className="material-symbols-rounded inline text-success me-1"> check_circle </span>
                            zielort
                            <select className="form-select form-select-sm changeSelect" aria-label="Small select example" disabled>
                                <option selected>Adresse des Zielorts</option>
                            </select>
                        </li>
                    </ul>
                </div>
            </motion.div>
        </>
    );
}

export default Step2;