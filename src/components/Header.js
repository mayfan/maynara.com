import React from "react";

import Contact from "./Contact";

const Header = ({ title }) => (
  <section
    className="section section--gradient"
    style={{
      backgroundColor: "#194239"
    }}
  >
    <div className="container">
      <div className="columns">
        <div className="column is-3 is-offset-9 content">
          <Contact />
        </div>
      </div>

      <div className="columns">
        <div className="column is-9">
          <div className="content header">
            <h1 className="is-size-3-mobile is-size-2-tablet is-size-1-widescreen">
              {title}
            </h1>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Header;
