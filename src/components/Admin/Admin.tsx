import { useEffect, useState, FC } from "react";
import { Avatar, Button, Flex, Text, VStack } from "@chakra-ui/react";
import s from "./Admin.module.scss";
import data from "../../../db.json";

interface Card {
  id: number;
  name: string;
  job: string;
  img: string;
  selected: boolean;
  marked: string;
  time: string;
  data: string;
}

const CardList = () => {
  const [cards, setcards] = useState(data.come);
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
          marked: "Пришли",
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
          marked: "Опоздали",
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
          marked: "Не пришли",
        };
      }
      return card;
    });
    setCardList(updatedCardList);
  };

  const colorSelectVisible = (card: Card) => {
    if (card.marked === "Не пришли") return "red.500";
    if (card.marked === "Пришли") return "green.500";
    if (card.marked === "Опоздали") return "orange.500";
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
            <Avatar src={card.img} />
            <VStack align="stretch">
              <Text fontWeight="bold">{card.name}</Text>
              <Text>{card.job}</Text>
            </VStack>
          </Flex>
          <Flex gap="10">
            <Flex direction="column" alignItems="end">
              <Text>{card.data}</Text>
              <Text>{card.time}</Text>
            </Flex>
            <Text align={"end"} color={colorSelectVisible(card)}>
              {card.marked}
            </Text>
          </Flex>
        </Flex>
      ))}
      <Flex gap="4" justifyContent="center">
        <Button bg="green.600" onClick={handleMarkAttendance}>
          Пришли
        </Button>
        <Button bg="orange.600" onClick={handleMarkLate}>
          Опоздали
        </Button>
        <Button bg="red.600" onClick={handleMarkDidNotCome}>
          Не пришли
        </Button>
      </Flex>
    </VStack>
  );
};

const Admin = () => {
  return (
    <>
      <div className={s.panel}>
        <div className={s.container}>
          <CardList />
        </div>
      </div>
    </>
  );
};

export default Admin;
