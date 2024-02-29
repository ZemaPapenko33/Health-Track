import React from 'react'
import { StepSwitch } from './StepSwitch'
import FullNameBlock from '../FullNameBlock/FullNameBlock'
import AgeAndGenderBlock from '../AgeAndGenderBlock/AgeAndGenderBlock'
import ActivityBlock from '../ActivityBlock/ActivityBlock'
import GoalBlock from '../GoalBlock/GoalBlock'
import NoticeBlock from '../NoticesBlock/NoticeBlock'
import { TStepSwitch } from '../../Types/ComponentTypes'
import HAWBlock from '../HeightAndWeightBlock/HAWBlock'

const FormSteps: React.FC<TStepSwitch> = ({
  userInfo,
  step,
  handleInputChange,
  handleCheckboxChange,
  handleSelectChange,
  handleKeyDown,
  ageValue,
  heightValue,
  weightValue
}) => {
  return (
    <StepSwitch step={step}>
      <FullNameBlock data-step={0} userInfo={userInfo} handleInputChange={handleInputChange} />
      <AgeAndGenderBlock
        data-step={1}
        userInfo={userInfo}
        handleInputChange={handleInputChange}
        handleSelectChange={handleSelectChange}
        ageValue={ageValue}
        handleKeyDown={handleKeyDown}
      />
      <HAWBlock
        data-step={2}
        handleInputChange={handleInputChange}
        heightValue={heightValue}
        weightValue={weightValue}
        handleKeyDown={handleKeyDown}
      />
      <ActivityBlock data-step={3} userInfo={userInfo} handleSelectChange={handleSelectChange} />
      <GoalBlock data-step={4} userInfo={userInfo} handleSelectChange={handleSelectChange} />
      <NoticeBlock data-step={5} handleCheckboxChange={handleCheckboxChange} />
    </StepSwitch>
  )
}

export default FormSteps
