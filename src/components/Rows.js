import React from "react";
import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown/with-html";

function Image(props) {
  return (
    <p className="center-image">
      <img {...props} />
    </p>
  );
}

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
                      <ReactMarkdown
                        escapeHtml={false}
                        source={content}
                        renderers={{ image: Image }}
                      />
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
