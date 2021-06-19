import React from "react";
import { Container, Row, Col } from "reactstrap";
import K1 from "./k-event-images/datagenix.jpg";
import K2 from "./k-event-images/gamicon.jpg";
import K3 from "./k-event-images/ideate.jpg";
import K4 from "./k-event-images/khanan mafia.jpg";
import K5 from "./k-event-images/minnovare.jpg";
import K6 from "./k-event-images/nirvana.jpg";
import K7 from "./k-event-images/placement fever.jpg";
import K8 from "./k-event-images/quizzine.jpg";
import K9 from "./k-event-images/workshop.jpg";
import KhananCard from "./KhananCard";
import Zoom from "react-reveal/Zoom";

const events = [
  {
    title: "Datagenix",
    src: K1,
    struct: [
      "Computers are able to see, hear and learn. Welcome to the future.” With the advent of technology, the forefront of human evolution is Artificial Intelligence, and Machine Learning. We are gradually seeing the rapid use of AI in all industries. The mining industry is no exception.",
      "The Khanan '20 team presents before you 'Datagenix', a Machine Learning Hackathon, where participants will be given a problem statement, and they have to come up with a Machine Learning based solution or model within the stipulated time.",
      "The top participants will win exciting goodies and prizes All participants will be awarded participation certificates.",
      "So what are you waiting for? Come embrace the future.",
    ],
  },
  {
    title: "Gamicon",
    src: K2,
    struct: [
      "The entire idea of accomodating the gaming events into the Spectrum of events which comprise of primarily Technical Events with formal rules can be encapsulated under two reasons: firstly the presence of gaming events let the people participating in the formal events have a break and the second is to make them realise how skills like focus and teamwork can do wonders. The very essence of human existence is the survival with coordination.",
    ],
  },
  {
    title: "Ideate",
    src: K3,
    struct: [
      "Having an idea in mind is one thing and proving its worth to others is different. This paper presentation event is aimed to bring out the best of the ideas of the budding technocrats and to inspire them for higher achievements. The event will make you ponder upon your knowledge and contemplate upon skills you have to solve a real life problem.",
      "The competition will be organized in two phases. The first stage will be online submission while the second one will be at Zoom link during KHANAN'20.",
      "The PRELIMINARY round will aim to float initial challenge to all the participants. The abstract should be submitted in pdf format which should be mailed to khanan.sme@gmail.com before deadline. Papers that have already been accepted in standard national conferences or published in journals shall get a direct entry to the second round.",
      "Teams will be short listed on the basis of the merit of their submission. Short listed participants will be eligible to appear for Paper Presentation at Zoom meeting during KHANAN'20.",
      "Second Round will be a presentation cum debate cum questionnaire round whereby the participants will have to present their work done on the topic before other teams and judges.",
      "The abstract should be submitted before the deadline.",
      "Each team can consist a maximum of 3 members.",
      "Authors must make sure their participation in KHANAN’20 does not lead to violation of Copyright laws of conferences/seminars they have previously attended.",
    ],
  },
  {
    title: "Khanan Mafia",
    src: K4,
    struct: [
      `Life is like a puzzle, Only if you fit pieces to the right places, you will see the beauty of it.This year Khanan is back with its cosmic event "KHANAN MAFIA" - a virtual treasure hunt.`,
      "Treasure Hunt Window: 4 Oct'20 10:00 AM IST to 4 Oct'20 04:00 PM IST.",
      "Treasure Hunt Duration: 6 hrs.",
      "The answer to this riddle give you the name of the page where the next clue will be present. And so on... Every problem is a clue and every clue is another problem.",
      "Total number of questions: 15",
      "Questions will appear one by one.",
      "Only the person who registered/team leader will be able to play the quiz.",
      "You'll be given 3 attempts to answer questions. After three 3 wrong answers, your team will be disqualified.",
      "Questions will be sent to the team leader’s Whatsapp and the team leader have to answer the question within 3 attempts to remain in the treasure hunt.",
      "Each team can consist of a maximum of 4 members.",
      "Each member of the team must be from the same college.",
      "Each participant must have to register in only one team. If anyone found registered in more than 1 team he/she will be disqualified from the event.",
      "The First 3 teams to complete the treasure hunt earliest will be announced as the winner of Khanan Mafia.",
      "All decisions in the matter of eligibility, authenticity & final judgment will be with Khanan Mafia organizer.",
    ],
  },
  {
    title: "Minnovare",
    src: K5,
    struct: [
      "This event puts to test the ultimate presentation skills of the participants. The participants will be required to prepare and present innovative posters as per the problem statement given. The one who says the most in least number of words will take away the prize.",
      "Participants should choose a burning problem statement related to real life and should provide an innovative solution. The abstract should be mailed to khanan.sme@gmail.com.",
      "Sort listed teams on the basis of submitted abstracts would reach the second round.",
      "In round 2, the sort listed teams would have to present their ideas which would be conducted at Zoom link.",
      "The abstract should be submitted before the deadline.",
      "Each team can consist a maximum of 3 members.",
    ],
  },
  {
    title: "Nirvana",
    src: K6,
    struct: [
      `For any Mining Engineer, it is very important to get an insight into real life problems before entering the field. The event aims to provide exposure to real life mining problems and extract some "out of the box" ideas from aspiring students.`,
      "For the selection round each team has to prepare an abstract of the solution based on the given problem statement.",
      `Teams selected for the second round should join Zoom link for the case study face off – “Innovare”.`,
      "Each team will be given a slot of 15 minutes to present which shall include 2 minutes of questionnaire.",
      "The abstract should be submitted before the deadline.",
      "Each team can consist a maximum of 3 members.",
    ],
  },
  {
    title: "Placement Fever",
    src: K7,
    struct: [
      `The Khanan Family believes in the wise saying of Carl Sagan - "Somewhere, something incredible is waiting to be known". So, to acknowledge your incredibility and creativity, we are back with our prodigious event-"PLACEMENT FEVER".`,
      "This event puts the students through a simulated version of the campus placement process. Beginning with an aptitude test, the participants will go on to appear for group discussions and eventually sit for personal interviews.",
      "In the 2nd round, event calls for your unique ideas and your ability to present them in a PPT format.The participants are expected to submit an ingenious PPT on a given topic(which will be informed well before time). And further given a chance to be presented before our panel of judges. This PPT presentation round will be conducted on google/Zoom meet with a 5 min. time slot for each qualifier.",
      `Top 8 Students will emerge for the" Megadeth" round, the Personal Interview. Both HR & Technical interviews will be conducted in a simulated environment.`,
      "The top three students will get a certificate of merit; however each of the participants will receive the certificate of participation.",
      "Individual entries are only allowed in this event.",
      "In case of any discrepancy, the decision of panel would be binding.",
    ],
  },
  {
    title: "Quizzine",
    src: K8,
    struct: [
      "For any Mining Engineer, the knowledge of every small detail is necessary for proper execution of any procedure. The Mining quiz gives an oppurtunity to test your knowledge about Mining Engineering. For an aware mind, the general quiz is a golden opportunity to have an insight of its surrounding and exposure to various world issues.",
      "The competition will be organized in two phases. Both phases will be organized at Zoom link during KHANAN'20.",
      "The first phase will be a written examination from which top 10 teams will be selected for the next round.",
      "The second phase will have the top 10 teams competing against each other in the buzzer round.",
      "Each team will consists of a maximum of 2 participants.",
      "Individuals must register online to participate.",
    ],
  },
  {
    title: "Workshop",
    src: K9,
    struct: [
      "The penetration of digitisation into the surveying industry has mandated the acquisition of modern techniques of data analysis and data representation mandatory. The tools though easy to use have not been able to have an impact on the students all around the country. To bridge such gaps between the academics and the industry, KHANAN organises workshops on software pakages like SURPAC, AUTOPLOTTER, MINEX AUTOCAD 3D, etc., The only requisites to join are bringing a fully charged laptop and minds free to learn.",
    ],
  },
];

const Kevent = () => {
  return (
    <Container id="events">
      <Row>
        {events.map((item, index) => {
          return (
            <Col xs="12" sm="6" lg="4" key={index}>
              <Zoom timeout={600}>
                <KhananCard title={item.title} img={item.src} id={index} />
              </Zoom>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Kevent;
export { events };
