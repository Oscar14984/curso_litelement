import { css } from 'lit';

export const generalStyles = css`
  .container{
    margin-left:auto;
    margin-right:auto;
    padding-right: 15px;
    padding-left: 15px;
    padding-top: 20px;
  }

  .grid-column-12{
    display: grid;
    grid-template-columns: auto auto auto auto auto auto auto auto auto auto auto auto;
    column-gap: 15px;
  }

  .grid-column-8{
    display: grid;
    grid-template-columns: auto auto auto auto auto auto auto auto;
    column-gap: 15px;
  }

  .grid-column-6{
    display: grid;
    grid-template-columns: auto auto auto auto auto auto;
    column-gap: 15px;
  }

  .grid-column-4{
    display: grid;
    grid-template-columns: auto auto auto auto;
    column-gap: 15px;
  }
`;

