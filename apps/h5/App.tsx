import React, { useEffect, useState } from 'react';
import {
  Button, SafeAreaView, SectionList, SectionListData, Text, TextInput, View,
} from 'react-native';
import tw from 'twrnc';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { get_cur_daily, GetCurDailyRes } from './mock/get_cur_daily';
import screenRoutes from './src/screen';

/**
 * 1.  解决类型保存问题， 是不是自己 & type 导致的呢？
 * 2.  使用 SectionList 渲染出list
 * 3.  调研inline-input方案。
 *
 */

const cover2View = (req: GetCurDailyRes) => req.action_list.map((action, index) => ({
  title: action.name,
  data: action.detail_list,
}));

function TrainingHeader() {
  return (
    <View style={tw`flex flex-row`}>
      <Text style={tw`flex-auto font-bold`}>训练名a称</Text>
    </View>
  );
}

const RenderSectionCell: React.FC<{ index: number, weight: number, repeat_time: number }> = (props) => {
  const { index, weight, repeat_time } = props;
  return (
    <View style={tw`flex flex-row`}>
      <Text>
        {' '}
        {index + 1}
        {' '}
        组
        {' '}
      </Text>
      <TextInput defaultValue={`${weight}`} />
      <TextInput defaultValue={`${repeat_time}`} />
    </View>
  );
};

const RenderSectionHeader: React.FC<{ title: string }> = ({ title }) => <Text>{title}</Text>;

function TrainingCard() {
  const [state, setState] = useState(() => cover2View(get_cur_daily));
  useEffect(() => {
    setTimeout(() => {
      setState((state) => [...state, ...state]);
    }, 5000);
  }, []);

  return (
    <SectionList
      sections={state}
      renderSectionHeader={({ section: { title } }) => <RenderSectionHeader title={title} />}
      renderItem={({ item, index }) => (
        <RenderSectionCell
          index={index}
          weight={item.weight}
          repeat_time={item.repeat}
        />
      )}
    />
  );
}

export function Training() {
  return (
    <SafeAreaView style={tw`flex`}>
      <View>
        <TrainingHeader />
        <TrainingCard />
      </View>
    </SafeAreaView>
  );
}

export function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        {
            screenRoutes.map(({ name, component }) => (<Tab.Screen name={name} component={component} />))
          }
      </Tab.Navigator>
    </NavigationContainer>
  );
}
