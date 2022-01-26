import { useState } from 'react'

export const MessageForm = (props) => {

	const [message, setMessage] = useState('')

	const onSubmit = (e) => {

		e.preventDefault();

		props.sendMessage(message)

		setMessage('')

	}

	return (
		<div>

			<form className="mess-form" onSubmit={onSubmit}>
				<input
					name="option"
					autoComplete="off"
					className="mess-input"
					placeholder="Aa"
					value={message}
					onChange={(e) => setMessage(e.target.value)}
				/>
				<button type="submit" className="send-btn">
					<i className="far fa-paper-plane"></i>
				</button>

			</form>
		</div>
	);
};

export default MessageForm;