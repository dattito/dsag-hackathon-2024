import React from "react";
import { motion } from "framer-motion";

import './Step4.css';

const Step5: React.FC = () => {
    return (
        <>
            <h2>Ergebnisse überprüfen</h2>
            <div className="card">
                <div className="card-body">
                    <div className="text-primary d-flex align-items-center flex-column">
                        <motion.div className="text-center" initial={{ display: 'block' }} animate={{ display: 'none' }} transition={{ duration: 0, delay: 5 }}>
                            <div className="spinner-border mb-3" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                            <motion.div className="text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0 }}>
                                Daten werden komprimiert...
                            </motion.div>
                            <motion.div className="text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 2.4 }}>
                                Daten werden übertragen...
                            </motion.div>
                            <motion.div className="text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 4.1 }}>
                                Daten im Dashboard anzeigen...
                            </motion.div>
                        </motion.div>

                        <motion.div className="text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 5 }}>
                            <span className="material-symbols-rounded text-success" style={{ fontSize: '44px' }}> check_circle </span>
                            <div className="text-center  text-success">
                                Die Daten wurden erfolgreich verarbeitet.
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Step5;