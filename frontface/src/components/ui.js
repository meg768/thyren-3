
import React from 'react';
import {sprintf, extend, isString, isObject, isArray, isNumber} from 'yow';



export class BackgroundImage extends React.Component {

	constructor(props) {

		super(props);

	};

	render() {
		var style = {};
		style.backgroundSize     = 'cover';
		style.backgroundRepeat   = 'no-repeat';
		style.backgroundPosition = 'center center';
		style.position           = 'fixed';
		style.height             = '100%';
		style.width              = '100%';
		style.bottom             = 0;
		style.backgroundImage    = sprintf('url(%s)', this.props.image);

		return (
			<div style={style}>
				{this.props.children}
			</div>
		);
	}
};


export class ListGroup extends React.Component {

	constructor(...args) {
		super(...args);
	}

	render() {
		var style = {
		};

		style = extend({}, style, this.props.style)

		return (
			<div style={style} className="list-group">
				{this.props.children}
			</div>
		);
	}

}


export class ListGroupItem extends React.Component {

	constructor(...args) {
		super(...args);
	}

	render() {
		var style = {
		};

		style = extend({}, style, this.props.style)

		var className = 'list-group-item ';

		if (this.props.active)
			className += 'active ';

		if (this.props.disabled)
			className += 'disabled ';

		return (
			<a style={style} onClick={this.props.onClick} href={this.props.href} className={className}>
				{this.props.children}
			</a>
		);

        if (this.props.href != undefined) {


            if (isString(this.props.href)) {
                return (
        			<a href={this.props.href} style={style} className="list-group-item">
        				{this.props.children}
        			</a>
        		);

            }
            return (
    			<a style={style} className="list-group-item">
    				{this.props.children}
    			</a>
    		);
        }
        return (
            <span style={style} href className="list-group-item">
                {this.props.children}
            </span>
        );

	}

}



export class Page extends React.Component {
	constructor(props) {
		super(props);
	};

	render() {
		var style = {
			height:'100vh',
			display:'flex',
			flexDirection:'column',
		};

		style = extend({}, style, this.props.style)

		return (
			<div style={style}>
				{this.props.children}
			</div>
		);
	}
}

export class PageHeader extends React.Component {
	constructor(props) {
		super(props);
	};

	render() {
		var style = {
		};

		style = extend({}, style, this.props.style)

		return (
			<header style={style}>
				{this.props.children}
			</header>
		);
	}
}


export class PageFooter extends React.Component {
	constructor(props) {
		super(props);
	};

	render() {
		var style = {
		};

		style = extend({}, style, this.props.style)

		return (
			<footer style={style}>
				{this.props.children}
			</footer>
		);
	}
}


export class PageContent extends React.Component {
	constructor(props) {
		super(props);
	};

	render() {
		var style = {
			position: 'relative',
			flex: 1
		};

		style = extend({}, style, this.props.style)

		return (
			<main style={style}>
				{this.props.children}
			</main>
		);
	}
}

export class ToolbarIcon extends React.Component {
	constructor(props) {
		super(props);
	};

	render() {
		return (
			<a href={this.props.href} style={{boxShadow:'none'}} className="btn" onClick={this.props.onClick}><img src={this.props.icon}/></a>
		);
	}
}
export class Toolbar extends React.Component {
	constructor(props) {
		super(props);
	};

	render() {
		return (
			<div className="btn-group btn-group">
				{this.props.children}
			</div>
		);
	}
}


export class Stage extends React.Component {


	constructor(props) {
		super(props);
	};


	render() {

		function refresh() {
			location.reload(true);
		}

		return (

			<BackgroundImage image={require('../images/backgrounds/blue.jpg')}>
				<Page>
				    <PageHeader style={{backgroundColor:'transparent'}}>
					<Toolbar>
						<ToolbarIcon                 icon={require('../images/32x32/emojis/529.png')} onClick={refresh}/>
						<ToolbarIcon  href="#/apple" icon={require('../images/32x32/emojis/234.png')}/>
						<ToolbarIcon  href="#/grape" icon={require('../images/32x32/emojis/227.png')}/>
						<ToolbarIcon  href="#/lemon" icon={require('../images/32x32/emojis/231.png')}/>
						<ToolbarIcon  href="#/orange" icon={require('../images/32x32/emojis/230.png')}/>
						<ToolbarIcon  href="#/green-apple" icon={require('../images/32x32/emojis/235.png')}/>
						<ToolbarIcon  href="#/banana" icon={require('../images/32x32/emojis/232.png')}/>
						<ToolbarIcon  href="#/cherry" icon={require('../images/32x32/emojis/238.png')}/>
						<ToolbarIcon  href="#/strawberry" icon={require('../images/32x32/emojis/239.png')}/>
						<ToolbarIcon  href="#/pear" icon={require('../images/32x32/emojis/236.png')}/>
					</Toolbar>
					</PageHeader>
					<PageContent>
						{this.props.children}
					</PageContent>
				</Page>
			</BackgroundImage>
		);
	}

};
