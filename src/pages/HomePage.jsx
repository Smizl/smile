import Women from "../assets/Rectangle-3856.png";
import Women2 from "../assets/Rectangle 3836.png";
import Mindfulness from "../assets/mindfulness 1.png";
import Man from "../assets/man.png";
import Womendriver from "../assets/women driver.png";
import Video1 from "../assets/video (1).png";
import Video2 from "../assets/video.png";
import Video3 from "../assets/video (2).png";
import Calendar from "../assets/calendar-edit.png";
import Optimistic from "../assets/optimistic 1.png";
import Dollar from "../assets/dollar-square.png";
import Verify from "../assets/verify.png";
import Group from "../assets/Group.png";
import Clock from "../assets/clock.png";
import G15 from "../assets/g15.png";
import Driving from "../assets/driving.png";
import Hands from "../assets/hands.png";
import Pazzle from "../assets/pazzle.png";
import Naving from "../assets/navig.png";
import Down from "../assets/trend-down.png";

function HomePage() {
  return (
    <main>
      <section className="section1">
        <div className="content">
          <h1 className="headline">
            Compassionates
            <br />
            and Reliables
            <br />
            Care, Every Mile
            <br />
            of the Way.
          </h1>
          <nav className="button-nav">
            <button href="#" className="book-now">
              Book Now &rightarrow;
            </button>
          </nav>
        </div>
        <div className="image">
          <img src={Women} alt="Women" className="Women" />
        </div>
      </section>
      <section className="section2 section--row">
        <div className="section_intro">
          <p className="section__subtitle">For Patients and Caregivers</p>
          <h2 className="section__title">
            Your journey to better <br /> health starts here
          </h2>
          <p className="section__description">
            Let us take the stress out of transportation so you can focus on
            what truly matters – your health. Our friendly drivers are here to
            help you every step of the way.
          </p>
          <img className="img__women2" src={Women2} alt="Women 2" />
        </div>
        <div className="section__futures">
          <ul className="list">
            <li className="list__item">
              <article className="feature">
                <div className="f__container">
                  <div className="f__header">
                    <img className="f__icon" src={Mindfulness} alt="flower" />
                    <span className="f__title">Stress-free travel</span>
                  </div>
                  <p className="f__description">
                    Relax and focus on your well-being. We handle the driving,
                    door-to-door.
                  </p>
                </div>
              </article>
            </li>
            <li className="list__item">
              <article className="feature">
                <div className="f__container">
                  <div className="f__header">
                    <img className="f__icon" src={Clock} alt="clock" />
                    <span className="f__title">Reliable appointments</span>
                  </div>
                  <p className="f__description">
                    Never miss a doctor's visit or dialysis treatment. We get
                    you there on time, every time.
                  </p>
                </div>
              </article>
            </li>
            <li className="list__item">
              <article className="feature">
                <div className="f__container">
                  <div className="f__header">
                    <img className="f__icon" src={G15} alt="hand" />
                    <span className="f__title">Compassionate care</span>
                  </div>
                  <p className="f__description">
                    Our friendly drivers are dedicated to your safety and
                    comfort.
                  </p>
                </div>
              </article>
            </li>
            <li className="list__item">
              <article className="feature">
                <div className="f__container">
                  <div className="f__header">
                    <img className="f__icon" src={Driving} alt="Drive" />
                    <span className="f__title">Comfortable rides</span>
                  </div>
                  <p className="f__description">
                    Enjoy clean, well-maintained vehicles with accessibility
                    features.
                  </p>
                </div>
              </article>
            </li>
          </ul>
          <nav>
            <button className="link__se3" href="#">
              Book your ride today &rightarrow;
            </button>
          </nav>
        </div>
      </section>
      <section className="p_section">
        <div className="p__header">
          <p className="p__subtitle">For Partners</p>
          <h1 className="p__title">
            Partner with us for seamless <br /> patient transportation
          </h1>
          <p className="p__description">
            Let's work together to make patient transportation a breeze.
          </p>
        </div>
        <ul className="p__list">
          <li className="p__item">
            <article className="p__feature">
              <img src={Man} alt="man1" className="Man1" />
              <h2 className="p__feature-title">Dedicated account manager</h2>
              <p className="p__feature-description">
                Get personalized support and communication every step of the
                way.
              </p>
            </article>
          </li>
          <li className="p__item">
            <article className="p__feature">
              <img className="p__img" src={Hands} alt="hands1" />
              <h2 className="p__feature-title">Community partnership</h2>
              <p className="p__feature-description">
                Partner with a company committed to serving your community.
              </p>
            </article>
          </li>
          <li className="p__item">
            <article className="p__feature">
              <img className="p__img" src={Pazzle} alt="pazzle" />
              <h2 className="p__feature-title">Seamless integration</h2>
              <p className="p__feature-description">Easy to get started.</p>
            </article>
          </li>
          <li className="p__item">
            <article className="p__feature">
              <img className="p__img" src={Naving} alt="navig" />
              <h2 className="p__feature-title">
                Reliable transportation solutions
              </h2>
              <p className="p__feature-description">
                Ensure on-time door-to-door transportation for your needs all
                the time.
              </p>
            </article>
          </li>
          <li className="p__item">
            <article className="p__feature">
              <img className="p__img" src={Down} alt="down" />
              <h2 className="p__feature-title">Reduced stress and costs</h2>
              <p className="p__feature-description">
                Get rid of transportation logistics and system costs. Create
                more value by focusing on what you do best.
              </p>
            </article>
          </li>
          <li className="p__item">
            <article className="p__nav">
              <p className="p__cta">
                <b>Partner with us today!</b>
              </p>
              <button className="p__button">Get in Touch &rightarrow;</button>
            </article>
          </li>
        </ul>
      </section>
      <section className="j__section">
        <img className="wmndriver" src={Womendriver} alt="d1" />
        <div className="jtext">
          <div className="j__header">
            <p className="j__text">For Drivers</p>
            <h2 className="join__title">
              Join our team of <br /> dedicated professionals
            </h2>
          </div>
          <ul className="join__list">
            <li className="join-item">
              <article className="join-card">
                <div className="join-card-header">
                  <img className="join_icon" src={Calendar} alt="cale" />
                  <h2 className="join_card_title">Flexible work schedule</h2>
                </div>
                <p className="join_card_desc">
                  Choose hours that fit your life.
                </p>
              </article>
            </li>
            <li className="join-item">
              <article className="join-card">
                <div className="join-card-header">
                  <img className="join_icon" src={Optimistic} alt="positive" />
                  <h2 className="join_card_title">Positive Impact</h2>
                </div>
                <p className="join_card_desc">
                  Help people access essential services with care and respect.{" "}
                  <br /> Make a difference in your community.
                </p>
              </article>
            </li>
            <li className="join-item">
              <article className="join-card">
                <div className="join-card-header">
                  <img className="join_icon" src={Dollar} alt="dollar" />
                  <h2 className="join_card_title">
                    Competitive pay and benefits
                  </h2>
                </div>
                <p className="join_card_desc">
                  Earn while doing rewarding work. We value our driver <br />{" "}
                  community.
                </p>
              </article>
            </li>
            <li className="join-item">
              <article className="join-card">
                <div className="join-card-header">
                  <img className="join_icon" src={Verify} alt="verify" />
                  <h2 className="join_card_title">Be successful</h2>
                </div>
                <p className="join_card_desc">
                  We strive to provide comprehensive training and a hassle-free{" "}
                  <br /> driving experience.
                </p>
              </article>
            </li>
            <li className="join-item">
              <article className="join-card">
                <div className="join-card-header">
                  <img className="join_icon" src={Group} alt="group" />
                  <h2 className="join_card_title">Join our community</h2>
                </div>
                <p className="join_card_desc">
                  Apply today and start making a difference
                </p>
              </article>
            </li>
            <li className="join-item">
              <article className="join-card">
                <nav className="join-nav">
                  <button className="join_link" href="#">
                    Apply Now &rarr;
                  </button>
                </nav>
              </article>
            </li>
          </ul>
        </div>
      </section>
      <section className="s__section">
        <div className="s__header">
          <h1 className="s__title">What our community says</h1>
          <p className="s__description">
            Hear from the people who trust us most
          </p>
        </div>

        <ul className="s__list">
          <li className="s__item">
            <article className="s__article">
              <p className="s__quote">
                “Jane, my driver, is always so kind <br /> and patient. He makes
                getting to <br /> my dialysis appointments stress- <br />
                free."{" "}
              </p>
              <div className="s__role-name">
                <h2 className="s__role">Rider</h2>
                <p className="s__name">Jane, Houston, TX</p>
              </div>
            </article>
          </li>
          <li className="s__item">
            <article className="s__article">
              <p className="s__quote">
                “I love the flexibility of this job. I get <br /> to help people
                and make a <br /> difference, while still having time <br /> for
                my family”
              </p>
              <div className="s__role-name">
                <h2 className="s__role">Driver</h2>
                <p className="s__name">John, Dallas, TX</p>
              </div>
            </article>
          </li>
          <li className="s__item">
            <article className="s__article">
              <p className="s__quote">
                "Having a reliable transportation <br /> partner like Kerico
                allows us to <br /> focus on our core business,
                <br /> knowing that our employees and <br /> clients are well
                taken care of."
              </p>
              <div className="s__role-name">
                <h2 className="s__role">Business</h2>
                <p className="s__name">PADS, Houston, TX</p>
              </div>
            </article>
          </li>
        </ul>
      </section>
      <section className="testimonial-videos">
        <h1 className="t_h1">Watch more testimonials</h1>
        <ul>
          <li>
            <article>
              <img src={Video1} alt="v1" />
            </article>
          </li>
          <li>
            <article>
              <img src={Video2} alt="v2" />
            </article>
          </li>
          <li>
            <article>
              <img src={Video3} alt="v3" />
            </article>
          </li>
        </ul>
        <button className="t_button">Learn More &rarr;</button>
      </section>
      <section className="book-section">
        <h1>Book your ride today!</h1>
        <button>Book Now&rarr;</button>
      </section>
    </main>
  );
}

export default HomePage;
