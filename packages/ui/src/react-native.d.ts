// packages/ui/src/react-native.d.ts
import 'react-native';

// Augment core View/Text/Image components for NativeWind className prop
declare module 'react-native' {
  interface ViewProps {
    className?: string;
  }
  interface TextProps {
    className?: string;
  }
  interface ImageProps {
    className?: string;
  }
  interface TouchableOpacityProps {
    className?: string;
  }
}
