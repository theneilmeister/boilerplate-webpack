import React from 'react'
import {Link} from 'react-router'


const AppHandler = React.createClass({

    render () {
        return (
            <div>
            	<p>AppHandler</p>
                {this.props.children}
            </div>
        )
    }

})


export default AppHandler;
