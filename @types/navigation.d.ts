import { NavigatorScreenParams } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';

export type MainParamsList = {
  Home: undefined;
  Setting: undefined;
};

export type ApplicationStackParamList = {
  Startup: undefined;
  Login: undefined;
  Main: NavigatorScreenParams<MainParamsList>;
};

export type ApplicationScreenProps =
  StackScreenProps<ApplicationStackParamList>;

export type ApplicationMainScreenProps =
  StackScreenProps<MainParamsList>;
