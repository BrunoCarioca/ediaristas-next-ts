import {
  Container,
  Divider,
  IconButton,
  MenuItem,
  MenuList,
  Toolbar,
} from '@mui/material';
import useIsMobile from 'data/hooks/useIsMobile';
import { useState } from 'react';
import RoundedButton from 'ui/components/inputs/RoundedButton/RoundedButton';
import Link from 'ui/components/navigation/link/Link';
import {
  ButtonsContainer,
  HeaderAppBar,
  HeaderDrawer,
  HeaderLogo,
} from './Header.style';

const Header = () => {
  const isMobile = useIsMobile();
  return isMobile ? <HeaderMobile /> : <HeaderDesktop />;
};

const HeaderDesktop = () => {
  return (
    <HeaderAppBar>
      <Toolbar component={Container}>
        <Link href={'/'}>
          <HeaderLogo src={'/img/logos/logo.svg'} alt={'e-diaristas'} />
        </Link>
        <div>&nbsp;</div>
        <div>&nbsp;</div>
        <ButtonsContainer>
          <RoundedButton>
            <Link
              href={'/cadastro/diaristas'}
              Component={RoundedButton}
              mui={{ color: 'primary', variant: 'contained' }}
            >
              Seja um(a) diarista
            </Link>
            <Link href={'/login'} Component={RoundedButton}>
              LOGIN
            </Link>
          </RoundedButton>
        </ButtonsContainer>
      </Toolbar>
    </HeaderAppBar>
  );
};

const HeaderMobile = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  return (
    <HeaderAppBar>
      <Toolbar component={Container}>
        <IconButton
          edge={'start'}
          color={'inherit'}
          onClick={() => setDrawerOpen(true)}
        >
          <i className={'twf-bars'} />
        </IconButton>
        <Link href={'/'}>
          <HeaderLogo src={'/img/logos/logo.svg'} alt={'e-diaristas'} />
        </Link>
        <HeaderDrawer
          open={isDrawerOpen}
          onClose={() => setDrawerOpen(false)}
          onClick={() => setDrawerOpen(false)}
        >
          <MenuList>
            <Link href={'/login'} Component={MenuItem}>
              Login
            </Link>
            <Divider />
            <Link href={'/cadastro/diarista'} Component={MenuItem}>
              Seja um(a) diarista
            </Link>
          </MenuList>
        </HeaderDrawer>
      </Toolbar>
    </HeaderAppBar>
  );
};

export default Header;
