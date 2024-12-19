import { Certification } from "../Interfaces";
import { LINUX_ICON } from "./IconsTechList";

export const Base_URL = import.meta.env.BASE_URL;

export const CERTIFICATIONS: Certification[] = [
  {
    title: "Linux",
    img: LINUX_ICON,
    dedscription: "Workshop where Linux topics were covered in depth, such as the terminal, the file system, package managers and important commands.",
    srcPath: `${Base_URL}/certifications/Certification-Linux.pdf`,
  },
  {
    title: "Operating Systems",
    img: <img src={`${Base_URL}/images/cert-ssoo.webp`} />,
    dedscription: "Course that dealt mainly with programming focused on operating systems with low-level languages ​​as well as their correct functioning.",
    srcPath: `${Base_URL}/certifications/Certification-SSOO.pdf`,
  },
  {
    title: "Oracle",
    img: <img src={`${Base_URL}/images/cert-oracle.webp`} />,
    dedscription: "Introduction to the Database service offered by the Oracle company.",
    srcPath: `${Base_URL}/certifications/Certification-Oracle.pdf`,
  },
  {
    title: "Visual Cryptography",
    img: <img src={`${Base_URL}/images/cert-matlab.webp`} />,
    dedscription: "Workshop where visual cryptography was explained and an algorithm was demonstrated to encrypt physical documents using MatLab.",
    srcPath: `${Base_URL}/certifications/Certification-MatLab.pdf`,
  },
];