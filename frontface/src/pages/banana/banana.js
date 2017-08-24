import React from 'react';

import {sprintf, extend, isString, isObject, isArray, isNumber} from 'yow';
import {Toolbar, ToolbarIcon} from '../../components/ui.js';
import {Page, PageHeader, PageContent, PageFooter} from '../../components/ui.js';
import {Stage, BackgroundImage, ListGroup, ListGroupItem} from '../../components/ui.js';



var io = require('socket.io-client');
var url = 'http://app-o.se/tellstick';
console.log('Connecting to %s...', url);

var socket = io.connect(url);

class Content extends React.Component {

	constructor(...args) {
		super(...args);
	}

	render() {
		return (
			<div>
			</div>
		);
	}

}



class Padding extends React.Component {

	constructor(...args) {
		super(...args);
	}

	render() {
		var fade = require('../../images/bottom-fade.png');

		var outerStyle = {
			border: '0.5em solid rgba(255, 255, 255, 0.9)',
			borderRadius: '0.5em',
			background: 'rgba(255, 255, 255, 0.95)',
			paddingLeft: '1em',
			paddingRight: '1em',
			paddingTop: '1em',
			paddingLeft: '1em',
			bottom:'1em',
			top:'1em',
			right:'1em',
			left:'1em',
			position:'absolute',
			overflowY: 'scroll'
		};

		return (
			<div className="fadeX" style={outerStyle}>
					{this.props.children}
			</div>
		);
	}

}


class DeviceHeader extends React.Component {

	constructor(props) {
		super(props);
		this.state = {};
	};

	static defaultProps = {
		name:'Noname'
	};

	render() {
		return(
			<ListGroupItem disabled style={{fontWeight:'bold'}}>
				{this.props.name}
			</ListGroupItem>


		);

	};
};


class Device extends React.Component {

	constructor(props) {
		super(props);
		this.state = {};
	};

	static defaultProps = {
		device:'XXX',
		name:'Noname',
		mode: 'onoff'
	};

	changeState(state) {
		if (state == 'ON')
			socket.emit('turnOn', this.props.device);
		if (state == 'OFF')
			socket.emit('turnOff', this.props.device);

	};

	render() {
		var buttonStyle = {};
		buttonStyle.marginLeft = '0.2em';
		buttonStyle.marginRight = '0.2em';
		buttonStyle.borderRadius = '2em';
		buttonStyle.width = '3em';
		buttonStyle.height = '3em';
		buttonStyle.fontWeight = 'bold';

		return (
			<div className="list-group-item" href={undefined}>
				<div style={{display:'table'}}>
					<div style={{display:'table-cell', width:'100%', verticalAlign:'middle', fontSize:'125%', fontWeight:'bold'}}>
						{this.props.name}
					</div>
					<div style={{display:'table-cell'}}>
						<button type="button" className="btn btn-warning" disabled={this.props.mode == 'off'} style={buttonStyle} onClick={this.changeState.bind(this, 'ON')} >
							PÅ
						</button>
					</div>
					<div style={{display:'table-cell'}}>
						<button type="button" className="btn btn-warning" disabled={this.props.mode == 'on'} style={buttonStyle} onClick={this.changeState.bind(this, 'OFF')} >
							AV
						</button>
					</div>
				</div>
			</div>

		);

	};
};



export default class extends React.Component {


	constructor(props) {
		super(props);
	};


	render() {
		function onClick() {
			window.history.back();
		}

		function onItemClick() {
			alert(1);
		}
		return (
			<div id="ListPage">
				<Stage>
							<Padding>
							<ListGroup>
								<DeviceHeader name='Kontoret'/>
								<Device name='Alla lampor' device='FK-01-01'/>
								<Device name='Läslampa' device='FK-01-02'/>
								<Device name='Övriga lampor' device='FK-01-03'/>
							</ListGroup>

							<ListGroup>
								<DeviceHeader name='Bottenvåningen'/>
								<Device name='Matrummet' device='VS-03'/>
								<Device name='Stora rummet' device='VS-04'/>
								<Device name='Terassen' device='VS-01'/>
							</ListGroup>
							<ListGroup>
								<DeviceHeader name='Biorummet'/>
								<Device name='Alla lampor' device='FK-02-01'/>
								<Device name='Främre lampor' device='FK-02-02'/>
								<Device name='Bakre lampor' device='FK-02-03'/>
								<Device name='Rörelse i biorummet' device='RV-02' mode='on'/>
							</ListGroup>
							<ListGroup>
								<DeviceHeader name='Snickarrummet'/>
								<Device name='Saftblandare' device='VS-02'/>
							</ListGroup>
							<ListGroup>
								<DeviceHeader name='Övrigt'/>
								<Device name='Larm' device='VS-05'/>
								<Device name='Skymningsrelä' device='SR-01'/>
							</ListGroup>

							</Padding>
				</Stage>
			</div>
		);
	}

};
