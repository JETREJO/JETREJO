import { Certification } from "../Interfaces";
import { LINUX_ICON } from "./IconsTechList";

export const Base_URL = import.meta.env.BASE_URL;

export const CERTIFICATIONS: Certification[] = [
  {
    title: "Linux",
    img: LINUX_ICON,
    dedscription: "Taller en donde se vio a profundidad temas de Linux, como la terminal, el sistema de ficheros, gestores de paquetes y comandos importantes.",
    srcPath: `${Base_URL}/certifications/Certification-Linux.pdf`,
  },
  {
    title: "Sistemas Operativos",
    img: <img src={`${Base_URL}/images/cert-ssoo.png`} />,
    dedscription: "Curso que trató principalmente de programación enfocada a sistemas operativos con lenguajes de bajo nivel así como el correcto funcionamiento de estos.",
    srcPath: `${Base_URL}/certifications/Certification-SSOO.pdf`,
  },
  {
    title: "Oracle",
    img: <img src={`${Base_URL}/images/cert-oracle.jpg`} />,
    dedscription: "Introducción al servicio de Bases de Datos que ofrece la empresa de Oracle.",
    srcPath: `${Base_URL}/certifications/Certification-Oracle.pdf`,
  },
  {
    title: "Criptografía Visual",
    img: <img src={`${Base_URL}/images/cert-matlab.png`} />,
    dedscription: "Taller donde se explicó qué es la criptografía visual y se demostró con un algoritmo para encriptar documentos físicos usando MatLab.",
    srcPath: `${Base_URL}/certifications/Certification-MatLab.pdf`,
  },
];