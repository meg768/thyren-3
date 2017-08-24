import React from 'react';

import {sprintf, extend, isString, isObject, isArray, isNumber} from 'yow';
import {BackgroundImage, Toolbar, ToolbarIcon} from '../../components/ui.js';
import {Stage, Page, PageHeader, PageContent, PageFooter} from '../../components/ui.js';

var querystring = require('query-string');

class Foo extends React.Component {


	render() {
		var outerStyle = {
			display:'table',
			position:'absolute',
			width:'100%',
			height:'75%'
		};

		var middleStyle = {
			display:'table-cell',
			verticalAlign:'middle'
		};
		var innerStyle = {
			marginLeft:'auto',
			marginRight: 'auto'
		};

		return (
			<div style={outerStyle}>
				<div style={middleStyle}>
					<div style={innerStyle}>
						{this.props.children}
					</div>
				</div>
			</div>
		);
	}
}

class CenterView extends React.Component {
    render() {

		var style = {
			float:'none',
			margin:'0 auto'
		};

        return (
            <div className="row">
				<div className="col-md-6 col-md-offset-3" style={style}>
					{this.props.children}
				</div>
			</div>
        )
    }
}

class Karusell extends React.Component {
    render() {

		var style = {
		};

        return (
			<div id="myCarousel" className="carousel slide" data-ride="carousel">

		      <ol className="carousel-indicators">
		        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
		        <li data-target="#myCarousel" data-slide-to="1"></li>
		        <li data-target="#myCarousel" data-slide-to="2"></li>
		        <li data-target="#myCarousel" data-slide-to="3"></li>
		      </ol>

		      <div className="carousel-inner" role="listbox">

		        <div className="item active">
		          <img src="img_chania.jpg" alt="Chania" width="460" height="345"/>
		          <div className="carousel-caption">
		            <h3>Chania</h3>
		            <p>The atmosphere in Chania has a touch of Florence and Venice.</p>
		          </div>
		        </div>

		        <div className="item">
		          <img src="img_chania2.jpg" alt="Chania" width="460" height="345"/>
		          <div className="carousel-caption">
		            <h3>Chania</h3>
		            <p>The atmosphere in Chania has a touch of Florence and Venice.</p>
		          </div>
		        </div>

		        <div className="item">
		          <img src="img_flower.jpg" alt="Flower" width="460" height="345"/>
		          <div className="carousel-caption">
		            <h3>Flowers</h3>
		            <p>Beautiful flowers in Kolymbari, Crete.</p>
		          </div>
		        </div>

		        <div className="item">
		          <img src="img_flower2.jpg" alt="Flower" width="460" height="345"/>
		          <div className="carousel-caption">
		            <h3>Flowers</h3>
		            <p>Beautiful flowers in Kolymbari, Crete.</p>
		          </div>
		        </div>

		      </div>

		      <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
		        <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
		        <span className="sr-only">Previous</span>
		      </a>
		      <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
		        <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
		        <span className="sr-only">Next</span>
		      </a>
		    </div>
        )
    }
}


class Clock extends React.Component {

	constructor(props) {
		super(props);

		this.state = {date: new Date()};
		this.timerID = undefined;
	};

	componentDidMount() {
		this.timerID = setInterval(() => this.tick(), 1000);
	}

	componentWillUnmount() {
       clearInterval(this.timerID);
     }

	tick() {
		this.setState({
			date: new Date()
		});
	}


	render() {
		var style = {
			color:'rgba(255, 255, 255, 0.75)',
			fontWeight: 'normal',
			fontSize:'25vw',
			textAlign:'center'
		};

		var time = sprintf('%02d:%02d', this.state.date.getHours(), this.state.date.getMinutes());

		return (
			<div style={style}>
				{time}
			</div>
		);

	}

}

/*
export default class extends React.Component {


	constructor(props) {
		super(props);
	};


	render() {

		return (

			<Stage>
				<Foo>
					<Clock/>
				</Foo>
			</Stage>
		);
	}

};
*/


export default class  extends React.Component {


	constructor(props) {
		super(props);
	};


	render() {

		function onClick() {
			location.reload(true);
		}

console.log(location.search);
console.log('href', location.href);
console.log('hash', location.hash);

console.log('qs', querystring.parse(location.href));
console.log('qs - hash', querystring.parse(location.hash));

		return (

			<Stage>
				<Foo>
					<Clock/>
				</Foo>
			</Stage>
		);
	}

};
