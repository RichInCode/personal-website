import React from "react";
import Fade from "react-reveal/Fade";
import Navbar from "../components/navbar/Navbar";
import Heading from "../components/common/heading/Heading";
import PortfolioItem from "../components/common/cards/PortfolioItem";
import Footer from "../components/footer/Footer";
import { Element } from "react-scroll";
import Head from "next/head";
import Tag from "../components/common/cards/Tag";
import { skills } from "../config";
import SocialIcons from "../components/common/icons/SocialIcons";
import Headroom from "react-headroom";
import "./Home.scss";

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <Head>
          <title>Richard Petti - Data Scientist, Data Engineer, and Physicst</title>
          <meta property="og:title" content="Richard Petti - Data Scientist, Data Engineer, and Physicst" />
          <meta
            property="og:description"
            content="Data Scientist and Engineer from Long Island, New York with a strong focus on modern frontend libraries, frameworks, and tooling."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.loucaponi.com" />
          <meta
            property="og:image"
            content="../static/images/216577_203323719700899_6479271_n.jpg"
          />
        </Head>
        <section className="Header">
          <div className="dark-layer">
            <Headroom>
              <div className="dark-layer">
                <Navbar />
              </div>
            </Headroom>
            <div className="callout center-all">
              <Fade bottom>
                <div className="my-name">Richard Petti</div>
              </Fade>{" "}
              <span className="spacer" />
              <div className="my-title">Data Scientist, Data Engineer, and Physicst</div>
              <div className="my-description">
                Data Scientist from Long Island, New York with a strong background in Engineering and supporting application services in the cloud.
              </div>
              <div className="my-resume">
                <a
                  href="/static/files/data_scientist_resume_petti.pdf"
                  target="_blank"
                  className="button button-primary button-pill"
                >
                  View Resume
                </a>
                <div className="icons-container">
                  <SocialIcons />
                </div>
              </div>
            </div>
          </div>
        </section>

        <Element name="AboutMe">
          <section className="AboutMe">
            <div className="container">
              <div className="row">
                <div className="col-sm-12 col-lg-3">
                  <div className="text-center">
                    <Heading>About Me</Heading>
                  </div>
                </div>

                <div className="col-sm-12 col-lg-9">
                  <div className="text-center">
                    I am a Data Scientist with a strong engineering background
                    working with modern cloud architecture and tools.  I have built upon
                    my experiences working as a Physicist and Researcher working as
                    an Experimentalist, analyzing big data collected from nuclear colliders
                    as well as worked on designing the next generation of collider experiments,
                    by entering industry.
                    I have experience working as a Data Scientist at a publishing company {" "}
                    <span style={{ color: "dodgerblue" }}>
                    Rodale
                    </span>{" "}, focusing
                    on determining the main revenue drivers for the digital side of the business
                    (advertising, web products, e-commerce).
                    I also have experience working as an Engineer on the business platform team at 
                    CA Technologies, working to make scalable, highly available, intelligent, 
                    self-service web applications supporting business operations.
                    My strenghts include software development in Python, data wrangling, applying 
                    machine learning, and working with graph databases (specifically Neo4j).
                    Basically I just like to figure stuff out and good at doing so.
                    Flexible, agile, able to adapt and change.
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Element>

        <Element name="Skills">
          <section className="Skills">
            <div className="text-center">
              <Heading>Skills</Heading>
            </div>
            <div className="container">
              <div className="row">
                {skills.map(i => (
                  <Tag style={{ margin: "0 auto" }} key={i}>
                    {i}
                  </Tag>
                ))}
              </div>
            </div>
          </section>
        </Element>

        <Element name="CodeSamples">
          <section className="CodeSamples">
            <div className="text-center">
              <Heading>Projects</Heading>
            </div>
            <div className="container">
              <div className="row">
                <PortfolioItem
                  imageSrc={"/static/images/citibikeappscreen.PNG"}
                  title="Citi Bike Helper App"
                  description="This project was my Capstone project from my time at The Data Incubator.  It invovled created an applicition to puruse data from Citi Bike Sharing in NYC and included a model to predict ride demand in particular areas of the city."
                  tags={[
                    "Python",
                    "Flask",
                    "Heroku",
                    "Pandas",
                    "Scikit-learn"
                  ]}
                  demoLink="http://citibikehelper.herokuapp.com/"
                  githubLink="https://github.com/RichInCode/CitiBikeApp"
                />

                <PortfolioItem
                  inverted
                  imageSrc={"/static/images/my-website.png"}
                  title="My Personal Website"
                  description="This project was built using Next JS utilizing server-rendered React.  Planning on integrating a blog soon, so using Next with static site generation is a clear choice."
                  tags={[
                    "Next",
                    "React",
                    ,
                    "Bootstrap 4",
                    "Sass",
                    "Static Site Generation"
                  ]}
                  githubLink="https://github.com/ldcaponi/personal-website"
                />
              </div>
            </div>
          </section>
        </Element>

        <Element name="Contact">
          <section className="Contact">
            <h1 className="section-header">Get in Touch</h1>
            <div className="row">
              <div className="col-sm-2" />
              <div className="col-sm-8">
                <form
                  className="pure-form"
                  action="https://formspree.io/ldcaponi@gmail.com"
                  method="POST"
                >
                  <fieldset className="pure-group">
                    <label html-for="name">Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className="pure-input"
                    />
                    <label html-for="email">Email</label>
                    <input
                      id="email"
                      name="_replyto"
                      type="email"
                      className="pure-input"
                    />
                    <label html-for="message">Message</label>
                    <textarea
                      name="message"
                      id="message"
                      className="pure-input"
                      rows="7"
                    />
                  </fieldset>
                  <div className="form-button-container">
                    <input
                      className="button button-pill"
                      type="submit"
                      value="Send"
                    />
                  </div>
                </form>
              </div>
            </div>
          </section>
        </Element>

        <Footer />
      </div>
    );
  }
}

export default Home;
