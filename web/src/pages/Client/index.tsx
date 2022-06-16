import React, { useState, useEffect } from 'react';

import HeaderClient from '../../components/HeaderClient';

import api from '../../services/api';

import FoodClient from '../../components/FoodClient';
import ModalAddFood from '../../components/ModalAddFood';

import { FoodsContainer } from './styles';

interface IFoodPlate {
  id: number;
  name: string;
  image: string;
  price: string;
  description: string;
}

const Client: React.FC = () => {
  const [foods, setFoods] = useState<IFoodPlate[]>([]);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    async function loadFoods(): Promise<void> {
      const response = await api.get('/foods');
      setFoods(response.data);
    }

    loadFoods();
  }, []);

  async function handleAddFood(food: Omit<IFoodPlate, 'id'>): Promise<void> {
    try {
      const response = await api.post<IFoodPlate>('/foods', {
        ...food,
      });

      setFoods([...foods, response.data]);
    } catch (err) {
      console.log(err);
    }
  }

  function toggleModal(): void {
    setModalOpen(!modalOpen);
  }

  return (
    <>
      <HeaderClient openModal={toggleModal} />
      <ModalAddFood
        isOpen={modalOpen}
        setIsOpen={toggleModal}
        handleAddFood={handleAddFood}
      />

      <FoodsContainer data-testid="foods-list">
        {foods && foods.map(food => <FoodClient key={food.id} food={food} />)}
      </FoodsContainer>
    </>
  );
};

export default Client;
