'use client'

import React from 'react';
import ButtonPrimaryStyled from './style';
import { useRouter } from 'next/navigation'

interface Props {
  text: string;
  route: string;
}

const ButtonPrimary = ({ text, route }: Props) => {
  const router = useRouter()

  return (
    <ButtonPrimaryStyled small='small'
      type="button"
      onClick={() => router.push(`${route}`)}
    >
      {text}
    </ButtonPrimaryStyled>
  );
}

export default ButtonPrimary;