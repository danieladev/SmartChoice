import React, { useState } from 'react';
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
}

const FoodClient: React.FC<IProps> = ({ food }: IProps) => {
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
    </Container>
  );
};

export default FoodClient;
