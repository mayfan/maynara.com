import React from "react";
import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";

const Portfolio = ({ items }) => (
  <section className="is-paddingless">
    {items.map(
      ({ backgroundColor, column1, column2, column3, title, link }) => (
        <section className="section" style={{ backgroundColor }}>
          <div className="container portfolio-item content">
            <div className="columns">
              <div className="column is-10">
                <h1 key={title}>{title}</h1>
              </div>
            </div>
            <div className="columns">
              <div className="column is-4">
                <ReactMarkdown source={column1} />
              </div>
              <div className="column is-4">
                <ReactMarkdown source={column2} />
              </div>
              <div className="column is-4">
                <ReactMarkdown source={column3} />
                <a href={link}>Read more</a>
              </div>
            </div>
          </div>
        </section>
      )
    )}
  </section>
);

Portfolio.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      backgroundColor: PropTypes.string,
      title: PropTypes.string,
      column1: PropTypes.node,
      column2: PropTypes.node,
      column3: PropTypes.node,
      link: PropTypes.string
    })
  )
};

export default Portfolio;
