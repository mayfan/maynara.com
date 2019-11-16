import React from "react";
import PropTypes from "prop-types";
import { BlogPostTemplate } from "../../templates/blog-post";

const BlogPostPreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS();

  if (data) {
    return (
      <BlogPostTemplate
        content={data.body || ""}
        description={data.description || ""}
        title={data.title}
        row={data.row || {}}
      />
    );
  } else {
    return <div>Loading...</div>;
  }
};

BlogPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  getAsset: PropTypes.func
};

export default BlogPostPreview;
