import React from "react";
import "./AboutPage.css";
import NavBar from "../../Component/NavBar/NavBar";
import Footer from "../../Component/Footer/Footer";
const AboutPage = () => {
  return (
    <div>
      <NavBar />
      <div className="ab-content">
        <div className="ab-01">
          <img src="/sch-imgs/img-1.jpg" alt="ima" />
        </div>
        <div className="text-bd">
          <div className="moto">
            <h1>Our Motto</h1>
            <h1>"Arise and Shine"</h1>
          </div>
          <div className="vl-cover">
            <div className="vl-p vision">
              <h2>Vision</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias dolorem, enim ipsam reprehenderit iusto velit eum
                quaerat nemo iure dolorum quibusdam provident consequuntur quae
                deserunt! Blanditiis, voluptate officiis? Ipsam, unde.
              </p>
            </div>
            <div className="vl-p values">
              <h2>Values</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias dolorem, enim ipsam reprehenderit iusto velit eum
                quaerat nemo iure dolorum quibusdam provident consequuntur quae
                deserunt! Blanditiis, voluptate officiis? Ipsam, unde.
              </p>
            </div>
            <div className="vl-p mission">
              <h2>Mission</h2>
              <p>
                LLorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias dolorem, enim ipsam reprehenderit iusto velit eum
                quaerat nemo iure dolorum quibusdam provident consequuntur quae
                deserunt! Blanditiis, voluptate officiis? Ipsam, unde.
              </p>
            </div>
          </div>
          <div className="hist">
            <h1>Brief History</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Cupiditate, culpa dolores? Mollitia quia autem eius eaque
              veritatis! Maxime quidem adipisci est nobis ullam commodi amet
              expedita, aliquid dicta illum asperiores blanditiis reprehenderit
              nostrum qui laboriosam laudantium, officia rem a nesciunt
              cupiditate. Consequuntur hic vel aperiam qui nulla dolor error
              itaque, dolorum temporibus recusandae veniam eos veritatis
              excepturi, velit, molestiae et. Autem, consectetur velit ex
              expedita enim quidem eum distinctio architecto facilis repudiandae
              vero optio quam facere quaerat officia aspernatur modi sapiente
              corrupti! Unde ullam praesentium, itaque corrupti quam
              perspiciatis doloribus a eum, impedit rerum deleniti sit
              voluptatum reprehenderit. Nemo, quae.
            </p>
          </div>
          <div className="sch-str-ti">
            <h1>SCHOOL STRUCTURE</h1>
          </div>
          <div className="sch-str">
            <div className="sch-str-in">
              <h1>Pre-School</h1>
              <p>
                This consists of Crèche, Nursery and Kindergarten for children
                between the ages of 12 months and 5 years.
              </p>
            </div>
            <div className="sch-str-in primary">
              <h1>Primary</h1>
              <p>
                This consists of Crèche, Nursery and Kindergarten for children
                between the ages of 12 months and 5 years.
              </p>
            </div>
            <div className="sch-str-in">
              <h1>Junior High School</h1>
              <p>
                This consists of Crèche, Nursery and Kindergarten for children
                between the ages of 12 months and 5 years.
              </p>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
