import React from 'react'
import { FoodChipWrapper } from './FoodChipStyled'
import { TFoodChip } from '../../Types/ComponentTypes'

const FoodChip: React.FC<TFoodChip> = ({ item, deleteHandler }) => {
  const handleDelete = () => {
    deleteHandler(item.id)
  }
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
