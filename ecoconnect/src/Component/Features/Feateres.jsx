import React from "react";
import "./Feateres.css";
export default function Feateres() {
    return (
        <>
            <div className="container-fluid py-5" id="fea-cf">
                <div className="container py-5" id="fea-c">
                    <div className="col">
                        <div className="row py-5">
                            <div className="col-9">
                                <input type="search" placeholder="search the event" className="form-control" />
                            </div>
                            <div className="col-3 mx-auto text-center">
                                <input type="Submit" className="btn btn-info w-100"/>
                            </div>
                        </div>
                        <div className="row py-5">
                            <div className="col-3">
                                <a href="/registration" className="nav-link">
                                    <div className="col py-3" id="item">
                                        <i class="fa-solid fa-user"></i>
                                        <h3>Registration <span>Here</span></h3>
                                    </div>
                                </a>
                            </div>
                            <div className="col-3">
                                <a href="" className="nav-link">
                                    <div className="col py-3" id="item">
                                        <i class="fa-solid fa-bell"></i>
                                        <h3>Get Notifica<span>tion</span></h3>
                                    </div>
                                </a>
                            </div>
                            <div className="col-3">
                                <a href="" className="nav-link">
                                    <div className="col py-3" id="item">
                                        <i class="fa-solid fa-location-dot"></i>
                                        <h3>Get The Loca<span>tion</span></h3>
                                    </div>
                                </a>
                            </div>
                            <div className="col-3">
                                <a href="" className="nav-link">
                                    <div className="col py-3" id="item">
                                        <i class="fa-brands fa-discourse"></i>
                                        <h3>Open Conversa<span>tion</span></h3>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
