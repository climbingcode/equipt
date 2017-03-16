import React from 'react';

class CampFireView extends React.Component {

 	render() {
 		return (
 			<div className="page-loader">
				<div className="fire">
            		<div className="flame"></div>
            		<div className="flame"></div>
            		<div className="flame"></div>
            		<div className="flame"></div>
            		<div className="flame"></div>
            		<div className="logs">
            			<div className="logOne"></div>
            			<div className="logTwo"></div>
                		<div className="flicker"></div>
            		</div>
        		</div>
			</div>
 		)
 	}

}

export { CampFireView };