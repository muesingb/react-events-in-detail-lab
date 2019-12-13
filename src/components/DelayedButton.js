import React from 'react';

class DelayedButton extends React.Component {
    handleClick = (e) => {
        e.persist()
        setTimeout(() => this.props.onDelayedClick(e), this.props.delay)
    }
    
    render() {
        return (
            <button onClick={this.handleClick}>DelayedButton</button>
        )
    }
}

export default DelayedButton