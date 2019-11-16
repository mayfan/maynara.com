import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { graphql } from "gatsby";

import { HTMLContent } from "../components/Content";
import Layout from "../components/Layout";
import Rows from "../components/Rows";

export const BlogPostTemplate = ({
  content,
  description,
  title,
  helmet,
  row
}) => {
  return (
    <div>
      <section className="section">
        {helmet || ""}
        <div className="container content">
          <div className="columns">
            <div className="column is-12">
              <h1 className="title is-size-1 has-text-weight-bold">{title}</h1>
              <p className="title is-size-3 has-text-weight-bold">
                {description ? description : null}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container content">
          <div className="columns">
            <div className="column is-12">
              {content ? <HTMLContent content={content} /> : null}
            </div>
          </div>
        </div>
      </section>
      {row && row.length ? <Rows rows={row} /> : null}
    </div>
  );
};

BlogPostTemplate.propTypes = {
  content: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
  row: PropTypes.array
};

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <BlogPostTemplate
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        content={post.html}
        title={post.frontmatter.title}
        c={post.frontmatter.title}
        row={post.frontmatter.row}
      />
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        description
        row {
          title
          column {
            content
          }
          backgroundColor
        }
      }
    }
  }
`;
