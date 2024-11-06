import jobAppTrackerImage from "../assets/Job Application Tracker.png";
import { FaGithub } from "react-icons/fa";
import {
  FaJs,
  FaReact,
  FaHtml5,
  FaCss3,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoFirebase } from "react-icons/io5";

export const projectList = [
  {
    name: "Job Application Tracker",
    image: jobAppTrackerImage,
    description:
      "The Job Application Tracker helps users manage their job applications with secure Firebase authentication, real-time updates, and application status tracking. It features a responsive design, search and filter options, and the ability to add, update, and delete applications.",
    techsUsed: {
      techNames: ["React", "Tailwind", "Firebase"],
      techIcons: [
        <FaReact color="#61DAFB" size={18} key="react-icon" />,
        <RiTailwindCssFill color="#38B2AC" size={18} key="tailwind-icon" />,
        <IoLogoFirebase color="#FFCB2B" size={18} key="firebase-icon" />,
      ],
    },
    github: {
      icon: <FaGithub color="#fffff" size={18} />,
      link: "https://github.com/angelosoreta123/Job-Application-Tracker",
    },
    openLink: {
      icon: <FaExternalLinkAlt color="#fffff" size={18} />,
      link: "https://job-application-tracker-3f0b3.web.app/",
    },
  },
  {
    name: "Job Application Tracker",
    image: jobAppTrackerImage,
    description:
      "The Job Application Tracker helps users manage their job applications with secure Firebase authentication, real-time updates, and application status tracking. It features a responsive design, search and filter options, and the ability to add, update, and delete applications.",
    techsUsed: {
      techNames: ["React", "Tailwind", "Firebase"],
      techIcons: [
        <FaReact color="#61DAFB" size={18} key="react-icon" />,
        <RiTailwindCssFill color="#38B2AC" size={18} key="tailwind-icon" />,
        <IoLogoFirebase color="#FFCB2B" size={18} key="firebase-icon" />,
      ],
    },
    github: {
      icon: <FaGithub color="#fffff" size={18} />,
      link: "https://github.com/angelosoreta123/Job-Application-Tracker",
    },
    openLink: {
      icon: <FaExternalLinkAlt color="#fffff" size={18} />,
      link: "https://job-application-tracker-3f0b3.web.app/",
    },
  },
];
