import React,{Component} from 'react'
import {View,Text,Image,FlatList,StyleSheet,TouchableOpacity,RefreshControl} from 'react-native'

export default class ProductComponent extends Component{
    constructor(){
        super()
        this.state={
            list:[],
            nowPage:1
        }
    }
    componentDidMount(){
        var url="http://172.163.8.134:8080/product/list"    
        fetch(url).then(res=>{
            return res.json()
        }).then(result=>{
            console.log(result)
            for(var i=0;i<result.data.length;i++){
                result.data[i].key=i
            }
            this.setState({list:result.data})
        })

    }
    showItem=(info)=>{
        return <TouchableOpacity style={styles.box} >
            <Image style={styles.img} source={{uri:'http://172.163.8.134:8080/'+info.item.pic}} onPress={()=>this.soldCount(info.item.sold_count)}/>
            <Text style={styles.tit} onPress={()=>this.myJump(info.item.lid)}>{info.item.title}</Text>
        </TouchableOpacity>
    }
    soldCount=(count)=>{
        alert(`商品已售卖：${count}`)
    }
    endReached=()=>{
        var pno=this.state.nowPage;
        pno++
        if(pno>5){return}
        var url="http://172.163.8.134:8080/product/list?pno="+pno
        fetch(url).then(res=>{return res.json()})
        .then(result=>{
            this.setState({nowPage:pno})
            console.log(result)
            var oldList=this.state.list
            var newList=oldList.concat(result.data)
            for(var i=0;i<newList.length;i++){
                newList[i].key=i
            }
            this.setState({list:newList})
        })
    }
    myJump=(lid)=>{
        this.props.navigation.push('detail',{myLid:lid}) 
    }
    render(){
        return <View>
            {/*<RefreshControl refreshing={true} tintColor="#ff0000" title="Loading..." titleColor="#00ff00">*/}
                <FlatList data={this.state.list} renderItem={this.showItem} onEndReached={this.endReached}>
                </FlatList>
            {/*</RefreshControl>*/}
        </View>
    }
}

var styles=StyleSheet.create({
    box:{
        flex:1,
        flexDirection:'row',
        backgroundColor:'white',
        padding:10
    },
    img:{
        width:120,
        height:100,
        borderRadius:20
    },
    tit:{
        fontSize:20,
        padding:10
    }
})