import React from "react";
import {
  ChakraProvider,
  Divider,
  Flex,
  Grid,
  GridItem,
  Text,
} from "@chakra-ui/react";
import { RoutesApp } from "./routes";
import { BrowserRouter as Router } from "react-router-dom";
import { NavLink } from "./components/NavLink";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Grid height="100vh" templateColumns="repeat(6,1fr)">
          <GridItem colSpan={1}>
            <Flex
              width="100%"
              height="100%"
              bg="#fff"
              boxShadow="10px 10px 50px grey"
              borderRadius={8}
              flexDirection="column"
              overflowY="scroll"
              padding={8}>
              <NavLink link="/" text="IFood RU" />
              <Text fontSize={22} fontWeight="bold">
                Restaurantes
              </Text>
              <NavLink
                link="/categorias/restaurante/cadastrar"
                text="Cadastrar Categoria"
              />

              <NavLink
                link="/restaurantes/cadastrar"
                text="Cadastrar Restaurante"
              />
              
              <Divider mb={5}/>
              <Text fontSize={22} fontWeight="bold">
                Pratos
              </Text>
              <NavLink
                link="/categorias/pratos/cadastrar"
                text="Cadastrar Categoria"
              />
              <Divider mb={5}/>
              <Text fontSize={22} fontWeight="bold">
                Usuários
              </Text>
              <NavLink link="/usuarios/cadastrar" text="Cadastrar Usuário" />
              <NavLink link="/usuarios" text="Lista de Usuários" />

              <Divider mb={5}/>
              <Text fontSize={22} fontWeight="bold">
                Pedidos
              </Text>
              <NavLink link="/usuarios/pedidos/2" text="Meus Pedidos" />

              <Divider mb={5}/>
            </Flex>
          </GridItem>
          <GridItem colSpan={5}>
            <RoutesApp />
          </GridItem>
        </Grid>
      </Router>
    </ChakraProvider>
  );
}

export default App;
