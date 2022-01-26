import './App.css';
import MessageForm from './components/MessageForm'
import MessageList from './components/MessageList'
import { useState } from 'react';
import moment from 'moment/moment.js'
import CheckUser from './components/CheckUser';

function App() {

	const [messages, setMessages] = useState([])
	const [user, setUser] = useState('')

	const checkUser = (user) => {
		if (!user) {
			document.querySelector(".check").classList.add("show")
		} else {
			document.querySelector(".check").classList.add("hide")
			document.querySelector(".check").classList.remove("show")
			document.querySelector(".Messie").classList.add("show")
			setUser(user)
		}
	}


	const sendMessage = (msg) => {
		if (msg.trim(' ') === '') {
			//do nothing
		} else {
			const newMessage = [

				{
					author: user,
					time: moment().calendar().toString(),
					message: msg
				},
				...messages

			]
			setMessages(newMessage)
			console.log(messages)
		}
	}

	return (
		<div className="App">
			<CheckUser checkUser={checkUser} />
			<div className="Messie">
				<h1 className="logo">Messie</h1>
				<MessageForm
					sendMessage={sendMessage}

				/>
				<MessageList
					message={messages}
				/>

			</div>
		</div>
	);
}

export default App;
