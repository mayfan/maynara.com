import React from "react";
import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";

const Rows = ({ rows }) => {
  return (
    <div>
      {rows.map(({ backgroundColor, column }) => (
        <section className="section" style={{ backgroundColor }}>
          <div className="container content" key={column}>
            <div className="columns">
              {column.map(({ content }) => (
                <div className="column" key={content}>
                  <ReactMarkdown source={content} />
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

Rows.propTypes = {
  rows: PropTypes.array
};

export default Rows;
