import React from 'react';

import {sprintf, extend, isString, isObject, isArray, isNumber} from 'yow';
import {Toolbar, ToolbarIcon} from '../../components/ui.js';
import {BackgroundImage, Page, PageHeader, PageContent, PageFooter} from '../../components/ui.js';


class Content extends React.Component {


	constructor(...props) {
		super(...props);
	};


	render() {
		var style = {
			color:'white'
		};
		return (
			<div style={style}>
			HEJ
			</div>
		);
	}

};


export default class extends React.Component {


	constructor(props) {
		super(props);
	};


	render() {
		var icon2 = require('../../images/32x32/emojis/231.png');
		var icon3 = require('../../images/32x32/emojis/232.png');

		function onClick() {
			history.reload(true);
		}



		return (
			<div id="myCarousel" className="carousel slide" data-ride="carousel">
			    <ol className="carousel-indicators">
			        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
			        <li data-target="#myCarousel" data-slide-to="1"></li>
			        <li data-target="#myCarousel" data-slide-to="2"></li>
			    </ol>
			    <div className="carousel-inner">
			        <div className="item active">
			            <img src="./src/pages/carousel/images/slide1.png" alt="First Slide"/>
			        </div>
			        <div className="item">
			            <img src="./src/pages/carousel/images/slide2.png" alt="Second Slide"/>
			        </div>
			        <div className="item">
			            <img src="./src/pages/carousel/images/slide3.png" alt="Third Slide"/>
			        </div>
			    </div>
			</div>		);
	}

};
