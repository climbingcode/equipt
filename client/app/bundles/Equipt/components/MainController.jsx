import React from 'react';
import loaderActions from 'actions/loader';

class MainController extends React.Component {

    constructor(props) {
        super(props);
        this.mounted = false;
    }

    componentWillMount() {
        this.mounted = true;
        this.stores.forEach((store) => {
            store.addChangeListener(this._onChange.bind(this));
        });
        loaderActions.hideLoader();
    }
    
    componentWillUnmount() {
        this.mounted = false;
        this.stores.forEach((store) => {
            store.removeChangeListener(this._onChange.bind(this));
        });
        Equipt.stores.ErrorsStore.clearErrors();
        loaderActions.hideLoader();
    }

    willTransitionTo(transition) {
        if (this.protected && !Equipt.stores.AuthStore.authenticated()) {
            transition.redirect('/home');   
        } 
    }

    _onChange() {
        if (!this.dataChanged) return;
        let data = this.dataChanged() || [];
        this.mounted && this.setState(data);
    }

}

export { MainController };