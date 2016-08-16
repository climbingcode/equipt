Equipt.controllers.MainController = class MainController extends React.Component {

    constructor(props) {
        super(props);
        this.mounted = false;
    }

    componentDidMount() {
        this.mounted = true;
        this.stores.forEach((store) => {
            store.addChangeListener(this._onChange.bind(this));
        });
    }
    
    componentWillUnmount() {
        this.mounted = false;
        this.stores.forEach((store) => {
            store.removeChangeListener(this._onChange.bind(this));
        });
        Equipt.stores.ErrorsStore.clearErrors();
    }

    _onChange() {
        if (!this.dataChanged) return;
        this.mounted && this.setState(this.dataChanged());
    }

}