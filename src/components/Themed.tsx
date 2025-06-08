import Colors from '@/constants/Colors';
import { Text as DefaultText, View as DefaultView } from 'react-native';

type ThemeProps = {
  color?: string;
};

export type TextProps = ThemeProps & DefaultText['props'];
export type ViewProps = ThemeProps & DefaultView['props'];

export function Text(props: TextProps) {
  const { style, ...otherProps } = props;

  return (
    <DefaultText style={[{ color: Colors.text }, style]} {...otherProps} />
  );
}

export function View(props: ViewProps) {
  const { style, ...otherProps } = props;

  return (
    <DefaultView
      style={[{ backgroundColor: Colors.background }, style]}
      {...otherProps}
    />
  );
}
