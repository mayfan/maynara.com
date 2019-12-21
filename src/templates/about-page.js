import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

import Content, { HTMLContent } from "../components/Content";
import Rows from "../components/Rows";

export const AboutPageTemplate = ({
  title,
  content,
  contentComponent,
  row
}) => {
  const PageContent = contentComponent || Content;

  return (
    <div>
      <section
        className="section section--gradient"
        style={{
          backgroundColor: "#194239"
        }}
      >
        <div className="container">
          <div className="columns">
            <div className="column is-9">
              <div className="content header">
                <h1 className="is-size-3-mobile is-size-2-tablet is-size-1-widescreen">
                  {title}
                </h1>
                {PageContent}
              </div>
            </div>
          </div>
        </div>
      </section>
      {row && row.length ? <Rows rows={row} /> : null}
    </div>
  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  row: PropTypes.array
};

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        row={post.frontmatter.row}
      />
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
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
