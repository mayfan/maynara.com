import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Contact from "../components/Contact";
import Layout from "../components/Layout";

export const IndexPageTemplate = ({ heading }) => (
  <div>
    <section
      className="section section--gradient"
      style={{
        backgroundColor: "#194239"
      }}
    >
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="content header">
              <Contact />
              <h1 className="is-size-3-mobile is-size-2-tablet is-size-1-widescreen">
                {heading}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array
  })
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
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
        portfolio {
          blurbs {
            title
            column1
            column2
            column3
          }
        }
      }
    }
  }
`;
