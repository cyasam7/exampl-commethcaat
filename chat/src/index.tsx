import React from 'react';
import { render } from 'react-dom';

import { CometChat } from '@cometchat-pro/chat';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const appID = '217829242021ec16';
const region = 'us';
let authKey = 'edf4b68931096749b48960738a0b440266f2e799';
var uid = 'user1';
var name = 'Kevin';

const appSetting = new CometChat.AppSettingsBuilder()
	.subscribePresenceForAllUsers()
	.setRegion(region)
	.build();

CometChat.init(appID, appSetting).then(
	(data) => {
		render(<App />, document.getElementById('root') as HTMLElement);
		console.log('Se inicializo', data);
	},
	(error) => {
		console.log('Initialization failed with error:', error);
	}
);

reportWebVitals();
