import React from 'react';

import { ValidationResult } from '../../utils/validateInput';

interface ResultNodeProps {
  data: ValidationResult;
}

const ResultNode = ({ data }: ResultNodeProps): JSX.Element => {
  return (
    <div>
      {!data.isValidCommand
        ? `@@shell: Unknown command ${data.commandName}`
        : ''}
    </div>
  );
};

export default ResultNode;
