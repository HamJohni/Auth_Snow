import React, { useState } from "react";
import s from "./Admin.module.scss";

import {
  SimpleGrid,
  Card,
  CardHeader,
  Heading,
  CardBody,
  Text,
  CardFooter,
  Button,
  Wrap,
  WrapItem,
  Avatar,
  Stack,
  Box,
} from "@chakra-ui/react";


interface User {
  id: number;
  name: string;
  job: string;
  img: string;
}

const users: User[] = [
  {
    id: 1,
    name: "Kera Yan",
    job: "Frontend Developer",
    img: "https://bit.ly/dan-abramov",
  },
  {
    id: 2,
    name: "Belek Belekov",
    job: "Senior Mom Deviloper",
    img: "https://bit.ly/tioluwani-kolawole",
  },
  {
    id: 4,
    name: "Chort Chortov",
    job: "Python Developer",
    img: "https://bit.ly/kent-c-dodds",
  },
  {
    id: 4,
    name: "Chort Chortov",
    job: "Python Developer",
    img: "https://bit.ly/ryan-florence",
  },
  {
    id: 5,
    name: "Chort Chortov",
    job: "Python Developer",
    img: "https://bit.ly/prosper-baba",
  },
  {
    id: 6,
    name: "Chort Chortov",
    job: "Python Developer",
    img: "https://bit.ly/code-beast",
  },
  {
    id: 7,
    name: "Chort Chortov",
    job: "Python Developer",
    img: "https://bit.ly/sage-adebayo",
  },
  {
    id: 8,
    name: "Chort Chortov",
    job: "Python Developer",
    img: "https://bit.ly/sage-adebayo",
  },
  {
    id: 9,
    name: "Chort Chortov",
    job: "Python Developer",
    img: "https://bit.ly/code-beast",
  },
  {
    id: 10,
    name: "Chort Chortov",
    job: "Python Developer",
    img: "https://bit.ly/ryan-florence",
  },
  {
    id: 11,
    name: "Chort Chortov",
    job: "Python Developer",
    img: "https://bit.ly/sage-adebayo",
  },
  {
    id: 12,
    name: "Chort Chortov",
    job: "Python Developer",
    img: "https://bit.ly/code-beast",
  },
  {
    id: 13,
    name: "Chort Chortov",
    job: "Python Developer",
    img: "https://bit.ly/ryan-florence",
  },
  {
    id: 14,
    name: "Chort Chortov",
    job: "Python Developer",
    img: "https://bit.ly/sage-adebayo",
  },
  {
    id: 15,
    name: "Chort Chortov",
    job: "Python Developer",
    img: "https://bit.ly/code-beast",
  },
  {
    id: 16,
    name: "Chort Chortov",
    job: "Python Developer",
    img: "https://bit.ly/ryan-florence",
  },
];

const Admin = () => {
  return (
    <>
      <div className={s.container}>
        <div className={s.panel}>
          <SimpleGrid
            spacing={4}
            templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
          >
            {users.map((item) => (
              <Card>
                <CardHeader>
                  <Wrap>
                    <WrapItem>
                      <Avatar name="Dan Abrahmov" src={item.img} />
                    </WrapItem>
                  </Wrap>
                  <Heading size="md">{item.name}</Heading>
                </CardHeader>
                <CardBody>
                  <Text>{item.job}</Text>
                </CardBody>
                <CardFooter>
                  <Button>Select</Button>
                </CardFooter>
              </Card>
            ))}
          </SimpleGrid>
          <div className={s.under}>
            <Stack direction="row" spacing={4} align="end">
              <Button colorScheme="teal" variant="solid">
                Отметить
              </Button>
              <Button colorScheme="red" variant="outline">
                Не пришел
              </Button>
            </Stack>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
