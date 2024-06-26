import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import dilka from "@/public/pizzav2.png"  //this is the pizza sales project 
import tarshes from "@/public/sfsalaries2.png" //the sf salaries picture
import dynamic from "@/public/covidproject2.png" //this is the covid project picture


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Bachelor of Computer Science",
    location: "Wilfrid Laurier University",
    description:
      "After completing my computer science degree, I ventured into the dynamic world of software development, eager to apply my newfound knowledge.",
    icon: React.createElement(LuGraduationCap),
    date: "2020",
  },
  {
    title: "Software Developer",
    location: "IBM",
    description:
      "Provided client-facing technical support for DB2 database customers, specializing in diagnosing and resolving SQL syntax, performance, and installation issues.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2023",
  },
] as const;

export const projectsData = [
  {
    title: "KPI Dashboard for Local Pizzeria",
    description:
      "Developed a dashboard providing a comprehensive overview of essential metrics, including sales performance, revenue, and market trends, with data available for days and months.",
    tags: ["POWERBI", "SQL SERVER", "EXCEL"],
    imageUrl: dilka,
    points:["The local pizzeria struggled with sales pattern analysis and revenue drivers. As the lead data analyst, I developed a Power BI dashboard to provide detailed sales insights. Collaborating with the Store Manager, we identified key metrics and data sources. Utilizing a Kaggle dataset, I created an interactive dashboard featuring bar graphs, doughnut graphs, funnel charts, and area charts, with filters for specific months, days, and pizza types.","Key metrics included:","•Total Revenue","•Average Order Value","•Total Pizzas Sold","•Total Orders","•Average Pizzas Per Order","The dashboard enhanced transparency, allowing owners to track popular and underperforming pizzas, improving strategic decision-making for promotions. It also improved staff coordination by identifying peak times, ensuring better scheduling and customer service. The data accelerated sales strategy development through detailed month-to-month sales analysis.","The project demonstrated the critical role of data visualization in turning complex data into actionable insights."],
    liveLink:"https://app.powerbi.com/view?r=eyJrIjoiOTgwYTVhMTAtNDk5NC00OTQ1LWIwMTUtODEwZGQ5ODZjNjI0IiwidCI6ImZiNjhkNGIxLWZlMGMtNDdkYi1hNzkyLWU4MGUzMGRhZTk3YiJ9",
    gitHub:"https://github.com/ayeshabh/KPI-Dashboard-for-Local-Pizzeria"
  },
  {
    title: "COVID-19 Vaccinations",
    description:
      "Analyzed COVID-19 vaccination data, detailing global vaccination numbers and comparing rates across countries. Investigated how GDP influences vaccination efforts.",
    tags: ["EXCEL", "TABLEAU"],
    imageUrl: dynamic,
    points:["The COVID-19 pandemic affected millions worldwide. Although no longer considered an active threat by the WHO in 2024, its impact remains significant. I aimed to quantify the vaccination program's speed and scale post-pandemic. As the lead data analyst, I designed and implemented an interactive dashboard using Tableau to explore key metrics of the global vaccination program, providing real-time insights into vaccination data up until June 2024.","Utilizing data from Our World in Data COVID vaccination, I created a dashboard with interactive filters for date ranges, continents, and countries. It features bar graphs, map graphs, and scatter plots, displaying metrics on partially and fully vaccinated populations, daily vaccines administered, and the correlation between GDP and vaccination rates.","The dashboard offered crucial insights into the global vaccination program's progress, enhancing transparency, accountability, coordination, and accelerating herd immunity in numerous countries. This project highlighted the importance of data visualization tools for conveying complex information clearly. Moving forward, I plan to integrate more real-time data sources and enhance the dashboard's usability."],
    liveLink:"https://public.tableau.com/app/profile/ayesha.bhangu/viz/Covid-19Vaccinations_17188629338160/GlobalCOVIDVaccineTracker?publish=yes",    
    gitHub:"https://github.com/ayeshabh/COVID-19-Vaccinations"
  },
  {
    title: "SF Salary Insights",
    description:
      "Investigated San Francisco salaries by cleaning and analyzing the data primarily using Python. Analysis provides insights into key salary trends and answered several pertinent questions regarding income distribution in the Bay Area.",
    tags: ["PYTHON", "HTML", "EXCEL"],
    imageUrl: tarshes,
    points:["point 1","point 2"],
    liveLink:"https://nbviewer.org/github/ayeshabh/SF-Salaries-Investigation/blob/main/SF%20Salaries.ipynb",
    gitHub: "https://github.com/ayeshabh/SF-Salaries-Investigation"
  },
] as const;

export const skillsData = [
  "Data Manipulation",
  "Data Visualization",
  "Python",
  "Java",
  "DB2",
  "SQL",
  "Tableau",
  "Power BI Dashboards",
  "MS Excel",
  "MongoDB",
  "Statistical Analysis",
  "Agile Development",
  "PostgreSQL",
  "SQL Server",
] as const;