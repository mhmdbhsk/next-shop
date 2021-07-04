import { Icon, IconProps } from '@chakra-ui/react';

const CartIcon = ({ ...rest }) => (
  <Icon viewBox="0 0 24 24" color="#fff" fill="currentcolor" {...rest}>
    <path fill="none" d="M8.246 11L18.246 11 19.675 6 6.428 6z"></path>
    <path d="M21,4H5H4H2v2h2h0.3l3.282,9.025C8.011,16.206,9.145,17,10.401,17H19v-2h-8.599c-0.419,0-0.797-0.265-0.94-0.658L8.973,13 h9.273c0.89,0,1.68-0.598,1.923-1.451l1.793-6.274c0.086-0.302,0.025-0.626-0.163-0.877C21.609,4.147,21.313,4,21,4z M18.246,11 h-10L6.428,6h13.247L18.246,11z"></path>
    <circle cx="10.5" cy="19.5" r="1.5"></circle>
    <circle cx="16.5" cy="19.5" r="1.5"></circle>
  </Icon>
);

export default CartIcon;
