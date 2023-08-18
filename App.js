import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  FlatList,
  Platform,
  NativeModules,
} from 'react-native';
const { StatusBarManager } = NativeModules;

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item 1111',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53a3b28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fb991aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-143571e29d72',
    title: 'Third Item',
  },
  {
    id: 'b37acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '37c68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '52694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: 'bd7acbea-c1e1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c6h5-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3dh1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: 'bd7acbea-c1e1-46c2-aek5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c6h5-48d3-a4s8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3dh1-471f-bd56-145571e29d72',
    title: 'Third Item',
  },
];

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT;

const Item = ({title}) => (
  <View
    style={styles.item}
    flexDirection="row"
    alignItems="center">
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
      <StatusBar
        barStyle="light-content"
        translucent />
    </SafeAreaView>
  );
}

console.log(STATUSBAR_HEIGHT)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: STATUSBAR_HEIGHT,
  },
  item: {
    backgroundColor: '#ccc',
    marginBottom: 12,
    padding: 12,
  },
  title: {
    fontSize: 16,
  },
});
