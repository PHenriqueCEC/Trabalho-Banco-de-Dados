import { Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Datatable } from "../../components/Table";
import { api } from "../../services/api";

interface Order {
  status: string;
  id: number;
}

export function ListOrdersPage() {
  const { id } = useParams();

  const [orders, setOrders] = useState<Order[]>([]);
  useEffect(() => {
    api.get(`/orders/user/${id}`).then((response) => {
      setOrders(response.data);
    });
  }, [id]);

  return (
    <Flex flexDirection="column" alignItems="center" paddingTop="5">
      <Text>Pedidos</Text>
      <Flex
        mt={4}
        padding={8}
        flexDirection="column"
        alignItems="center"
        width={900}
        boxShadow="10px 10px 50px grey"
        borderRadius={8}>
        <Datatable
          columns={["id", "status"]}
          data={orders.map((order) => [order.id, order.status])}
        />
      </Flex>
    </Flex>
  );
}
