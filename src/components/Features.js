import React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

const FeatureGrid = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map(item => (
      <section key={item.text} className="columns">
        <div className="column is-4">
          <div
            style={{
              width: "100%",
              display: "inline-block"
            }}
          >
            <PreviewCompatibleImage imageInfo={item} />
          </div>
        </div>
        <div
          className="column is-8"
          style={{ display: "flex", alignItems: "center" }}
        >
          <p>{item.text}</p>
        </div>
      </section>
    ))}
  </div>
);

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string
    })
  )
};

export default FeatureGrid;
