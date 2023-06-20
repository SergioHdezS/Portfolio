import React, { useState } from 'react'
import './qualification.css'

const Qualification = () => {
    const [toggleState, setToggleState] = useState(0);
    const toggleTab = (index) => {
        setToggleState(index);
    }
    return (
        <section className="qualification section">
            <h2 className="section--title">Calificaciones</h2>
            <span className="section--subtitle">Mi viaje personal</span>


            <div className="wualification--container container">
                <div className="qualification--tabs">
                    <div
                        className={
                            toggleState === 1 ?
                                "qualification--button qualification--active button--flex"
                                :
                                "qualification--button button--flex"}
                        onClick={() => toggleTab(1)}
                    >
                        <i className="uil uil-graduation-cap qualification--icon"></i> Education
                    </div>

                    <div
                        className={
                            toggleState === 2 ?
                                "qualification--button qualification--active button--flex"
                                :
                                "qualification--button button--flex"}
                        onClick={() => toggleTab(2)}
                    >
                        <i className="uil uil-briefcase-alt qualification--icon"></i> Experience
                    </div>
                </div>

                <div className="qualification--sections">
                    <div className={toggleState === 1 ? "qualification--content qualification--content-active" : "qualification--content"}>
                        <div className="qualification--data">
                            <div>
                                <h3 className="qualification--title">Web Design</h3>
                                <span className="qualification--subtitle">Spain - Institute</span>
                                <div className="qualification--calender">
                                    <i className="uil uil-calendar-alt"></i> 2021 - Present
                                </div>
                            </div>
                            <div>
                                <span className="qualification--rounder"></span>
                                <span className="qualification--line"></span>
                            </div>
                        </div>

                        <div className="qualification--data">
                            <div></div>

                            <div>
                                <span className="qualification--rounder"></span>
                                <span className="qualification--line"></span>
                            </div>
                            <div>
                                <h3 className="qualification--title">Art Director</h3>
                                <span className="qualification--subtitle">Spain - Institute</span>
                                <div className="qualification--calender">
                                    <i className="uil uil-calendar-alt"></i> 2021 - Present
                                </div>
                            </div>
                        </div>

                        <div className="qualification--data">
                            <div>
                                <h3 className="qualification--title">Web Design</h3>
                                <span className="qualification--subtitle">Spain - Institute</span>
                                <div className="qualification--calender">
                                    <i className="uil uil-calendar-alt"></i> 2021 - Present
                                </div>
                            </div>
                            <div>
                                <span className="qualification--rounder"></span>
                                <span className="qualification--line"></span>
                            </div>
                        </div>

                        <div className="qualification--data">
                            <div></div>

                            <div>
                                <span className="qualification--rounder"></span>
                                <span className="qualification--line"></span>
                            </div>
                            <div>
                                <h3 className="qualification--title">Art Director</h3>
                                <span className="qualification--subtitle">Spain - Institute</span>
                                <div className="qualification--calender">
                                    <i className="uil uil-calendar-alt"></i> 2021 - Present
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className={toggleState === 2 ? "qualification--content qualification--content-active" : "qualification--content"}>
                        <div className="qualification--data">
                            <div>
                                <h3 className="qualification--title">Product Designer</h3>
                                <span className="qualification--subtitle">Microsoft - Spain</span>
                                <div className="qualification--calender">
                                    <i className="uil uil-calendar-alt"></i> 2021 - Present
                                </div>
                            </div>
                            <div>
                                <span className="qualification--rounder"></span>
                                <span className="qualification--line"></span>
                            </div>
                        </div>

                        <div className="qualification--data">
                            <div></div>

                            <div>
                                <span className="qualification--rounder"></span>
                                <span className="qualification--line"></span>
                            </div>
                            <div>
                                <h3 className="qualification--title">UX Designer</h3>
                                <span className="qualification--subtitle">Spain - Institute</span>
                                <div className="qualification--calender">
                                    <i className="uil uil-calendar-alt"></i> 2021 - Present
                                </div>
                            </div>
                        </div>

                        <div className="qualification--data">
                            <div>
                                <h3 className="qualification--title">Web Design</h3>
                                <span className="qualification--subtitle">Spain - Institute</span>
                                <div className="qualification--calender">
                                    <i className="uil uil-calendar-alt"></i> 2021 - Present
                                </div>
                            </div>
                            <div>
                                <span className="qualification--rounder"></span>
                                <span className="qualification--line"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification