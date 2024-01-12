// Developed by Chouseki for Haoming
// Last modifed date: Aug 17, 2022
// Change: changed about page

import React from "react";
import TrackVisibility from "react-on-screen";
// import Counter from "../elements/Counter";
import Pagetitle from "../elements/Pagetitle";
import Skill from "../elements/Skill";

const aboutContent = {
  name: "Haoming Shi",
  avatarImage: "/images/kumiko_pic/profile_circ.png",
};

const progressData = [
  {
    id: 1,
    title: "Optimization",
    percantage: 85,
    progressColor: "#497466",
  },
  {
    id: 2,
    title: "Machine Learning",
    percantage: 95,
    progressColor: "#deefe0",
  },
  // {
  //   id: 3,
  //   title: "Statistical Genetics",
  //   percantage: 70,
  //   progressColor: "#dbeae5",
  // },
  {
    id: 4,
    title: "High-Dimensional Data",
    percantage: 70,
    progressColor: "#bee0d0",
  },
];

// const counterData = [
//   {
//     id: 1,
//     title: "Projects completed",
//     count: 198,
//     icon: "icon-fire",
//   },
//   {
//     id: 2,
//     title: "Cup of coffee",
//     count: 5670,
//     icon: "icon-cup",
//   },
//   {
//     id: 3,
//     title: "Satisfied clients",
//     count: 427,
//     icon: "icon-people",
//   },
//   {
//     id: 4,
//     title: "Nominees winner",
//     count: 35,
//     icon: "icon-badge",
//   },
// ];

function About() {
  return (
    <section id="about">
      <div className="container">
        <Pagetitle title="About Me" />
        <div className="row">
          <div className="col-md-3">
            <div className="text-center text-md-left">
              <img src={aboutContent.avatarImage} alt={aboutContent.name} />
            </div>
            <div className="spacer d-md-none d-lg-none" data-height="30"></div>
          </div>

          <div className="col-md-9 triangle-left-md triangle-top-sm">
            <div className="rounded bg-white shadow-dark padding-30">
              <div className="row">
                <div className="col-md-6">
                  <p>I am a PhD student in the <a href="https://statistics.rice.edu/"> Department of Statistics at Rice University</a> since August 2022. I received Bachelor of Science degree in Financial Math and Statistics from <a href="https://www.pstat.ucsb.edu/">UCSB</a>. I am currently working with <a href="https://www.ericchi.com/">Dr. Eric Chi</a> on robust spatial temporal modelling. </p>
                  <div className="mt-3">
                    <a href="/files/Resume_Haoming_Shi.pdf" className="btn btn-default">
                      Download CV
                    </a>
                  </div>
                  <div
                    className="spacer d-md-none d-lg-none"
                    data-height="30"
                  ></div>
                </div>
                <div className="col-md-6">
                  {progressData.map((progress) => (
                    <TrackVisibility
                      once
                      key={progress.id}
                      className="progress-wrapper"
                    >
                      <Skill progress={progress} />
                    </TrackVisibility>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="spacer" data-height="70"></div>
        {/* <div className="row fix-spacing">
          {counterData.map((counter) => (
            <div key={counter.id} className="col-md-3 col-sm-6">
              <TrackVisibility once>
                <Counter counterItem={counter} />
              </TrackVisibility>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
}

export default About;
