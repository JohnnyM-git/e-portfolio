import React from "react";
import Me from "../assets/me.jpeg";
import { FaDownload } from "react-icons/fa";
import { MdEmail, MdPhone, MdPhoneAndroid, MdPhoneCallback, MdWeb } from "react-icons/md";
import { AiFillLinkedin } from "react-icons/ai";
import { experienceConfig } from "../config/resume/experienceConfig";
import { technicalSkillsConfig } from "../config/resume/technicalSkillsConfig";
import { transferrableSkillsConfig } from "../config/resume/transferrableSkillsConfig";
import { familiarSkillsConfig } from "../config/resume/familiarSkillsConfig";
import { AnimatedHeader } from "../components/AnimateHeader";
import resume from "../assets/JohnnyMartensResume.pdf";

const Resume = () => {
  return (
    <div id="resume" className="container">
      <div
        className="projects__text-container"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        <AnimatedHeader className={"projects__header"} headerText={"Resume"} />
      </div>
      <div className="resume__wrapper">
        <div className="resume__grid" data-aos="fade-up" data-aos-delay="500">
          <div className="resume__image">
            {/* <img src={Me} alt="" /> */}
          </div>
          <div>
            <div className="resume__name playfair">Johnny Martens</div>
            <div className="resume__title lato">Full Stack Developer</div>
            <div className="resume__contact--info">
              <div>
                <FaDownload />
                <a className="resume__link" href={resume} target="_blank">
                  Download resume
                </a>
              </div>
              <div>
                <MdPhoneAndroid />
                <a className="resume__link" href="tel:15195648630">
                  +1 519-564-8630
                </a>
              </div>
              <div>
                <MdEmail />
                <a className="resume__link" href="mailto:johnny@johnnym.me">
                  Email
                </a>
              </div>
              <div>
                <AiFillLinkedin />
                <a
                  className="resume__link"
                  href="https://www.linkedin.com/in/johnny-martens-71537420a"
                  target="_blank"
                >
                  Linkedin
                </a>
              </div>
            </div>
            <div>
              A highly motivated software engineer prepared to utilise
              exceptional software, problem-solving and communication skills to
              further my programming passion as a website developer.
            </div>
          </div>
        </div>

        

        <div className="resume__grid" data-aos="fade-up" data-aos-delay="500">
          <div className="resume__title--description">Experience</div>
          <div>
            {experienceConfig.map((experience, index) => (
              <div className="resume__job--wrapper" key={index}>
                <div className="resume__job">
                  <div>
                    <div className="resume__job--description">
                      {experience.title}
                    </div>
                    <div className="resume__job--name">{experience.name}</div>
                  </div>
                  <div className="resume__job--date">{experience.date}</div>
                </div>

                <ul className="resume__list-wrapper">
                  {experience.description.map((description, index) => (
                    <li key={index}>{description}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="resume__grid" data-aos="fade-up" data-aos-delay="500">
          <div className="resume__title--description">Technical Skills</div>
          <div>
            <div>
              <ul className="resume__list-wrapper resume__skills--list-wrapper">
                {technicalSkillsConfig.map((technicalSkills, index) => (
                  <li key={index}>{technicalSkills}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="resume__grid" data-aos="fade-up" data-aos-delay="500">
          <div className="resume__title--description">Transferrable Skills</div>
          <div>
            <div>
              <ul className="resume__list-wrapper resume__skills--list-wrapper">
                {transferrableSkillsConfig.map((transferrableSkills, index) => (
                  <li key={index}>{transferrableSkills}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="resume__grid" data-aos="fade-up" data-aos-delay="500">
          <div className="resume__title--description">Familiar Skills</div>
          <div>
            <div>
              <ul className="resume__list-wrapper resume__skills--list-wrapper">
                {familiarSkillsConfig.map((transferrableSkills, index) => (
                  <li key={index}>{transferrableSkills}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="resume__grid" data-aos="fade-up" data-aos-delay="500">
          <div className="resume__title--description">Education</div>
          <div>
            <div className="resume__education--wrapper">
              <div className="resume__education">
                <div className="resume__job--name">
                  Frontend Simplified
                </div>
                <div>
                  Frontend Developer Bootcamp
                </div>
              </div>
              <div className="resume__job--date">2021 - 2022</div>
            </div>
          </div>
        </div>

        <div className="resume__grid resume__bottom" data-aos="fade-up" data-aos-delay="500">
          {/* <div className="resume__title--description">References</div>
          <div>Available Upon request</div> */}
        </div>
      </div>
    </div>
  );
};

export default Resume;
