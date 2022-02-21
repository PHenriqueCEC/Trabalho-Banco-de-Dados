import { Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Datatable } from "../../components/Table";
import { api } from "../../services/api";

interface User {
  id: number;
  name: string;
  email: string;
}

export function ListUsersPage() {
  const { id } = useParams();

  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    api.get(`/users`).then((response) => {
      setUsers(response.data);
    });
  }, [id]);

  return (
    <Flex flexDirection="column" alignItems="center" paddingTop="5">
      <Text>Usuários</Text>
      <Flex
        mt={4}
        padding={8}
        flexDirection="column"
        alignItems="center"
        width={900}
        boxShadow="10px 10px 50px grey"
        borderRadius={8}>
        <Datatable
          columns={["id", "nome", "email"]}
          data={users.map((user) => [user.id, user.name, user.email])}
        />
      </Flex>
    </Flex>
  );
}
