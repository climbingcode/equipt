class MainComponent extends React.Component {

	constructor(props) {
		super(props);
        this.rendered = false;
	}

	componentDidMount() {
        this.rendered = true;
		this.store.addChangeListener(this._onChange.bind(this));
	}
  	
  	componentWillUnmount() {
        this.rendered = false;
    	this.store.removeChangeListener(this._onChange.bind(this));
  	}

  	_onChange() {
  		this.rendered && this.setState(this.dataChanged());
  	}

}