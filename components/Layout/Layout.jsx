"use client"
import React from 'react'
import Navbar from "@/components/Navbar/Navbar";
import { StyledButton, StyledContent, StyledLoginPage, StyledPage } from "./styles";
import { useSession, signIn, signOut } from "next-auth/react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const Layout = ({children}) => {
  const { data: session } = useSession();
  if (!session) {
    return (
      <StyledLoginPage>
        <StyledButton onClick={()=> signIn('google')}>
          Login With Google
          </StyledButton>
          <StyledButton onClick={()=> signOut()}>
          Logout
          </StyledButton>
      </StyledLoginPage>
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