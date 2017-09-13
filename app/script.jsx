import React from 'react';
import {render} from 'react-dom';
import './scss/app.scss';

import Sidebar from './components/sidebar.jsx';
import Search from './components/main/search.jsx';

const SEARCH = 'search';
const ADD = 'add';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {show:SEARCH};
    }
    onSidebarChange(element){
        this.setState({show: element});
    }
    render(){
        var main;
        if(this.state.show==SEARCH){
            main=<Search />;
        }else{
            main=<div>Add</div>;
        }
        return(
            <div id='app'>
                <Sidebar sidebarChange={this.onSidebarChange.bind(this)}/>
                {main}
            </div>
        )
    }
}

render(<App />, document.getElementById('entrypoint'));