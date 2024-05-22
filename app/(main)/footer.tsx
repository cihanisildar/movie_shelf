import Image from "next/image";
import styles from "./page.module.scss";
import { MdMovie } from "react-icons/md";

const Footer = () => {
  return (
    <div
      className={`h-screen flex items-center justify-end gap-10 text-white bg-[url('/images/222.jpg')] bg-no-repeat bg-right bg-cover	`}
    >
      <div className="flex flex-col justify-center gap-5 w-2/5 h-3/5 mr-20">
        <div className="flex flex-col gap-5">
          <h2 className="text-sm">Discover</h2>
          <h1 className="text-4xl font-bold tracking-wide">
            Latest Movie Reviews and Recommendations
          </h1>
          <h3>
            Stay up-to-date with the latest movie reviews and recommendations
            from our team of experts. Whether you're a fan of action, romance,
            or comedy, we've got you covered.
          </h3>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex gap-3 items-center">
            <MdMovie size={25} />
            Action-packed thrillers that will keep you on the edge of your seat
          </div>
          <div className="flex gap-3 items-center">
            <MdMovie size={25} />
            Heartwarming love stories that will make you believe in romance
          </div>
          <div className="flex gap-3 items-center">
            <MdMovie size={25} />
            Hilarious comedies that will have you laughing out loud
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
