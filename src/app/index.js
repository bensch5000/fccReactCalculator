var React = require('react');
var ReactDOM = require('react-dom');

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
            displayValue: '',
            inMemoryValue: '',
            operandPressed: null,
            errorDisplay: false         
        }
    }
    calculate() {
        if (/\d/.test(this.state.displayValue) && this.state.inMemoryValue){
            let res = eval((this.state.inMemoryValue+this.state.displayValue).toString())
            this.setState({
            inMemoryValue: '',
            displayValue: res,
            operandPressed: false,
        });
        }
    }
    //When the user clicks a digit button
    handleInput(i) {
        if (this.state.operandPressed) this.setState({
            inMemoryValue: this.state.inMemoryValue+this.state.displayValue,
            displayValue: '',
            operandPressed: false
        })
        this.setState({
            displayValue: this.state.displayValue.toLocaleString()+i, 
        })
    }
    //when the user clicks an operator button
    handleOperator(o){
        if (/\d/.test(this.state.displayValue)) {
            //support missing 0 values (eg .0123) TO DO 
            this.setState({
                inMemoryValue: this.state.inMemoryValue+this.state.displayValue,
                displayValue: o,
                operandPressed: true
            })
        } else if (/[\+\-\/\*]/.test(this.state.displayValue)) this.setState({displayValue:o})

    }
    //When the user clicks AC, clear the display value and remembered value
    clearDisplay() {
        this.setState({
            value: 0,
            displayValue: '',
            inMemoryValue: '',
            operandPressed: null,
            operandAwaiting: true,
            errorDisplay: false
        })
    }
    //when the user clicks backspace, clear the last entered value from current value
    clearLastInput(){
        if(this.state.displayValue){
            let newValue = this.state.displayValue.slice(0,this.state.displayValue.toString.length-1);
            this.setState({
                displayValue: newValue,
                value: newValue
            }) 
        }
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
        switch(key) {
            case 'Enter':
            case '=': 
                this.calculate();
                break;
            case 'Escape':
                this.clearDisplay();
                break;
            case 'Backspace': 
                this.clearLastInput();
                break;
            case '+':
            case '-':
            case '*':
            case '/': 
                this.handleOperator(key);
                break;
            default:
                if (/[\d\.]/.test(key)) this.handleInput(key);
        }
    } 
    componentWillMount() {
        document.addEventListener('click', function(e) { 
            if(document.activeElement.toString() == '[object HTMLButtonElement]'){
            document.activeElement.blur();
        }})
    }
    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyPressed)
    }
    componendWillUnmount(){
        document.removeEventListener('keydown', this.handleKeyPressed)
    }
    // Render Calculator 
    render() {
        const db = [9,8,7,6,5,4,3,2,1,0,'.'].map(db => 
            <Button key={db} className={'btn-digit'} onClick={() => this.handleInput(db)}>{db}</Button>            
        );
        const ob = ['+','-','x','÷',].map(ob => 
            <Button key={ob} className={'btn-operator'} onClick={() => this.handleOperator()}>{ob}</Button>            
        );

        const {displayValue,inMemoryValue} = this.state;

        return( 
            <div className='wrapper'>
                     <div id='' className='display'>
                        <Display className='display-main' value={displayValue}/>
                        <Display className='display-secondary' value={inMemoryValue}/>
                     </div>
                     <div className='controls'>
                        <div className='input'>
                                <Button value='AC' key='AC' className='btn-funct' onClick={() => this.clearDisplay() }>AC</Button>          
                                <Button value='±' key='±' className='btn-funct' onClick={() => this.toggleSign() }>±</Button>          
                                <Button value='%' key='%' className='btn-funct' onClick={() => this.turnPerc() }>%</Button>           
                                {db}
                        </div>
                        <div className='operator'>
                            {ob}
                            <Button key='=' className='btn-operator' onClick={() => this.calculate()}>=</Button>             
                        </div>
                     </div>
            </div>
        )
    }
}
ReactDOM.render(<Calculator />, document.getElementById('app'));

