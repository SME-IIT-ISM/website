import React, { Component } from "react";
import GEImages1 from "./GEImage/smeevent1.jpg";
import GEImages2 from "./GEImage/smeevent2.jpg";
import GEImages3 from "./GEImage/smeevent3.jpg";
import GEImages4 from "./GEImage/smeevent4.jpg";
import GEImages5 from "./GEImage/smeevent5.jpg";
import GEImages6 from "./GEImage/smeevent6.jpg";
import GEImages7 from "./GEImage/smeevent7.jpg";
import GEImages8 from "./GEImage/smeevent8.jpg";
import GEImages9 from "./GEImage/smeevent9.jpg";
import Posts from "./Posts";

//col-6 col-md-4
const SMEGeneralEvents = () => {
  return (
    <div>
      <div className="row my-5">
        <div class="col-sm">
          <Posts
            paragraph="A virtual “WOMINE” event was organized on 10 April 2020 by SME IIT(ISM) Student 
Chapter for all the budding female engineers, who look up to a career in the mining 
field. The event witnessed the huge participation of girls from different institutions all 
over India. As event speakers, we invited some phenomenal women with extensive 
knowledge and years of experience in the Mining and Mineral Industry."
            source={GEImages1}
            headingObject="Poster Competion"
          />
        </div>
        <div class="col-sm">
          <Posts
            paragraph="SME IIT(ISM) Student Chapter, in collaboration with Udaan(@udaan.iitism ), the career club of IIT(ISM) Dhanbad is organizing an event on the most prestigious examination of the country for entry into the elite civil services, UPSC. The guest speaker for the event is Mr. Jay Shivani (@jayshivani ) - IAS of batch 2019, AIR-81 in UPSC CSE 2018, currently posted as Assistant Commissioner at Dibrugarh, Assam."
            source={GEImages2}
            headingObject="UPSC Career Insight"
          />
        </div>
        </div>
        <div className="row my-5">
        <div class="col-sm ">
          <Posts
            paragraph="SME IIT(ISM) DHANBAD is going to organize an INTERN TALK session on 16th May. Seniors nailing their internship season with commendable achievements, will share their experiences and resolve all your doubts."
            source={GEImages3}
            headingObject="INTERN TALKS"
          />
        </div>
      
     
        <div class="col-sm">
          <Posts
            paragraph="The placement season is near, and everyone will obviously be having a hundred questions eating their head. Well, SME IIT(ISM) Student Chapter is here to relieve you from this bewilderment.
Seniors nailing their placement season with commendable achievements, will share their experiences and resolve all your doubts."
            source={GEImages4}
            headingObject="PLACEMENT TALKS"
          />
        </div>
        </div>
        <div className="row my-5">
        <div class="col-sm ">
          <Posts
            paragraph="SME IIT(ISM) Student Chapter brings to you an exceptional event, WOMINE, where established and successful women speakers from earth science branches would share their experiences and success stories on a virtual platform."
            source={GEImages5}
            headingObject="WOMINE"
          />
        </div>
        <div class="col-sm">
          <Posts
            paragraph="SME IIT(ISM) Student Chapter brings you an extraordinary opportunity, where you will be exposed to the real virtual placement process. So put on your winning hats and tune in to the placement battle this weekend!"
            source={GEImages6}
            headingObject="VIRTUAL PLACEMENTS"
          />
        </div>
        </div>
        <div className="row my-5">
        <div class="col-sm">
          <Posts
            paragraph="Bored in this quarantine? Want something to stimulate your brain?
Look no further for SME, IIT(ISM) Dhanbad Chapter is here with a refreshing quiz for you to have some fun, as well as learn a thing or two about this great nation of ours."
            source={GEImages7}
            headingObject="INGENIUM"
          />
        </div>
        <div class="col-sm">
          <Posts
            paragraph="Resumes are the heart and soul of what you do in your academic years. They are what makes you or breaks you. SME welcomes you to improve your resume making skills with the CV making competition, organised keeping in mind the essential requirement of the students."
            source={GEImages8}
            headingObject="ONLINE CV MAKING COMPETITION"
          />
        </div>
        </div>
        <div className="row my-5">
        <div class="col-sm">
          <Posts
            paragraph="This 25th of February, take part in a quiz related to GENERAL KNOWLEDGE AND MINING, and get a chance to prove just how much of an expert you are and win exciting prizes, goodies and certificates."
            source={GEImages9}
            headingObject="BREAKING BAD"
          />
        </div>
      </div>
    </div>
  );
};

export default SMEGeneralEvents;