"use client"
import React from 'react'
import Navbar from "@/components/Navbar/Navbar";
import { StyledButton, StyledContent, StyledPage } from "./styles";
import { useSession, signIn, signOut } from "next-auth/react"


const Layout = ({children}) => {
  const { data: session } = useSession();
  if (!session) {
    return (
      <StyledPage>
        <StyledButton onClick={()=> signIn('google')}>Login With Google</StyledButton>
      </StyledPage>
    );

  }
  return (
    <StyledPage>
      <Navbar/>
      <StyledContent>
      {children}
        
      </StyledContent>
      </StyledPage>
  );
}

export default Layout