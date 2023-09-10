import React from "react";
import "./ProjectO.scss";
import Card from "./../../../global/components/cards";

function ProjectO() {
  return (
    <div className="projectContainer1">
      <h1>
        <span>#</span> Complete-apps
      </h1>
      <div className="myProjects">
        <div className="top">
          <Card
            url={require("../../../assists/project1.jpg")}
            cached={{
              link: "",
              status: false,
            }}
            title="ChertNodes"
            description="Mine Craft Serving Hosting "
            live={{
              link: "google.com",
              status: true,
            }}
            stack={["Html", "Css", "Python"]}
          />
          <Card
            url={require("../../../assists/project2.png")}
            cached={{
              link: "",
              status: false,
            }}
            title="ProtectX"
            description="Discord Anti-crash Bot "
            live={{
              link: "google.com",
              status: true,
            }}
            stack={[
              "React",
              "Discard.js",
              "Express.js",
              "Node.js",
              "Html",
              "Flask",
              "Python",
              "Sass",
            ]}
          />
          <Card
            url={require("../../../assists/project3.png")}
            cached={{
              link: "",
              status: false,
            }}
            title="Kahot Answer Viewer"
            description="Get Answer to your Kahot Quiz "
            live={{
              link: "google.com",
              status: true,
            }}
            stack={["Css", "Ecpress.js", "Node.js"]}
          />
        </div>

        <div className="bottom">
          <Card
            url={require("../../../assists/project4.png")}
            cached={{
              link: "",
              status: false,
            }}
            title="ProtectX"
            description="Discord Anti-crash Bot "
            live={{
              link: "google.com",
              status: true,
            }}
            stack={[
              "React",
              "Discard.js",
              "Express.js",
              "Node.js",
              "Html",
              "Flask",
              "Python",
              "Sass",
            ]}
          />
          <Card
            url={require("../../../assists/project5.png")}
            cached={{
              link: "",
              status: false,
            }}
            title="Kahot Answer Viewer"
            description="Get Answer to your Kahot Quiz "
            live={{
              link: "google.com",
              status: true,
            }}
            stack={["Css", "Ecpress.js", "Node.js"]}
          />
        </div>
      </div>
    </div>
  );
}

export default ProjectO;
