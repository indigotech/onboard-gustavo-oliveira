import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Picker} from '@react-native-picker/picker';

interface MainPickerProps {
  title: string;
  selectedValue: string;
  onValueChange: (value: string) => void;
  options: {label: string; value: string}[];
  error?: string;
  placeholder?: string;
}

export const MainPicker: React.FC<MainPickerProps> = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{props.title}</Text>
      <View
        style={[
          styles.pickerContainer,
          props.error ? styles.pickerError : null,
        ]}>
        <Picker
          selectedValue={props.selectedValue}
          onValueChange={props.onValueChange}
          style={styles.picker}>
          {props.placeholder && (
            <Picker.Item label={props.placeholder} value="" enabled={false} />
          )}
          {props.options.map(option => (
            <Picker.Item
              key={option.value}
              label={option.label}
              value={option.value}
            />
          ))}
        </Picker>
      </View>
      {props.error && <Text style={styles.error}>{props.error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  label: {
    marginBottom: 6,
    fontSize: 16,
    fontWeight: '600',
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    paddingHorizontal: 8,
  },
  picker: {
    width: '100%',
    fontSize: 16,
  },
  pickerError: {
    borderColor: 'red',
  },
  error: {
    color: 'red',
    marginTop: 4,
    fontSize: 14,
  },
});
