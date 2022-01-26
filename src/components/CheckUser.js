import React from 'react';
import { useState } from 'react';

export default function CheckUser(props) {

	const [user, setUser] = useState('')

	const onSubmit = (e) => {

		e.preventDefault()

		props.checkUser(user)

		setUser('')

	}

	return (
		<div className="check">
			<form onSubmit={onSubmit}>
				<h1 className="welcome">Welcome to Messie!</h1>
				<p>Please type your name</p>
				<input
					name="option"
					autoComplete="off"
					className="check-input"
					placeholder="Aa"
					value={user}
					onChange={((e) => setUser(e.target.value))}
				/>
			</form>
		</div>
	);
}
