import React from 'react';
import "font-awesome/css/font-awesome.min.css";
import { FaCode, FaTrophy, FaLaptopCode, FaChartLine } from "react-icons/fa";
import CountUp from "react-countup";

const Competitive = () => {

  const achievements = [
    {
      title: "Codeforces",
      rating: "Newbie (1199)",
      icon: <FaTrophy />,
      link: "https://codeforces.com/profile/mohsin416",
      problems: 360,
    },
    {
      title: "LeetCode",
      icon: <FaLaptopCode />,
      link: "https://leetcode.com/u/mohsin416/",
      problems: 50,
    },
    {
      title: "CodeChef",
      rating: "2-Star (1508)",
      icon: <FaCode />,
      link: "https://www.codechef.com/users/mohsin416",
      problems: 60,
    },
  ];

    return (
      <div>
        <div className="container my-5">
          <h2 className="text-center text-light fw-bold">
            🚀 Competitive Programming
          </h2>

          <div className="text-center text-light my-4">
            <h4 className="fw-bold">Total Problems Solved</h4>
            <h2 className="text-warning">
              <FaChartLine className="me-2" />
              <CountUp end={450} duration={3} separator="," />+
            </h2>
          </div>

          <div className="row justify-content-center gap-3">
            {achievements.map((item, index) => (
              <div key={index} className="col-md-3 col-11 lan">
                <a href={item.link} className="text-decoration-none">
                  <div
                    className="card bg-dark text-light text-center border-light p-3"
                    style={{ minHeight: "220px" }}
                  >
                    <div className="fs-1">{item.icon}</div>
                    <h4 className="mt-2">{item.title}</h4>
                    <p className="text-warning">{item.rating}</p>
                    <p className="fw-bold">
                      Problems Solved:{" "}
                      <CountUp end={item.problems} duration={2} />+
                    </p>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
}

export default Competitive;