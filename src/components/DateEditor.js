import * as React from 'react';
import * as PropTypes from 'prop-types';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import TextField from '@mui/material/TextField';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

export const DateEditorComponent = React.memo(({
  onValueChange,
  value,
  readOnly,
  className,
  locale,
  excludeTime,
  ...restProps
}) => {

  const memoizedChangeHandler = React.useCallback(
    nextDate => nextDate && onValueChange(nextDate.toDate()), [onValueChange],
  );
  const dateFormat = excludeTime ? 'MM/DD/YYYY' : 'MM/DD/YYYY hh:mm A';

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <DateTimePicker
        disabled={readOnly}
        renderInput={props => <TextField className={className} margin="normal" {...props} />}
        value={value}
        onChange={memoizedChangeHandler}
        inputFormat={dateFormat}
        {...restProps}
      />
    </LocalizationProvider>
  );
});

DateEditorComponent.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.instanceOf(Date),
  ]),
  className: PropTypes.string,
  readOnly: PropTypes.bool,
  onValueChange: PropTypes.func.isRequired,
  locale: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
  excludeTime: PropTypes.bool,
};

DateEditorComponent.defaultProps = {
  locale: 'en-US',
  value: undefined,
  className: undefined,
  readOnly: false,
  excludeTime: false,
};