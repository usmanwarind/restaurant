import React from "react";

export default function Review() {
    return (
        <>
            <div
                id="testmonial"
                className="container-fluid wow fadeIn bg-dark text-light has-height-lg middle-items"
            >
                <h2 className="section-title my-5 text-center">REVIEWS</h2>
                <div className="row mt-3 mb-5">
                    <div className="col-md-4 my-3 my-md-0">
                        <div className="testmonial-card">
                            <h3 className="testmonial-title">John Doe</h3>
                            <h6 className="testmonial-subtitle">Web Designer</h6>
                            <div className="testmonial-body">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
                                    nobis eligendi, quaerat accusamus ipsum sequi dignissimos
                                    consequuntur blanditiis natus. Aperiam!
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 my-3 my-md-0">
                        <div className="testmonial-card">
                            <h3 className="testmonial-title">Steve Thomas</h3>
                            <h6 className="testmonial-subtitle">UX/UI Designer</h6>
                            <div className="testmonial-body">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Laborum minus obcaecati cum eligendi perferendis magni dolorum
                                    ipsum magnam, sunt reiciendis natus. Aperiam!
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 my-3 my-md-0">
                        <div className="testmonial-card">
                            <h3 className="testmonial-title">Miranda Joy</h3>
                            <h6 className="testmonial-subtitle">Graphic Designer</h6>
                            <div className="testmonial-body">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Aliquid, nam. Earum nobis eligendi, dignissimos consequuntur
                                    blanditiis natus. Aperiam!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
