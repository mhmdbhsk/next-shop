import { useMediaQuery } from '@chakra-ui/react';
import DesktopHeader from './DesktopHeader';
import MobileHeader from './MobileHeader';
import { ReactNode } from 'react';

interface HeaderProps {
  isHome?: boolean;
  isHaveBackButton?: boolean;
  title?: string;
  rightIcon?: ReactNode;
}

const Header = ({ ...rest }: HeaderProps) => {
  // const [isDesktop] = useMediaQuery('(min-width: 1280px)');
  const isDesktop = false;

  return isDesktop ? <DesktopHeader {...rest} /> : <MobileHeader {...rest} />;
};

export default Header;
