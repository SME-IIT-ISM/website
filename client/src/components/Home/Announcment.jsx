import Marquee from "react-easy-marquee";

const Announcement = () => {
  const data = [
    "Announcement 8",
    "Announcement 7",
    "Announcement 6",
    "Announcement 5",
    "Announcement 4",
    "Announcement 3",
    "Announcement 2",
    "Announcement 1",
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
          {data.map((item, id) => (
            <p key={id}>
              <b>{item}</b>
            </p>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Announcement;
