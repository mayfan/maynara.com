import React from "react";

import BlogRoll from "../../components/BlogRoll";
import Header from "../../components/Header";
import Layout from "../../components/Layout";

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Header title={"My Projects"} />
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
