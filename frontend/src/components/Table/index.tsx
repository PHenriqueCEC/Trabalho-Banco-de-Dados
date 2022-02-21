import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";

interface DatatableProps {
  columns: string[];
  data: any[][];
}

export function Datatable({ columns, data }: DatatableProps) {
  return (
    <Table variant="simple">
      <Thead>
        <Tr>
          {columns.map((column) => (
            <Th>{column}</Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        {data.map((dataRow) => {
          return (
            <Tr>
              {dataRow.map((cell) => (
                <Td>{cell}</Td>
              ))}
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );
}
