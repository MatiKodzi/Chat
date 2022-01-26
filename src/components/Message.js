import React from 'react';

export default function Message(props) {
	return (
		<div className="message">
			<div className="mess">{props.messageText}
				<span className="info">{props.messageTime} by {props.messageAuthor}</span>
			</div>
		</div>
	);
}