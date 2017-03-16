import React from 'react';

class NoticeView extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {

		let styles = this.styles.call(this);

		return (			
			<div style={ styles }>
				<i 	className="pull-right fa fa-times" 
					style={ styles.i }
					aria-hidden="true"
					onClick={ this.props.close.bind(this) }></i>
				<ul style={ styles.ul }>
					{ this.getNotices.call(this, styles) }
				</ul> 
			</div>
		)

	}

	close() {
		Equipt.actions.clearNotice();
	}

	getNotices(styles) {
		let notices = flattenObject(this.props.notice) || {};
		let noticesListItems = [];
		let index = 0;
		for(let key in notices) {
			noticesListItems.push(	<li key={ `${ key }_${ index }` }
										style={ styles.li }
									>
										{ notices[ key ] }
									</li>);
			index++;
		}
		return noticesListItems;
	}

	styles() {
		
		let notice 	  = this.props.notice;
		let hasNotice = notice.error || notice.info;

		return {
			display: !!hasNotice ? 'block' : 'none',
			position: 'fixed',
			bottom: '10px',
			right: '10px',
			padding: '20px',
			color: '#fff',
			fontSize: '16px',
			zIndex: '2',
			borderWidth: 1,
			background: notice.error ? '#EF6565' : '#51C1DB',
			borderColor: notice.error ? '#DE5152' : '#1BB1D2',
			i: {
				position: 'absolute',
				top: '3px',
				right: '5px'
			},
			ul: {
				padding: '0'
			},
			li: {
				paddingBottom: '10px',
				listStyle: 'none',
				color: '#ffffff'
			}
		}
	}

}

export { NoticeView };