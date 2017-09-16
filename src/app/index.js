var React = require('react');
var ReactDOM = require('react-dom');

// Basic Operations
const CalcOperations = {
    '+': (prev,next)=>prev+next,
    '-': (prev,next)=>prev-next,
    '*': (prev,next)=>prev*next,
    '/': (prev,next)=>prev/next    
}

class Display extends React.Component {
    render(){
        const {value, ...props} = this.props;

        return(
            <div {...props}>{value}</div>
        )
    }
}
class Button extends React.Component {
    render() {
        const {...props} = this.props;  
        return (
            <div>
                <button {...props}></button>
            </div>
        )
    }
}

class Calculator extends React.Component {
    // Set Initial Calc State
    constructor(props) {
        super(props)
        this.state = {
            value: 0,
            displayValue: '',
            inMemoryValue: '',
            operandPressed: null,
            operandAwaiting: true         
        }
    }

    //When the user clicks a digit button
    handleInput(i) {

        if (this.state.operandAwaiting) i = this.state.displayValue.toLocaleString()+i;
        this.setState({
            displayValue: i 
        })
    }

    //When the user clicks AC, clear the display value and remembered value
    clearDisplay() {
        this.setState({
            displayValue: '',
            value: 0
        })
    }
    //when the user clicks backspace, clear the last entered value from current value
    clearLastInput(){
        let newValue = this.state.displayValue.slice(0,this.state.displayValue.toString.length-1);
        this.setState({
            displayValue: newValue,
            value: newValue
        })
    }
    //When the user clicks ± to toggle the sign
    toggleSign() {
        let newValue = parseFloat(this.state.displayValue)*-1;
        this.setState({
            displayValue: newValue
        })
    }
    //When the user clicks % to convert to percentage
    turnPerc(){
        let newValue = parseFloat(this.state.displayValue)/100;
        this.setState({
            displayValue: newValue
        })
    }
    //Enable Keyboard inputs
    handleKeyPressed = (e) => {
        let {key} = e;

        if (key==='Enter') key='=';
        if (key==='Escape') this.clearDisplay();
        if (key==='Backspace') this.clearLastInput();
        if (/\d/.test(key)) this.handleInput(key);
    } 
    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyPressed)
    }
    componendWillUnmount(){
        document.removeEventListener('keydown', this.handleKeyPressed)
    }
    


    render() {
        const fb = ['AC','±','%'].map(fb => 
            <Button key={fb} className={'button--function-'+fb} onClick={() => this.handleInput(fb)}>{fb}</Button>            
        );
        const db = ['.',0,1,2,3,4,5,6,7,8,9].map(db => 
            <Button key={db} className={'button--digit-'+db} onClick={() => this.handleInput(db)}>{db}</Button>            
        );
        const ob = ['+','-','x','÷'].map(ob => 
            <Button key={ob} className={'button--function-'+ob} onClick={() => this.handleInput(ob)}>{ob}</Button>            
        );

        const {displayValue} = this.state;

        return( 
            <div>
                     <div id='display'>
                        <Display value={displayValue}/>
                     </div>
                     <div id='section--functions'>
                        <Button value='AC' key='AC' className='button--function-AC' onClick={() => this.clearDisplay() }>AC</Button>          
                        <Button value='±' key='±' className='button--function-sign' onClick={() => this.toggleSign() }>±</Button>          
                        <Button value='%' key='%' className='button--function-perc' onClick={() => this.turnPerc() }>%</Button>           
                     </div>
                     <div id='section--digits'>
                        {db}
                     </div>  
                     <div id='section--operands'>
                        {ob}
                     </div>                
            </div>
        )
    }
}


ReactDOM.render(<Calculator />, document.getElementById('app'));