import React from 'react';

import {sprintf, extend, isString, isObject, isArray, isNumber} from 'yow';
import {Toolbar, ToolbarIcon} from '../../components/ui.js';
import {BackgroundImage, Page, PageHeader, PageContent, PageFooter} from '../../components/ui.js';

require('./about.less');


export default class extends React.Component {


	constructor(...args) {
		super(...args);
	};



	render() {
		var icon1 = require('../../images/32x32/emojis/224.png');
		var icon2 = require('../../images/32x32/emojis/231.png');
		var icon3 = require('../../images/32x32/emojis/232.png');

		function onClick() {
			window.history.back();
		}

		return (

			<BackgroundImage image={require('./images/bg.jpg')}>
				<Page>
				    <PageHeader style={{backgroundColor:'transparent'}}>
					<Toolbar>
						<ToolbarIcon icon={icon1} onClick={onClick}/>
					</Toolbar>
					</PageHeader>
					<PageContent>
						HEJ

					</PageContent>
				</Page>
			</BackgroundImage>
		);
	}

};
