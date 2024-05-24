import React, { useCallback } from 'react'
import { WaterChipWrapper } from './WaterChipStyled'
import { TWaterChip } from '../../Types/ComponentTypes'

const WaterChip: React.FC<TWaterChip> = ({ item, deleteHandler }) => {
  const handleDelete = useCallback(() => {
    deleteHandler(item.id)
  }, [item, deleteHandler])
  return (
    <WaterChipWrapper
      key={item.id}
      variant="outlined"
      color="success"
      label={item.ml}
      id={item.id}
      onDelete={handleDelete}
    />
  )
}

export default WaterChip
