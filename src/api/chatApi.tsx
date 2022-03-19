export type MessageDataType = {
  message: string;
  photo: string;
  userId: number;
  userName: string;
}

const messages: MessageDataType[] = []; 

const subscribers: any = [];

let wsChannel: WebSocket;

const onOpenWsChannel = () => {
  console.log('OPEN');
};

const onCloseWsChannel = () => {
  console.log('CLOSE');
  setTimeout(() => {
    createWsChannel()
  }, 3000)
};

const onMessageWsChannel = (e: MessageEvent) => {
  const newMessages: Array<MessageDataType> = JSON.parse(e.data);

  if (newMessages.length === 1) {
    subscribers.forEach((item: any) => item([...messages, ...newMessages]));
  } else {
    subscribers.forEach((item: any) => item(newMessages));
  }
};

const createWsChannel = () => {
  wsChannel?.removeEventListener('open', onOpenWsChannel);
  wsChannel?.removeEventListener('close', onCloseWsChannel);
  wsChannel?.removeEventListener('message', onMessageWsChannel);

  wsChannel = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx');

  wsChannel.addEventListener('open', onOpenWsChannel);
  wsChannel.addEventListener('close', onCloseWsChannel);
  wsChannel.addEventListener('message', onMessageWsChannel);
}

createWsChannel()


export const chatApi = {
  subscribe: (subscriber: any) => {
    subscribers.push(subscriber);
  }
}
