import React from 'react';
import {
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');

const Carousel = ({ images, heightGallery, onPress, style, contentContainerStyle, imageStyle }) => (
  <ScrollView
    horizontal={true}
    decelerationRate={'fast'}
    directionalLockEnabled={true}
    pagingEnabled={true} // NOTE jumps to next
    showsHorizontalScrollIndicator={false}
    removeClippedSubviews={true} // NOTE experimental feature
    ref={(scrollView) => { _scrollView = scrollView; }}
    automaticallyAdjustContentInsets={false}
    onScroll={() => { console.log('onScroll!'); }}
    scrollEventThrottle={200}
    style={style}
    contentContainerStyle={contentContainerStyle}
    heightGallery={heightGallery}>
    {images.map((uri, i) => {
      return (
        <TouchableOpacity onPress={onPress} key={i}>
          <Image style={[ styles.img, {height: heightGallery}, imageStyle]} source={{uri: uri}} />
        </TouchableOpacity>
      );
    })}
  </ScrollView>
);

const styles = StyleSheet.create({
  img: {
    resizeMode: 'cover',
    width: width
  }
})
Carousel.defaultProps = {
  images: [],
  heightGallery: 300,
  style: {},
  contentContainerStyle: {},
  imageStyle: {},
}
Carousel.propTypes = {
  images: React.PropTypes.array,
  heightGallery: React.PropTypes.number,
  onPress:  React.PropTypes.func,
}
export default Carousel;
