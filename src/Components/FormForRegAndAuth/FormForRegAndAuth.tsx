import React from 'react'
import { FormForRegAndAuthWrapper } from './FormForRegAndAuthStyled'
import { Button, TextField } from '@mui/material'
import { EmailInputWrapper } from '../EmailInput/EmailInputStyled'

const FormForRegAndAuth = () => {
  return (
    <FormForRegAndAuthWrapper>
      <EmailInputWrapper
        helperText="Please enter your email"
        label="Email"
        type="Email"
        variant="standard"
        margin="dense"
        size="medium"
        required
      />
      <TextField
        helperText="Please enter a password of at least 8 characters"
        label="Password"
        type="password"
        variant="standard"
        margin="normal"
        size="medium"
        required
      />
      <Button variant="contained">Sign in</Button>
    </FormForRegAndAuthWrapper>
  )
}

export default FormForRegAndAuth
