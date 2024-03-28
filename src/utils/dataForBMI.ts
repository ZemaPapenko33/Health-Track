import { t } from 'i18next'
import { TBMIData } from '../Types/ComponentTypes'
import { theme } from '../theme'
import {
  MAX_BMI,
  NORMAL_WEIGHT_UPPER_THRESHOLD,
  OBESE_CLASS1_LOWER_THRESHOLD,
  OBESE_CLASS1_UPPER_THRESHOLD,
  OBESE_CLASS2_LOWER_THRESHOLD,
  OBESE_CLASS2_UPPER_THRESHOLD,
  OBESE_CLASS3_LOWER_THRESHOLD,
  OBESE_CLASS3_UPPER_THRESHOLD,
  OVERWEIGHT_LOWER_THRESHOLD,
  UNDERWEIGHT_THRESHOLD
} from '../shared/consts/BMI'

export const dataForBMI = (BMI: number): TBMIData => {
  const BMIData: TBMIData = {
    message: '',
    color: ''
  }

  switch (true) {
    case BMI < UNDERWEIGHT_THRESHOLD:
      BMIData.message = t('t-BMI-less-16')
      BMIData.color = theme.palette.lightBlue.main
      break
    case BMI >= UNDERWEIGHT_THRESHOLD && BMI <= NORMAL_WEIGHT_UPPER_THRESHOLD:
      BMIData.message = t('t-BMI-16-18.5')
      BMIData.color = theme.palette.lightBlue.main
      break
    case BMI >= OVERWEIGHT_LOWER_THRESHOLD && BMI <= OVERWEIGHT_LOWER_THRESHOLD:
      BMIData.message = t('t-BMI-18.6-25')
      BMIData.color = theme.palette.primary.main
      break
    case BMI >= OBESE_CLASS1_LOWER_THRESHOLD && BMI <= OBESE_CLASS1_UPPER_THRESHOLD:
      BMIData.message = t('t-BMI-25.1-30')
      BMIData.color = theme.palette.softYellow.main
      break
    case BMI >= OBESE_CLASS2_LOWER_THRESHOLD && BMI <= OBESE_CLASS2_UPPER_THRESHOLD:
      BMIData.message = t('t-BMI-30.1-35')
      BMIData.color = theme.palette.softRed.main
      break
    case BMI >= OBESE_CLASS3_LOWER_THRESHOLD && BMI <= OBESE_CLASS3_UPPER_THRESHOLD:
      BMIData.message = t('t-BMI-35.1-40')
      BMIData.color = theme.palette.softRed.main
      break
    case BMI > MAX_BMI:
      BMIData.message = t('t-BMI-more-40.1')
      BMIData.color = theme.palette.softRed.main
      break
  }
  return BMIData!
}
