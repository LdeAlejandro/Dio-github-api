import React, { useState, useEffect } from "react";
import * as S from "./styled";
import useGithub from "../../hooks/github-hooks";


const Header = () => {
  const { getUser } = useGithub();
  //const [usernameForSearch, setUsernameForSearch] = useState('LdeAlejandro');
  const [usernameForSearch, setUsernameForSearch] = useState('');

  const submitGetUser = () => {
    if (!usernameForSearch) return;
    return getUser(usernameForSearch);
  };

  // useEffect(() => {
  //   submitGetUser();
  // }, [1]); 

  return (
    <header>
      <S.Wrapper>
        <input
          type="text"
          placeholder="Digite o username para pesquisa..."
          onChange={(event) => setUsernameForSearch(event.target.value)}
        />
        <button type="submit" onClick={submitGetUser}>
          <span>Buscar</span>
        </button>
      </S.Wrapper>
    </header>
  );
};

export default Header;
