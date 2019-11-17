import React from "react";
import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";

const Rows = ({ rows }) => {
  return (
    <div>
      {rows.map(({ backgroundColor, column, title }) => (
        <section className="section" style={{ backgroundColor }}>
          <div className="container content" key={column}>
            {title && (
              <div className="columns">
                <div className="column">
                  <h1>{title}</h1>
                </div>
              </div>
            )}
            <div className="columns">
              {column && column.length
                ? column.map(({ content }) => (
                    <div className="column content" key={content}>
                      <ReactMarkdown source={content} />
                    </div>
                  ))
                : null}
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
