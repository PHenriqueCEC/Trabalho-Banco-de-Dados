import {
  Button,
  Divider,
  Flex,
  Grid,
  GridItem,
  SimpleGrid,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useCallback, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { api } from "../../services/api";

interface Product {
  id: number;
  name: string;
  value: number;
}

interface Restaurant {
  name: string;
  address: string;
}

interface Selected {
  dishes: Product[];
  drinks: Product[];
  desserts: Product[];
}

export function ShowRestaurantsPage() {
  const { id } = useParams();

  const history = useNavigate();

  const [dishes, setDishes] = useState<Product[]>([]);
  const [drinks, setDrinks] = useState<Product[]>([]);
  const [desserts, setDesserts] = useState<Product[]>([]);
  const [selected, setSelected] = useState<Selected>({
    dishes: [],
    desserts: [],
    drinks: [],
  });

  const [restaurant, setRestaurant] = useState<Restaurant>({
    name: "",
    address: "",
  });

  const toast = useToast();

  const { handleSubmit } = useForm();

  useEffect(() => {
    api.get(`/restaurants/${id}`).then((response) => {
      setRestaurant(response.data);
    });
    api.get(`/dishes/restaurant/${id}`).then((response) => {
      setDishes(response.data);
    });
    api.get(`/drinks/restaurant/${id}`).then((response) => {
      setDrinks(response.data);
    });
    api.get(`/desserts/restaurant/${id}`).then((response) => {
      setDesserts(response.data);
    });
  }, [id]);

  const handleCreateOrder = useCallback(
    (formValue) => {
      if (selected.dishes.length) {
        api
          .post("/orders", {
            dishes: selected.dishes,
            desserts: selected.desserts,
            drinks: selected.drinks,
            restaurant_id: id,
            academic_id: 2,
            origin: restaurant.address,
            delivery_forecast: 30,
            destiny:
              "Rua Jose De Alencar, 345, apto 302, São Pedro, Juiz de Fora",
          })
          .then((response) => {
            toast({
              title: "Pedido realizado com sucesso!",
              status: "success",
            });
            history(`/usuarios/pedidos/${2}`);
          });
      } else {
        toast({
          title: "Selecione um prato para realizar o pedido",
          status: "warning",
        });
      }
    },
    [history, id, selected, restaurant, toast]
  );

  const handleAddDish = useCallback((dish: Product) => {
    setSelected((prev) => ({
      ...prev,
      dishes: [...prev.dishes, dish],
    }));
  }, []);

  const handleRemoveDish = useCallback(
    (dish: Product) => {
      const indexOf = selected.dishes.indexOf(dish);

      const newDishes = selected.dishes;

      newDishes.splice(indexOf, 1);

      setSelected((prev) => ({
        ...prev,
        dishes: newDishes,
      }));
    },
    [selected]
  );

  const handleAddDrink = useCallback((drink: Product) => {
    setSelected((prev) => ({
      ...prev,
      drinks: [...prev.drinks, drink],
    }));
  }, []);

  const handleRemoveDrink = useCallback(
    (drink: Product) => {
      const indexOf = selected.drinks.indexOf(drink);

      const newDrinks = selected.drinks;

      newDrinks.splice(indexOf, 1);

      setSelected((prev) => ({
        ...prev,
        drinks: newDrinks,
      }));
    },
    [selected]
  );

  const handleAddDessert = useCallback((dessert: Product) => {
    setSelected((prev) => ({
      ...prev,
      desserts: [...prev.desserts, dessert],
    }));
  }, []);

  const handleRemoveDessert = useCallback(
    (dessert: Product) => {
      const indexOf = selected.desserts.indexOf(dessert);

      const newDesserts = selected.desserts;

      newDesserts.splice(indexOf, 1);

      setSelected((prev) => ({
        ...prev,
        desserts: newDesserts,
      }));
    },
    [selected]
  );

  return (
    <Grid templateColumns="repeat(5, 1fr)" height="100vh">
      <GridItem colSpan={4}>
        <Flex flexDirection="column" alignItems="center" paddingTop="5">
          <Text fontSize="36px" fontWeight="bold">
            {restaurant.name}
          </Text>
          <SimpleGrid columns={{ base: 1, md: 4 }} spacing={4}>
            <Link to={`/pratos/${id}/cadastrar`}>
              <Button width="100%">Cadastrar Pratos</Button>
            </Link>
            <Link to={`/bebidas/${id}/cadastrar`}>
              <Button width="100%">Cadastrar Bebidas</Button>
            </Link>
            <Link to={`/sobremesas/${id}/cadastrar`}>
              <Button width="100%">Cadastrar Sobremesas</Button>
            </Link>
            <Link to={`/restaurante/pedidos/${id}`}>
              <Button width="100%">Pedidos</Button>
            </Link>
          </SimpleGrid>
          <Flex
            mt={4}
            padding={8}
            flexDirection="column"
            alignItems="center"
            width={900}
            boxShadow="10px 10px 50px grey"
            borderRadius={8}>
            <Divider marginY={4} />
            <Text>Pratos</Text>
            <Flex wrap="wrap">
              {dishes.map((dish) => {
                return (
                  <Flex m={2}>
                    <Button
                      onClick={() => {
                        handleAddDish(dish);
                      }}>
                      {dish.name} - R$ {dish.value}
                    </Button>
                  </Flex>
                );
              })}
            </Flex>
            <Divider marginY={4} />
            <Text>Bebidas</Text>
            <Flex wrap="wrap">
              {drinks.map((drink) => {
                return (
                  <Flex m={2}>
                    <Button
                      onClick={() => {
                        handleAddDrink(drink);
                      }}>
                      {drink.name} - R$ {drink.value}
                    </Button>
                  </Flex>
                );
              })}
            </Flex>
            <Divider marginY={4} />
            <Text>Sobremesas</Text>
            <Flex wrap="wrap">
              {desserts.map((dessert) => {
                return (
                  <Flex m={2}>
                    <Button
                      onClick={() => {
                        handleAddDessert(dessert);
                      }}>
                      {dessert.name} - R$ {dessert.value}
                    </Button>
                  </Flex>
                );
              })}
            </Flex>
          </Flex>
        </Flex>
      </GridItem>
      <GridItem colSpan={1}>
        <Flex
          as="form"
          onSubmit={handleSubmit(handleCreateOrder)}
          width="100%"
          height="100%"
          bg="#fff"
          boxShadow="10px 10px 50px grey"
          borderRadius={8}
          flexDirection="column"
          overflowY="scroll"
          padding={8}>
          <Text textAlign="center" fontSize={24} fontWeight="bold" mt={4}>
            Pedido
          </Text>
          <Divider marginY={4} />
          <Text>Pratos</Text>
          <Flex wrap="wrap">
            {selected.dishes.map((dish) => {
              return (
                <Flex m={2}>
                  <Button
                    onClick={() => {
                      handleRemoveDish(dish);
                    }}>
                    {dish.name} - R$ {dish.value}
                  </Button>
                </Flex>
              );
            })}
          </Flex>
          <Divider marginY={4} />
          <Text>Bebidas</Text>
          <Flex wrap="wrap">
            {selected.drinks.map((drink) => {
              return (
                <Flex m={2}>
                  <Button
                    onClick={() => {
                      handleRemoveDrink(drink);
                    }}>
                    {drink.name} - R$ {drink.value}
                  </Button>
                </Flex>
              );
            })}
          </Flex>
          <Divider marginY={4} />
          <Text>Sobremesas</Text>
          <Flex wrap="wrap">
            {selected.desserts.map((dessert) => {
              return (
                <Flex m={2}>
                  <Button
                    onClick={() => {
                      handleRemoveDessert(dessert);
                    }}>
                    {dessert.name} - R$ {dessert.value}
                  </Button>
                </Flex>
              );
            })}
          </Flex>
          <Flex justifyContent="center" mt="4">
            <Button type="submit" bg="red" color="#ffffff">
              Realizar Pedido
            </Button>
          </Flex>
        </Flex>
      </GridItem>
    </Grid>
  );
}
