var React = require('react');
var ReactDOM = require('react-dom');
var {EventEmitter} = require('fbemitter');
var ee = new EventEmitter();

class App extends React.Component {
    render() {
        return( 
            <div>
                <main>
                    <DisplayField />
                    <ButtonNumber />
                    <ButtonOperand />
                </main>
            </div>
        )
    }
}



class DisplayField extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            text: 0
        }
    }
    _updateDisplay(text){
        this.setState(text);
    }
    componentWillMount(){
        ee.addListener('input',this._updateDisplay);
    }
    render(){
        return (
            <section className='section--display'>
                <div id='upperLine'>{this.props.text}</div>
                <div id='lowerLine'></div>
            </section>
        )
    }

}
class Button extends React.Component {
    _handleInput(){
        let text = this.props.text;
        let cb = this.props.clickHandler; 
    if (cb) cb.call(null, text);
    }
    render() {
        return(
            <button className={this.props.klass} onClick={this.props._handleInput}><span>{this.props.text}</span></button>
        )
    }
}
class ButtonNumber extends React.Component {
    _number(){
        ee.emit('input', this.props.text);
        console.log(this.prop.text);
    }
    render(){
        var nb = [9,8,7,6,5,4,3,2,1,0,','].map(number =>
            <Button text={number} clickHandler={this._number} key={number}/>     
        )  
        return (
        <section className='section--numbers'>
            {nb}
        </section>
        );
    }
}
class ButtonOperand extends React.Component {
    render(){
        var operand = ['+','-','x','÷'].map(operand =>
            <Button text={operand} clickHandler={this._calc} key={'op-'+operand} />
       );
       return (
        <section className='section--operands'>
            {operand}
        </section>
        );
    }
}
ReactDOM.render(<App />, document.getElementById('app'));