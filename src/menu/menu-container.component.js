import React from 'react';

class MenuContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (<div id='main'><h2>Menu container {this.props.id}</h2></div>);
    }
}
export default MenuContainer;