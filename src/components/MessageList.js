import React from 'react';
import Message from './Message';

export default function MessageList(props) {

	return (
		<div className="messages">
			{props.message.map(({ message, time, author }) => (
				<Message
					messageText={message}
					messageTime={time}
					messageAuthor={author} />
			))}
		</div>
	);
}
