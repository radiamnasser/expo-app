import React, { useState } from 'react';
import { SearchBar } from 'react-native-elements';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

//type SearchBarComponentProps = {};

//const SwitchComponent: React.FunctionComponent
export default class SwitchComponent extends React.Component {

SearchBarComponentProps = () => {
  const [search, setSearch] = useState("");

  const updateSearch = (search) => {
    setSearch(search);
  };

  return (
    <View style={styles.view}>
      <TextInput
        placeholder="Type Here..."
        onChangeText={this.updateSearch}
        value={search}
      />
    </View>
  );
};
}

const styles = StyleSheet.create({
  view: {
    margin: 10,
  },
});

