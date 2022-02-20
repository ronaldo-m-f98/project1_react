import './styles.css'

import { Component } from "react/cjs/react.development";

export class Button extends Component{
   
    render (){
        const {text, onClick, disabled} = this.props;

        return(
            <button
                className="button"
                disabled={disabled} 
                onClick={onClick}
            >
               {text}
            </button>
        );
    }
}