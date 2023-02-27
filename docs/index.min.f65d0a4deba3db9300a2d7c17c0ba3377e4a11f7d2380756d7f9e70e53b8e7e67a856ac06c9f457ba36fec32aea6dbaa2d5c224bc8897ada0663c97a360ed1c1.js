var suggestions=document.getElementById("suggestions"),search=document.getElementById("search");search!==null&&document.addEventListener("keydown",inputFocus);function inputFocus(e){e.ctrlKey&&e.key==="/"&&(e.preventDefault(),search.focus()),e.key==="Escape"&&(search.blur(),suggestions.classList.add("d-none"))}document.addEventListener("click",function(e){var t=suggestions.contains(e.target);t||suggestions.classList.add("d-none")}),document.addEventListener("keydown",suggestionFocus);function suggestionFocus(e){const s=suggestions.classList.contains("d-none");if(s)return;const t=[...suggestions.querySelectorAll("a")];if(t.length===0)return;const n=t.indexOf(document.activeElement);if(e.key==="ArrowUp"){e.preventDefault();const s=n>0?n-1:0;t[s].focus()}else if(e.key==="ArrowDown"){e.preventDefault();const s=n+1<t.length?n+1:n;t[s].focus()}}(function(){var e=new FlexSearch.Document({tokenize:"forward",cache:100,document:{id:"id",store:["href","title","description"],index:["title","description","content"]}});e.add({id:0,href:"/S23-CSC4200/docs/prologue/schedule/",title:"Schedule",description:`This is a tentative schedule and will change.
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
`}),e.add({id:1,href:"/S23-CSC4200/docs/prologue/",title:"Prologue",description:"Prologue Doks.",content:""}),e.add({id:2,href:"/S23-CSC4200/docs/prologue/pa1/",title:"Program 1",description:`This is an INDIVIDUAL Assignment (Do not collaborate)
Submit a PDF with your work on iLearn. You will find the “man” command to be very useful.
Make sure your Raspberry PI is up.
Open a terminal, run the ifconfig command and record the output.
Submit the output as a screenshot (5pts) Include the following information for the eth0 interface IP address, Ethernet Address, netmask, and MTU (20pts) Run ping between two PIs and record the output.`,content:`This is an INDIVIDUAL Assignment (Do not collaborate)
Submit a PDF with your work on iLearn. You will find the “man” command to be very useful.
Make sure your Raspberry PI is up.
Open a terminal, run the ifconfig command and record the output.
Submit the output as a screenshot (5pts) Include the following information for the eth0 interface IP address, Ethernet Address, netmask, and MTU (20pts) Run ping between two PIs and record the output. Submit the output as a screenshot (5pts) Include a table that briefly explains each field of the output. (20pts) Install traceroute (sudo apt update \u0026amp;\u0026amp; sudo apt install traceroute). Run traceroute to google.com, record the output Submit the output as a screenshot (5pts) Include a table that briefly explains each field(20 pts) Run the command ip route show Submit the output as a screenshot (5 pts) Explain the first line of the output (20 pts) `}),e.add({id:3,href:"/S23-CSC4200/docs/prologue/pa2/",title:"Program 2",description:`This is a GROUP Assignment
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
Sending HELLO Packet Received Data: version: 17 type: 1 length: 1280 VERSION ACCEPTED Received Message Hello Sending command Received Data: version: 17 type: 2 length: 1792 VERSION ACCEPTED Received Message SUCCESS Command Successful Closing socket `}),e.add({id:4,href:"/S23-CSC4200/docs/",title:"Docs",description:"Docs Doks.",content:""}),e.add({id:5,href:"/S23-CSC4200/docs/prologue/pa3/",title:"Program 3",description:`Interact with the cloud thorugh a gateway
Objectives
In this project, you are going to build on the first project. You will have a gateway (your PI) that downloads a command from a remote web page. The client (your partner\u0026rsquo;s PI) is not secure and can not connect to the network. However, it can talk to the gateway to retrieve the command. It then perfors the command (LIGHTON and LIGHTOFF).`,content:` Interact with the cloud thorugh a gateway
Objectives
In this project, you are going to build on the first project. You will have a gateway (your PI) that downloads a command from a remote web page. The client (your partner\u0026rsquo;s PI) is not secure and can not connect to the network. However, it can talk to the gateway to retrieve the command. It then perfors the command (LIGHTON and LIGHTOFF). All communications in this assignment MUST use UDP sockets (SOCK_DGRAM) and NOT TCP.
The objectives are:
\u0026ndash; Learn to create robust network protocols
\u0026ndash; Learn about reliable communication
\u0026ndash; How a IoT gateway might work. This is typically used to isolate insecure and/or resource constrained IoT devices.
Gateway Specifications
The Gateway (we name it anonGateway) takes two arguments:
\$ anonGateway -p \u0026lt;PORT\u0026gt; -s \u0026lt;LOG FILE LOCATION\u0026gt; -w \u0026lt;web page to download\u0026gt; 1.PORT - The port Gateway listens on.
2.Log file location - Where you will keep a record of actions.
3.Web page to download - Which webpage to download and serve.
For example:
\$ anonGateway -p 30000 -l /tmp/logfile -w https://tntech-ngin.github.io/S23-CSC4200/docs/prologue/LIGHTON_COMMAND or \$ anonGateway -p 30000 -l /tmp/logfile -w https://tntech-ngin.github.io/S23-CSC4200/docs/prologue/LIGHTOFF_COMMAND You can use python URLLIB2 to download the page and parse it to decide which command the page contains. Here is a helpful tutorial: https://docs.python.org/3/howto/urllib2.html
Gateway\u0026rsquo;s Functional requirements
The Gateway should gracefully process incorrect port number and exit with a non-zero error code The Gateway should send a FIN after done sending the data to the client The Gateway should download the file specified by -p and serve it from the memory (you don\u0026rsquo;t need to write the retrieved page to a file, just save it to a variable/string) The Gateway runs indefinitely - it does not exit. Client Specifications
The client (we name it anonclient) takes four arguments: \$ anonclient -s \u0026lt;Gateway-IP\u0026gt; -p \u0026lt;PORT\u0026gt; -l LOGFILE -f \u0026lt;file_to_write_to\u0026gt; The client takes three arguments:
1.Gateway IP - The IP address of the anonGateway.
2.PORT - The port the Gateway listens on.
3.Log file location - Where you will keep a record of packets you received.
4.File to write to - Where you will write the retrieved content.
For example: \$ anonclient -s 192.168.2.1 -p 6543 -l LOGFILE -f test.txt Packet Specification
The payload of each UDP packet sent by Gateway and client MUST start with the following 12-byte header. All fields are in network order (most significant bit first):
0 1 2 3 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+ | Sequence Number | +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+ | Acknowledgment Number | +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+ | Not Used |A|S|F| +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+ Where:
Sequence Number (32 bits): The sequence number of the first data octet in this packet (except when SYN is present). If SYN is present the sequence number is the initial sequence number (randomly choosen).
Acknowledgement Number (32 bits): If the ACK control bit is set, this field contains the value of the next sequence number the sender of the segment is expecting to receive. Once a connection is established this is always sent.
The acknowledgement number is given in the unit of bytes (how many bytes you have sent)
Not Used (29 bits): Must be zero.
A (ACK, 1 bit): Indicates that there the value of Acknowledgment Number field is valid
S (SYN, 1 bit): Synchronize sequence numbers
F (FIN, 1 bit): Finish, No more data from sender
This is the protocol you will implement
The client opens a UDP socket and initiate 3-way handshake to the specified hostname/ip and port. For an explanation of how a three way handshake works, see the next three steps. Essentially, the client and Gateway will exchange three packets with the following flags sets: (1) SYN (2) SYN|ACK (3)ACK. At the end of the handshake, they will have learned each other\u0026rsquo;s sequence number.
Handshake Step 1: Anonclient sends a UDP packet with the following parameters:
src-ip=anonclient_IP, src-port=anonclient_port, dst-ip=anonGateway_ip, dst-port=anonGateway_port, Sequence Number set to 12345 (or chosen randomly), SYN flag set to 1, ACK flag set to 0, FIN flag set to 0. Handshake Step 2: AnonGateway sends a UDP packet with the following parameters: src-ip=anonGateway_IP, src-port=anonGateway_port, dst-ip=anonclient_ip, dst-port=anonclient_port. Sequence Number set to 100 (or chosen randomly), ACK number set to 12346 (Clients seq number + 1) SYN flag set to 1, ACK flag set to 1, FIN flag set to 0. Handshake Step 3: Anonclient sends a UDP packet with the following parameters: src-ip=anonclient_IP, src-port=anonclient_port, dst-ip=anonGateway_ip, dst-port=anonGateway_port, Sequence Number set to 12346 (ACK from Gateway), ACK number set to 101 (Gateway seq number + 1), SYN flag set to 0, ACK flag set to 1, FIN flag set to 0. Now both anonclient and anonGateway knows each others\u0026rsquo; sequence numbers and communication can begin. You only perform this handshake once. Gateway sends 512 bytes of data in an UDP packet as a payload. It also increases the sequence number (seq_to_send = client_seq_received + 1), and sets the ACK flag. The Client acknowledges the number of bytes it received by setting the ACK flag, and adding the number of bytes received to the previous client sequence number (seq_to_send = Gateway_seq_received + number of bytes received). Upon receiving this ACK, the Gateway creates another packet, sets the ACK flag, updates the sequence number, and sends another 512 bytes. This interaction continues until all data is sent to the client. The last packet from the Gateway has the FIN bit set. The client will send a packet with both FIN and ACK bit set. This completes the data transfer. Once the interaction is complete, write the retrieved content to a file (on the client side). Client then parses the first line of the content and executes the command in the file. If the command can not be parsed, it logs the error. Here is what a sample interaction looks like before the command (e.g., LIGHTON/LIGHTOFF) is parsed and executed.
Gateway Client | | | seq=12345, ack=0, SYN | | \u0026lt;------------------------------------------| | seq=100, ack=12346, SYN, ACK | | ----------------------------------------- \u0026gt;| | seq=12346, ack=101, ACK | | \u0026lt;----------------------------------------- |####handshake complete, start getting data |seq=101, ack=12347, ACK,512Byte payload |	| -----------------------------------------\u0026gt; | | seq=12347, ack=614, ACK | | \u0026lt;----------------------------------------- | |seq=614,ack=12348,ACK,512Byte payload | | ----------------------------------------- \u0026gt;| | seq=12348, ack=1126, ACK | | \u0026lt;----------------------------------------- | |seq=1126, ack=12349,ACK,512Byte payload	| | ----------------------------------------- \u0026gt;| | seq=12349, ack=1638, ACK | | \u0026lt;----------------------------------------- | |seq=1638, ack=12350, FIN, payload=5bytes | | -----------------------------------------\u0026gt; | |seq=12350, ack=1643, FIN, ACK | | \u0026lt;----------------------------------------- | Additional requirements:
Code must compile/run on your PI - we will test your code only on the PI. For each packet received, log both at Gateway and receiver in the following format: \u0026quot;RECV\u0026quot; \u0026lt;Sequence Number\u0026gt; \u0026lt;Acknowledgement Number\u0026gt; [\u0026quot;ACK\u0026quot;] [\u0026quot;SYN\u0026quot;] [\u0026quot;FIN\u0026quot;] \u0026quot;SEND\u0026quot; \u0026lt;Sequence Number\u0026gt; \u0026lt;Acknowledgement Number\u0026gt; [\u0026quot;ACK\u0026quot;] [\u0026quot;SYN\u0026quot;] [\u0026quot;FIN\u0026quot;] Hints #def create_packet(**kwargs):
data = struct.pack('!I', s_n) #pack the version .... data += struct.pack(\u0026quot;!c\u0026quot;, ack) #pack the ACK data += struct.pack(\u0026quot;!c\u0026quot;, syn) #pack the SYN data += struct.pack(\u0026quot;!c\u0026quot;, fin) #pack the FIN .... return data send_data = create_packet(sequence_number=100, ack_number=0, ack = 'Y', syn = 'N', fin = 'N', payload=data) `}),search.addEventListener("input",t,!0);function t(){const s=5;var n=this.value,o=e.search(n,{limit:s,enrich:!0});const t=new Map;for(const e of o.flatMap(e=>e.result)){if(t.has(e.doc.href))continue;t.set(e.doc.href,e.doc)}if(suggestions.innerHTML="",suggestions.classList.remove("d-none"),t.size===0&&n){const e=document.createElement("div");e.innerHTML=`No results for "<strong>${n}</strong>"`,e.classList.add("suggestion__no-results"),suggestions.appendChild(e);return}for(const[r,a]of t){const n=document.createElement("div");suggestions.appendChild(n);const e=document.createElement("a");e.href=r,n.appendChild(e);const o=document.createElement("span");o.textContent=a.title,o.classList.add("suggestion__title"),e.appendChild(o);const i=document.createElement("span");if(i.textContent=a.description,i.classList.add("suggestion__description"),e.appendChild(i),suggestions.appendChild(n),suggestions.childElementCount==s)break}}})()