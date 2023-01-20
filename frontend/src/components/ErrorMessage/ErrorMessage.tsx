import React from 'react';
import { Error } from './ErrorMessage.styles';
import { IErrorMessage } from './ErrorMessage.types';
const ErrorMessage = ({value}: IErrorMessage): JSX.Element => (
  <Error>
    {value}
  </Error>
);

export default ErrorMessage;