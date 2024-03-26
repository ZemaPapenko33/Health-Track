import { t } from 'i18next'
import { TBMIData } from '../Types/ComponentTypes'
import { theme } from '../theme'

export const dataForBMI = (BMI: number): TBMIData => {
  const BMIData: TBMIData = {
    message: '',
    color: ''
  }

  switch (true) {
    case BMI < 16:
      BMIData.message = t('t-BMI-less-16')
      BMIData.color = theme.palette.lightBlue.main
      break
    case BMI >= 16 && BMI <= 18.5:
      BMIData.message = t('t-BMI-16-18.5')
      BMIData.color = theme.palette.lightBlue.main
      break
    case BMI >= 18.6 && BMI <= 25:
      BMIData.message = t('t-BMI-18.6-25')
      BMIData.color = theme.palette.primary.main
      break
    case BMI >= 25.1 && BMI <= 30:
      BMIData.message = t('t-BMI-25.1-30')
      BMIData.color = theme.palette.softYellow.main
      break
    case BMI >= 30.1 && BMI <= 35:
      BMIData.message = t('t-BMI-30.1-35')
      BMIData.color = theme.palette.softRed.main
      break
    case BMI >= 35.1 && BMI <= 40:
      BMIData.message = t('t-BMI-35.1-40')
      BMIData.color = theme.palette.softRed.main
      break
    case BMI > 40.1:
      BMIData.message = t('t-BMI-more-40.1')
      BMIData.color = theme.palette.softRed.main
      break
  }
  return BMIData!
}
