import { Button, Flex, Icon, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../services/api";
import { FaUtensils } from "react-icons/fa";

interface Restaurant {
  id: number;
  name: string;
}

export function HomePage() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  useEffect(() => {
    api.get("/restaurants").then((response) => {
      setRestaurants(response.data);
    });
  }, []);
  return (
    <Flex flexDirection="column" alignItems="center" paddingTop="5">
      <Text fontSize="36px" fontWeight="bold">
        Ifood RU
      </Text>
      
      <Flex
        flexDirection="column"
        width={900}
        mt={5}
        padding={8}
        borderRadius={8}
        boxShadow="10px 10px 50px grey">
        Restaurantes
        {restaurants.map((restaurant) => {
          return (
            <Link to={`/restaurante/${restaurant.id}`}>
              <Button m={4}>
                <Icon as={FaUtensils} fontSize={24} mr={2} />
                {restaurant.name}
              </Button>
            </Link>
          );
        })}
      </Flex>
    </Flex>
  );
}
