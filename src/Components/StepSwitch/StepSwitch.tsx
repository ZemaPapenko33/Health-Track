import { StepSwitchProps } from '../../Types/ComponentTypes'

export const StepSwitch = ({ children, step }: StepSwitchProps): React.ReactElement | null => {
  return children.find((child) => child.props['data-step'] === step) ?? null
}
