import { TContentSwitchProps } from '../../Types/ComponentTypes'

export const ContentSwitch = ({
  children,
  selectedMenu
}: TContentSwitchProps): React.ReactElement | null => {
  return children.find((child) => child.props['data-text'] === selectedMenu) ?? null
}
