import { Button, Flex, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

export function CreateCategoryRestaurantPage() {
  const { register, handleSubmit } = useForm();

  const history = useNavigate()

  const handleCreateCategoryRestaurant = useCallback(async (formValue) => {
    api
      .post("categoriesRestaurants", {
        name: formValue.name,
      })
      .then((response) => {
        history("/")
      })
      .catch((err) => {
        console.log(err);
      });
  }, [history]);

  return (
    <Flex flexDirection="column" alignItems="center" paddingTop="5">
      Cadastrando Categoria
      <Flex
        as="form"
        onSubmit={handleSubmit(handleCreateCategoryRestaurant)}
        flexDirection="column"
        alignItems="center"
        paddingTop="5"
        width={900}>
        <FormControl>
          <FormLabel>Nome</FormLabel>
          <Input {...register("name")} />
        </FormControl>
        <Button mt={5} type="submit">
          Cadastrar
        </Button>
      </Flex>
    </Flex>
  );
}
