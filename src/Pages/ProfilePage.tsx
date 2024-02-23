import { Button, Stack, Stepper, Step, StepLabel } from '@mui/material'
import useProfilePage from '../hooks/use-profile-page.hook'
import FullNameBlock from '../Components/FullNameBlock/FullNameBlock'
import AgeAndGenderBlock from '../Components/AgeAndGenderBlock/AgeAndGenderBlock'
import ActivityBlock from '../Components/ActivityBlock/ActivityBlock'
import GoalBlock from '../Components/GoalBlock/GoalBlock'
import NoticeBlock from '../Components/NoticesBlock/NoticeBlock'
import { useDefaultRedirect } from '../hooks/use-default-redirect.hook'

const ProfilePage = () => {
  const {
    userInfo,
    activeStep,
    steps,
    handleNext,
    handleBack,
    handleInputChange,
    handleSelectChange,
    handleCheckboxChange,
    handleFinish
  } = useProfilePage()
  useDefaultRedirect()

  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return <FullNameBlock userInfo={userInfo} handleInputChange={handleInputChange} />
      case 1:
        return (
          <AgeAndGenderBlock
            userInfo={userInfo}
            handleInputChange={handleInputChange}
            handleSelectChange={handleSelectChange}
          />
        )
      case 2:
        return <ActivityBlock userInfo={userInfo} handleSelectChange={handleSelectChange} />
      case 3:
        return <GoalBlock userInfo={userInfo} handleSelectChange={handleSelectChange} />
      case 4:
        return <NoticeBlock handleCheckboxChange={handleCheckboxChange} />
    }
  }

  return (
    <Stack height={'100vh'} width={'100vw'} alignItems={'center'} justifyContent={'center'}>
      <Stack marginBottom={'2rem'} width={'100%'}>
        <Stepper activeStep={activeStep}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Stack>
      {getStepContent(activeStep)}
      <Stack flexDirection={'row'} padding={'2rem'}>
        <Button disabled={activeStep === 0} onClick={handleBack}>
          Back
        </Button>
        {activeStep !== steps.length - 1 ? (
          <Button variant="contained" onClick={handleNext}>
            Next
          </Button>
        ) : (
          <Button variant="contained" onClick={handleFinish}>
            Finish
          </Button>
        )}
      </Stack>
    </Stack>
  )
}

export default ProfilePage
