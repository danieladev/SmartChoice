import React, { useState } from 'react';
import { FiEdit3, FiTrash } from 'react-icons/fi';
import { Container } from './styles';

interface IFoodPlate {
  id: number;
  name: string;
  image: string;
  price: string;
  description: string;
}

interface IProps {
  food: IFoodPlate;
  handleDelete: (id: number) => {};
  handleEditFood: (food: IFoodPlate) => void;
}

const FoodAdmin: React.FC<IProps> = ({
  food,
  handleDelete,
  handleEditFood,
}: IProps) => {
  function setEditingFood(): void {
    handleEditFood(food);
  }

  return (
    <Container>
      <header>
        <img src={food.image} alt={food.name} />
      </header>
      <section className="body">
        <h2>{food.name}</h2>
        <p>{food.description}</p>
        <p className="price">
          R$ <b>{food.price}</b>
        </p>
      </section>
      <section className="footer">
        <div className="icon-container">
          <button
            type="button"
            className="icon"
            onClick={() => setEditingFood()}
            data-testid={`edit-food-${food.id}`}
          >
            <FiEdit3 size={20} />
          </button>

          <button
            type="button"
            className="icon"
            onClick={() => handleDelete(food.id)}
            data-testid={`remove-food-${food.id}`}
          >
            <FiTrash size={20} />
          </button>
        </div>
      </section>
    </Container>
  );
};

export default FoodAdmin;
