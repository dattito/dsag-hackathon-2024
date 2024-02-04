import React, { useEffect } from "react";
import { motion } from "framer-motion";

type Props = {
    onNextStep: () => void;
};

const Step3: React.FC<Props> = ({ onNextStep }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onNextStep();
        }, 4400);

        return () => clearTimeout(timer);
    }, []);
    return (
        <>
            <h2>CO2-Bilanz berechnen</h2>
            <div className="card">
                <div className="card-body">
                    <div className="text-primary d-flex align-items-center flex-column">
                        <div className="spinner-border mb-3" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <p className="text-center">
                            <motion.div className="text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0 }}>
                                CO2-Bilanz wird berechnet...
                            </motion.div>
                            <motion.div className="text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 2.4 }}>
                                Wahrscheinlichste Routen analysieren...
                            </motion.div>
                            <motion.div className="text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 4.1 }}>
                                Ergebnisse konsolidieren...
                            </motion.div>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Step3;