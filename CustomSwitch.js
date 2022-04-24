import react from 'react';
import { Switch } from 'react-native';

export default function CustomSwitch(props) {
  return (
    <Switch
      value={props.isEnable}
      trackColor={{ false: 'red', true: 'green' }}
      thumbColor={props.isEnable ? 'yellow' : 'pink'}
      onValueChange={props.toggleSwitch}
    />
  );
}
