import React, { Component } from 'react'
import { Text, View, Image, Button, ScrollView, StyleSheet } from 'react-native'


export default class DetailComponent extends Component {

  constructor() {
    super()
    this.state = {
      title: "",
      subtitle: "",
      price:"",
      promise:"",
      picList: [],
      picIndex:0,//记录是正在播放picList第几张图片
      timer:null
    }
  }

  componentDidMount() {
    var id = this.props.navigation.getParam('myLid')
    console.log("接收到的id是" + id)
    //发请求(请求指定lid对应的详情数据)
    var url = "http://172.163.8.134:8080/product/detail?lid=" + id

    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        console.log(result)
        //result.details.picList/title/subtitle
        //保存请求来的数据到状态
        this.setState({
          title: result.details.title,
          subtitle: result.details.subtitle,
          price:result.details.price,
          picList: result.details.picList,
          promise:result.details.promise
        })
        //启动一个定时器，每隔1s来修改picIndex
       var myTimer =  setInterval(()=>{
          console.log('正在切换图片...')
          var nowIndex = this.state.picIndex
          nowIndex++
          if(nowIndex>=this.state.picList.length){
            nowIndex = 0
          }
          this.setState({picIndex:nowIndex})


        },1000)
       this.setState({timer:myTimer})
      })
  }

  // 这个钩子函数是负责做清理工作
  componentWillUnmount(){
    //关闭定时器
    clearInterval(this.state.timer)
  }
  render() {
    return <View style={{ flex: 1, backgroundColor:'white'}}>
      <ScrollView>
        {/* 图片 */}
        {
          this.state.picList.length > 0
          &&
          <Image style={styles.img} source={{ uri: "http://172.163.8.134:8080/" + this.state.picList[this.state.picIndex].md }}></Image>
        }
        {/* 标题 */}
        <Text style={styles.tit}>{this.state.title}</Text>
        {/* 副标题 */}
        <Text style={styles.subtit}>{this.state.subtitle}</Text>
        <Text style={styles.price}>当前售价：¥{this.state.price}</Text>
        <Text style={styles.subtit}>{this.state.promise}</Text>
        </ScrollView>
      {/* 按钮 */}
      <Button title="编辑产品" color='red'></Button>
    </View>
  }

}

let styles=StyleSheet.create({
    img:{height:320},
    tit:{fontSize:26,padding:20},
    subtit:{fontSize:20,paddingLeft:20,paddingRight:20},
    price:{fontSize:30,color:'red',fontWeight:'bold',padding:20}
})