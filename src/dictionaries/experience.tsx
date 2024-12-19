import { CardDate } from "../Interfaces";
import { Base_URL } from "./certifications";

export type JOBS = "SKY" | "INDRA" | "CEE" | "LULU" | "PORTFOLIO" | "GITHUB";

export const JOBS_LIST: JOBS[] = [
  "SKY",
  "CEE",
  "INDRA",
  "LULU",
  "PORTFOLIO",
  "GITHUB",
];

export interface JobInfo {
  title: string;
  imgURL: string;
  imgAlt: string;
  url: string | undefined;
  startDate?: CardDate;
  endDate?: CardDate;
  client?: string;
  description: string;
}

export const EXPERIENCE_INFO: Record<JOBS, JobInfo> = {
  SKY: {
    title: "Sky México",
    imgURL: `${Base_URL}/images/test-sky-02.webp`,
    imgAlt: "Sky México Aplicación Sky Más",
    url: "https://www.skymas.mx/webclient/#/login",
    startDate: {day: "15", month: "06", year:"2022"},
    endDate: {day: "18", month: "10", year:"2024"},
    description: "I worked here as a Frontend Developer creating and maintaining streaming and VOD content applications. I used technologies such as React, Angular, SASS, Next.JS and Typescript."
  },
  CEE: {
    title: "Consultoría Educativa Especializada",
    imgURL: `${Base_URL}/images/test-cee-02.webp`,
    imgAlt: "Consultoría Educativa Especializada CDMX",
    url: "https://jetrejo.github.io/CEE/",
    startDate: {day: "", month: "March", year:"2024"},
    description: "Landing page that I developed as a freelancer for an educational consultancy, which needed to show its catalog of services and available courses. Developed with Vanilla JavaScript, HTML and CSS."
  },
  INDRA: {
    title: "Indra Sistemas México",
    imgURL: `${Base_URL}/images/test-indra-01.webp`,
    imgAlt: "Imagen Indra Sistemas México",
    url: undefined,
    client: "BBVA",
    startDate: {day: "22", month: "12", year:"2021"},
    endDate: {day: "27", month: "05", year:"2022"},
    description: "My first formal job as a developer. I had to maintain the bank's ingestion system and generate incident reports. I worked with Scala, SparkSQL, BitBucket and Jenkins."
  },
  LULU: {
    title: "Lu-Lu Coffee Beans",
    imgURL: `${Base_URL}/images/test-lulu-04.webp`,
    imgAlt: "Lu-Lu Coffee Beans Banner",
    url: "https://jt070.github.io/LandingPage_MaryCoffeeBrand/",
    startDate: {day: "", month: "December", year:"2021"},
    description: "Page I developed as a practice for a supposed coffee brand, inspired by the Nescafé page at that time. Made only with HTML and CSS, highlighting the Responsive Design."
  },
  PORTFOLIO: {
    title: "Landing Page Portfolio",
    imgURL: `${Base_URL}/images/test-portfolio-01.webp`,
    imgAlt: "Portfolio Banner JT.",
    url: "https://github.com/JETREJO/JETREJO",
    startDate: {day: "", month: "December", year:"2024"},
    description: "Portfolio-style landing page which I recently updated using technologies such as React, Vite and TypeScript, since the first version was built with only HTML, CSS and Vanilla JavaScript."
  },
  GITHUB: {
    title: "GitHub projects",
    imgURL: `${Base_URL}/images/test-github-01.webp`,
    imgAlt: "Portfolio Banner JT.",
    url: "https://github.com/JETREJO",
    description: "On my GitHub portal I have some projects that I have done in my free time and interesting ones that I did at university, with technologies such as C#, Bash Scripting, Assembly, among others."
  }
};
