import { Button, Flex, Text } from "@chakra-ui/react";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Datatable } from "../../components/Table";
import { api } from "../../services/api";

interface Order {
  status: string;
  id: number;
}

export function ListOrdersByRestaurantPage() {
  const { id } = useParams();

  const [orders, setOrders] = useState<Order[]>([]);

  const getOrders = useCallback(() => {
    api.get(`/orders/restaurant/${id}`).then((response) => {
      setOrders(response.data);
    });
  }, [id]);
  useEffect(() => {
    getOrders();
  }, [getOrders]);

  const handleUpdateStatus = useCallback(
    (order: Order, status: string) => {
      api
        .put(`/orders/status/${order.id}`, {
          status,
        })
        .then((response) => {
          getOrders();
        });
    },
    [getOrders]
  );

  return (
    <Flex flexDirection="column" alignItems="center" paddingTop="5">
      <Text>Pedidos - Restaurante</Text>
      <Flex
        mt={4}
        padding={8}
        flexDirection="column"
        alignItems="center"
        width={900}
        boxShadow="10px 10px 50px grey"
        borderRadius={8}>
        <Datatable
          columns={["id", "status", "ações"]}
          data={orders.map((order) => [
            order.id,
            order.status,
            order.status === "AGUARDANDO APROVAÇÃO" ? (
              <Flex>
                <Button
                  mr={2}
                  bg="red"
                  onClick={() => {
                    handleUpdateStatus(order, "RECUSADO");
                  }}>
                  Recusar
                </Button>
                <Button
                  bg="green"
                  onClick={() => {
                    handleUpdateStatus(order, "EM PREPARO");
                  }}>
                  Aprovar
                </Button>
              </Flex>
            ) : (
              <Flex>
                <Button
                  bg="green"
                  onClick={() => {

                  }}>
                  Concluído
                </Button>
              </Flex>
            ),
          ])}
        />
      </Flex>
    </Flex>
  );
}
