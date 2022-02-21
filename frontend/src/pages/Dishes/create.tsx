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
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../services/api";

interface Category {
  id: number;
  name: string;
}

export function CreateDishPage() {
  const { id } = useParams();
  const { register, handleSubmit } = useForm();
  const [categories, setCategories] = useState<Category[]>([]);

  const history = useNavigate();

  useEffect(() => {
    api.get("categoriesDishes").then((response) => {
      setCategories(response.data);
    });
  }, []);

  const handleCreateDish = useCallback(
    async (formValue) => {
      api
        .post("/dishes", {
          name: formValue.name,
          category_dishes_id: formValue.category_id,
          restaurant_id: id,
          ingredients: formValue.ingredients,
          description: formValue.description,
          value: formValue.value,
        })
        .then((response) => {
          history(`/restaurante/${id}`);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    [history, id]
  );

  return (
    <Flex flexDirection="column" alignItems="center" paddingTop="5">
      Cadastrando Prato
      <Flex
        as="form"
        onSubmit={handleSubmit(handleCreateDish)}
        flexDirection="column"
        alignItems="center"
        paddingTop="5"
        width={900}>
        <FormControl>
          <FormLabel>Nome</FormLabel>
          <Input {...register("name")} />
        </FormControl>
        <FormControl>
          <FormLabel>Categoria</FormLabel>
          <Select {...register("category_id")}>
            {categories.map((category) => (
              <option value={category.id}>{category.name}</option>
            ))}
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>Ingredientes</FormLabel>
          <Input {...register("ingredients")} isRequired />
        </FormControl>
        <FormControl>
          <FormLabel>Descrição</FormLabel>
          <Input {...register("description")} isRequired />
        </FormControl>
        <FormControl>
          <FormLabel>Valor: R$</FormLabel>
          <Input {...register("value")} isRequired />
        </FormControl>
        <Button mt={5} type="submit">
          Cadastrar
        </Button>
      </Flex>
    </Flex>
  );
}
