(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[893],{9753:(e,t,a)=>{Promise.resolve().then(a.bind(a,7260))},5565:(e,t,a)=>{"use strict";a.d(t,{default:()=>r.a});var o=a(4146),r=a.n(o)},7396:(e,t,a)=>{"use strict";a.d(t,{default:()=>r.a});var o=a(4839),r=a.n(o)},4146:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var a in t)Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}(t,{default:function(){return l},getImageProps:function(){return s}});let o=a(306),r=a(666),i=a(7970),n=o._(a(5514));function s(e){let{props:t}=(0,r.getImgProps)(e,{defaultLoader:n.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/joshkwka.github.io/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,a]of Object.entries(t))void 0===a&&delete t[e];return{props:t}}let l=i.Image},7260:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>n});var o=a(5155);a(2115);var r=a(2557),i=a(2511);function n(){return(0,o.jsx)("div",{className:"scroll-container",children:(0,o.jsx)(i.L,{children:(0,o.jsx)(r.A,{})})})}},2557:(e,t,a)=>{"use strict";a.d(t,{A:()=>c});var o=a(5155),r=a(2115),i=a(7396),n=a(5565);let s=e=>{let{title:t,description:a,slug:s,link:l,image:c,skills:d,textColor:u="dark"}=e,g=void 0!==c,[m,h]=(0,r.useState)(!1),p=(0,o.jsxs)(o.Fragment,{children:[g&&(0,o.jsx)("div",{className:"relative w-full h-[500px]",children:(0,o.jsx)(n.default,{src:c,alt:t||"Project image",layout:"fill",objectFit:"cover",className:"transition-all transition-opacity duration-300 transform ".concat(m?"backdrop-blur-md opacity-20":"opacity-100"," z-10")})}),(0,o.jsxs)("div",{className:"absolute inset-0 flex flex-col justify-center items-center z-10 text-center transition-opacity duration-300 ".concat(m||!g?"opacity-100 visibility-visible":"opacity-0 visibility-hidden"),children:[(0,o.jsx)("h3",{className:"text-2xl font-semibold ".concat("light"===u?"text-var[var(--text-light)]":"text-var[var(--text-dark)]"),children:t}),(0,o.jsx)("p",{className:"mt-2 ".concat("light"===u?"text-var[var(--text-light)]":"text-var[var(--text-dark)]"),children:a})]}),(0,o.jsx)("div",{className:"absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20",children:d.map((e,t)=>(0,o.jsx)("span",{className:"bg-blue-500 text-white text-sm px-3 py-1 rounded-full whitespace-nowrap",children:e},t))})]});return(0,o.jsx)("div",{className:"flex justify-center w-full",children:s?(0,o.jsx)(i.default,{href:"/projects/".concat(s),className:"block relative rounded-lg shadow-lg overflow-hidden transition-all duration-300 transform hover:scale-105 w-full max-w-screen-reg",onMouseEnter:()=>h(!0),onMouseLeave:()=>h(!1),children:p}):l?(0,o.jsx)("a",{href:l,target:"_blank",rel:"noopener noreferrer",className:"block relative rounded-lg shadow-lg overflow-hidden transition-all duration-300 transform hover:scale-105 w-full max-w-screen-reg",onMouseEnter:()=>h(!0),onMouseLeave:()=>h(!1),children:p}):(0,o.jsx)("div",{className:"block relative rounded-lg shadow-lg overflow-hidden transition-all duration-300 transform hover:scale-105 w-full max-w-screen-reg",children:p})})};var l=a(5423);let c=()=>{let[e,t]=(0,r.useState)("Software"),a=[{title:"Object Recognition Robot",description:"Autonomous navigation and object recognition using a nearest neighbor algorithm, ROS, and OpenCV to identify objects based on image recognition.",slug:"object-recognition-robot",image:"/images/projects/object-recognition-robot.png",skills:["C++","ROS","OpenCV"],tags:["Software"],textColor:"dark"},{title:"Autonomous Mapping Robot",description:"Autonomous mapping and exploration of unknown environments using DFS, ROS, and SLAM, with path planning and obstacle detection.",slug:"autonomous-mapping-robot",image:"/images/projects/autonomous-mapping-robot.png",skills:["C++","ROS","SLAM","Algorithms"],tags:["Software"],textColor:"dark"},{title:"Maze-Solving Rover",description:"An autonomous rover that navigates a maze, localizes, detects, picks up, and delivers a payload",slug:"maze-solving-rover",image:"/images/projects/maze-solving-rover2.png",skills:["Python","C","Circuits"],tags:["Software","Mechanical"],textColor:"light"},{title:"ECU Module Opening Station",description:"Designed and implemented a cost-effective solution to open fully sealed ECU modules for PCB testing, eliminating CNC scheduling conflicts and fixture changeovers",slug:"module-opening-station",image:"/images/projects/module-opening-station.png",skills:["CNC Programming","DFM","Prototyping"],tags:["Mechanical"],textColor:"dark"},{title:"3D Printer",description:"Designed an entry-level 3D printer with enhanced speed, accuracy, and reliability features for professional use",slug:"3d-printer",image:"/images/projects/3DPrinter.png",skills:["SolidWorks","Mechanical Design"],tags:["Mechanical"],textColor:"dark"},{title:"Kayak Carrier",description:"Designing and analyzing the strength and durability of a Kayak Carrier",slug:"kayak-carrier",image:"/images/projects/kayak.png",skills:["SolidWorks","FEA","Motion Analysis"],tags:["Mechanical"],textColor:"dark"},{title:"Remote Water Gun",description:"Designed and built a remote-controlled water gun with motorized pitch, yaw, and trigger mechanisms, using a Raspberry Pi for control and camera feedback.",slug:"remote-water-gun",image:"/images/projects/watergunirl.jpg",skills:["Python","3D-Printing"],tags:["Mechanical"],textColor:"dark"},{title:"Industry 4.0 Research",description:"Remote communication between sensors and computers via OPC UA",slug:"SFU-research",skills:["Python","C","Ignition"],tags:["Software","Mechanical"],textColor:"dark"},{title:"Portfolio Website",description:"A personal portfolio built with Next.js, React, and Tailwind CSS.",link:"https://www.joshkwak.com",slug:"portfolio",image:"/images/projects/portfolio.png",skills:["Tailwind CSS","React","Next.js"],tags:["Software"],textColor:"dark"}].filter(t=>"Both"===e||t.tags.includes(e));return(0,o.jsxs)("section",{id:"projects",className:"mt-24 my-8 py-4 px-4",children:[(0,o.jsxs)("div",{className:"flex justify-between items-center mb-4",children:[(0,o.jsx)("h2",{className:"text-3xl font-bold",children:"Projects"}),(0,o.jsx)(l.A,{onTabChange:e=>t(e)})]}),(0,o.jsx)("div",{className:"grid gap-6 sm:grid-cols-1 md:grid-cols-2 mt-4",children:a.map((e,t)=>(0,o.jsx)(s,{title:e.title,description:e.description,slug:e.slug,link:e.link,image:e.image,skills:e.skills,textColor:e.textColor},t))})]})}},5423:(e,t,a)=>{"use strict";a.d(t,{A:()=>i});var o=a(5155),r=a(2115);let i=e=>{let{onTabChange:t}=e,[a,i]=(0,r.useState)("Software"),n=e=>{i(e),t(e)};return(0,o.jsxs)("div",{className:"flex space-x-4",children:[(0,o.jsx)("button",{className:"px-4 py-2 font-bold ".concat("Software"===a?"text-white bg-blue-500":"text-blue-500 border border-blue-500"," rounded-md transition-colors"),onClick:()=>n("Software"),children:"Software"}),(0,o.jsx)("button",{className:"px-4 py-2 font-bold ".concat("Mechanical"===a?"text-white bg-blue-500":"text-blue-500 border border-blue-500"," rounded-md transition-colors"),onClick:()=>n("Mechanical"),children:"Mechanical"})]})}},2511:(e,t,a)=>{"use strict";a.d(t,{D:()=>n,L:()=>s});var o=a(5155),r=a(2115);let i=(0,r.createContext)(void 0),n=()=>{let e=(0,r.useContext)(i);if(!e)throw Error("useDarkMode must be used within a DarkModeProvider");return e},s=e=>{let{children:t}=e,[a,n]=(0,r.useState)(!1),s=e=>{n(e),document.documentElement.setAttribute("data-theme",e?"dark":"light"),localStorage.setItem("theme",e?"dark":"light")};return(0,r.useEffect)(()=>{let e=localStorage.getItem("theme"),t=window.matchMedia("(prefers-color-scheme: dark)").matches;e?s("dark"===e):s(t);let a=window.matchMedia("(prefers-color-scheme: dark)"),o=e=>{s(e.matches)};return a.addEventListener("change",o),()=>{a.removeEventListener("change",o)}},[]),(0,o.jsx)(i.Provider,{value:{isDarkMode:a,toggleDarkMode:()=>{s(!a)}},children:t})}}},e=>{var t=t=>e(e.s=t);e.O(0,[74,441,517,358],()=>t(9753)),_N_E=e.O()}]);