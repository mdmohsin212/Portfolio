import React from 'react';
import "font-awesome/css/font-awesome.min.css";

const Main = () => {
    return (
      <div>
        <div className="p-5 mt-4">
          <h2 className="text-center my-5">preferred tech-stack</h2>
          <div class="gap-5 d-flex flex-wrap justify-content-center">
            <img src="./images/python.svg" />
            <img src="./images/django.svg" />
            <img src="./images/svg.svg" />
            <img src="./images/react.svg" />
          </div>
        </div>
        <div className="p-2">
          <h2 className="text-center my-5">Also I love</h2>
          <div class="gap-5 d-flex flex-wrap justify-content-center">
            <img src="./images/c.svg" />
            <img src="./images/cc.svg" />
            <img src="./images/html.svg" />
            <img src="./images/css.svg" />
            <img src="./images/js.svg" />
            <img src="./images/my.svg" />
          </div>
        </div>
        <div className="p-2">
          <h2 className="text-center my-5">Tools</h2>
          <div class="gap-5 d-flex flex-wrap justify-content-center">
            <img src="./images/vs.svg" />
            <img src="./images/charm.svg" />
            <img src="./images/chrome.svg" />
          </div>
        </div>
        <div className="p-2">
          <h2 className="text-center my-5">Version Control</h2>
          <div class="gap-5 d-flex flex-wrap justify-content-center">
            <img src="./images/git.svg" />
            <img src="./images/hub.svg" />
          </div>
        </div>
      </div>
    );
}

export default Main;
