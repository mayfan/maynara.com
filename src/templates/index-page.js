import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Contact from "../components/Contact";
import Header from "../components/Header";
import Layout from "../components/Layout";
import Rows from "../components/Rows";

export const IndexPageTemplate = ({ heading, row }) => (
  <div>
    <Header title={heading} />
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
