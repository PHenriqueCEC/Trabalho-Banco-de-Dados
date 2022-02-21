import { Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface NavLinkProps{
    link: string;
    text: string;
}

export function NavLink({ link, text }: NavLinkProps){

    return (
        <Link to={link}>
            <Text fontSize={18} marginY="2">{text}</Text>
        </Link>
    )
}