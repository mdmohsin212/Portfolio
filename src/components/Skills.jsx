import React from "react";

const skills = [
  {
    category: "Programming Languages",
    items: ["C", "C++", "Python", "JavaScript"],
    icon: "fa-code",
  },
  {
    category: "Front-End",
    items: ["React.js", "HTML", "CSS", "Bootstrap"],
    icon: "fa-paint-brush",
  },
  {
    category: "Back-End",
    items: [
      "django",
      "Django REST Framework (DRF)",
      "MySQL",
      "SQLite",
      "PostgreSQL",
    ],
    icon: "fa-database",
  },
  {
    category: "Tools",
    items: ["VS Code", "Git", "GitHub", "Postman", "Pycharm"],
    icon: "fa-wrench",
  },
];

const Skills = () => {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Technical Skills</h2>
      <div className="row">
        {skills.map((skill, index) => (
          <div key={index} className="col-md-6 col-lg-3 mb-4 lan">
            <div className="card shadow-sm text-center p-3 h-100">
              <i className={`fa ${skill.icon} fa-2x mb-3`}></i>
              <h5 className="mb-1">{skill.category}</h5> <hr />
              <ul className="list-unstyled">
                {skill.items.map((item, idx) => (
                  <li key={idx} className="text-start">
                    • {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
