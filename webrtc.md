### Real Time Communications ###
<hr>

<h2>Need of RTC - </h2>
When we want server to be automatically updated when we need
Ex - Mobile app and Website updated when one is added Ex-Notion, Docs<br>

<h2>Ways to solve this</h2>
<ol>
  <li>Use a polling system to send empty HTTP request every few seconds(But not optimal) </li>
  <li>Use Web Sockets</li>
  <li>Use WebRTC(Persistent connection between server)- When  connection is created first request is always HTTP</li>
</ol>
<br>
Can use PostWOman(not Hopscotch) to connect to websocket

<br>

How to achieve Distributed Systems?
1. Add all people of same room on same server (add a discovery engine which tell which server to connect)
2. Add a Load Balancer which connects to all servers(add a Pub/Subs to send messages to all other people)