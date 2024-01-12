// Developed by Chouseki for Haoming
// Last modifed date: Aug 23, 2022
// Change: deleted icon & content, done.

import React from "react";
import { Link } from "react-scroll";
import Pagetitle from "../elements/Pagetitle";
import Service from "../elements/Service";

const servicesData = [
  {
    id: 1,
    icon: "images/kumiko_pic/biostats_icon.png",
    title: "Optimization",
    color: "#a7b8a0",
    contentColor: "light",
  },
  {
    id: 2,
    title: "Survival Analysis",
    color: "#497566",
    contentColor: "dark",
  },
  {
    id: 3,
    title: "Statistical Genetics",
    color: "#b9d2c5",
    contentColor: "dark",
  },
  {
    id: 4,
    title: "High Dimentional Data",
    color: "#b9d2c5",
    contentColor: "dark",
  },
  {
    id: 5,
    title: "Machine Learning",
    color: "#a7b8a0",
    contentColor: "dark",
  },
  {
    id: 6,
    title: "Biostatistics",
    color: "#497566",
    contentColor: "dark",
  },
];

function Services() {
  return (
    <section id="services">
      <div className="container">
        <Pagetitle title="Research Focus" />
        <div className="row fix-spacing">
          {servicesData.map((service) => (
            <div className="col-md-4" key={service.id}>
              <Service service={service} />
            </div>
          ))}
        </div>
        <div className="mt-5 text-center">
          <p className="mb-0">
            <Link
              className="colorpink pointer"
              to="section-contact"
              spy={true}
              smooth={true}
              duration={500}
            >
              Click here
            </Link>{" "}
            to contact me for research opportunities or interests.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;
