import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Contact from "../components/Contact";
import Layout from "../components/Layout";
import Rows from "../components/Rows";

export const IndexPageTemplate = ({ heading, row }) => (
  <div>
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
                {heading}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Rows rows={row} />
  </div>
);

IndexPageTemplate.propTypes = {
  title: PropTypes.string,
  heading: PropTypes.string,
  row: PropTypes.array
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        title={frontmatter.title}
        heading={frontmatter.heading}
        row={frontmatter.row}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        heading
        row {
          column {
            content
          }
          backgroundColor
        }
      }
    }
  }
`;
