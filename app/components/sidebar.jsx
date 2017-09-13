import React from 'react';
import '../scss/components/sidebar.scss';

const SEARCH = 'search';
const ADD = 'add';

class Sidebar extends React.Component{
    constructor(props){
        super(props);
        this.state ={show:SEARCH};
    }
    selectSearch(){
        this.props.sidebarChange(SEARCH);
        this.setState({show:SEARCH});
    }
    selectAdd(){
        this.props.sidebarChange(ADD);
        this.setState({show:ADD});
    }
    render(){
        var searchStyle = this.state.show == SEARCH ? {textDecoration: 'underline'} : {}
        var addStyle    = this.state.show == ADD    ? {textDecoration: 'underline'} : {}
        return(
        <div id='Sidebar'>
            <div>Podsearch</div>
            <div className='sidebar-element' onClick={this.selectSearch.bind(this)} style={searchStyle}>Search</div>
            <div className='sidebar-element' onClick={this.selectAdd.bind(this)} style={addStyle}>Add</div>
        </div>
        );
    }
}

export default Sidebar;