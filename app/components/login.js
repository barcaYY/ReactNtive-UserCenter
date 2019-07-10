import React,{Component} from 'react'
import {View,Text,Button,TextInput,Image,StyleSheet} from 'react-native'

export default class LoginComponent extends Component{
    constructor(){
        super()
        this.state = {
            uname:'',
            upwd:''
        }
    }
    handleLogin=()=>{
        var url="http://172.163.8.134:8080/user/login"
        fetch(url,{
            method:"post",
            headers:{
                "content-type":"application/x-www-form-urlencoded"
            },
            body:
                'uname='+this.state.uname+'&upwd='+this.state.upwd
        }).then(res=>{return res.json()})
        .then(result=>{
            if(result.code==200){
                this.props.navigation.push('main')
            }else{
                this.setState({uname:"",upwd:""})
                alert("登录失败")
            }
        })
    }
    getName=(name)=>{
        this.setState({uname:name})
    }
    getPassword=(pwd)=>{
        this.setState({upwd:pwd})
    }
    render(){
        return <View>
            <Image style={styles.radius} source={require('../assets/img/avatar.jpg')}/>
            <TextInput placeholder='用户名' onChangeText={this.getName} value={this.state.uname} style={styles.put}></TextInput>
            <TextInput secureTextEntry={true} placeholder='密码' onChangeText={this.getPassword} value={this.state.upwd}  style={styles.put}></TextInput>
            <Button title='登录' onPress={this.handleLogin}></Button>
        </View>
    }
}

var styles=StyleSheet.create({
    radius:{
        width:180,
        height:180,
        borderRadius:80,
        alignSelf:'center',
        marginBottom:40,
        marginTop:50
    },
    put:{
        height:50,
        fontSize:24,
        marginBottom:40
    }
})
