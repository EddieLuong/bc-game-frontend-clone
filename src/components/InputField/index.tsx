import React, { useState } from 'react';
import { Controller } from 'react-hook-form';

import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import InputAdornment from '@mui/material/InputAdornment';
import { OutlinedTextFieldProps } from '@mui/material/TextField';

import { StyledTextField } from './styles';

interface ControlInputFieldProps
  extends Omit<OutlinedTextFieldProps, 'variant' | 'onChange'> {
  form: any;
  label?: string;
  name: string;
  placeholder?: string;
  type?: string;
  disabled?: boolean;
  onChange?: (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => void;
  $isPasswordInput?: boolean;
}

const ControlInputField = ({
  form,
  label,
  name,
  type,
  disabled,
  placeholder,
  $isPasswordInput,
  onChange: handleChange,
  ...props
}: ControlInputFieldProps) => {
  const {
    formState: { errors },
  } = form;
  const error = errors[name];
  const [isShowPassword, setIsShowPassword] = useState(false);

  const handleClickVisibilityIcon = () => setIsShowPassword((curr) => !curr);

  return (
    <Controller
      name={name}
      control={form.control}
      render={({ field: { onChange, onBlur, value, ref } }) => {
        return (
          <StyledTextField
            fullWidth
            name={name}
            type={$isPasswordInput && !isShowPassword ? 'password' : type}
            inputRef={ref}
            label={label}
            margin="normal"
            onBlur={onBlur}
            variant="outlined"
            autoComplete="off"
            value={value || ''}
            onChange={(event) => {
              onChange(event);
              if (handleChange) handleChange(event);
            }}
            disabled={disabled}
            placeholder={placeholder}
            error={Boolean(error)}
            helperText={error?.message}
            InputProps={
              $isPasswordInput
                ? {
                    endAdornment: (
                      <InputAdornment position="end">
                        {isShowPassword ? (
                          <VisibilityOutlinedIcon
                            sx={{ cursor: 'pointer' }}
                            onClick={() => handleClickVisibilityIcon()}
                          />
                        ) : (
                          <VisibilityOffOutlinedIcon
                            sx={{ cursor: 'pointer' }}
                            onClick={() => handleClickVisibilityIcon()}
                          />
                        )}
                      </InputAdornment>
                    ),
                  }
                : {}
            }
            {...props}
          />
        );
      }}
    />
  );
};

ControlInputField.defaultProps = {
  label: '',
  placeholder: '',
  type: '',
  disabled: false,
  onChange: () => {},
  $isPasswordInput: false,
};

export default ControlInputField;
