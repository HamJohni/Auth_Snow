import { useState } from "react";
import { Avatar, Button, Flex, Text, VStack } from "@chakra-ui/react";
import s from "./Admin.module.scss";

interface Card {
  id: number;
  name: string;
  job: string;
  img: string;
  selected: boolean;
}

interface CardListProps {
  cards: Card[];
}

const CardList = ({ cards }: CardListProps) => {
  const [selectAll, setSelectAll] = useState(false);
  const [cardList, setCardList] = useState(cards);

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    setCardList(
      cardList.map((card) => ({
        ...card,
        selected: !selectAll,
      }))
    );
  };

  const handleCardSelect = (id: number) => {
    setCardList(
      cardList.map((card) => {
        if (card.id === id) {
          return {
            ...card,
            selected: !card.selected,
          };
        }
        return card;
      })
    );
  };

  const handleMarkAttendance = () => {
    const selectedCards = cardList.filter((card) => card.selected);
    console.log("Selected cards:", selectedCards);
  };

  return (
    <VStack spacing="4" align="stretch">
      <Flex justify="space-between" align="center">
        <Button onClick={handleSelectAll}>
          {selectAll ? "Отменить выбор" : "Выбрать все"}
        </Button>
      </Flex>
      {cardList.map((card) => (
        <Flex
          key={card.id}
          border={card.selected ? "2px solid yellow" : "2px solid gray"}
          borderRadius="lg"
          p="4"
          onClick={() => handleCardSelect(card.id)}
          cursor="pointer"
        >
          <Flex gap="4" align="stretch">
            <Avatar />
            <VStack align="stretch">
              <Text fontWeight="bold">{card.name}</Text>
              <Text>{card.job}</Text>
            </VStack>
          </Flex>
        </Flex>
      ))}
      <Flex gap="4" justifyContent="center">
        <Button bg="green.600" onClick={handleMarkAttendance}>
          Пришли
        </Button>
        <Button bg="red.600" onClick={handleMarkAttendance}>
          Не пришли
        </Button>
      </Flex>
    </VStack>
  );
};

const cards: Card[] = [
  {
    id: 1,
    name: "Kera Yan",
    job: "Frontend Developer",
    img: "https://bit.ly/dan-abramov",
    selected: false,
  },
  {
    id: 2,
    name: "Belek Belekov",
    job: "Senior Mom Deviloper",
    img: "https://bit.ly/tioluwani-kolawole",
    selected: false,
  },
  {
    id: 4,
    name: "Chort Chortov",
    job: "Python Developer",
    img: "https://bit.ly/kent-c-dodds",
    selected: false,
  },
  {
    id: 5,
    name: "Chort Chortov",
    job: "Python Developer",
    img: "https://bit.ly/ryan-florence",
    selected: false,
  },
  {
    id: 6,
    name: "Chort Chortov",
    job: "Python Developer",
    img: "https://bit.ly/prosper-baba",
    selected: false,
  },
  {
    id: 7,
    name: "Chort Chortov",
    job: "Python Developer",
    img: "https://bit.ly/code-beast",
    selected: false,
  },
  {
    id: 8,
    name: "Chort Chortov",
    job: "Python Developer",
    img: "https://bit.ly/sage-adebayo",
    selected: false,
  },
];

const Admin = () => {
  return (
    <>
      <div className={s.container}>
        <CardList cards={cards} />
      </div>
    </>
  );
};

export default Admin;
