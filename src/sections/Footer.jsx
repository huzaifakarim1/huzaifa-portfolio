import { socialImgs } from "../constants/index";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center md:items-start items-center">
          <details className="resume-menu">
            <summary>Download Resume</summary>
            <div className="resume-options">
              <a href="/resume/muhammad-huzaifa-karim-fullstack-resume.pdf" download>
                Full-Stack Developer
              </a>
              <a href="/resume/muhammad-huzaifa-karim-ai-ml-resume.pdf" download>
                AI / ML &amp; Data Science
              </a>
            </div>
          </details>
        </div>
        <div className="socials">
          {socialImgs.map((img) => (
            <a className="icon" target="_blank" href={img.url} key={img.url}>
              <img src={img.imgPath} alt="social links" />
            </a>
          ))}
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Muhammad Huzaifa Karim. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
