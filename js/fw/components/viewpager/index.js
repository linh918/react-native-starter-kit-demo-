/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import {
  TouchableOpacity,
 
} from "react-native";
import {Thumbnail,Container,Text,Button,Left,Body,Right,Header,Icon,Title} from 'native-base';
import ViewPager from "react-native-viewpager";
import styles from "./styles";

const data = [
{
 "LinkPoster": "https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/t/r/transformers_980-x-448.jpg",
 "TieuDe":"SUẤT CHIẾU ĐẶC BIỆT - TRANSFORMERS: CHIẾN BINH CUỐI CÙNG",
 "NoiDung":"Thưởng thức bộ phim bom tấn"
}
,
{
 "LinkPoster": "https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/5/0/50k2_980x448.jpg",
 "TieuDe":"THƯỞNG THỨC ANH EM SIÊU QUẬY VÀ ĐẢO CỦA DÂN NGỤ CƯ CHỈ VỚI 50.000Đ",
 "NoiDung":"Từ 16/06/2017, các fan có cơ hội thưởng thức 2 bộ phim 'Anh Em Siêu Quậy' và 'Đảo Của Dân Ngụ Cư' với mức giá vé siêu hấp dẫn chỉ 50.000đ!"
},
{
 "LinkPoster": "https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/b/a/banner_nbktn.png",
 "TieuDe":"ĐĂNG KÝ NGAY, QUÀ TẶNG TRAO TAY",
 "NoiDung":"Từ 15/6 – 30/6, 3.000 khách hàng đầu tiên đăng ký thẻ thành viên tại cụm rạp mới nhất CGV CentrePoint Hà Nội sẽ nhận ngay coupon miễn phí 1 phần bắp 20 oz!"
},
{
 "LinkPoster": "https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/s/n/sneakshow_despicable-me-3_980x448_1.jpg",
 "TieuDe":"SNEAK SHOWS - KẺ TRỘM MẶT TRĂNG 3",
 "NoiDung":"Thưởng thức bộ phim 'Kẻ Trộm Mặt Trăng 3' trước ngày công chiếu với Suất Chiếu Sớm vào từ 27/06 đến 29/06/2017 tại CGV Cinemas!"
}
];

export default class TestViewPager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ViewPager.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      })
    };
  }

  _renderPage(dataSource) {
    return (
      <TouchableOpacity
        onPress={() => {
          console.log(dataSource.TieuDe);
        }}
      >
        <Container>
          <Thumbnail square source={{ uri: dataSource.LinkPoster }} style={styles.image} />
          <Text style={styles.textTieuDe}>
            {dataSource.TieuDe}
          </Text>
        </Container>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>ViewPager</Title>
          </Body>
          <Right />

        </Header>
        <ViewPager
          isLoop={true}
          dataSource={this.state.dataSource}
          renderPage={this._renderPage.bind(this)}
        />
      </Container>
    );
  }

  componentDidMount() {
    this.setState({
      dataSource: this.state.dataSource.cloneWithPages(data)
    });
  }
}
