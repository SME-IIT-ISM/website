import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import GEImages1 from "./images/smeevent1.jpg";
import GEImages2 from "./images/smeevent2.jpg";
import GEImages3 from "./images/smeevent3.jpg";
import GEImages4 from "./images/smeevent4.jpg";
import GEImages5 from "./images/smeevent5.jpg";
import GEImages6 from "./images/smeevent6.jpg";
import GEImages7 from "./images/smeevent7.jpg";
import GEImages8 from "./images/smeevent8.jpg";
import GEImages9 from "./images/smeevent9.jpg";
import GEImages10 from "./images/smeevent10.png";
import GEImages11 from "./images/smeevent11.png";
import GEImages12 from "./images/POSTER.png";
import EventCard from "./EventCard";
import EventPage from "./EventPage";
import Fade from "react-awesome-reveal";

const tabs = ["Upcoming", "Past"];

const eventData = [

  {
    id: 0,
    src: GEImages1,
    title: "Poster Competition",
    head: "A virtual “WOMINE” event was organized on 10 April 2020 by SME IIT(ISM) Student Chapter for all the budding female engineers, who look up to a career in the mining field. The event witnessed the huge participation of girls from different institutions all over India. As event speakers, we invited some phenomenal women with extensive knowledge and years of experience in the Mining and Mineral Industry.",
    struct: [
      "Few things in life affects us as deeply and deeply as drug abuse by altering our perceptions and relationships to every aspect of life. It is a devastating state that has been running a riot for decade and there is an urgent need to put an end to it.",
      "The SME IIT (ISM) Dhanbad student chapter is glad to announce a poster making competition on this particular topic. The door we opened is a door to unlimited possibilities and expectation to all those parents whose kid has become addicted. By your poster you are free to express, influence and crush down fears and worries.",
      "Deadline for submission 17th june ( 11:59 pm).",
      "Prize of worth Rs 1000 (1st prize Rs 500, 2nd prize Rs 300, 3rd prize Rs 200).",
      "Top 10 winners will be awarded a ranked certificate and the participating candidates will be awarded a participation certificate.",
    ],
    date: "15 June 2021-17 June 2021",
    time: "24*7",
    contact1: "Sumit Kumar Mudi-8210987906",
    contact2: "Abhaya Adri-6206688440",
    tab: "Past",
  },
  {
    id: 1,
    src: GEImages2,
    title: "UPSC Career Insight",
    head: "SME IIT(ISM) Student Chapter, in collaboration with Udaan(@udaan.iitism ), the career club of IIT(ISM) Dhanbad is organizing an event on the most prestigious examination of the country for entry into the elite civil services, UPSC. The guest speaker for the event is Mr. Jay Shivani (@jayshivani ) - IAS of batch 2019, AIR-81 in UPSC CSE 2018, currently posted as Assistant Commissioner at Dibrugarh, Assam.",
    struct: [
      "The most interesting part is that he also happens to be an alumnus of our college- Class of 2017 from the department of Computer Science and Engineering. The event is bound to happen on 27th May at 4 P.M.",
      "We advise you to mark your calendars and be there at the event, as it is going to be an unceasing learning experience for everyone who wishes to know about the if's and but's of the entire selection process, as well as those who aspire to clear this examination with flying colour",
      "We will provide the link for the meeting in due course of time.",
    ],
    date: "27 May 2021",
    time: "4 pm",
    contact1: "Jai Anand-7482049368",
    contact2: "Saurabh tiwari-9326105716",
    tab: "Past",
  },
  {
    id: 2,
    src: GEImages3,
    title: "Intern Talks",
    head: "SME IIT(ISM) DHANBAD is going to organize an INTERN TALK session on 16th May. Seniors nailing their internship season with commendable achievements, will share their experiences and resolve all your doubts.",
    struct: [
      "Learning is not attained by chance, it must be sought for with ardor and attended to with diligence.",
      "The internship season is imminent, but are you still struggling over its procedure, prospects and curriculum? Well, here your saviour arrives! SME IIT(ISM) DHANBAD is going to organize an INTERN TALK session on 16th May. Seniors nailing their internship season with commendable achievements, will share their experiences and resolve all your doubts.",
      "Don't miss the chance of witnessing this enthralling evening!",
    ],
    date: "16 May 2021",
    time: "6 pm",
    contact1: "Abhaya Adri-6206688440",
    contact2: "Sudeshna Kundu-7595033047",
    tab: "Past",
  },
  {
    id: 3,
    src: GEImages4,
    title: "Placement Talks",
    head: "The placement season is near, and everyone will obviously be having a hundred questions eating their head. Well, SME IIT(ISM) Student Chapter is here to relieve you from this bewilderment. Seniors nailing their placement season with commendable achievements, will share their experiences and resolve all your doubts.",
    struct: [
      "Learning is not a destination, it's a journey, and we are here to make your success journey uncomplicated and amusing.",
      "The placement season is near, and everyone will obviously be having a hundred questions eating their head. Well, SME IIT(ISM) Student Chapter is here to relieve you from this bewilderment. ",
      "Seniors nailing their placement season with commendable achievements, will share their experiences and resolve all your doubts.Don't miss the chance of witnessing this enthralling evening!",
    ],
    date: "8 May 2021",
    time: "6 pm",
    contact1: "Sumit Kumar Mudi-8210987906",
    contact2: "Sudeshna Kundu-7595033047",
    tab: "Past",
  },
  {
    id: 4,
    src: GEImages5,
    title: "Womine",
    head: "SME IIT(ISM) Student Chapter brings to you an exceptional event, WOMINE, where established and successful women speakers from earth science branches would share their experiences and success stories on a virtual platform.",
    struct: [
      "This is a call to all those phenomenal strong girls over there , who had the courage to choose a career in an unpopular and male dominated field.",
      "SME IIT(ISM) Student Chapter brings to you an exceptional event, WOMINE, where established and successful women speakers from earth science branches would share their experiences and success stories on a virtual platform.",
      "So, mark the date and don't miss the chance!",
    ],
    date: "10 April 2021",
    time: " ",
    contact1: "Aryan Raj Singh-9460655228",
    contact2: "Anjali-9608328431",
    tab: "Past",
  },
  {
    id: 5,
    src: GEImages6,
    title: "Virtual Placements",
    head: "SME IIT(ISM) Student Chapter brings you an extraordinary opportunity, where you will be exposed to the real virtual placement process. So put on your winning hats and tune in to the placement battle this weekend!",
    struct: [
      "Curious about the on campus placement process?! Well, here comes a stop to all your doubts and confusions.",
      "SME IIT(ISM) Student Chapter brings you an extraordinary opportunity, where you will be exposed to the real virtual placement process. So put on your winning hats and tune in to the placement battle this weekend!",
      "The top 3 champions would be rewarded with cash prizes worth 2k!",
      "Date of the event: 3-4 April, 2021",
      "Eligibility: For all 1st year students from Earth Science branches (Mining, Mining Machinery, Petroleum, Environmental, Applied Geology, Applied Geophysics, Mineral engineering)",
    ],
    date: "3 & 4 April 2021",
    time: "11 am",
    contact1: "Mehul Raj-9576046151",
    contact2: "Jai Anand-7482049368",
    tab: "Past",
  },
  {
    id: 6,
    src: GEImages7,
    title: "Ingenium",
    head: "Bored in this quarantine? Want something to stimulate your brain? Look no further for SME, IIT(ISM) Dhanbad Chapter is here with a refreshing quiz for you to have some fun, as well as learn a thing or two about this great nation of ours.",
    struct: [
      "Bored in this quarantine? Want something to stimulate your brain? Look no further for SME, IIT(ISM) Dhanbad Chapter is here with a refreshing quiz for you to have some fun, as well as learn a thing or two about this great nation of ours.",
      "Just open the SME-IIT(ISM) Facebook page at https://www.facebook.com/smeiitism  , and answer the questions asked in the posts by leaving a comment below. The event shall take place today, the 15th of August. And the theme is independence day, general and mining.",
      "The quiz will take place 10:00 am to 10:00 pm",
      "A question will be asked every 1 hour, and the scoring will be done on the basis of answers you leave in the comments.",
      "The points scheme is as follows:",
      "1st Comment = 10 points",
      "2nd Comment = 5 points",
      "3rd Comment = 3 points",
      "All other comments = 1 point",
      "The overall winner will be declared considering points from all the questions. So stay tuned for all of them.",
      "All winners get E-certificates as well as bragging rights!",
      "So what are you waiting for? Brush up on your patriotic knowledge and let the quiz begin!",
    ],
    date: " ",
    time: " ",
    contact1: "Jai Anand-7482049368",
    contact2: "Mehul Raj-9576046151",
    tab: "Past",
  },
  {
    id: 7,
    src: GEImages8,
    title: "Online CV Making Competition",
    head: "Resumes are the heart and soul of what you do in your academic years. They are what makes you or breaks you. SME welcomes you to improve your resume making skills with the CV making competition, organised keeping in mind the essential requirement of the students.",
    struct: [
      "In today’s competitive world, knowing the art of creating a good CV is must. Why not get creative and go the extra mile to make sure employers get an instant grasp of your talents.",
      "SME IIT-ISM student chapter brings the CV making competition for all the 2nd years at IIT(ISM) Dhanbad. Enter this competition to build a good CV, get recognized and mentored.",
      "Send your entries at: khanan.sme@gmail.com",
      "Deadline: 9 PM, 3 Feb 2021",
    ],
    date: "Latest by 4th March",
    time: "4 pm",
    contact1: "Jai Anand-7482049368",
    contact2: "Sudeshna Kundu-7595033047",
    tab: "Past",
  },
  {
    id: 8,
    src: GEImages9,
    title: "Breaking Bad",
    head: "This 25th of February, take part in a quiz related to GENERAL KNOWLEDGE AND MINING, and get a chance to prove just how much of an expert you are and win exciting prizes, goodies and certificates.",
    struct: [
      "How well do you know your field? This 25th of February, take part in a quiz related to GENERAL KNOWLEDGE AND MINING, and get a chance to prove just how much of an expert you are and win exciting prizes, goodies and certificates.",
      "Venue: Seminar Hall, ME Department",
      "Timing: 6:30 PM",
    ],
    date: "25 Feb 2021",
    time: "6:30pm",
    contact1: "Jai Anand-7482049368",
    contact2: "Anjali-9608328431",
    tab: "Past",
  },
  {
    id: 9,
    src: GEImages10,
    title: "Pitch 2 Heal",
    head: "A virtual “WOMINE” event was organized on 10 April 2020 by SME IIT(ISM) Student Chapter for all the budding female engineers, who look up to a career in the mining field. The event witnessed the huge participation of girls from different institutions all over India. As event speakers, we invited some phenomenal women with extensive knowledge and years of experience in the Mining and Mineral Industry.",
    struct: [
      "Few things in life affects us as deeply and deeply as drug abuse by altering our perceptions and relationships to every aspect of life. It is a devastating state that has been running a riot for decade and there is an urgent need to put an end to it.",
      "The SME IIT (ISM) Dhanbad student chapter is glad to announce a poster making competition on this particular topic. The door we opened is a door to unlimited possibilities and expectation to all those parents whose kid has become addicted. By your poster you are free to express, influence and crush down fears and worries.",
      "Deadline for submission 17th june ( 11:59 pm).",
      "Prize of worth Rs 1000 (1st prize Rs 500, 2nd prize Rs 300, 3rd prize Rs 200).",
      "Top 10 winners will be awarded a ranked certificate and the participating candidates will be awarded a participation certificate.",
    ],
    date: "15 June 2021-17 June 2021",
    time: "24*7",
    contact1: "Sumit Kumar Mudi-8210987906",
    contact2: "Abhaya Adri-6206688440",
    tab: "Past",
  },
  {
    id: 10,
    src: GEImages11,
    title: "AR VR in Mining",
    head: "Technology and innovation today has taken over every working sector. There is no field left untouched with the influence of technology and so even the mining industry follows suit. Lack of digitisation, lack of research and development for training, and incompatibility with market needs have been some of the challenges that the mining sector has been facing since decades. These difficulties however can be addressed today by using newer technology innovations such as Augmented Reality(AR) and Virtual Reality(VR). AR and VR combine the digital world with the real world. The goal of using AR and VR is to solve the problem of innovation as well as reduce the hazardous working conditions for human beings that would lead to a marked difference in productivity by making mining smarter than what it is today. To expand further upon the application of AR and VR in the mining industry and provide students with insights of the newer technological advancements, SME IIT (ISM) Student Chapter is organizing a demonstration on the same at Seminar hall, Mining Department So, do not miss this wonderful opportunity to attend the event and widen your scope of knowledge on newer innovations in the mining sector!!",
    struct: [
      "Few things in life affects us as deeply and deeply as drug abuse by altering our perceptions and relationships to every aspect of life. It is a devastating state that has been running a riot for decade and there is an urgent need to put an end to it.",
      "The SME IIT (ISM) Dhanbad student chapter is glad to announce a poster making competition on this particular topic. The door we opened is a door to unlimited possibilities and expectation to all those parents whose kid has become addicted. By your poster you are free to express, influence and crush down fears and worries.",
      "Deadline for submission 17th june ( 11:59 pm).",
      "Prize of worth Rs 1000 (1st prize Rs 500, 2nd prize Rs 300, 3rd prize Rs 200).",
      "Top 10 winners will be awarded a ranked certificate and the participating candidates will be awarded a participation certificate.",
    ],
    date: "15 June 2021-17 June 2021",
    time: "24*7",
    contact1: "Sumit Kumar Mudi-8210987906",
    contact2: "Abhaya Adri-6206688440",
    tab: "Past",
  },
  {
    id: 11,
    src: GEImages12,
    title: "Khanan'25",
    head: "Technology and innovation today has taken over every working sector. There is no field left untouched with the influence of technology and so even the mining industry follows suit. Lack of digitisation, lack of research and development for training, and incompatibility with market needs have been some of the challenges that the mining sector has been facing since decades. These difficulties however can be addressed today by using newer technology innovations such as Augmented Reality(AR) and Virtual Reality(VR). AR and VR combine the digital world with the real world. The goal of using AR and VR is to solve the problem of innovation as well as reduce the hazardous working conditions for human beings that would lead to a marked difference in productivity by making mining smarter than what it is today. To expand further upon the application of AR and VR in the mining industry and provide students with insights of the newer technological advancements, SME IIT (ISM) Student Chapter is organizing a demonstration on the same at Seminar hall, Mining Department So, do not miss this wonderful opportunity to attend the event and widen your scope of knowledge on newer innovations in the mining sector!!",
    struct: [
      "Khanan'25 promises to be a platform for innovation, learning, and collaboration.",
      "Participants will experience workshops, discussions, and technical events over three days.",
    ],
    date: "25-26 october 2021",
    
    contact1: "8935878941",

    tab: "Upcoming",
  },
  
];

const HomePage = () => {
  const [activeTab, setActiveTab] = useState(0);

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  useEffect(() => {
    document.title = "General Events - SME IIT ISM";
  }, []);

  return (
    <div>
      <div className="ge-heading-bg mt-10 d-flex align-items-center justify-content-center">
        <h1 className="page-heading text-center py-3 text-uppercase">
          SME General Events
        </h1>
      </div>
      <Container className="my-5">
        <Nav tabs className="justify-content-center">
          {tabs.map((item, index) => {
            return (
              <NavItem key={index} className="p-1">
                <NavLink
                  className={`tabs-navi ${activeTab === index ? "active" : ""}`}
                  onClick={() => {
                    toggle(index);
                  }}
                >
                  {item}
                </NavLink>
              </NavItem>
            );
          })}
        </Nav>
        <TabContent activeTab={activeTab}>
          {tabs.map((it, id) => {
            return (
              <TabPane key={id} tabId={id}>
                <Row className="pt-4">
                  {eventData
                    .filter((item) => item.tab === tabs[id])
                    .map((item, index) => {
                      return (
                        <Col key={index} className="my-4" xs="12" lg="6">
                          <Fade
                            timeout={500}
                            right={index & 1 ? true : false}
                            left={index & 1 ? false : true}
                          >
                            <EventCard
                              head={item.head}
                              title={item.title}
                              src={item.src}
                              id={item.id}
                            />
                          </Fade>
                        </Col>
                      );
                    })}
                </Row>
              </TabPane>
            );
          })}
        </TabContent>
      </Container>
    </div>
  );
};

const SMEGeneralEvents = (props) => {
  return (
    <Router>
      <Route exact path="/events/general" component={HomePage} />
      <Route
        path={`/events/general/:eventId`}
        component={(props) => (
          <EventPage
            eventData={eventData[parseInt(props.match.params.eventId)]}
          />
        )}
      />
    </Router>
  );
};

export default SMEGeneralEvents;
