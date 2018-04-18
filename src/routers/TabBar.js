/**
 * Created by Roc on 2017/6/13.
 */
import React from 'react';
import { StyleSheet } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Home from '../containers/tab/Home';
import Discover from '../containers/tab/Discover';
import Profile from '../containers/tab/Profile';

const tabOpts = (tabLabel, defaultIcon, activeIcon, hasHeader) => {
    let opt = {
        tabBarLabel: tabLabel,
        headerTitle: tabLabel,
        headerBackTitle: null,
        headerTitleStyle: { color: '#fff', alignSelf: 'center' },
        header: null,
        headerStyle: { backgroundColor: '#000' },
        // tabBarIcon: ({ tintColor, focused }) => (
        //     focused ? <Icon name={activeIcon} color={core.tabBarActiveColor} size={ICON_SIZE}/> :
        //         <Icon name={defaultIcon} color={core.tabBarDefaultColor} size={ICON_SIZE}/>
        // ),

    };
    if (hasHeader) {
        delete opt.header;
    }
    return opt;
};

const TabBar = TabNavigator({
    Home: {
        screen: Home, navigationOptions: tabOpts('Home', 'tab_home', 'tab_home_active')
    },
    Discover: {
        screen: Discover, navigationOptions: tabOpts('Discovery', 'tab_discover', 'tab_discover_active')
    },
    Profile: {
        screen: Profile, navigationOptions: tabOpts('Me', 'tab_me', 'tab_me_active')
    },
}, {
    animationEnabled: false, // 切换页面时不显示动画
    tabBarPosition: 'bottom', // 显示在底端，android 默认是显示在页面顶端的
    swipeEnabled: false, // 禁止左右滑动
    backBehavior: 'none', // 按 back 键是否跳转到第一个 Tab， none 为不跳转
    tabBarOptions: {
        activeTintColor: '#00a334',
        inactiveTintColor: '#999999',
        upperCaseLabel: false,
        showIcon: false, // android 默认不显示 icon, 需要设置为 true 才会显示
        indicatorStyle: { height: 0 }, // android 中TabBar下面会显示一条线，高度设为 0 后就不显示线了
        style: {
            backgroundColor: '#f5f5f5',
            height: 49,
            borderTopWidth: StyleSheet.hairlineWidth,
            borderTopColor: '#e6e6e6'
        },
        labelStyle: {
            fontSize: 14,
            margin: 0,
            padding: 0
        },
        tabStyle: {
            padding: 5,
            paddingTop: 6
        }
    },
});

export default TabBar;

