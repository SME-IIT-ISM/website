import React, { useState } from "react";

const KhananContent = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpen = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <div className="k-content my-5 mx-auto text-center p-4 shadow-sm rounded-2xl bg-white max-w-3xl">
      <p className="fs-5 lh-lg mb-4">
        <strong>KHANAN 2025</strong>, the biggest Mining Fest in India, aims to bring
        the students from several institutions offering mining and allied courses
        across the country. This year’s two-day summit shall include a series of
        vibrant events such as panel discussions, guest lectures by eminent
        personalities in the mining industry from across the world, paper
        presentations and case studies, thus exposing the students to current
        developments, trends and challenges in the industry. The participants shall
        be provided with a platform that would showcase their talent and enhance
        their technical skills and response to real world problems, the two pillars
        of professionalism in any field.
      </p>

      {/* Button */}
  

      {/* Modal */}
      
    </div>
  );
};

export default KhananContent;
