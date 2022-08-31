import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  OnGatewayConnection,
  OnGatewayDisconnect,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway(81, { cors: { origin: '*' } })
export class SocketGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  handleDisconnect(client: Socket) {
    console.log(`Client with id: ${client.id} was disconnected`);
  }
  handleConnection(client: Socket, ...args: any[]) {
    console.log(`Client with id: ${client.id} was connected`);
  }

  @SubscribeMessage('events')
  handleEvent(socket: Socket, data: any): string {
    console.log(data);

    return data;
  }
}
