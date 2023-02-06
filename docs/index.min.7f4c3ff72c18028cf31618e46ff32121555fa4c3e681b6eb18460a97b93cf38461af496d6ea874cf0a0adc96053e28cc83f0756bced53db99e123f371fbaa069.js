var suggestions=document.getElementById("suggestions"),search=document.getElementById("search");search!==null&&document.addEventListener("keydown",inputFocus);function inputFocus(e){e.ctrlKey&&e.key==="/"&&(e.preventDefault(),search.focus()),e.key==="Escape"&&(search.blur(),suggestions.classList.add("d-none"))}document.addEventListener("click",function(e){var t=suggestions.contains(e.target);t||suggestions.classList.add("d-none")}),document.addEventListener("keydown",suggestionFocus);function suggestionFocus(e){const s=suggestions.classList.contains("d-none");if(s)return;const t=[...suggestions.querySelectorAll("a")];if(t.length===0)return;const n=t.indexOf(document.activeElement);if(e.key==="ArrowUp"){e.preventDefault();const s=n>0?n-1:0;t[s].focus()}else if(e.key==="ArrowDown"){e.preventDefault();const s=n+1<t.length?n+1:n;t[s].focus()}}(function(){var e=new FlexSearch.Document({tokenize:"forward",cache:100,document:{id:"id",store:["href","title","description"],index:["title","description","content"]}});e.add({id:0,href:"/S23-CSC4200/docs/prologue/",title:"Prologue",description:"Prologue Doks.",content:""}),e.add({id:1,href:"/S23-CSC4200/docs/prologue/pa1/",title:"Program 1",description:`This is an INDIVIDUAL Assignment (Do not collaborate)
Submit a PDF with your work on iLearn. You will find the “man” command to be very useful.
Make sure your Raspberry PI is up.
Open a terminal, run the ifconfig command and record the output.
Submit the output as a screenshot (5pts) Include the following information for the eth0 interface IP address, Ethernet Address, netmask, and MTU (20pts) Run ping between two PIs and record the output.`,content:`This is an INDIVIDUAL Assignment (Do not collaborate)
Submit a PDF with your work on iLearn. You will find the “man” command to be very useful.
Make sure your Raspberry PI is up.
Open a terminal, run the ifconfig command and record the output.
Submit the output as a screenshot (5pts) Include the following information for the eth0 interface IP address, Ethernet Address, netmask, and MTU (20pts) Run ping between two PIs and record the output. Submit the output as a screenshot (5pts) Include a table that briefly explains each field of the output. (20pts) Install traceroute (sudo apt update \u0026amp;\u0026amp; sudo apt install traceroute). Run traceroute to google.com, record the output Submit the output as a screenshot (5pts) Include a table that briefly explains each field(20 pts) Run the command ip route show Submit the output as a screenshot (5 pts) Explain the first line of the output (20 pts) `}),e.add({id:2,href:"/S23-CSC4200/docs/prologue/pa2/",title:"Program 2",description:`This is a GROUP Assignment
Submit your work on iLearn.
Objectives
Learn to create network packets.
Learn how packets can be sent over the network.
Familiarize you with the concept of sockets.
Learn packing structures, endianness, unpacking, and interpreting network data.
Learn how to use actual data from a packet.
Use packet capture to visually inspect protocols.
Overview
In this warmup project, you are going to implement a client and a server program that will send a command over the network.`,content:`This is a GROUP Assignment
Submit your work on iLearn.
Objectives
Learn to create network packets.
Learn how packets can be sent over the network.
Familiarize you with the concept of sockets.
Learn packing structures, endianness, unpacking, and interpreting network data.
Learn how to use actual data from a packet.
Use packet capture to visually inspect protocols.
Overview
In this warmup project, you are going to implement a client and a server program that will send a command over the network. The command simply turns on an LED light. However, the LED light speaks a special protocol. All we know about this protocol is the packet format used for turning on the light. Your task is to create this packet and then send it to the server for turning on this light. Server Specifications
The server takes two arguments:
\$ lightserver -p \u0026lt;PORT\u0026gt; -l \u0026lt;LOG FILE LOCATION\u0026gt; 1.PORT - The port server listens on.
2.Log file location - Where you will keep a record of actions.
For example: \$ lightserver -p 30000 -l /tmp/logfile Deliverables (each worth 5 points)
Server must parse two command line arguments, port and log locations.
The server must not exit after receiving a single packet.
Once a client connects, it logs a message in the following format \u0026quot;Received connection from \u0026lt;CLIENT IP, PORT\u0026gt; \u0026quot;
Once it receives a hello message from the client, it logs the connection and sends a hello back to the client.
You can assume the packet format is the following:
+-----------------+--------------------------+-------------------------+ | | | | | | | | |Version(4 bytes) |Message type (4 bytes) |Message Length (4 bytes) | | | | | | | | | +-----------------+--------------------------+-------------------------+ | | | | | Message (Max 8 Bytes) | | | | | +----------------------------------------------------------------------+ It receives the packet header first, followed by the message. Hint: You need two RECV calls.
Check if Version == 17. If not, log an error message VERSION MISMATCH and continue to listen. Do not exit.
If Version == 17, check the message type. If message Type is 1 - the corresponding command is LIGHTON. If message type is 2 - the corresponding command is LIGHTOFF. No other command is supported.
If the server sees a supported command, log \u0026ldquo;EXECUTING SUPPORTED COMMAND: COMMANDNAME\u0026rdquo;, else log \u0026lt;\u0026ldquo;IGNORING UNKNOWN COMMAND: COMMANDNAME\u0026rdquo;.
Send back a \u0026ldquo;SUCCESS\u0026rdquo; message to the client.
It turns on or turns off the LED on your circuit based on the command sent by the client.
Make sure server does not exit on 0 byte messages. Client Specifications
\$ lightclient -s \u0026lt;SERVER-IP\u0026gt; -p \u0026lt;PORT\u0026gt; -l LOGFILE The client takes three arguments:
Server IP - The IP address of the server. PORT - The port the server listens on. Log file location - Where you will keep a record of packets you received. For example: \$ lightclient -s 192.168.2.1 -p 6543 -l LOGFILE Client Requirements (each worth 5 points, item 7 is worth 10 points)
The client must parse three command line arguments, server, port, and logfile. The client should connect to the server on the specified port. Constructs and sends a hello packet to the server. +-----------------+--------------------------+-------------------------+ | | | | | | | | |Version(4 bytes) |Message type (4 bytes) |Message Length (4 bytes) | | | | | | | | | +-----------------+--------------------------+-------------------------+ | | | | | Message (HELLO) | | | | | +----------------------------------------------------------------------+ Receive reply from Server - if version is 17, log \u0026ldquo;VERSION ACCEPTED\u0026rdquo;, else log - \u0026ldquo;VERSION MISMATCH\u0026rdquo; If version is accepted, send a command packet. +-----------------+--------------------------+-------------------------+ | | | | | | | | |Version(4 bytes) |Message type (4 bytes) |Message Length (4 bytes) | | | | | | | | | +-----------------+--------------------------+-------------------------+ | | | | | COMMAND (LIGHTON/LIGHTOFF) | | | | | +----------------------------------------------------------------------+ Receive the server\u0026rsquo;s reply, log the reply, and gracefully shutdown the socket. You can assume the server always replies with a \u0026ldquo;SUCCESS\u0026rdquo; message for this assignment. Use TCPDUMP or Wireshark to capture the interactions, turn the .pcap file in with the assignment. Additional requirements:
Code must compile/run on your PI. You will demo this to the TA.
You must pack the packet in a structure. If you are using python, use the struct module.
Pay extra attention to byte-order encoding before sending the packet. Big-endianness is the dominant ordering in today\u0026rsquo;s network protocols.
Sample Output #Server side
Received connection from (IP, PORT): ('127.0.0.1', 53888) Received Data: version: 17 message_type: 1 length: 1280 VERSION ACCEPTED Received Data: version: 17 message_type: 2 length: 1792 VERSION ACCEPTED EXECUTING SUPPORTED COMMAND: LIGHTON Returning SUCCESS Received connection from (IP, PORT): ('127.0.0.1', 53890) Received Data: version: 17 message_type: 1 length: 1280 VERSION ACCEPTED Received Data: version: 17 message_type: 2 length: 1792 VERSION ACCEPTED EXECUTING SUPPORTED COMMAND: LIGHTON Returning SUCCESS Client Side
Run 1
Received Data: version: 17 type: 1 length: 1280 VERSION ACCEPTED Received Message Hello Sending command Received Data: version: 17 type: 2 length: 1792 VERSION ACCEPTED Received Message SUCCESS Command Successful Closing socket Run 2
Sending HELLO Packet Received Data: version: 17 type: 1 length: 1280 VERSION ACCEPTED Received Message Hello Sending command Received Data: version: 17 type: 2 length: 1792 VERSION ACCEPTED Received Message SUCCESS Command Successful Closing socket `}),e.add({id:3,href:"/S23-CSC4200/docs/prologue/schedule/",title:"Schedule",description:`This is a tentative schedule and will change.
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
`}),e.add({id:4,href:"/S23-CSC4200/docs/",title:"Docs",description:"Docs Doks.",content:""}),search.addEventListener("input",t,!0);function t(){const s=5;var n=this.value,o=e.search(n,{limit:s,enrich:!0});const t=new Map;for(const e of o.flatMap(e=>e.result)){if(t.has(e.doc.href))continue;t.set(e.doc.href,e.doc)}if(suggestions.innerHTML="",suggestions.classList.remove("d-none"),t.size===0&&n){const e=document.createElement("div");e.innerHTML=`No results for "<strong>${n}</strong>"`,e.classList.add("suggestion__no-results"),suggestions.appendChild(e);return}for(const[r,a]of t){const n=document.createElement("div");suggestions.appendChild(n);const e=document.createElement("a");e.href=r,n.appendChild(e);const o=document.createElement("span");o.textContent=a.title,o.classList.add("suggestion__title"),e.appendChild(o);const i=document.createElement("span");if(i.textContent=a.description,i.classList.add("suggestion__description"),e.appendChild(i),suggestions.appendChild(n),suggestions.childElementCount==s)break}}})()