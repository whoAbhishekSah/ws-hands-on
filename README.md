## How to run

- `npm run server`

### Notes [from here](https://blog.teamtreehouse.com/an-introduction-to-websockets)

Websockets provide a way of creating a persistent, low latency connection that can support transactions initiated by either the client or server(bidirectional). 

Issues with long polled HTTP connections:
-  Every time you make an HTTP request a bunch of headers and cookie data are transferred to the server. This can add up to a reasonably large amount of data that needs to be transferred, which in turn increases latency. 
- If you’re building something like a browser-based game, reducing latency is crucial to keeping things running smoothly.
- The worst part of this is that a lot of these headers and cookies aren’t actually needed to fulfil the client’s request.

Note: WebSocket URLs use the ws scheme. There is also wss for secure WebSocket connections which is the equivalent of HTTPS.

If the server supports the WebSocket protocol, it agrees to the upgrade and communicates this through an Upgrade header in the response.

```
HTTP/1.1 101 WebSocket Protocol Handshake
Date: Wed, 16 Oct 2013 10:07:34 GMT
Connection: Upgrade
Upgrade: WebSocket
```

Now that the handshake is complete the initial HTTP connection is replaced by a WebSocket connection that uses the same underlying TCP/IP connection. At this point either party can starting sending data.


With WebSockets you can transfer as much data as you like without incurring the overhead associated with traditional HTTP requests. Data is transferred through a WebSocket as messages, each of which consists of one or more frames containing the data you are sending (the payload).

 In order to ensure the message can be properly reconstructed when it reaches the client each frame is prefixed with 4-12 bytes of data about the payload. Using this frame-based messaging system helps to reduce the amount of non-payload data that is transferred, leading to significant reductions in latency.

