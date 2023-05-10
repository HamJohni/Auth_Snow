import { useState } from "react";
import { Avatar, Button, Flex, Text, VStack } from "@chakra-ui/react";
import s from "./Admin.module.scss";

interface Card {
  id: number;
  name: string;
  job: string;
  img: string;
  selected: boolean;
  markedLate: boolean;
  markedAbsent: boolean;
  markedPresent: boolean;
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
    const updatedCardList = cardList.map((card) => {
      if (selectedCards.includes(card)) {
        return {
          ...card,
          selected: false,
          markedLate: false,
          markedAbsent: false,
          markedPresent: true,
        };
      }
      return card;
    });
    setCardList(updatedCardList);
  };

  const handleMarkLate = () => {
    const selectedCards = cardList.filter((card) => card.selected);
    const updatedCardList = cardList.map((card) => {
      if (selectedCards.includes(card)) {
        return {
          ...card,
          selected: false,
          markedLate: true,
          markedAbsent: false,
          markedPresent: false,
        };
      }
      return card;
    });
    setCardList(updatedCardList);
  };

  const handleMarkDidNotCome = () => {
    const selectedCards = cardList.filter((card) => card.selected);
    const updatedCardList = cardList.map((card) => {
      if (selectedCards.includes(card)) {
        return {
          ...card,
          selected: false,
          markedLate: false,
          markedAbsent: true,
          markedPresent: false,
        };
      }
      return card;
    });
    setCardList(updatedCardList);
  };

  const colorSelectVisible = (card: Card) => {
    if (card.markedAbsent) return "red.500";
    if (card.markedPresent) return "green.500";
    if (card.markedLate) return "orange.500";
    return "gray.500";
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
          transform={`scale(${card.selected ? "1.02" : "1"})`}
          onClick={() => handleCardSelect(card.id)}
          cursor="pointer"
          justifyContent={"space-between"}
        >
          <Flex gap="4" align="stretch">
            <Avatar />
            <VStack align="stretch">
              <Text fontWeight="bold">{card.name}</Text>
              <Text>{card.job}</Text>
            </VStack>
          </Flex>
          <Text color={colorSelectVisible(card)}>
            {card.markedLate ? "Опоздал" : ""}
            {card.markedAbsent ? "Не пришел" : ""}
            {card.markedPresent ? "Пришел" : ""}
          </Text>
        </Flex>
      ))}
      <Flex gap="4" justifyContent="center">
        <Button bg="green.600" onClick={handleMarkAttendance}>
          Пришли
        </Button>
        <Button bg="orange.600" onClick={handleMarkLate}>
          Опоздал
        </Button>
        <Button bg="red.600" onClick={handleMarkDidNotCome}>
          Не пришел
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
    markedLate: false,
    markedAbsent: false,
    markedPresent: false,
  },
  {
    id: 2,
    name: "Belek Belekov",
    job: "Senior Mom Deviloper",
    img: "https://bit.ly/tioluwani-kolawole",
    selected: false,
    markedLate: false,
    markedAbsent: false,
    markedPresent: false,
  },
  {
    id: 4,
    name: "Chort Chortov",
    job: "Python Developer",
    img: "https://bit.ly/kent-c-dodds",
    selected: false,
    markedLate: false,
    markedAbsent: false,
    markedPresent: false,
  },
  {
    id: 5,
    name: "Chort Chortov",
    job: "Python Developer",
    img: "https://bit.ly/ryan-florence",
    selected: false,
    markedLate: false,
    markedAbsent: false,
    markedPresent: false,
  },
  {
    id: 6,
    name: "Chort Chortov",
    job: "Python Developer",
    img: "https://bit.ly/prosper-baba",
    selected: false,
    markedLate: false,
    markedAbsent: false,
    markedPresent: false,
  },
  {
    id: 7,
    name: "Chort Chortov",
    job: "Python Developer",
    img: "https://bit.ly/code-beast",
    selected: false,
    markedLate: false,
    markedAbsent: false,
    markedPresent: false,
  },
  {
    id: 8,
    name: "Chort Chortov",
    job: "Python Developer",
    img: "https://bit.ly/sage-adebayo",
    selected: false,
    markedLate: false,
    markedAbsent: false,
    markedPresent: false,
  },
];

const Admin = () => {
  return (
    <>
      <div className={s.panel}>
        <div className={s.container}>
          <CardList cards={cards} />
        </div>
      </div>
    </>
  );
};

export default Admin;
