class MainComponent extends React.Component {

	constructor(props) {
		super(props);
        this.mounted = false;
	}

	componentDidMount() {
        this.mounted = true;
		this.store.addChangeListener(this._onChange.bind(this));
	}
  	
  	componentWillUnmount() {
        this.mounted = false;
    	this.store.removeChangeListener(this._onChange.bind(this));
  	}

  	_onChange() {
      if (!this.dataChanged) return;
  		this.mounted && this.setState(this.dataChanged());
  	}

}