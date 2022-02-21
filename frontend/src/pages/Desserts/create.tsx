import { Button, Flex, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../services/api";

export function CreateDessertPage() {
  const { id } = useParams();
  const { register, handleSubmit } = useForm();

  const history = useNavigate();

  const handleCreateDessert = useCallback(
    async (formValue) => {
      api
        .post("desserts", {
          name: formValue.name,
          restaurant_id: id,
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
      Cadastrando Sobremesa
      <Flex
        as="form"
        onSubmit={handleSubmit(handleCreateDessert)}
        flexDirection="column"
        alignItems="center"
        paddingTop="5"
        width={900}>
        <FormControl>
          <FormLabel>Nome</FormLabel>
          <Input {...register("name")} isRequired />
        </FormControl>
        <FormControl>
          <FormLabel>Value: R$</FormLabel>
          <Input {...register("value")} isRequired />
        </FormControl>
        <Button mt={5} type="submit">
          Cadastrar
        </Button>
      </Flex>
    </Flex>
  );
}
