import React, { useCallback } from 'react'
import { FoodChipWrapper } from './FoodChipStyled'
import { TFoodChip } from '../../Types/ComponentTypes'

const FoodChip: React.FC<TFoodChip> = ({ item, deleteHandler }) => {
  const handleDelete = useCallback(() => {
    deleteHandler(item.id)
  }, [item, deleteHandler])

  return (
    <FoodChipWrapper
      key={item.id}
      variant="outlined"
      color="success"
      label={item.nameFood}
      id={item.id}
      onDelete={handleDelete}
    />
  )
}

export default FoodChip
