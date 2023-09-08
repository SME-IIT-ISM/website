import Marquee from "react-easy-marquee";

const Announcement = () => {
  const data = [
    "Khanan is coming ! Be Ready","Registration process for Khanan-23 events are going on. Checkout the khanan page",


  ];

  return (
    <div>
      <h1 className="heading text-uppercase text-center">Announcements</h1>
      <div className="py-3">
        <Marquee
          duration={10000}
          background="#fff"
          height="350px"
          width="100%"
          axis="Y"
          align="center"
          pauseOnHover={true}
          reverse={true}
        >
          {/* {data.map((item, id) => (
            <p key={id}>
              <b>{item}</b>
            </p>
          ))} */}


          {/* <a className="text-decoration-none text-dark" href="https://drive.google.com/drive/folders/1efY1BrZUBAml268Et3YiPsXdNmnZykOS?usp=sharing" target="_blank"  >
          <b>Problem statement of Nirvana is released. Check out Now</b>
          </a> */}
          
          <h4>
          Khanan'2023 is coming soon.
          <div>
          <a href="/events/khanan">For more Details</a>
          </div>

          </h4>



        </Marquee>
      </div>
    </div>
  );
};

export default Announcement;
