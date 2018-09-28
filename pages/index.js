import React from "react";
import Fade from "react-reveal/Fade";
import Navbar from "../components/navbar/Navbar";
import Heading from "../components/common/heading/Heading";
import PortfolioItem from "../components/common/cards/PortfolioItem";
import Footer from "../components/footer/Footer";
import { Element } from "react-scroll";
import Head from "next/head";
import Tag from "../components/common/cards/Tag";
import RedTag from "../components/common/cards/RedTag";
import { skills } from "../config";
import SocialIcons from "../components/common/icons/SocialIcons";
import WorkIcon from "../components/common/icons/WorkIcon";
import SchoolIcon from "../components/common/icons/SchoolIcon";
import StarIcon from "../components/common/icons/StarIcon";
import Headroom from "react-headroom";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import "./Home.scss";

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)

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
                    my experiences working as a Physicist and Researcher, analyzing big data collected from nuclear colliders
                    as well as worked on designing the next generation of collider experiments,
                    by entering industry.
                    I have experience working as a Data Scientist at a publishing company {" "}
                    <span style={{ color: "dodgerblue" }}>
                    Rodale
                    </span>, focusing
                    on determining the main revenue drivers for the digital side of the business
                    (advertising, web products, e-commerce).
                    I also have experience working as an Engineer on the business platform team at {" "}
                    <span style={{ color: "dodgerblue" }}>
                    CA Technologies
                    </span>, working to make scalable, highly available, intelligent, 
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

        <Element name="FullHistory">
          <section className="FullHistory">
            <div className="text-center">
              <Heading>Full History</Heading>
            </div>
            <div className="container">
              <VerticalTimeline>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  date="August 2017"
                  iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                  icon={<WorkIcon />}
                >
                  <Tag style={{ margin: "0 auto" }} key={'Azure'}>
                  Azure
                  </Tag>
                  <Tag style={{ margin: "0 auto" }} key={'Python'}>
                  Python
                  </Tag>
                  <Tag style={{ margin: "0 auto" }} key={'Flask'}>
                  Flask
                  </Tag>
                  <Tag style={{ margin: "0 auto" }} key={'Neo4j'}>
                  Neo4j
                  </Tag>
                  <Tag style={{ margin: "0 auto" }} key={'Redis'}>
                  Redis
                  </Tag>
                  <Tag style={{ margin: "0 auto" }} key={'Nginx'}>
                  Nginx
                  </Tag>
                  <Tag style={{ margin: "0 auto" }} key={'Git'}>
                  Git
                  </Tag>
                  <h3 className="vertical-timeline-element-title">Principal, Data Engineer</h3>
                  <h4 className="vertical-timeline-element-subtitle">CA Technologies</h4>
                  <hr></hr>
                  <p>
                    Backend engineer on the business platform team designing, developing, maintaining and debugging backend services supporting the web applications built for the internal sales, marketing, and executive teams.  Main projects include:
                    <ul>
                      <li>A contact targeting system helping sales people create targeted lists for different business focuses (Renewals, Prospecting, Cross-sell).  Includes a search component using <span style={{ color: "dodgerblue" }}>
                    Azure Search
                    </span> and a recommendation model I built using <span style={{ color: "dodgerblue" }}>
                    K-means clustering
                    </span> for cross-selling products.</li>
                      <li>A sales and marketing campaign planning tool giving structure and record keeping for sales and marketing strategy efforts.  Includes integration to the contact targeting system and a manager's dashboard to divide up contact lists and email to individual sales reps.</li>
                      <li>A data catalog tool with an ontological layer.</li>
                    </ul>
                  </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  date="March 2017"
                  iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                  icon={<WorkIcon />}
                >
                  <Tag style={{ margin: "0 auto" }} key={'AWS'}>
                  AWS
                  </Tag>
                  <Tag style={{ margin: "0 auto" }} key={'Python'}>
                  Python
                  </Tag>
                  <Tag style={{ margin: "0 auto" }} key={'Django'}>
                  Django
                  </Tag>
                  <Tag style={{ margin: "0 auto" }} key={'R'}>
                  R
                  </Tag>
                  <Tag style={{ margin: "0 auto" }} key={'BigQuery'}>
                  BigQuery
                  </Tag>
                  <Tag style={{ margin: "0 auto" }} key={'GoogleAnalytics'}>
                  GoogleAnalytics
                  </Tag>
                  <Tag style={{ margin: "0 auto" }} key={'Git'}>
                   Git
                  </Tag>
                  <h3 className="vertical-timeline-element-title">Data Scientist</h3>
                  <h4 className="vertical-timeline-element-subtitle">Rodale</h4>
                  <hr></hr>
                  <p>
                    Data Scientist on the Data Science and Growth team, focused on driving investigations to determine the specific content that are the strongest revenue drivers.  Responsibilities and projects included:
                    <ul>
                      <li>Analysis applying <span style={{ color: "dodgerblue" }}>
                    NLP
                    </span> methods segmenting articles into topics, indentifying most engaging and viewed content.</li>
                      <li>Work with various teams for <span style={{ color: "dodgerblue" }}>
                    ad-hoc reporting
                    </span> reporting and analyses on data sourced from <span style={{ color: "dodgerblue" }}>
                    Google Analytics
                    </span>, <span style={{ color: "dodgerblue" }}>
                    Chartbeat
                    </span>, <span style={{ color: "dodgerblue" }}>
                    DFP
                    </span>.</li>
                      <li>Automate various reports send out via various methods such as an online dashboard, emailed Excel files, Google Sheet updates, or Dropbox uploads.</li>
                      <li>Manage A/B testing on product websites using <span style={{ color: "dodgerblue" }}>
                    Google Optimize
                    </span>.</li>
                      <li>Set up web tracking tags using <span style={{ color: "dodgerblue" }}>
                    Google Tag Manager
                    </span>, integrating into Google Analytics.</li>
                    </ul>
                  </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--education"
                  date="March 2016"
                  iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                  icon={<SchoolIcon />}
                >
                  <RedTag style={{ margin: "0 auto" }} key={'Heroku'}>
                  Heroku
                  </RedTag>
                  <RedTag style={{ margin: "0 auto" }} key={'Python'}>
                  Python
                  </RedTag>
                  <RedTag style={{ margin: "0 auto" }} key={'Flask'}>
                  Flask
                  </RedTag>
                  <RedTag style={{ margin: "0 auto" }} key={'scikit-learn'}>
                  scikit-learn
                  </RedTag>
                  <RedTag style={{ margin: "0 auto" }} key={'Spark'}>
                  Spark
                  </RedTag>
                  <h3 className="vertical-timeline-element-title">Data Science Fellowship</h3>
                  <h4 className="vertical-timeline-element-subtitle">The Data Incubator</h4>
                  <hr></hr>
                  <p>
                    Graduate of the Data Science bootcamp <a href="https://www.thedataincubator.com/">The Data Incubator</a>, an intensive program designed to give additional training to academics in technical fields with advanced degrees to help enter industry.  Focus was on hands on projects that included:
                    <ul>
                      <li>Web scraping project to extract individual names from picture captions to build a social network, using Python, BeautifulSoup, NetworkX, regex.</li>
                      <li>Analysis of Stack Overflow data to identify "veteran" users based on early activity history, using Spark and Scala.</li>
                      <li>Applying machine learning techniques to predict restaurant ratings based on rating text.</li>
                      <li>Capstone Project: CitiBike Helper App.  Build a web application around CitiBike bike sharing data in NYC.  Includes a model to predict the number of expected riders in a given area of the city based on weather condition, a live feed to show nearby stations and number of free bikes and open spots.</li>
                    </ul>
                  </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  date="August 2014"
                  iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                  icon={<WorkIcon />}
                >
                  <Tag style={{ margin: "0 auto" }} key={'Python'}>
                  Python
                  </Tag>
                  <Tag style={{ margin: "0 auto" }} key={'C'}>
                  C++
                  </Tag>
                  <Tag style={{ margin: "0 auto" }} key={'ROOT'}>
                  ROOT
                  </Tag>
                  <Tag style={{ margin: "0 auto" }} key={'GEANT'}>
                  GEANT
                  </Tag>
                  <Tag style={{ margin: "0 auto" }} key={'Condor'}>
                  Condor
                  </Tag>
                  <Tag style={{ margin: "0 auto" }} key={'SVN'}>
                  CVS
                  </Tag>
                  <Tag style={{ margin: "0 auto" }} key={'BASH'}>
                  BASH
                  </Tag>
                  <Tag style={{ margin: "0 auto" }} key={'Doxygen'}>
                  Doxygen
                  </Tag>
                  <h3 className="vertical-timeline-element-title">Research Associate/Physicist</h3>
                  <h4 className="vertical-timeline-element-subtitle">Brookhaven National Lab</h4>
                  <hr></hr>
                  <p>
                    Physicst and research scientist designing the next generation of experiments planned at the laboratory.
                  </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  date="December 2013"
                  iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                  icon={<WorkIcon />}
                >
                  <Tag style={{ margin: "0 auto" }} key={'C'}>
                  C++
                  </Tag>
                  <Tag style={{ margin: "0 auto" }} key={'ROOT'}>
                  ROOT
                  </Tag>
                  <Tag style={{ margin: "0 auto" }} key={'GEANT'}>
                  GEANT
                  </Tag>
                  <Tag style={{ margin: "0 auto" }} key={'Condor'}>
                  Condor
                  </Tag>
                  <Tag style={{ margin: "0 auto" }} key={'CVS'}>
                  CVS
                  </Tag>
                  <Tag style={{ margin: "0 auto" }} key={'BASH'}>
                  BASH
                  </Tag>
                  <h3 className="vertical-timeline-element-title">Research Associate/Physicist</h3>
                  <h4 className="vertical-timeline-element-subtitle">Stony Brook University</h4>
                  <hr></hr>
                  <p>
                    Physicist and researcher doing data analysis using data collected from the PHENIX experiment at Brookhaven National Lab.
                  </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--education"
                  date="December 2013"
                  iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                  icon={<SchoolIcon />}
                >
                  <h3 className="vertical-timeline-element-title">PhD in Physics</h3>
                  <h4 className="vertical-timeline-element-subtitle">Stony Brook University</h4>
                  <hr></hr>
                  <p>
                    PhD in the field of nuclear physics, doing big data analysis on data collected by the PHENIX experiment located at Brookhaven National Lab.
                  </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  date="June 2006"
                  iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                  icon={<WorkIcon />}
                >
                  <h3 className="vertical-timeline-element-title">Research Assistant/Physicist</h3>
                  <h4 className="vertical-timeline-element-subtitle">Stony Brook University</h4>
                  <hr></hr>
                  <p>
                    Physicist and researcher doing data analysis using data collected from the PHENIX experiment at Brookhaven National Lab.
                  </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--education"
                  date="May 2005"
                  iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                  icon={<SchoolIcon />}
                >
                  <h3 className="vertical-timeline-element-title">BS in Physics and Mathematics</h3>
                  <h4 className="vertical-timeline-element-subtitle">Stony Brook University</h4>
                  <hr></hr>
                  <p>
                    
                  </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                  icon={<StarIcon />}
                />
              </VerticalTimeline>
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
                  imageSrc={"/static/images/personal_finance_app.PNG"}
                  title="Personal Finance Tool"
                  description="This was just a fun side project to help build a tool for my family to use to keep track of personal expenses."
                  tags={[
                    "D3",
                    "HTML",
                    "PHP",
                    "MySQL",
                    "WAMP server"
                  ]}
                  githubLink="https://github.com/RichInCode/personalFinanceTool"
                />
                <PortfolioItem
                  imageSrc={"/static/images/erhic_design.PNG"}
                  title="Integrating the Design of Detectors and Collider Interaction Region for an Electron-Ion Collider"
                  description="This is the main project I worked on as a post-doc at Brookhaven National Lab under a grant by the US DOE.  The scope was to design critical detector components "
                  tags={[
                    "C++",
                    "Python",
                    "EicROOT",
                    "Condor",
                    "GEANT",
                    "Monte-carlo simulations"
                  ]}
                />
                <PortfolioItem
                  imageSrc={"/static/images/r_gamma_each_cent_final.PNG"}
                  title="Direct Photons as a Probe of Heavy Ion Collisions"
                  description="This project was the crux of my PhD dissertation, where I made a unique contribution to the scientific body of information on the Quark Gluon Plasma.  I developed a novel photon identification technique which allowed first time access to the energy range measured.  The technique I pioneered was applied to many other data sets by students and researchers following my lead."
                  tags={[
                    "C++",
                    "ROOT",
                    "Condor",
                    "GEANT",
                    "Monte-carlo simulations",
                    "Fourier analysis"
                  ]}
                  thesisLink="/static/files/Petti_Richard-thesis.pdf"
                  githubLink="https://github.com/RichInCode/phenix_code"
                  presentationLink="https://indico.cern.ch/event/355454/contributions/838702/attachments/1161875/1673201/petti_QM15_thermalPhotons_v2.pdf"
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
                  action="https://formspree.io/richard.petti@gmail.com"
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
