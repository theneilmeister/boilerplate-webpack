import React from 'react'
import {Link} from 'react-router'
import StyleSheet from 'react-style'


const AppHandler = React.createClass({

    render () {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }

})


const css = StyleSheet.create({
    
    container: {
        position: 'relative',
        width: '100%',
        height: '100%'
    }
    
});


export default AppHandler;
