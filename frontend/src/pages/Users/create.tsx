import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

export function CreateUserPage() {
  const { register, handleSubmit } = useForm();

  const history = useNavigate();

  const handleCreateDish = useCallback(
    async (formValue) => {
      api
        .post("/users", {
          name: formValue.name,
          email: formValue.email,
          type: formValue.type,
          license_plate: formValue.license_plate,
          driver_license: formValue.driver_license,
          password: formValue.password,
        })
        .then((response) => {
          history(`/usuarios`);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    [history ]
  );

  return (
    <Flex flexDirection="column" alignItems="center" paddingTop="5">
      Cadastrando Usuário
      <Flex
        as="form"
        onSubmit={handleSubmit(handleCreateDish)}
        flexDirection="column"
        alignItems="center"
        paddingTop="5"
        width={900}>
        <FormControl>
          <FormLabel>Nome * </FormLabel>
          <Input {...register("name")} />
        </FormControl>
        <FormControl>
          <FormLabel>Tipo *</FormLabel>
          <Select {...register("type")}>
            <option value="" hidden>
              Selecione uma opção
            </option>
            <option value={0}>Administrador</option>
            <option value={1}>Funcionário</option>
            <option value={2}>Motoboy</option>
            <option value={3}>Universitário</option>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>E-mail *</FormLabel>
          <Input {...register("email")} isRequired />
        </FormControl>
        <FormControl>
          <FormLabel>Habilitação</FormLabel>
          <Input {...register("driver_license")} />
        </FormControl>
        <FormControl>
          <FormLabel>Placa da Moto</FormLabel>
          <Input {...register("license_plate")} />
        </FormControl>
        <FormControl>
          <FormLabel>Senha *</FormLabel>
          <Input {...register("password")} isRequired type="password" />
        </FormControl>
        <Button mt={5} type="submit">
          Cadastrar
        </Button>
      </Flex>
    </Flex>
  );
}
