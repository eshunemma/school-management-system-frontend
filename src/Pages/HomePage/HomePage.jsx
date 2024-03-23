import React, { useEffect, useState } from "react";
import "./HomePage.css";
import Button from "../../Component/Button/Button";
import NavBar from "../../Component/NavBar/NavBar";
import QuickInfo from "../../Component/QuickInfo/QuickInfo";
import Footer from "../../Component/Footer/Footer";

const HomePage = () => {
  const [showFirstNavbar, setShowFirstNavbar] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // You can adjust the scroll threshold as needed
      const scrollThreshold = 100;

      if (window.scrollY > scrollThreshold) {
        setShowFirstNavbar(false);
      } else {
        setShowFirstNavbar(true);
      }
    };

    // Attach the scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div>
        {showFirstNavbar ? (
          <>
            <QuickInfo /> <NavBar />
          </>
        ) : (
          <NavBar />
        )}
      </div>
      <div className="hp-01">
        <img src="/sch-imgs/img-1.jpg" alt="ima" />
      </div>
      <div className="hp-vision">
        <div className="hp-v01">
          <div>
            <h2>Vision</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              dolorem, enim ipsam reprehenderit iusto velit eum quaerat nemo
              iure dolorum quibusdam provident consequuntur quae deserunt!
              Blanditiis, voluptate officiis? Ipsam, unde.
            </p>
          </div>
          <div>
            <h2>Values</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              dolorem, enim ipsam reprehenderit iusto velit eum quaerat nemo
              iure dolorum quibusdam provident consequuntur quae deserunt!
              Blanditiis, voluptate officiis? Ipsam, unde.
            </p>
          </div>
          <div>
            <h2>Mission</h2>
            <p>
              LLorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestias dolorem, enim ipsam reprehenderit iusto velit eum
              quaerat nemo iure dolorum quibusdam provident consequuntur quae
              deserunt! Blanditiis, voluptate officiis? Ipsam, unde.
            </p>
          </div>
        </div>
        <div className="hp-ad01">
          <div className="ad-01">
            <img src="/sch-imgs/img-2.jpg" alt="img2" />
          </div>
          <div className="ad-02">
            <div className="ad-02-1">
              <h1>Apply for Admission</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Ratione, tempore quam iusto repellat cumque magni quis
                exercitationem dolore nisi fugiat animi cupiditate accusamus
                unde aperiam sint debitis dolorem ut expedita. tempore quam
                iusto repellat cumque magni quis exercitationem dolore nisi
                fugiat animi cupiditate accusamus unde aperiam sint debitis
                dolorem ut expedita.
              </p>
              <Button name="Apply Now" link="/" />
            </div>
          </div>
        </div>
      </div>
      <div className="metrics">
        <div className="hp-metrics">
          <div className="met-01">
            <span className="material-symbols-outlined icons">school</span>
            <h2>Academics</h2>
          </div>
          <div className="met-01">
            <img src="/sch-imgs/img-7.jpg" alt="sohis" />
          </div>
          <div className="met-01">
            <span className="material-symbols-outlined icons">
              event_available
            </span>
            <h2>News & Events</h2>
          </div>
        </div>
        <div className="hp-metrics">
          <div className="met-02">
            <img src="/sch-imgs/img-5.jpg" alt="sohis" />
          </div>
          <div className="met-02">
            <span className="material-symbols-outlined icons">monitoring</span>
            <h2>GREAT SOHIS</h2>
          </div>
          <div className="met-02">
            <img src="/sch-imgs/img-6.jpg" alt="sohis" />
          </div>
        </div>
      </div>
      <div className="hp-learn">
        <h1>
          An educational centre of the highest quality that meets international
          standards
        </h1>
        <p className="ln-m">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, fugiat
          repudiandae cum ducimus accusamus unde in fugit autem. Error omnis
          officia distinctio quos minus explicabo est enim quidem praesentium
          nihil?
        </p>
        <Button name="> About SOHIS" link="/" class="hp-but" />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
