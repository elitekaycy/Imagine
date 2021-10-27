import React from 'react';
import {View, Pressable, Image, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './../screens/home/HomeScreen';
import FavoritesScreen from './../screens/favorites/FavoritesScreen';
import SearchScreen from './../screens/search/SearchScreen';
import DownloadScreen from './../screens/downloads/DownloadScreen';
import SettingsScreen from './../screens/settings/SettingsScreen';

const Tab = createBottomTabNavigator();

const SearchButton = ({onPress}) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={onPress} style={styles.button}>
        <Image source={require('../assets/tab-icons/icons8-search.png')} />
      </Pressable>
    </View>
  );
};

const CentralApp = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused, color}) => (
            <Image
              source={
                focused
                  ? require('../assets/tab-icons/home-dark.png')
                  : require('../assets/tab-icons/home.png')
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="favorites"
        component={FavoritesScreen}
        options={{
          tabBarIcon: ({focused, color}) => (
            <Image
              source={
                focused
                  ? require('../assets/tab-icons/favorites-dark.png')
                  : require('../assets/tab-icons/favorites.png')
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="search"
        component={SearchScreen}
        options={{
          tabBarButton: props => <SearchButton {...props} />,
        }}
      />
      <Tab.Screen
        name="downloads"
        component={DownloadScreen}
        options={{
          tabBarIcon: ({focused, color}) => (
            <Image
              source={
                focused
                  ? require('../assets/tab-icons/download-dark.png')
                  : require('../assets/tab-icons/download.png')
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({focused, color}) => (
            <Image
              source={
                focused
                  ? require('../assets/tab-icons/settings-new-dark.png')
                  : require('../assets/tab-icons/settings-new.png')
              }
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '18%',
    borderRadius: 32,
    paddingTop: 2,
    marginTop: -14,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    borderRadius: 18,
    width: '70%',
    height: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fae800',
  },
});

export default CentralApp;
