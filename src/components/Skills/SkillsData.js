import {
  FaHtml5,
  FaCss3,
  FaJava,
  FaReact,
  FaNode,
  FaBootstrap,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import {
  SiTypescript,
  SiExpress,
  SiTailwindcss,
  SiDaisyui,
  SiFirebase ,
  SiMongodb,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
const skillsData = [
  {
    title: 'Languages',
    skills: [
      { Icon: FaHtml5, label: 'Html' },
      { Icon: FaCss3, label: 'Css' },
      { Icon: IoLogoJavascript, label: 'Javascript' },
      { Icon: FaJava, label: 'Java' },
      { Icon: SiTypescript, label: 'Typescript' },
    ],
  },
  {
    title: 'Framework/Libraries',
    skills: [
      { Icon: FaReact, label: 'React' },
      { Icon: TbBrandNextjs, label: 'Next.js' },
      { Icon: FaNode, label: 'Node.js' },
      { Icon: SiExpress, label: 'Express' },
    ],
  },
  {
    title: 'UI FrameWork / Components',
    skills: [
      { Icon: FaBootstrap, label: 'Bootstrap' },
      { Icon: SiTailwindcss, label: 'Tailwindcss' },
      { Icon: SiDaisyui, label: 'Daisyui' },
    ],
  },
  {
    title: 'DBMS',
    skills: [
      { Icon: SiFirebase, label: 'Firebase' },
      { Icon: SiMongodb, label: 'MongoDB' },
    ],
  },
];
export default skillsData;