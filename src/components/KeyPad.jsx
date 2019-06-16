import React, {Component} from 'react';
import './KeyPad.css';

class KeyPad extends Component {
    render() {
        return (
            <div className="keypad">
                <div className={'row'}>
                    <button className={'button number'} name={'1'} onClick={e => this.props.onClick(e.target.name)}> 1
                    </button>
                    <button className={'button number'} name={'2'} onClick={e => this.props.onClick(e.target.name)}> 2
                    </button>
                    <button className={'button number'} name={'3'} onClick={e => this.props.onClick(e.target.name)}> 3
                    </button>
                    <button className={'button operator'} name={'+'}
                            onClick={e => this.props.onClick(e.target.name)}> +
                    </button>
                    <button className={'button operator'} name={'-'}
                            onClick={e => this.props.onClick(e.target.name)}> -
                    </button>
                </div>
                <div className={'row'}>
                    <button className={'button number'} name={'4'} onClick={e => this.props.onClick(e.target.name)}> 4
                    </button>
                    <button className={'button number'} name={'5'} onClick={e => this.props.onClick(e.target.name)}> 5
                    </button>
                    <button className={'button number'} name={'6'} onClick={e => this.props.onClick(e.target.name)}> 6
                    </button>
                    <button className={'button operator'} name={'*'}
                            onClick={e => this.props.onClick(e.target.name)}> *
                    </button>
                    <button className={'button operator'} name={'/'}
                            onClick={e => this.props.onClick(e.target.name)}> /
                    </button>
                </div>
                <div className={'row'}>
                    <button className={'button number'} name={'7'} onClick={e => this.props.onClick(e.target.name)}> 7
                    </button>
                    <button className={'button number'} name={'8'} onClick={e => this.props.onClick(e.target.name)}> 8
                    </button>
                    <button className={'button number'} name={'9'} onClick={e => this.props.onClick(e.target.name)}> 9
                    </button>
                    <button className={'button number'} name={'0'} onClick={e => this.props.onClick(e.target.name)}> 0
                    </button>
                    <button className={'button number'} name={'.'} onClick={e => this.props.onClick(e.target.name)}> .
                    </button>
                </div>
                <div className={'row'}>
                    <button className={'button operator'} name={'CE'}
                            onClick={e => this.props.onClick(e.target.name)}> CE
                    </button>
                    <button className={'button operator'} name={'AC'}
                            onClick={e => this.props.onClick(e.target.name)}> AC
                    </button>
                    <button className={'button operator'} name={'('}
                            onClick={e => this.props.onClick(e.target.name)}> (
                    </button>
                    <button className={'button operator'} name={')'}
                            onClick={e => this.props.onClick(e.target.name)}> )
                    </button>
                    <button className={'button operator'} name={'='}
                            onClick={e => this.props.onClick(e.target.name)}> =
                    </button>
                </div>
            </div>
        );
    }
}

export default KeyPad;