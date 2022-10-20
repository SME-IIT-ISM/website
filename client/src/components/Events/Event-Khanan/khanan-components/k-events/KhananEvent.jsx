import React from "react";
import { Container, Row, Col } from "reactstrap";
import K1 from "./k-event-images/dezyn-o-mania.jpeg";
import K2 from "./k-event-images/gamicon.jpg";
import K3 from "./k-event-images/recuerdos.jpeg";
import K4 from "./k-event-images/khanan mafia.jpg";
import K5 from "./k-event-images/minnovare.jpg";
import K6 from "./k-event-images/nirvana.jpg";
import K7 from "./k-event-images/placement fever.jpg";
import K8 from "./k-event-images/quizzine.jpg";
import K10 from "./k-event-images/LisCad.png";
import K9 from "./k-event-images/O-piblast.png";
import K11 from "./k-event-images/kalakriti.jpg";
import KhananCard from "./KhananCard";
import Zoom from "react-reveal/Zoom";

const events = [
  {
    title: "Dezyno-o-mania",
    src: K1,
    struct: [
      "Hey Cinephiles!",
      `KHANAN'21 brings the “TWIST A TALE” contest for all the movie buffs who wish to showcase their creativity and step into the shoes of scriptwriters.
      `,
      "The rules are pretty simple. You have to pick any one movie or web series of your liking from the list of 5 twisted plots that we provide. That is, we'll change one major event in the plot and you have to make use of your creativity and imagination to make the story reach its satisfactory conclusion. The ones with the most gripping and exciting plots win!!!",
      "Rules:",
      "NOTE: Participants have to register (https://forms.gle/fC1Nq71Mg98PEb8p7) for the event before 08:00 PM on 8th October, 2021.",
      "1) Participants will have to choose one of the five options for movies/series with changed plot provided to them at the beginning of the contest.",
      "2) Participants will have to bring it to a satisfactory and exciting conclusion.",
      "3) Participants should refrain from introducing a completely new major character in the story line. Not to mention, the basic setting of the story should be kept the same to keep intact the original essence of the story.",
      "4) Word limit will be 1000-1500 words.",
      "5) A Google Form will be provided to the registered participants via mail and WhatsApp at the time of event which will have the link to questions and for uploading the story. The event will start at 12 noon on 11th of October and will continue up to 2 PM.",
      "6) Typed entries in English shall be accepted and should be submitted in pdf format.",
      "7) Indulgence in any kind of plagiarism will result in direct disqualification from the contest.",
      "Judging criteria:",
      "Adherence to word limit: 10%",
      "Consistency of storyline and characters with original: 20%",
      "Quality of build-up and character development: 40%",
      "Conclusion: 30%",
      "So, what are you waiting for? Give the scriptwriter inside you the chance to shine out by imagining the best conclusion!",
      "Register for the contest Now!!!",
      "Contact:",
      "Abhya Adri (Event Coordinator): 6206688440",
      "Ayushman Tiwari (Event Organiser): 7470584535",
    ],
    srclink:
      "https://docs.google.com/forms/d/e/1FAIpQLSeT2jUTvYsb-1tr0MCiXkhPVWMHCFOge6IDfWqKCev3REeGaQ/viewform",
    zoomlink: " https://meet.google.com/dmf-ihim-add",
    con: false,
  },
  {
    title: "Gamicon",
    src: K2,
    struct: [
      "The entire idea of accomodating the gaming events into the Spectrum of events which comprise of primarily Technical Events with formal rules can be encapsulated under two reasons: firstly the presence of gaming events let the people participating in the formal events have a break and the second is to make them realise how skills like focus and teamwork can do wonders. The very essence of human existence is the survival with coordination.",
      "RULES:",
      "1. Registered players' level must be 25+ or else the team will be disqualified.",
      "2. Unregistered players not allowed.",
      "3. Maximum 5-man roaster allowed.",
      "4. To get qualified for the next round you have to attend all the match",
      "5. Hacking or use of any third-party app in the game is not allowed. If we found any misbehave, the team will be banned permanently.",
      "6. Sharing of id pass is not allowed. (if we found, the whole team will be disqualified from all scrims & partnered tournaments)",
      "7. Only the one who registered will get id pass.",
      "8. You have to sit in your allowed slots 5 minutes before the match time.",
      "9.  You have to download and keep all the maps if someone got kicked for that reason management will not be responsible.",
      "10. After registration no changes in roaster will be allowed.",
      "11. Change of group is not allowed.",
      "12. No melee, pan, or fist is allowed, this may lead your team to ban.",
      `13. Don't keep your mic to all and no use of abusive language should be done in-game. (if found your team will be banned).`,
      "14. If you feel any kind of hacking is used then record your death replay as proof. Death reply should be on otherwise We're not responsible for any kind of malicious acts in the game.",
      "Contact:",
      "AKASHDEEP : 7992299035",
    ],
    srclink:
      "https://docs.google.com/forms/d/e/1FAIpQLSfdx7cZ25FmzXRqCpHf3gGwbO8Gn1ufwL4tArjRqiNt1O2b2g/viewform",
    zoomlink: "",
    con: false,
  },
  {
    title: "Recuerdos",
    src: K3,
    struct: [
      `Have an idea that you think can change the world? Why not share it with the world now?
      Khanan’21 brings you this fantastic opportunity with Ideate. Ideate is a paper presentation event
      that brings out the best of the budding technocrats’ ideas and inspires them for higher
      achievements. The event will make you ponder upon your knowledge and contemplate your
      skills to solve real-life problems. Come up with your idea, prove its worth to others and get
      amazing goodies and prizes!`,
      "Why wait? Get, set, Ideate!",
      "Rules:",
      `1. You can participate in teams with a maximum of 3 members. They must be from the
       same college.`,
      `2. The event will be organized in 2 rounds. In the Preliminary Round, the participating
       teams will have to select a topic from a list, think of a solution and prepare an abstract.
       The Second Round will be a Questionnaire Round where the selected teams will have to
       elaborate on the abstract they have prepared.`,
      `3. We will float a Google form on October 1, 2021. To participate, the interested teams will
       have to fill up:`,
      "The name of the team",
      "The name of the team leader",
      "The name of other members",
      "Their contact details",
      "The name of their college.",
      `4. The same form will have the list of problems for the teams to choose. They have to fill
       their details and the abstract of their solution before October 8th , 2021, by 8 PM.`,
      `5. The form will be closed by October 8th , 2021, at 8 PM. So, they must provide their
      details and the solution before the deadline, otherwise their participation will not be
      considered.`,
      "6. The abstract must be 2-3 pages and in pdf format in A4 size print setup.",
      `7. Name your abstract as: Ideate_TeamName_Title_of_submission. For example if a team
      by the name MoveMiners takes part in IDEATE and has prepared abstract on
      Environmental impact of CO2 emissions then the pdf name should be:
      Ideate_MoveMiners_Environmental_Impact_Of_Carbon_Emissions`,
      "8. The teams will be shortlisted based on the merit of the papers they have submitted.",
      "9. The papers that have already been submitted in standard national conferences or published in journals shall get a direct entry to the Final Round.",
      `10.The shortlisted teams will be eligible to present their papers in the Second Round at the
      event. Before the commencement of the Second Round, we shall contact the members of
      the shortlisted team and allot them the slots for them to present their papers.`,
      `11. The Second Round will be a presentation-cum-debate-cum-questionnaire round. 10
      minutes will be allotted for the presentation, and an extra 5 minutes will be alloted for the
      questionnaire. The participants shortlisted in the Preliminary Round will have to present
      their work done in front of judges and other teams.`,
      "12.The presentation must be in ppt format and can contain 7-8 pages.",
      "13.The ideas and the works should not be plagiarised.",
      "14.The teams must make sure their participation in the event does not violate the copyright laws of conferences and seminars they have previously attended.",
      "Contact:",
      "SUMIT KUMAR MUDI : 8210987906",
    ],

    srclink:
      "https://docs.google.com/forms/d/e/1FAIpQLSf7_Rvltx64VZeQGOxYHg_5jT8S9sdeRf2LcO3X4ejVCunImQ/viewform",
    zoomlink: "https://meet.google.com/dmf-ihim-add",
    con: true,
  },
  {
    title: "Khanan Mafia",
    src: K4,
    struct: [
      `Life is like a puzzle, only if you fit pieces to the right places, you will see the beauty of it. That’s why to save you people from the monotonous online routine, KHANAN’21 presents before you the most audacious event "KHANAN MAFIA" - a virtual treasure hunt.
     Treasure Hunt Window starts on 10th October.`,
      "And the rules are pretty simple. Here it is—",
      "1. The answer to this riddle gives you the name of the page where the next clue will be present. And so on... Every problem is a clue and every clue is another problem.",
      "2. Total number of questions: 15",
      "3. Questions will appear one by one.",
      "4. Only the person who registered/team leader will be able to play the quiz.",
      "5. You'll be given 3 attempts to answer each question. After 3 wrong answers, your team will be disqualified.",
      "6. Questions will be sent to the team leader’s WhatsApp and the team leader has to answer each question within 3 attempts to remain in the treasure hunt.",
      "7. Each team can consist of a maximum of 3 members.",
      "8. Each member of the team must be from the same college. Each participant must have to register in only one team. If anyone is found registered in more than 1 team, he/she will be disqualified from the event.",
      "9. Top 3 teams which answer the maximum number of questions till the end time will win.",
      "10. All decisions in the matter of eligibility, authenticity & final judgment will be with the Khanan Mafia organizer.",
      "Total prize money for top 3 teams = 6000",
      "Contact:",
      "SUMIT KUMAR MUDI : 8210987906",
      " AMBUJ GUPTA : 9798872884",
    ],
    srclink: "https://forms.gle/TMbAJ9BPxnyTRcjJA",
    zoomlink: "",
    con: "",
  },
  {
    title: "Envisage",
    src: K5,
    struct: [
      `For any Mining Engineer, it is very important to get an insight into real-life problems before entering the field. The event aims to provide exposure to real-life mining problems and extract some “out of the box” ideas from aspiring students.`,
      "Participants should choose a burning problem statement related to real life and should provide an innovative solution. This event puts to test the ultimate presentation skills of the participants. The one who says the most in the least number of words wins!",
      "Rules:",
      "1. The team can have a maximum of 3 members and they have to be from the same college.",
      "2. There will be two rounds. In Round 1, participants will have to choose a burning problem statement by themselves that is faced in real life by the mining industry in India or abroad, and come up with an innovative abstract solution to that problem.",
      "3. The Abstract submission (Document format (A4 size) of 2-3 pages) for round 1 has to be submitted in the Google Form provided (https://forms.gle/GSvnYQsfuSgGwKyr7) before the deadline of Round 1: 08:00 PM on 8th October 2021.",
      "4. The abstract should be named according to the following way:  ",
      "Minnovare_TeamName_Title_of_submission",
      "For example, if a team by the name MoveMiners takes part in MINNOVARE and has prepared an abstract on the Environmental impact of CO2 emissions then the pdf name should be:",
      "Minnovare_MoveMiners_Environmental_Impact_Of_Carbon_Emissions.",
      "5. 6 teams will be shortlisted on the basis of submitted abstracts to reach the second round.",
      "6. In round 2, the shortlisted teams would have to present their ideas in the form of Presentation: (PPT format) of 7-8 pages for presenting before the judges at the time of the 2nd round which will be conducted at the meet link provided to them.",
      "7. In round 2, each team will have 10 minutes to present their ideas and innovation through a presentation on their problem sets and 5 minutes for the judge to ask you questions about your idea which are to be answered practically.",
      "8.  Participants should be on the dot for the presentation.",
      "9. Finally, the top 3 teams will be declared as the winners of the contest.",
      "Contact:",
      "THOTA TANUJA : 8688910877",
      "AYUSHMAN TIWARI : 7470584535",
    ],
    srclink:
      "https://docs.google.com/forms/d/e/1FAIpQLScq-M8dV5WJHIjbjjZp__PsFvrS8rPjglaeBfBZ8Jo2KHShUQ/viewform",
    zoomlink: "https://meet.google.com/ttx-zmfa-bvw",
    con: true,
  },
  // {
  //   title: "Nirvana",
  //   src: K6,
  //   struct: [
  //     `“Knowledge without practice is useless. Practice without knowledge is fatal."`,
  //     `Besides theoretical knowledge, a technically sound mining engineer must be aware of the various
  //    real-life issues an engineer faces in a mine. Nirvana by Khanan’21 invites every aspiring mining
  //
  //    engineer to put their skills to test with several case study questions and gain an insight into the real-
  //    life problems in a mine. We aim to bring out a student’s creative side and encourage some out-of-
  //    the-box solutions in this event.`,
  //     "Pitch your unique idea to the world and win goodies and prizes worth Rs. 10,000!",
  //     "Rules:",
  //     "1. Each team can have 2-3 members. The members should be from the same college.",
  //     "2. The event will be organized in 2 rounds.",
  //     "3. We will float a Google Form on October 1, 2021. To participate, interested teams must enter:",
  //     "its name",
  //     "name of its leader",
  //     "the names of its members",
  //     "their contact details and",
  //     "the name of their college",
  //     `4. The problem statement will also be present in the same Google form. The teams have to
  //    prepare an abstract of the solution to the problem and submit it in the same Google form by
  //    October 8, 2021, at 8 pm.`,
  //     `5. The name of the abstract to be submitted must be in the format:
  //
  //    Nirvana_TeamName_TitleOfSubmission
  //    E.g. A team with the name “Movers&Shakers” has prepared an abstract “Environmental
  //    Impact of Rock Blasting”. So they will name the abstract as: “Nirvana_
  //    Movers&Shakers_Environmetal_Impact_Of_Rock_Blasting”.`,
  //     "6. The abstract should be limited to 2-3pages in pdf format and an A4 size print setup. We will NOT accept it in any other form.",
  //     "7. Only one submission is allowed per team by the team leader.",
  //     "8. The form will be closed by October 8, 2021, at 8 pm. Late submissions will not be accepted. So, interested teams must fill up their details before the deadline.",
  //     "9. The top 6 teams will be shortlisted based on the merit of the papers they submit.",
  //     "10. The shortlisted teams will be eligible to appear for the Final Round.",
  //     "11. The Final Round is a presentation-cum-questionnaire round.",
  //     `12. The teams will be allotted a slot of 15 minutes. In the first 10 minutes, they will have to
  //    present their idea in front of a panel of judges. The remaining 5 minutes will be allotted for
  //    the questionnaire.`,
  //     "13. Before the commencement of the Final Round, we will contact the members of the shortlisted teams and notify them about the slot they have been allotted.",
  //     "14. The presentation should be limited to 7-8 slides in .ppt format.",
  //     "15. The ideas and the works should not be plagiarised.",
  //     "16. The teams should remember that their appearance in the event does not violate any copyright laws of seminars and conferences they previously attended.",
  //
  //     "Contact:",
  //     "ABHYA ADRI : 6206688440",
  //     "KESHAV LAKHOTIA: : 7340598208",
  //   ],
  //
  //   srclink:
  //     "https://docs.google.com/forms/d/e/1FAIpQLSdIB7OsqIB-B6mq-WVsgH_hHS4e64ZNNLTIiaHFVKbXQ-QX6A/viewform",
  //   zoomlink: "https://meet.google.com/ipb-tdeo-kdy",
  //   con: true,
  // },
  {
    title: "Placement Fever",
    src: K7,
    struct: [
     `The Khanan Family believes in the wise saying of Carl Sagan - "Somewhere, something incredible is waiting to be known". So, to acknowledge your incredibility and creativity, we are back with our prodigious event - "PLACEMENT FEVER".
     `,
     "This event puts the students through a simulated version of the campus placement process.",
     "Registration Deadline: 8th  October 8:00PM",
     "Rules:",
     "1. Individual entries are only allowed in this event.",
     "2. There will be three rounds - Aptitude Test, Group Discussion, and Personal Interview.",
     "3. The first round (Aptitude test) will have 60 questions. The time allotted will be 30 minutes. The top 20 participants from the aptitude test will enter in the second round.",
     "4. The participants will be divided into five groups, each group consisting of 4 participants for Group Discussion. The top participants of each group will slide in the final round.",
     `5. Top 5 Students will emerge for the "Megadeth" round, the Personal Interview. Both HR & Technical interviews will be conducted in a simulated environment.`,
     "6. The top three students will be declared as winners and will get a certificate of merit. Each of the participants who make upto Interview round will get Certificate.",
     "7. In case of any discrepancy, the decision of the panel would be binding.",
     "Contact:",
      "TANYA ANSHUM : 7488215775",
      "Anuj kumar raj : 8298056949"
    ],

    srclink: "https://forms.gle/R4p4KpGC5aqvB3K9A",
    zoomlink: "https://meet.google.com/kvx-demi-pzy",
    con: true,
  },
  // {
  //   title: "Mining Quiz",
  //   src: K8,
  //   struct: [
  //     "For any Mining Engineer, the knowledge of every small detail is necessary for proper execution of any procedure. The Mining quiz gives an oppurtunity to test your knowledge about Mining Engineering. For an aware mind, the general quiz is a golden opportunity to have an insight of its surrounding and exposure to various world issues.",
  //     "The competition will be organized in two phases. Both phases will be organized at Zoom link during KHANAN'20.",
  //     "The first phase will be a written examination from which top 10 teams will be selected for the next round.",
  //     "The second phase will have the top 10 teams competing against each other in the buzzer round.",
  //     "Each team will consists of a maximum of 2 participants.",
  //     "Individuals must register online to participate.",
  //     "Contact:",
  //     "SUMIT KUMAR MUDI : 8210987906",
  //   ],
  //
  //   srclink:
  //     "https://docs.google.com/forms/d/e/1FAIpQLScQYFQGnbO_Hnl7biIhhBQC7t8lfDghSst9LbkKMOQXScJApQ/viewform",
  //     zoomlink: "https://meet.google.com/fcf-zttd-xew",
  //     con: true,},
  {
    title:"Kalakriti",
    src:K11,
    struct:["We wish to show you that quizzing isn't memorizing boring facts, but a rousing activity of nimble thinking.",
  "No need to learn any facts! Just bring a curious mind which hungers to know the interesting stories behind everything cool.",
  "Don't be afraid if you think you don't know anything about quizzing! We'll be explaining all the nitty gritties of quizzing as the event progresses.",
  "So mark your calendars and join us on 10 October at 8:00 AM.",
  "The quiz will be conducted in two phases, prelims and the finals. Prelims will be held at 8 AM on 10th October, followed by the finals at 6:30 PM on the same day.",
"2. The quiz is open only for college students.",
"3. There can be a maximum of 3 members in a team.",
"4. The prelims will be held on a Zoom call, and the answers have to be filled in Google forms. The link for the call will be provided well before time.",
"5. The top 8 teams will qualify for the finals, which will be held over a Zoom call.",
"6. Using unfair means is strictly discouraged and anyone caught will be disqualified from the quiz without any explanation.",
"7. Further details regarding the format of the prelims and finals will be provided on the day of the quiz.",
"8. The decision of the Quiz Masters will be final and binding.",
"Contacts :",
"Taha Hussain : 7766088557",
"Harsh Kumar Singh : 8102813843"

],
srclink:"https://docs.google.com/forms/d/10UCKK5M-FFuQf9SxNBl3wpVw9gDJuoV73xdBwHYtWA4/viewform?edit_requested=true"
  },
  {
    title: "Workshop",
    src: K9,
    struct: [
      `“An investment in knowledge pays the best interest”- Benjamin Franklin `,
      "Learning from the experienced minds of our nation is an opportunity of rare luck. Khanan’21 takes here the pleasure to announce that one such great mind will be here to enlighten us with his immense knowledge and experience, which will open the doors of innumerable opportunities in our near-coming future. ",
      `A webinar has been organized on "O-Pitblast" a 3D Blasting Software and it’s our great honour and pleasure to unveil the next speaker of Khanan’21 Dr. Bhanwar Singh Choudhary , currently the Associate Professor in the Department of Mining Engineering at IIT(ISM) Dhanbad, obtained his PhD from IIT(BHU) Varanasi and holds the area of expertise in Drilling and Blasting Technology, Computer Aided Mine Planning, Tunnel Engineering. He has more than 20 years of experience in educating and guiding his students at our prestigious college`,
      "Don’t miss out this golden opportunity to learn new things from such a inspiring person, that will guide you reach the summit of excellence; be one step ahead of others by registering it right now!",
      "Contact:",
      "SUMIT KUMAR MUDI : 8210987906",
      " AMBUJ GUPTA : 9798872884",
    ],

    srclink: "https://forms.gle/6XGn9MQvr7uwDrcs8",
    zoomlink: "https://us02web.zoom.us/j/82295620499?pwd=WHFVaEdkSHBvVFpRMUViaUg2Mkt2QT09",
    con: true,
  },
  {
    title: "Panel discussion",
    src: K10,
    struct: [
     `"Tell me and I forget. Teach me and I remember. Involve me and I learn".`,
     "as said by Benjamin Franklin with this line we want to introduce our next and one of our most passionate speaker",
     "DAYAMOY KARMAKAR, he is not just a speaker he is a teacher a mentor has vast experience of the mining industry as he worked with Essel mining as a survey officer, he has also worked with Tata Steel limited as a survey manager and Balaji industry limited as associate survey manger being in IIT (ISM) Dhanbad he mentored many students in there research work ",
     "So we welcome you to the amazing session on LisCAD software.",
     "Don’t miss out this opportunity to learn one of the most crucial software from such a inspiring person; be one step ahead of others by registering it right now! ",
     "Contact:",
     "SUMIT KUMAR MUDI : 8210987906",
     " AMBUJ GUPTA : 9798872884",
    ],

    srclink: "https://docs.google.com/forms/d/e/1FAIpQLSeXZdpp5qs4tG2FERK-lnpiPrk1MUxtv1rPM1uLQu238t4odg/viewform",
    zoomlink: "https://us02web.zoom.us/j/83922869325?pwd=WXFFeFNnNDUzUjdFMjVsZ21aQVNRZz09",
    con: true,
  }
];

const Kevent = () => {
  return (
    <Container id="events">
      <Row>
        <Col>
          <h2 className="k-sub-heading mt-5">EVENTS</h2>
        </Col>
      </Row>
      <Row>
        {events.map((item, index) => {
          return (
            <Col xs="12" sm="6" lg="4" key={index} >
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
