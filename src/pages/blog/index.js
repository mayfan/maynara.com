import React from "react";

import Layout from "../../components/Layout";
import BlogRoll from "../../components/BlogRoll";

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
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
                    My Projects
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
