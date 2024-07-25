import { css } from 'lit';

export const buttonStyles = css `
  .button-default {
    background-color: #F3EFEE;
    border: none;
    color: black;
    padding: 10px 10px;
    text-align: center;
    text-decoration:none;
    display: inline.block;
    font-size: 14px;
    border-radius: 5px;
    font-family: "Lucida Console", "Curier New", monoespace;
  }

  .button-default:hover {
    box-shadow: 0 6px 8px 0 rgb(0,0,0,0.24);
  }

  .button-default:disabled,
  .button-default[disabled]{
    background-color: #cccccc;
    color: #f6f6f6;
    pointer-event:none;
  }

  .button-primary {
    background-color: #9EBE1D;
    border: none;
    color: white;
    padding: 10px 10px;
    text-align: center;
    text-decoration:none;
    display: inline.block;
    font-size: 14px;
    border-radius: 5px;
    font-family: "Lucida Console", "Curier New", monoespace;
  }

  .button-primary:hover {
    box-shadow: 0 6px 8px 0 rgb(0,0,0,0.24);
  }

  .button-primary:disabled,
  .button-primary[disabled]{
    background-color: #cccccc;
    color: #f6f6f6;
    pointer-event:none;
  }

  .button-warning {
    background-color: #F71906;
    border: none;
    color: white;
    padding: 10px 10px;
    text-align: center;
    text-decoration:none;
    display: inline.block;
    font-size: 14px;
    border-radius: 5px;
    font-family: "Lucida Console", "Curier New", monoespace;
  }

  .button-warning:hover {
    box-shadow: 0 6px 8px 0 rgb(0,0,0,0.24);
  }

  .button-warning:disabled,
  .button-warning[disabled]{
    background-color: #cccccc;
    color: #f6f6f6;
    pointer-event:none;
  }
  
  .button-secondary {
    background-color: #73D0FB;
    border: none;
    color: white;
    padding: 10px 10px;
    text-align: center;
    text-decoration:none;
    display: inline.block;
    font-size: 14px;
    border-radius: 5px;
    font-family: "Lucida Console", "Curier New", monoespace;
  }

  .button-secondary:hover {
    box-shadow: 0 6px 8px 0 rgb(0,0,0,0.24);
  }

  .button-secondary:disabled,
  .button-secondary[disabled]{
    background-color: #cccccc;
    color: #f6f6f6;
    pointer-event:none;
  }

  .button-disabled {
    background-color: #CCCCCC;
    border: none;
    color: white;
    padding: 10px 10px;
    text-align: center;
    text-decoration:none;
    display: inline.block;
    font-size: 14px;
    border-radius: 5px;
    font-family: "Lucida Console", "Curier New", monoespace;
  }

  .button-disabled:hover {
    box-shadow: 0 6px 8px 0 rgb(0,0,0,0.24);
  }

  .button-disabled:disabled,
  .button-disabled[disabled]{
    background-color: #cccccc;
    color: #f6f6f6;
    pointer-event:none;
  }
`;