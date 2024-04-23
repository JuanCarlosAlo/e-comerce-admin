"use client"
import Layout from "@/components/Layout/Layout";
import { useSession } from "next-auth/react";
import { StyledHeaderTop, StyledNamePlate, StyledUserImg } from "./styles";

export default function Home() {
  const {data:session} = useSession()

  return <StyledHeaderTop>
      Hello, {session?.user?.name}
      <StyledNamePlate>
      <StyledUserImg src={session?.user?.image}/>
      <span>{session?.user?.name}</span>
      </StyledNamePlate>
      
    </StyledHeaderTop>
 
}
