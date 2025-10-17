import Marquee from "react-easy-marquee";

const Announcement = () => {
  const data = [
    "🚀 Khanan 2025 is coming! Get ready for the grand fest!",
    "📝 Registration for Khanan-25 events is now live — don’t miss out!",
  ];

  return (
    <section className="announcement-section py-5 bg-light">
      <div className="container">
        <h1 className="text-uppercase text-center fw-bold mb-4">
          Announcements
        </h1>

        <div className="announcement-marquee border rounded-3 shadow-sm p-3 bg-white">
          <Marquee
            duration={12000}
            background="#fff"
            height="300px"
            width="100%"
            axis="Y"
            align="center"
            pauseOnHover={true}
            reverse={true}
          >
            {data.map((item, id) => (
              <div key={id} className="text-center my-4">
                <p className="fs-5 mb-0">{item}</p>
              </div>
            ))}

            <div className="text-center my-4">
              <h4 className="fw-semibold mb-2">
                🎉 Khanan'2025 is coming soon!
              </h4>
              <a
                href="/events/khanan"
                className="btn btn-outline-primary btn-sm rounded-pill px-4"
              >
                For More Details
              </a>
            </div>
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default Announcement;
