import React,{Component} from 'react'
import {View,Text,StyleSheet,Image,ScrollView,TouchableOpacity} from 'react-native'

export default class MainComponent extends Component{
    myJump0=()=>{
        this.props.navigation.push('login')
    }
    myJump=()=>{
        this.props.navigation.push('product')
    }
    render(){
        return <ScrollView>
            <View style={styles.box}>
                <View style={styles.col}>
                  <Text style={styles.words}>2000</Text>
                  <Text style={styles.words0}>当日PC端PV量</Text>
                </View>
                <View style={styles.col}>
                  <Text style={styles.words1}>5661</Text>
                  <Text style={styles.words0}>移动端PV量</Text>
                </View>
            </View>
            <View style={[styles.box,styles.box2]}>
                <View style={styles.col}>
                  <Text style={styles.words}>1020</Text>
                  <Text style={styles.words0}>已完成订单总数</Text>
                </View>
                <View style={styles.col}>
                  <Text style={styles.words1}>2390</Text>
                  <Text style={styles.words0}>当日APP下载量</Text>
                </View>
            </View>

            <View style={[styles.box,styles.box3]}>
                <View style={styles.col2}>
                <TouchableOpacity>
                  <Image source={require('../assets/img/order.png')}/>
                  <Text style={styles.words2}>订单管理</Text>
                </TouchableOpacity> 
                </View>
                <View style={styles.col2}>
                <TouchableOpacity onPress={this.myJump0}>
                  <Image source={require('../assets/img/user.png')}/>
                  <Text style={styles.words2}>用户管理</Text>
                </TouchableOpacity>
                </View>
            </View>

            <View style={[styles.box,styles.box4]}>
                <View style={styles.col2}>
                <TouchableOpacity onPress={this.myJump}>
                  <Image source={require('../assets/img/product.png')}/>
                  <Text style={styles.words2}>商品管理</Text>
                </TouchableOpacity>
                </View>
                <View style={styles.col2}>
                <TouchableOpacity>
                  <Image source={require('../assets/img/setting.png')}/>
                  <Text style={styles.words2}>设置</Text>
                </TouchableOpacity>
                </View>
            </View>
            
        </ScrollView>
    }
}

let styles=StyleSheet.create({
    box:{
        flex:1,
        flexDirection:'row',
        position:'relative'  
    },
    col:{
        flex:1,
        height:150,
        backgroundColor:'powderblue',
        justifyContent:'center',
        alignItems:'center',
        borderColor:'white',
        borderBottomWidth:2,
        borderRightWidth:2
    },
    col2:{
        flex:1,
        height:200,
        backgroundColor:'powderblue',
        justifyContent:'center',
        alignItems:'center'
    },
    words:{
        fontSize:30,
        textAlign:'center', 
        color:"#fb4306"
    },
    words0:{
        fontSize:24,
        textAlign:'center'
    },
    words1:{
        fontSize:30,
        textAlign:'center', 
        color:"#37a521"
    },
    words2:{
        fontSize:20,
        textAlign:'center', 
    }
})