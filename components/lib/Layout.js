import React, { Component } from 'react';
import 
{
    View,
    Text,
    ScrollView,
    StyleSheet,
    PropTypes,
    PixelRatio,
    TouchableHighlight
} from 'react-native';

export default class LayoutExample extends Component{
    constructor(props){
        super(props);
    }
    static defaultProps={
    };
    static PropTypes={
    };
    renderContent(){
        var word = 'Test flex 布局  哈哈哈';
       return <Text style={layoutStyles.text}>{word.split('').reduce(function (pre,cur) {
           return pre+'\n'+word;
       },'')} </Text>
    }
    render(){
        return (
            <View style={layoutStyles.flex}>
                <ScrollView contentContainerStyle={[layoutStyles.flex]}
                            contentInset={{bottom:40}}
                    >
                    {this.renderContent()}
                </ScrollView>

                 <View style={layoutStyles.tabbar}>
                 <Text style={layoutStyles.text}>模拟前端界面停留底部</Text>
                 </View>


            </View>
        );
    }
}
var layoutStyles = StyleSheet.create({
    flex:{
        flex:1
    },
    tabbar:{
        height:40,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'oldlace'
    },
    text:{
        fontSize:16,
        textAlign:'center',
    }
});