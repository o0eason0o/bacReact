import React from 'react';
import '../css/square.css';

// export default class Square extends React.Component {
export default function Square (props) {
        return (
          <button 
            className="square" 
            onClick={props.onClick}
          >
            {props.value}
          </button>
        );
}