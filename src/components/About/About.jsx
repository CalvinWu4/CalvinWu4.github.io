import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, resume } = about;
  const goodreadsWidget = `
  <style>
  #customize-list{
    float:left;
    margin-left:20px;
    list-style:none;
  }
  #gr_updates_widget{
  box-sizing: unset;
  float:left;
  border-radius: 5px;
  background-color:#fff;
  border:solid #683205 10px;
  -webkit-box-shadow: 0px 0px 4px 1px #595959,
  inset 0px 0px 0px 1px #7D730B;
  -moz-box-shadow: 0px 0px 4px 1px #595959,
  inset 0px 0px 0px 1px #7D730B;
  box-shadow: 0px 0px 4px 1px #595959,
  inset 0px 0px 0px 1px #7D730B;
  padding:15px 0 0px 15px;
  width:250px;
  height:365px;
  }
  #gr_footer{
  margin-bottom:0px;
  height:30px;
  }
  #gr_updates_widget p{
  padding:0px;
  margin:0;
  font-size:14px;
  }
  #gr_footer img{
  width:100px;
  float:left;
  }
</style>
<div id="gr_updates_widget">
  <iframe id="the_iframe" src="https://goodreads.com/widgets/user_update_widget?height=400&num_updates=10&user=122258550&width=250" width="248" height="330" frameborder="0"></iframe>
        <div id="gr_footer">
          <a href="https://www.goodreads.com/"><img alt="Goodreads: Book reviews, recommendations, and discussion" src="https://www.goodreads.com/images/layout/goodreads_logo_140.png" /></a>
        </div>
      </div>
`;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about">
      <Container>
        <Title title="About Me" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {paragraphOne ||
                    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphTwo ||
                    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphThree || 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'}
                </p>
                <p className="about-wrapper__info-text">
                  📚 Follow my pandemic-borne life's goal to read the great books:
                  <div dangerouslySetInnerHTML={{ __html: goodreadsWidget }} />
                </p>
                {resume && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={resume}
                    >
                      Resume
                    </a>
                  </span>
                )}
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
