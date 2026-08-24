// Tech stack assets module - consolidates all tech stack icons
import AWSLight from './AWS-Light.svg';
import Bootstrap from './Bootstrap.svg';
import C from './C.svg';
import CPP from './CPP.svg';
import CS from './CS.svg';
import CSS from './CSS.svg';
import DartLight from './Dart-Light.svg';
import Docker from './Docker.svg';
import Electron from './Electron.svg';
import ExpressJSLight from './ExpressJS-Light.svg';
import FlutterLight from './Flutter-Light.svg';
import GithubLight from './Github-Light.svg';
import GraphQLLight from './GraphQL-Light.svg';
import HTML from './HTML.svg';
import JavaLight from './Java-Light.svg';
import JavaScript from './JavaScript.svg';
import JQuery from './JQuery.svg';
import LaTeXLight from './LaTeX-Light.svg';
import MariaDB from './MariaDB.png';
import MaterialUILight from './MaterialUI-Light.svg';
import MatPlotLib from './MatPlotLib.png';
import Matlab from './Matlab.png';
import MongoDB from './MongoDB.svg';
import MySql from './MySql.png';
import n8n from './n8n.png';
import NodeJSLight from './NodeJS-Light.svg';
import NotionLight from './Notion-Light.svg';
import NpmLight from './Npm-Light.svg';
import NumPy from './NumPy.png';
import Pandas from './Pandas.png';
import Postman from './Postman.svg';
import Python from './Python.png';
import ReactLight from './React-Light.svg';
import RedisLight from './Redis-Light.svg';
import ScikitLearn from './ScikitLearn.png';
import SciPy from './SciPy.svg';
import Seaborn from './Seaborn.png';
import StackOverflowLight from './StackOverflow-Light.svg';
import StatsModels from './StatsModels.png';
import Tableau from './Tableau.png';
import TailwindCSSLight from './TailwindCSS-Light.svg';
import TensorFlowLight from './TensorFlow-Light.svg';
import ThreeJSLight from './ThreeJS-Light.svg';
import TypeScript from './TypeScript.svg';
import UnityLight from './Unity-Light.svg';
import VercelLight from './Vercel-Light.svg';
import ViteLight from './Vite-Light.svg';

export const techStackIcons = {
  AWSLight,
  Bootstrap,
  C,
  CPP,
  CS,
  CSS,
  DartLight,
  Docker,
  Electron,
  ExpressJSLight,
  FlutterLight,
  GithubLight,
  GraphQLLight,
  HTML,
  JavaLight,
  JavaScript,
  JQuery,
  LaTeXLight,
  MariaDB,
  MaterialUILight,
  Matlab,
  MatPlotLib,
  MongoDB,
  MySql,
  n8n,
  NodeJSLight,
  NotionLight,
  NpmLight,
  NumPy,
  Pandas,
  Postman,
  Python,
  ReactLight,
  RedisLight,
  ScikitLearn,
  SciPy,
  Seaborn,
  StackOverflowLight,
  StatsModels,
  Tableau,
  TailwindCSSLight,
  TensorFlowLight,
  ThreeJSLight,
  TypeScript,
  UnityLight,
  VercelLight,
  ViteLight,
};

// Export as array for easier iteration if needed
export const techStackArray = Object.entries(techStackIcons).map(([name, icon]) => ({
  name,
  icon,
}));

export default techStackIcons;