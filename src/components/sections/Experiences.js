// Developed by Chouseki for Haoming
// Last modifed date: Aug 23, 2022
// Change: modified experience

import React from "react";
import Pagetitle from "../elements/Pagetitle";
import Timeline from "../elements/Timeline";

const educationData = [
  {
    id: 1,
    title: "PhD in Statistics",
    years: "August 2022 - Present",
    content:
      "Rice University, Houston, TX",
  },
  {
    id: 2,
    title: "Bachelor of Science in Financial Math and Statistics,",
    years: "Sept 2018 - June 2022",
    content:
      "University of California Santa Barbara, Santa Barbara, CA",
  },
  {
    id: 3,
    title: "Elementary Degree",
    years: "2012 - 2018",
    content:
      "Tianjin Foreign Languages School, Tianjin, China",
  },
];

const experienceData = [
  {
    id: 1,
    title: "Data Analyst Intern",
    years: "June 2020 - August 2020",
    content:
      "GVSUN Education Technology Co., Ltd., Suzhou, China",
  },
];

function Experiences() {
  return (
    <section id="experience">
      <div className="container">
        <Pagetitle title="Experience" />
        <div className="row">
          <div className="col-md-6">
            <div className="timeline edu bg-white rounded shadow-dark padding-30 overflow-hidden">
              {educationData.map((education) => (
                <Timeline key={education.id} education={education} />
              ))}
              <span className="line"></span>
            </div>
          </div>

          <div className="col-md-6">
            <div className="spacer d-md-none d-lg-none" data-height="30"></div>
            <div className="timeline exp bg-white rounded shadow-dark padding-30 overflow-hidden">
              {experienceData.map((experience) => (
                <Timeline key={experience.id} education={experience} />
              ))}
              <span className="line"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experiences;
