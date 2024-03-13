import { IconSwitchProps } from '../../Types/ComponentTypes'

export const IconSwitch = ({ children, text }: IconSwitchProps): React.ReactElement | null => {
  return children.find((child) => child.props['data-text'] === text) ?? null
}
