import React from "react";

const Step1: React.FC = () => {
    return (
        <>
            <h2>Datenquelle verbinden</h2>
            <div className="card">
                <div className="card-body">
                    <p className="text-center">
                        Wählen Sie die Datei aus oder ziehen Sie sie hierher.
                    </p>
                    <div className="mb-3">
                        <input className="form-control form-control-sm" id="formFileSm" type="file" />
                    </div>
                </div>
            </div>
            <p className="text-center mt-2 fst-italic text-secondary">oder</p>
            <div className="card">
                <div className="card-body">
                    <p className="text-center">
                        Verbinden Sie Ihre Systeme.
                    </p>
                    <div className="d-flex justify-content-center">
                        <button type="button" className="btn btn-primary btn-sm">
                            Verbinden
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Step1;