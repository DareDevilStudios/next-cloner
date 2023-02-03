import React from "react";
import Card from "./Card";
import Naval from "../../../../../public/assets/images/resource/service/naval.jpg";
import Hydrodynamics from "../../../../../public/assets/images/resource/service/hydrodynamics.jpg";
import Marine from "../../../../../public/assets/images/resource/service/marine.jpg";
import Structural from "../../../../../public/assets/images/resource/service/structural.jpg";
import Prototype from "../../../../../public/assets/images/resource/service/prototype.jpg";
import Product from "../../../../../public/assets/images/resource/service/product.jpg";

const Gallery = () => {
  return (
    <div className="grid md:grid-cols-3 items-center md:items-start md:justify-start justify-center gap-7 w-full p-5 md:p-20">
      <Card
        img={Naval}
        title="Naval Architectural Services"
        desc="We take up design projects from all the stages and will implement the holistic design procedure which covers the design, production, operation stages of a vessel."
        desc2="We provide cost analysis and approval documents for new projects. We conduct sea trials, stability assessments and support the owner in getting his vessel certified by providing relevant documents as well as liaising with statutes."
      />
      <Card
        img={Structural}
        title="Structural Engineering Services"
        desc="We provide customized structural engineering consultancy services including ship hull design and analysis.
        We have expertise in the fields of structural design and analysis of marine and offshore structures including ship hull, floating dock, service trays, etc. we emphasize on continuous feedback from our clients and thereby increasing reliability within the entire lifetime of our design."
        desc2="Application of modern CAD software facilitates us in efficient passage from conceptual to detailed design phase thus ensuring the necessary flexibility to adapt to changing customer needs. We use various FEA Software for structural analysis and optimization of structures.
        "
      />
      <Card
        img={Hydrodynamics}
        title="Hydrodynamics"
        desc="We have expertise in performing hydrodynamic analysis to predict the performance of vessels in the dynamic marine environment and covers ship resistance & propulsion, mooring analysis, pipe flow simulations and multi-body interaction analysis."
        desc2="Our in-house team of naval architects and hydrodynamics engineers are competent in assisting clients for engineering solutions to complete project on schedule and on budget. Resistance and propulsion calculations are done primarily during the new-build designs. Multi body stimulations involves interactions of more than one vessel or platforms with each other for offshore activities. We perform sloshing analysis to determine dynamic pressures generated in tanks due to vessel motions."
      />
      <Card
        img={Product}
        title="Product Designing"
        desc="We create mechanical design of various products from manufacture’s concept or ideas and prepare animations and product videos for presentations and review purposes."
        desc2="We offer services inprototype manufacturing and 3D printing. covers ship resistance & propulsion, mooring analysis, pipe flow simulations and multi-body interaction analysis."
      />
      <Card
        img={Prototype}
        title="Prototype Manufacturing"
        desc="We create mechanical design of various products from manufacture’s concept or ideas and prepare animations and product videos for presentations and review purposes."
        desc2="We offer services in prototype manufacturing and 3D printing."
      />
      <Card
        img={Marine}
        title="Marine Services"
        desc="We undertake projects on feasibility studies of logistics vessels and navigation. We have expertise in doing services including containerization,"
        desc2="sea fastening of cargo and equipment and transportation ofheavy lift cargo"
      />
    </div>
  );
};

export default Gallery;
