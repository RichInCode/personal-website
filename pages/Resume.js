import React from "react";
import Fade from "react-reveal/Fade";
import Navbar from "../components/navbar/Navbar";
import Heading from "../components/common/heading/Heading";
import Head from "next/head";
import SocialIcons from "../components/common/icons/SocialIcons";
import Headroom from "react-headroom";
import { Element } from "react-scroll";
import { Accordion, AccordionItem } from 'react-sanfona'
//import "./react-sanfona.scss";

class Resume extends React.Component {
  constructor(props) {
    super();
 
    this.state = {
      activeItems: [0]
    };
 
    this.toggleActive = this.toggleActive.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
 
  toggleActive(index) {
    const position = this.state.activeItems.indexOf(index);

    if (position !== -1) {
      this.setState({ activeItems: [] });
    } else {
      this.setState({ activeItems: [index] });
    }
  }

  handleChange({ activeItems }) {
    this.setState({ activeItems });
  }


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
          			<meta property="og:url" content="https://www.richardpetti.com" />
          			<meta
            			property="og:image"
            			content="../static/images/216577_203323719700899_6479271_n.jpg"
          			/>
        		</Head>
        		<Element name="FullCV">
          			<section className="CV">
            			<div className="text-center demo-container">
              				<Heading>Full CV</Heading>
                      <h2>Work History</h2>
              				<Accordion onChange={this.handleChange}>
                				<AccordionItem key="0" title="Principal, Data Engineer @CA Technologies">
                  					<div>
                    					Data Engineer on the business platform team.
                              Our team was responsible for building products and services to improve sales and business processes.
                              The tools were self-service oriented, empowering the employees with powerful custom software.
                              Software tools were developed using Agile methodology with a full team including backend engineers, front end engineers, QA team, and product and delivery managers.
                              Example projects that I have worked on include:

                  					</div>
                				</AccordionItem>
                				<AccordionItem title="Data Scientist @Rodale">
                  					<div>
                    					content
                  					</div>
                				</AccordionItem>
                        <AccordionItem title="Research Associate in Physics @Brookhaven National Lab">
                            <div>
                              Did science and shit.
                            </div>
                        </AccordionItem>
                        <AccordionItem title="Freelance Physics and Math Tutor">
                            <div>
                              Did science and shit.
                            </div>
                        </AccordionItem>
                        <AccordionItem title="Research Associate in Physics @Stony Brook University">
                            <div>
                              Sciency shit.
                            </div>
                        </AccordionItem>
                        <AccordionItem title="Research Assistant in Physics @Stony Brook University">
                            <div>
                              Did science and shit.
                            </div>
                        </AccordionItem>
              				</Accordion>
                      <h2>Education History</h2>
                      <Accordion onChange={this.handleChange}>
                        <AccordionItem key="0" title="Fellow at The Data Incubator">
                            <div>
                              data punk.
                            </div>
                        </AccordionItem>
                        <AccordionItem title="PhD in Physics from Stony Brook Univeristy">
                            <div>
                              content
                            </div>
                        </AccordionItem>
                        <AccordionItem title="BS in Physics and Mathematics from SUNY Brockport">
                            <div>
                              Did science and shit.
                            </div>
                        </AccordionItem>
                      </Accordion>
            			</div>
          			</section>
        		</Element>
      		</div>
      	);
  	}
}

export default Resume;