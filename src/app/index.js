var React = require('react');
var ReactDOM = require('react-dom');

var Calculator = React.createClass({
    render: function(){
        var buttons = [];
            {
                for (var i=9;i>=0;i--) buttons.push(<button key={i} value={i} ref='number' className='btn btn-default'><span>{i}</span></button>);
                buttons.push(<button key='comma' value=',' className='btn btn-default'><span>,</span></button>)
            }
        var operand = ['+','-','x','÷'].map(function(operand){
            return <button key={operand} value={operand} className='btn btn-primary'><span>{operand}</span></button>
        });
        return (
            <div>
                <div id='display' className='c-display'>
                    <textarea name="cur" id="current" cols="30" rows="2" readOnly className='form-control'></textarea>
                    <textarea name="recent" id="recent" cols="30" rows="1" readOnly className='form-control'></textarea>
                </div>
                <div id='control' className='c-control'>
                    <div id='numbers' className='c-numbers'>
                        {buttons}
                        <button key='Equal' className='btn btn-warning'><span>=</span></button>
                    </div>
                    <div id='operands' className='c-operand'>
                        <button key='AC' className='btn btn-danger'><span>AC</span></button>
                        {operand}
                    </div>
                </div>
            </div>);
    }
});
ReactDOM.render(<Calculator />, document.getElementById('app'));