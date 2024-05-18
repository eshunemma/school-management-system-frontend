import React, { useEffect, useState } from "react";
import "./HomePage.css";
import Button from "../../Component/Button/Button";
import NavBar from "../../Component/NavBar/NavBar";
import QuickInfo from "../../Component/QuickInfo/QuickInfo";
import Footer from "../../Component/Footer/Footer";
import HomeSwiper from "../../Component/Swiper/HomeSwiper";

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
            <QuickInfo /> <NavBar jack={false} />
          </>
        ) : (
          <NavBar jack={true} />
        )}
      </div>
      <div className="hp-01">
        <HomeSwiper />
      </div>
      <div className="hp-vision">
        <div className="hp-v01">
          <div className="hp-v01-01">
            <span class="material-symbols-outlined">church</span>
            <div>
              <p>Campus Life</p>
              <p>We Blend Right</p>
            </div>
          </div>
          <div className="hp-v01-02">
            <span class="material-symbols-outlined">school</span>
            <div>
              <p>Graduation</p>
              <p>Certifications</p>
            </div>
          </div>
          <div className="hp-v01-03">
            <span class="material-symbols-outlined">sports_soccer</span>
            <div>
              <p>Athletics</p>
              <p>Sport Clubs</p>
            </div>
          </div>
          <div className="hp-v01-04">
            <span class="material-symbols-outlined">group</span>
            <div>
              <p>Athletics</p>
              <p>Sport Clubs</p>
            </div>
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
      {/* <div className="metrics">
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
      </div> */}
      <div>
        <div className="about-hm">
          <div className="ab-hm-t">
            <div className="ab-hm-1">
              <img src="sohis-logo.png" alt="" />
              <h3>About SOHIS</h3>
            </div>
            <div className="ab-hm-2">
              <h3>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Placeat et saepe, blanditiis error rem reprehenderit voluptate
                pariatur. Cum inventore eos accusamus nihil fugit! Sed at
                repudiandae deleniti natus, sint tempora ullam sapiente autem
                asperiores ipsam repellat commodi, veniam hic iste libero
                consequatur quo quos! Doloremque unde sint aliquam adipisci
                itaque.
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Repudiandae, nisi odit? Praesentium a, harum esse delectus sint
                quo fuga nisi mollitia. Nesciunt sapiente amet qui ullam
                consequuntur provident aspernatur dolor, ratione nam voluptates
                non laudantium corrupti laboriosam voluptatibus rem accusamus
                excepturi. Suscipit numquam inventore eveniet odit ducimus
                sapiente similique repellat ipsa sed dolore facilis, iste
                praesentium mollitia. Illum fugiat doloremque est laborum quam
                vel, veniam eveniet tempore dignissimos reiciendis harum,
                perspiciatis voluptatum, cupiditate sapiente libero temporibus
                ducimus assumenda! Esse exercitationem dolor ut eos sed
                similique ad nesciunt praesentium. Dolores minus delectus
                aliquid repellat dignissimos explicabo ad nobis pariatur porro
                laborum.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="quicks">
        <div className="quicks-1">
          <h3>News & Updates</h3>
          <a href="/">Read All News</a>
          <img src="/sch-imgs/img-2.jpg" alt="" />
          <p>SOHIS Cultural day celebration.</p>
          <Button name="Read More" link="/" />
        </div>
        <div className="quicks-2">
          <h3>
            Quick Links
            <span class="material-symbols-outlined">link</span>
          </h3>
          <ul>
            <li>
              <a href="/">Alumni & Donors</a>
              <div className="underline"></div>
            </li>
            <li>
              <a href="/">Athletic Calendar</a>
              <div className="underline"></div>
            </li>
            <li>
              <a href="/">All AEC Events</a>
              <div className="underline"></div>
            </li>
            <li>
              <a href="/">Partnership & Out Reach</a>
              <div className="underline"></div>
            </li>
            <li>
              <a href="/">Academic Programs</a>
              <div className="underline"></div>
            </li>
            <li>
              <a href="/">Tution And Fees</a>
              <div className="underline"></div>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
