import React from "react";
import Tcard from "./Tcard";
import "./timeline.css";
import Slide from "react-reveal/Slide";

const Timeline = () => {
  return (
    <div className="page">
      <Slide timeout={500} left>
        <Tcard
          ach="Satyam Kumar (John SidneyMarshall&Mining and Exploration Division Scholarship) , SanthPrithvi raj (John Sidney Marshall Scholarship) ,BiplabGhosh (John Sidney Marshall Scholarship) ,NagamRamsai (Coal and Energy Division Scholarship) ,AaryaRaj Singh Ranawat(John Sidney Marshall Scholarship) won SME scholarship award "
          title="SME Scholarship"
          year="Year 2020-21"
        />
      </Slide>
      <Slide timeout={500} left>
        <Tcard
          ach="We are glad to announce that this year our society has won the challenge of recruiting the maximum number of students to join the student chapter and become SME members. We were recognized with a monetary award along with an article in Mining Engineering and we were also mentioned at the SME Annual Conference & Expo. Under this challenge our chapter was awarded a total of USD 550. USD 300 for recruiting the highest number of NEW MEMBERS and a bonus of USD 250 for recruiting more than 25 new members in our chapter."
          title="SME Membership Challenge 2021"
          year="Year 2020-21"
        />
      </Slide>
      <Slide timeout={500} left>
        <Tcard
          ach="  Biplab Ghosh (AIR 4), Ranjeev Bharti( AIR 12) , Konanki Krupa Sai( AIR 34), HimanshuShekhar( AIR 52), NagamRamsai (AIR 79), Rohit Kumar Sonkar( AIR 97) have brought laurels to the institute by performing exceedingly well in the Graduate Aptitude Test in Engineering (GATE)"
          title="GATE Rankers"
          year="Year 2020-21"
        />
      </Slide>
      <Slide timeout={500} left>
        <Tcard
          ach="SanthPrithvi Raj and  Krupa Sai from SME IIT(ISM) Student chapter were selected as one of the honorable mentions in the 2021 SME photo contest."
          title="SME Annual Photo Contest"
          year="Year 2020-21"
        />
      </Slide>
      <Slide timeout={500} left>
        <Tcard
          ach="Devashish Bariko(1st position in poster making competition)  2. Saswata  Som  (3rd position in poster making competition) 3. Ashok Kumar Banoth (2nd position in Essay competition)  secure top three position in different competitions leaving behind the participants from various other colleges. A total of 15 students were selected to represent IIT ISM Dhanbad at CIMFR through college level competitions organised earlier by SME-IIT (ISM) student chapter. A plethora of events were organized which included essay writing, elocution, poster making and a mining quiz competition which was held in six rounds."
          title="INTER COLLEGE COMPETITION AT CSIR-CIMFR"
          year="Year 2019-20"
        />
      </Slide>
      <Slide timeout={500} left>
        <Tcard
          ach="Siba Shankar Sahu  from SME IIT (ISM) Student Chapter made  the Honorary Mention in SME photo contest 2019."
          title="SME Annual Photo Contest"
          year="Year 2019-20"
        />
      </Slide>
      <Slide timeout={500} left>
        <Tcard
          ach="1.Anant Singhal(Coal & Energy Division)2.VivekOraon(John Sidney Marshall 3. Vishal Raj - John Sidney Marshall)4.Aditya Himanshu(John Sidney Marshall)5.Chappidi Jagadeesh (John Sidney Marshall) 6. Biplab Ghosh( John Sidney Marshall) 7. NagamRamsai  (John Sidney Marshall  8. Satyam Kumar - John Sidney Marshall) won SME scholarship award . A total of 7200$ Scholarship  were awarded to the successful students."
          title="SME Scholarship Award"
          year="Year 2019-20"
        />
      </Slide>
    </div>
  );
};

export default Timeline;
