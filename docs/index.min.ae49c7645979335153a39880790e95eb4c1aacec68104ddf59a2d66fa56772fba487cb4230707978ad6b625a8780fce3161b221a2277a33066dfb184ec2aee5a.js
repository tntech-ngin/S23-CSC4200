var suggestions=document.getElementById("suggestions"),search=document.getElementById("search");search!==null&&document.addEventListener("keydown",inputFocus);function inputFocus(e){e.ctrlKey&&e.key==="/"&&(e.preventDefault(),search.focus()),e.key==="Escape"&&(search.blur(),suggestions.classList.add("d-none"))}document.addEventListener("click",function(e){var t=suggestions.contains(e.target);t||suggestions.classList.add("d-none")}),document.addEventListener("keydown",suggestionFocus);function suggestionFocus(e){const s=suggestions.classList.contains("d-none");if(s)return;const t=[...suggestions.querySelectorAll("a")];if(t.length===0)return;const n=t.indexOf(document.activeElement);if(e.key==="ArrowUp"){e.preventDefault();const s=n>0?n-1:0;t[s].focus()}else if(e.key==="ArrowDown"){e.preventDefault();const s=n+1<t.length?n+1:n;t[s].focus()}}(function(){var e=new FlexSearch.Document({tokenize:"forward",cache:100,document:{id:"id",store:["href","title","description"],index:["title","description","content"]}});e.add({id:0,href:"/S23-CSC4200/docs/prologue/",title:"Prologue",description:"Prologue Doks.",content:""}),e.add({id:1,href:"/S23-CSC4200/docs/help/",title:"Help",description:"Help Doks.",content:""}),e.add({id:2,href:"/S23-CSC4200/docs/help/how-to-update/",title:"How to Update",description:"Regularly update the installed npm packages to keep your Doks website stable, usable, and secure.",content:` 💡 Learn more about semantic versioning and advanced range syntax. Check for outdated packages # The npm outdated command will check the registry to see if any (or, specific) installed packages are currently outdated:
npm outdated [[\u0026lt;@scope\u0026gt;/]\u0026lt;pkg\u0026gt; ...] Update packages # The npm update command will update all the packages listed to the latest version (specified by the tag config), respecting semver:
npm update [\u0026lt;pkg\u0026gt;...] `}),e.add({id:3,href:"/S23-CSC4200/docs/help/troubleshooting/",title:"Troubleshooting",description:"Solutions to common problems.",content:`Problems updating npm packages # Delete the ./node_modules folder, and run again:
npm install Problems with cache # Delete the temporary directories:
npm run clean `}),e.add({id:4,href:"/S23-CSC4200/docs/help/faq/",title:"FAQ",description:"Answers to frequently asked questions.",content:`Hyas? # Doks is a Hyas theme build by the creator of Hyas.
Footer notice? # Please keep it in place.
Keyboard shortcuts for search? # focus: Ctrl + / select: ↓ and ↑ open: Enter close: Esc Other documentation? # Netlify Hugo Can I get support? # Create a topic:
Netlify Community Hugo Forums Doks Discussions Contact the creator? # Send h-enk a message:
Netlify Community Hugo Forums Doks Discussions `}),e.add({id:5,href:"/S23-CSC4200/docs/prologue/program1/",title:"Program 1",description:`This is an INDIVIDUAL Assignment (Do not collaborate)
Submit a PDF with your work on iLearn. You will find the “man” command to be very useful.
Make sure your Raspberry PI is up.
Open a terminal, run the ifconfig command and record the output.
Submit the output as a screenshot (5pts) Include the following information for the eth0 interface IP address, Ethernet Address, netmask, and MTU (20pts) Run ping between two PIs and record the output.`,content:`This is an INDIVIDUAL Assignment (Do not collaborate)
Submit a PDF with your work on iLearn. You will find the “man” command to be very useful.
Make sure your Raspberry PI is up.
Open a terminal, run the ifconfig command and record the output.
Submit the output as a screenshot (5pts) Include the following information for the eth0 interface IP address, Ethernet Address, netmask, and MTU (20pts) Run ping between two PIs and record the output. Submit the output as a screenshot (5pts) Include a table that briefly explains each field of the output. (20pts) Install traceroute (sudo apt update \u0026amp;\u0026amp; sudo apt install traceroute). Run traceroute to google.com, record the output Submit the output as a screenshot (5pts) Include a table that briefly explains each field(20 pts) Run the command ip route show Submit the output as a screenshot (5 pts) Explain the first line of the output (20 pts) `}),e.add({id:6,href:"/S23-CSC4200/docs/prologue/schedule/",title:"Schedule",description:`This is a tentative schedule and will change.
Jan 12 -
Introduction Slides Jan 17 -
Introduction - Terminologies, Circuit vs Packet Switching, Layers, Architectures vs Protocols Slides Reading assignment for week 1 - Introduction, Chapter 1.2, and Chapter 1.3 Setting up Raspberry PIs and Connecting to the Network Jan 24 -
Network Performance, Bandwidth/Delay, Jitter Slides Reading assignment Reading - Chapter 1.5 Links, Encoding, Frames, Point to point links, Byte Stuffing, Error detection Slides Reading assignment Reading - Chapter 2-2.`,content:`This is a tentative schedule and will change.
Jan 12 -
Introduction Slides Jan 17 -
Introduction - Terminologies, Circuit vs Packet Switching, Layers, Architectures vs Protocols Slides Reading assignment for week 1 - Introduction, Chapter 1.2, and Chapter 1.3 Setting up Raspberry PIs and Connecting to the Network Jan 24 -
Network Performance, Bandwidth/Delay, Jitter Slides Reading assignment Reading - Chapter 1.5 Links, Encoding, Frames, Point to point links, Byte Stuffing, Error detection Slides Reading assignment Reading - Chapter 2-2.4, see Slides for details Socket Programming Slides Jan 31 - PA1 due
Reliable Delivery, Stop-n-wait Slides Reading assignment Reading - Chapter 2.4 and 2.5, see Slides for details Reliable Delivery, Sliding Window Slides Reading assignment Reading - Chapter 2.5, see Slides for details Feb 02 - Homework 1 due
Ethernet, Wifi, CSMA-CA/CD, Transmitter algorithm, Collision avoidance, Slides Reading assignment Reading - Chapter 2.6 Reading assignment Reading - Chapter 2.7, Reading - Chapter 2.7 Link Layer Recap Slides Feb 09 -
Switching, Spanning tree Slides Reading assignment Reading - Chapter 3.1, Up to Virtual Circuit Switching, Reading - Chapter 3.2 Addressing Slides Addressing, Fragmentation and Reassembly Slides Reading assignment Reading Feb 14 -
ARP, DHCP Slides Reading assignment Reading NAT, ICMP, Routing vs Switching Slides Reading assignment Reading Feb 21 - PA2 Due
Feb 28 - Homework2 due, Midterm Review
Mar 02 - Midterm
Mar 07 -
Routing Slides Reading assignment Reading, Reading Routing, Issues with Scaling Slides Reading assignment Reading Mar 14 - Spring Break
Mar 21 -
BGP Slides Reading assignment Reading BGP Slides Reading assignment Reading Mar 23 - PA3 Due
UDP, TCP Slides Reading assignment UDP, End-to-End Issues, Segment Format, Connection Establishment and Termination TCP Flow Control, Three way handshake Slides Reading assignment Connection Establishment and Termination Apr 04 - Homework 3 due
Apr 06 - No class
TCP Congestion control, Congestion avoidance Slides Reading assignment TCP Congesion Control Application, Email Slides Recording Reading assignment Email Apr 11 -
Application, Email Slides Recording Reading assignment DNS Apr 18 -
Network Security, Symmetric Key Slides Network Security, Asymmetric Key Slides Apr 20 - PA4 due
Network Security, VPN/IPSec Slides Next generation network - Software Defined Network and Named Data Networking.Slides Apr 25 - HW4 Due, Final Review
Apr 28 - Last day of class
May 03 - Final Exam, 10:30 - 12:30 Wednesday, May 3
`}),e.add({id:7,href:"/S23-CSC4200/docs/overview/introduction/",title:"Introduction",description:"test",content:`test
`}),e.add({id:8,href:"/S23-CSC4200/docs/",title:"Docs",description:"Docs Doks.",content:""}),search.addEventListener("input",t,!0);function t(){const s=5;var n=this.value,o=e.search(n,{limit:s,enrich:!0});const t=new Map;for(const e of o.flatMap(e=>e.result)){if(t.has(e.doc.href))continue;t.set(e.doc.href,e.doc)}if(suggestions.innerHTML="",suggestions.classList.remove("d-none"),t.size===0&&n){const e=document.createElement("div");e.innerHTML=`No results for "<strong>${n}</strong>"`,e.classList.add("suggestion__no-results"),suggestions.appendChild(e);return}for(const[r,a]of t){const n=document.createElement("div");suggestions.appendChild(n);const e=document.createElement("a");e.href=r,n.appendChild(e);const o=document.createElement("span");o.textContent=a.title,o.classList.add("suggestion__title"),e.appendChild(o);const i=document.createElement("span");if(i.textContent=a.description,i.classList.add("suggestion__description"),e.appendChild(i),suggestions.appendChild(n),suggestions.childElementCount==s)break}}})()