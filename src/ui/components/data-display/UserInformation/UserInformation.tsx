import { SystemProps } from '@mui/system';
import React from 'react';
import {
  AvatarStyled,
  RatingStyled,
  UserDescription,
  UserInformationContainer,
  UserName,
} from './UserInformation.style';

export interface UserInformationProps {
  nome: string;
  picture: string;
  rating: number;
  description?: string;
  isRating?: boolean;
  sx?: SystemProps;
}

const UserInformation: React.FC<UserInformationProps> = (props) => {
  return (
    <UserInformationContainer sx={props.sx} isRating={props.isRating}>
      <AvatarStyled src={props.picture}>{props.nome[0]}</AvatarStyled>
      <RatingStyled value={props.rating} readOnly />
      <UserName>{props.nome}</UserName>
      <UserDescription>{props.description}</UserDescription>
    </UserInformationContainer>
  );
};

export default UserInformation;
