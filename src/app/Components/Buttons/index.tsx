'use client'

import React from 'react';
import ButtonPrimaryStyled from './style';
import { useRouter } from 'next/navigation'

const ButtonPrimary = () => {
  const router = useRouter()

  return (
    <ButtonPrimaryStyled
      type="button"
      onClick={() => router.push('/event')}
    >
      Crie um evento
    </ButtonPrimaryStyled>
  );
}

export default ButtonPrimary;