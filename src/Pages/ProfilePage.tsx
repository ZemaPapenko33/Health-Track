import { Button, Stack, Stepper, Step, StepLabel } from '@mui/material'
import useProfilePage from '../hooks/use-profile-page.hook'
import { useDefaultRedirect } from '../hooks/use-default-redirect.hook'
import FormSteps from '../Components/StepSwitch/FormSteps'
import { t } from 'i18next'
import { isStepValid } from '../utils/handleError'

const ProfilePage = () => {
  const {
    userInfo,
    activeStep,
    steps,
    buttonText,
    ageValue,
    heightValue,
    weightValue,
    handleBack,
    handleInputChange,
    handleSelectChange,
    handleCheckboxChange,
    handleKeyDown,
    buttonAction
  } = useProfilePage()
  useDefaultRedirect()

  return (
    <Stack
      height={'100vh'}
      width={'100vw'}
      alignItems={'center'}
      justifyContent={'center'}
      overflow={'hidden'}
    >
      <Stack marginBottom={'2rem'} width={'100%'}>
        <Stepper activeStep={activeStep}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Stack>
      <FormSteps
        step={activeStep}
        userInfo={userInfo}
        handleCheckboxChange={handleCheckboxChange}
        handleInputChange={handleInputChange}
        handleSelectChange={handleSelectChange}
        handleKeyDown={handleKeyDown}
        ageValue={ageValue}
        heightValue={heightValue}
        weightValue={weightValue}
      />
      <Stack flexDirection={'row'} padding={'2rem'}>
        <Button disabled={!activeStep} onClick={handleBack}>
          {t('t-back-step')}
        </Button>
        <Button
          variant="contained"
          onClick={buttonAction}
          disabled={!isStepValid(activeStep, userInfo)}
        >
          {buttonText}
        </Button>
      </Stack>
    </Stack>
  )
}

export default ProfilePage
