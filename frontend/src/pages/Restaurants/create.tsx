import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";
import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

interface Category {
  id: number;
  name: string;
}

export function CreateRestaurantPage() {
  const { register, handleSubmit } = useForm();
  const [categories, setCategories] = useState<Category[]>([]);

  const history = useNavigate();

  useEffect(() => {
    api.get("categoriesRestaurants").then((response) => {
      setCategories(response.data);
    });
  }, []);

  const handleCreateRestaurant = useCallback(
    async (formValue) => {
      api
        .post("/restaurants", {
          name: formValue.name,
          category_restaurant_id: formValue.category_id,
          address: formValue.address,
        })
        .then((response) => {
          history("/");
        })
        .catch((err) => {
          console.log(err);
        });
    },
    [history]
  );

  return (
    <Flex flexDirection="column" alignItems="center" paddingTop="5">
      Cadastrando Restaurante
      <Flex
        as="form"
        onSubmit={handleSubmit(handleCreateRestaurant)}
        flexDirection="column"
        alignItems="center"
        paddingTop="5"
        width={900}>
        <FormControl>
          <FormLabel>Nome</FormLabel>
          <Input {...register("name")} isRequired />
        </FormControl>
        <FormControl>
          <FormLabel>Categoria</FormLabel>
          <Select {...register("category_id")}  isRequired>
          <option value="" hidden>Selecione uma opção</option>
            {categories.map((category) => (
              <option value={category.id}>{category.name}</option>
            ))}
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>Endereço</FormLabel>
          <Input {...register("address")}  isRequired />
        </FormControl>
        <Button mt={5} type="submit">
          Cadastrar
        </Button>
      </Flex>
    </Flex>
  );
}
