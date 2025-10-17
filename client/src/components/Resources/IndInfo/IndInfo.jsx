import React, { useEffect } from "react";
import "./indInfo.css";
import { Container, Row, Col } from "reactstrap";
import InfoCardL from "./IndinfoCard";
import Info from "./indimg/Info.jpg";
import Info1 from "./indimg/Info1.jpg";
import Info2 from "./indimg/Info2.jpg";
import Info3 from "./indimg/Info3.jpg";
import Info4 from "./indimg/Info4.jpg";
import Info5 from "./indimg/Info5.jpg";
import Info6 from "./indimg/Info6.jpg";
import Info7 from "./indimg/Info7.jpg";
import Info8 from "./indimg/Info8.jpg";
import Info9 from "./indimg/Info9.jpg";
import Info10 from "./indimg/Info10.jpg";
import Fade from "react-awesome-reveal";
import { BrowserRouter as Router, Route } from "react-router-dom";
import InfoPage from "./IndinfoPage";

const infoData = [
  {
    src: Info,
    para: "VOL. 12",
    title: "MINING down by 7.8% in FY' 20-21",
    date: "JUNE 2021",
    quotes:
      "The index of mineral manufacturing of mining and quarrying sector fell by 7.8 per cent throughout the monetary 12 months 2020-21.",
    describe:
      "There was a fall of 7.8 percent in the index of mineral manufacturing of the mining and quarrying sector throughout the monetary 12 months 2020- 21. There was a 6.1 percent increase for march whereas there was a 5.5 percent decrease for february in the index. There was a growth in manufacturing of manganese ore, chromite, phosphorite, lead focus, copper focus, throughout the February- march interval on the other hand manufacturing of magnesite, zinc conc.Pure Fuel (utilized) and coal additionally grew year-on-year throughout March. There was an increase in manufacturing of chromite by 70.5per cent,in february and 45.8percent in march making it to 6.01 tonnes while the increase in phosphorite ore's production was 24.5 per cent in february and 57 per cent in march making it 1.33 lakh tonnes.",
    class: "latest",
  },
  {
    src: Info1,
    para: "VOL. 11",
    date: "JUNE 2021",
    title:
      "The market of EV IS expected to have substantial impact on copper demand.",
    quotes:
      "The index of mineral manufacturing of mining and quarrying sector fell by 7.8 per cent throughout the monetary 12 months 2020-21.",
    describe:
      "The Centre has announced a new scheme of scrap recycling of non-ferrous metals like aluminium and copper to reduce scrap imports. According to the mines ministry, underdeveloped metal scrap collection, segregation, and processing infrastructure in the market have led the non-ferrous metal industry. to be highly dependent on imports. They said that this new framework (2020) will use a life cycle management approach for better efficiency in the mineral value chain process. This framework will focus on both product and processing stewardship. The demand and production of aluminium both have increased at CAGR of 6.77% and 11.19% respectively. This growing demand will also enhance the requirement of coal, a non renewable resource, as this sector is completely energy intensive. Meeting this kind of demand by import will induce a trade imbalance. and recycling is the best option as it consumes 95% less energy than producing primary aluminium. Copper demand in India is expected to grow at 6-7% due to the project like 'Make in India', 'Smart City' etc. As copper is essential for electric vehicles (EV) technology, it will also have a significant effect on Cu demand. To gain control over these circumstances, the country's copper market needs a convincing growth of potential.",
    class: "old",
  },
  {
    src: Info2,
    para: "VOL. 10",
    date: "MAY 2021",
    title: "Import reduction due to leap by local giants",
    quotes: "Import reduction due to leap by local giants",
    describe:
      "India imports 235 million In the world has identified 15 tonnes of coal annually. Almost half of the imported coal grade is non substitutable as its grades are not available in the country. Most MDO companies have recently entered the coal industry, their coal projects have been churning out impressive figures. India's coal imports have already fallen by 14% to 196.13 million tonnes in the last fiscal, leading legitimacy to the prediction. Coal secretary Anil Jain said \"We are on track to produce 700 million tonnes of coal in 2020-2021 fiscal\". CIL (Coal India limited), the largest coal producing company mining projects for MDO operations in an effort to increase the production. MDO operations undertaken by EMIL, DilipBuildcon, VPR Mining and Adani coal project will prove indispensable if India is to reduce its coal import The decision to hold auctions for coal mines also turned out favourable for players like Adani group and Vedanta The Home minister had earlier. said that coal sector would be a valuable contributor to India's growing economy. This bodes well for the sector as the CIL, EMIL, Vedanta and Adani coal project can expect investments.",
    class: "old",
  },
  {
    src: Info3,
    para: "VOL. 9",
    date: "MAY 2021",
    title:
      "Second tranche of Indian commercial coal mining auction gets soaring attraction from bidders",
    quotes:
      "For the first time 67 mines are up for bidding in single tranche since 2014",
    describe:
      "The second tranche of Ministry of Mines and Minerals Coal Mines Act covers 44.The way for the liberalization of the Indian coal sector by increasing limited and extensive deposits, and fully and partially explored commercial coal mines' auction Act covers 28 mines, whereas the has attracted a lot of interest, as shown by the fact that about 50 second tranche of coal mine mine-specific tender documents auctions for sale is paving the have been bought by bidders so far. The deadline for bid submissions has been extended productivity, competitiveness, to allow interested parties to and private sector involvement, visit mine sites for inspection resulting in the establishment of until state lockout curbs are a vibrant coal industry, lifted. Several other possible stimulating economic growth bidders are using the auction and job creation. Mines with platform to register and purchase tender materials. In coking and non-coking mines, March, India launched its second commercial coal mining blocks are on the market, with auction, offering 67 mines for the majority of them located in sale. Since the beginning of the the states of Chhattisgarh, auction procedure in 2014, this Jharkhand, Odisha, Madhya is the biggest number of mines Pradesh, Maharashtra, and offered in a single tranche. The Andhra Pradesh.",
    class: "old",
  },
  {
    src: Info4,
    para: "VOL. 8",
    date: "MAY 2021",
    title:
      "Epiroc focuses on holistic strategy for challenges in underground mining.",
    quotes: "Epiroc attempts to approach US and Canada as a single market.",
    describe:
      "EPIROC has decided a new strategy for the betterment of the underground mining market in North America by accumulating resources and applications to work together with US and Canadian segments. The company said that this structure will fulfill the demand for electrification solutions and reduce environmental footprint. Epiroc helps the underground mining indus with production and face drill rigs, loaders and trucks, ventilation, and automation systems. Jon Torpy, president and general manager for Epiroc USA LLC, said that this combined system will summon maximum production with safe, cost effective, and sustainable solutions. For the implementation purpose of this strategy, a new position named underground business manager is created for North America. Travis Battley, who has 18 years of experience serving Epiroc underground mining customers universally, has been appointed in this role. He will work with customer centers in the US and Canada to support product and application expertise in material handling, drilling, infrastructures like electrification and automation.",
    class: "old",
  },
  {
    src: Info5,
    para: "VOL. 7",
    date: "MAY 2021",
    title:
      "CIL announces formation of subsidiaries for strengthening PV and RE related projects.",
    quotes:
      "By 2040, solar energy will have surpassed coal's share of India's power generation mix.",
    describe:
      "Coal India Limited has the money and technology. To help power its mining operations, state-owned company plans to invest 56.50 billion by March'24 in 14 solar projects. On Dec 24,2020, Board of Directors had approved an expansive diversification strategy for state-run company, which functioned as coal miner to make step towards preparing Coal India for the time when coal would exit India's energy manufacturing. In most of mix. Although coal accounts for 70% of India's power instead of taking technology or generation and solar for just capital risk, they are proposing 4%, solar energy is likely to the formation of an SPV, then witness exponential growth obtaining all clearances, and and match coal's share in the thereafter offering to a partner Indian power generation mix who can invest the majority of by 2040 or earlier.",
    class: "old",
  },

  {
    src: Info6,
    para: "VOL. 6",
    date: "APRIL 2021",
    title: "Reforming the mining laws for transparent auction of coal blocks",
    quotes: "Government to ensure greater participation of stakeholders.",
    describe:
      "In addition to the reforms requirement is expected to made earlier, the government increase up to 1,123 million has further improvised the tonnes by 2023 from the coal mining jurisdiction assuring significant participation of all the collaborators. Along with the central government, State-run coal India limited is also seeking to incorporate e trading windows to stabilize coal grades. Considering the environmental concern and switching to carbon-free energy, the government is endeavoring to harness the coal reserves within the next 30 years. Rolling auction is introduced by the government, ensuring the all- time availability of coal blocks for auction. As India's coal present level of around 700 million tonnes, coal will be the primary source of all the country's economic activities. To bring out transparency in the auction, the government will continuously upload a comprehensive list of mines and related information. Recently, India listed 67 mines from different states for the second tranche of coal mine auction. Besides the two-stage auction that allows bidders to decide revenue on a reserve price, there will be no constraint on coal sale and coal consumption from the mines.",
    class: "old",
  },
  {
    src: Info7,
    para: "VOL. 5",
    date: "MARCH 2021",
    title:
      "CIL approves the expansion of 24 existing projects and 8 Greenfield ones in the ongoing financial year.",
    quotes: "CIL consents to 32 mining projects worth 47000 crore",
    describe:
      "Coal India Ltd (CIL) has approved 32 coal mining projects in the current financial year till January, with an estimated cost of Rs 47,000 crore. 24 out of 32 are expansion of existing projects and the remaining 8 are greenfield. The combined peak capacity of these projects is projected at 193 million tonnes per annum (MTPA) adding to the already sanctioned capacity of 303.5 MTPA. The gradational production by FY'24 from the approved 32 expansion and the new greenfield projects would estimate to the huge cost of around 81 MTPA. The Boards of the respective subsidiary companies have given their nod for such high number projects with huge capacity of the 193 MTPA capacity, the three subsidiaries of CIL, South Eastern Coalfields Limited (SECL), Central Coalfields Limited (CCL) and Mahanadi Coalfields Limited (MCL) with 6,10,3 projects at an investment of Rs 18657, 7520, 14057 crores of 63.5, 56.6, 47 MTPA respectively covering 167 MTPA between them form the bulk at 86.5 percent. Balance 26 MTPA would be met through ECL, NCL and WCL with the remaining investment between them.",
    class: "old",
  },
  {
    src: Info8,
    para: "VOL. 4",
    date: "MARCH 2021",
    title:
      "Government elucidate and pronounced to execute newly rectified mining laws",
    quotes: "Better Laws For Better Mining",
    describe:
      "In the cabinet meeting, the Indian government has reformed the mining law to remove restrictive end-use conditions on confined mines and resolve legacy issues by exploring more shots for auction. The structural modifications in the mining sectors have been approved through amendments to the MMDR Act(1957). These changes will affect minerals like gold, diamond, platinum etc. bringing about prodigious investment. The reformation will allow captive mines to sell up to half of their minerals excavated annually, minimizing the divergence between the merchant and captive mines. Section 10A(2) (b) and 10A(2)(c) deal with prevailing leases where surveillance permits and grants of a lease to resolve legacy issues of mines through auctions respectively. Those who proposed to transfer non auctioned mines to the willing will not have any charges imposed on them. Several other reforms approved by the cabinet include a proper license for production and exploration, refrained double taxation, transparency in illegal mining, and utilization of regional mineral funds.",
    class: "old",
  },
  {
    src: Info9,
    para: "VOL. 3",
    date: "FEBRUARY 2021",
    title: "CIL signs with Belaz",
    quotes:
      "CIL is all set to purchase 96 dumpers of 240 tonne capacity, from Belaz.",
    describe:
      "Coal India Ltd (CIL) has signed a significant procurement pact worth Rs 2,900 crore with Belarus-based mining equipment manufacturer \"Belaz\" for purchase of dumpers whose indication was given in August last year. The pact is for purchase of 96 dumpers of 240-tonne capacity each (highest capacity currently operational in the country), which are pivotal in ferrying Over Burden from mine working face to dump yard, as for CIL, 95% of the entire coal output is through opencast mines. Removal of Over Burden makes dry fuel production easier. CIL's own finances would fund the entire investment for 8 years including cost of equipment, spares and convenience.The batch of 96 dumpers would be deployed in two of the large opencast mines of South Eastern Coalfields Ltd (SECL), the highest coal producing subsidiary of CIL, namely Gevra (84) and Kusmunda (12). 66 similar capacity machines are operational in SECL, adding 96 more to the prevailing fleet escalating the total to 162. CIL's OBR performance clocked a growth of 20% at 1,106 million m3 during current fiscal up till January. Besides this contract, CIL had procured 77 dumpers of 150 tonne capacity from Belaz through global bidding in the past years too.",
    class: "old",
  },
  {
    src: Info10,
    para: "VOL. 2",
    date: "JANUARY 2021",
    title: "INDIA DISCOVERS A GATEWAY TO LITHIUM EXPLORATION",
    quotes:
      "Lithium deposits found in Karnataka can be a Benediction to economic and mining revolution",
    describe:
      "In the igneous rocks of the Marlagalla-Allapatna region of Karnataka, The Atomic Minerals Directorate for Exploration and Research (AMD) has seen some marks of lithium resources, whose quantity is estimated to be around 1600 tonne. Although this number is extremely less, it's marked a powerful exploration opportunity for the future. In India, there are regions alongside Mandya (Karnataka) that have shown some potential for exploring rare metal pegmatites, Pachpadra in Rajasthan' and 'Rann of Kachchh in Gujarat' added to the list. Khanij Bidesh India Ltd, an Indian company is sought to be roaming abroad to accommodate mineral assets like cobalt and Lithium Extraction of lithium is typically done either through solar evaporation of giant brine pools or by hard-rock extraction of the ore, relying on the type of the deposit. In India between 2016-17 and 2019-20 (up to November 30), at an estimated bill of $3.3 billion, approximately 165 crore lithium batteries are imported. The exploration of lithium would definitely help India in achieving a worldwide position as electric vehicles, a much-advanced technology of the future, would require lithium-ion rechargeable batteries at a billboard level.",
    class: "old",
  },
  {
    src: Info10,
    para: "VOL. 1",
    date: "JANUARY 2021",
    title: "AUTONOMOUS SOLUTION SALES INCREASE DURING COVID19",
    quotes: "Mining companies look for options to comply with restriction",
    describe:
      "While COVID 19 pandemic Mining industry has already has hampered the sale of mining equipment, it is being driving trucks, autonomous credited to drive the demand blast drills, loaders and of Autonomous Driving remote operation of load Technology adopted technologies for self haul-dump machinery. Now, Caterpillar has seen double- the occurrence of lockdowns digit percentage increase in its sale of autonomous mining technology in 2020 as compared to 2019. Fred Rio (Caterpillar's product manager) has told that remote control tech would be available for construction sites in January. The company is also working with Space Agencies to make the intercontinental remote control of machines possible. has accelerated their deployment. Caterpillar & Komatsu hold a large share of global autonomous haulage systems. Caterpillar here has an advantage, as its technology can be retrofitted onto competitor's equipment. Whereas, Komatsu is being reported to develop technology that would allow equipments of different brands to operate together 'safely and efficiently'.",
    class: "old",
  },
];

const Blog = () => {
  useEffect(() => {
    document.title = "Industrial Info - SME IIT ISM";
  }, []);

  return (
    <div>
      <div className="ind-info-heading-bg mt-4 d-flex align-items-center justify-content-center">
        <h1 className="page-heading text-center py-3 text-uppercase">
          Industrial Info
        </h1>
      </div>
      <Container className="my-5 py-5">
        <Row className="d-flex align-items-center justify-content-center">
          {infoData.map((item, index) => {
            return (
              <Col key={index} xs="12" xl="10">
                <Fade
                  timeout={500}
                  right={index & 1 ? true : false}
                  left={index & 1 ? false : true}
                >
                  <div>
                    <InfoCardL
                      title={item.title}
                      para={item.para}
                      src={item.src}
                      id={index}
                      cls={item.class}
                      date={item.date}
                    />
                  </div>
                </Fade>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

const Blogs = () => {
  return (
    <Router>
      <Route exact path="/resources/ind-info" component={Blog} />
      <Route
        path={`/resources/ind-info/:eventId`}
        component={(props) => (
          <InfoPage infoData={infoData[parseInt(props.match.params.eventId)]} />
        )}
      />
    </Router>
  );
};

export default Blogs;
export { infoData };
