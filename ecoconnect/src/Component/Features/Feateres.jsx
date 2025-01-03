import React from "react";
import "./Feateres.css";
export default function Feateres() {
    return (
        <>
            <div className="container-fluid py-5" id="fea-cf">
                <div className="container py-5" id="fea-c">
                    <div className="col">
                        <div className="row">
                            <div className="col-9">
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col-3 mx-auto text-center">
                                <input type="Submit" className="btn btn-info w-100"/>
                            </div>
                        </div>
                        <div className="row py-5">
                            <div className="col-3">
                                <div className="col">
                                    <i class="fa-solid fa-user"></i>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="col">
                                    <i class="fa-solid fa-bell"></i>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="col">
                                    <i class="fa-solid fa-location-dot"></i>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="col">
                                    <i class="fa-brands fa-discourse"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
