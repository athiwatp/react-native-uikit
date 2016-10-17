import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ListView,
  Dimensions,
} from 'react-native';

import { truncate } from 'lodash';
import { primary, gutter } from '../variables';
import { DateItem } from '../';

const { width } = Dimensions.get('window');
const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: '#eee',
    borderBottomWidth: 1,
  },
  text: {
    fontWeight: '500',
  },
  cell: {
    flex: 3,
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
});

const ArticleList = ({
  items, headerContent, cellHeight, titleSize, titleColor,
  categoryColor, categoryWeight, categorySize,
  footerContent, backgroundColor, dateColor, onPress,
  containerStyle, style, itemStyle, imageStyle, cellStyle,
  cellTextStyle, textStyle, dateStyle
}) => (
  <ListView
    contentContainerStyle={containerStyle}
    renderHeader={() => <View style={[ { width }, headerStyle ]}>{headerContent}</View>}
    renderFooter={() => <View style={[ { width }, footerStyle ]}>{footerContent}</View>}
    dataSource={ds.cloneWithRows(items)}
    renderRow={(rowData, i) =>
      // TODO move to seperate component
      <TouchableOpacity
        style={[{ backgroundColor }, style]}
        key={i}
        onPress={() => onPress(rowData.id)}
      >
        <View style={[styles.row, { paddingVertical: gutter, paddingHorizontal: gutter }, itemStyle]} >
          <View style={{ flex: 2 }}>
            <Image
              source={{ uri: rowData.src }}
              style={[styles.img, { marginRight: gutter, height: cellHeight }, imageStyle]}
            />
          </View>
          <View style={[styles.cell, { height: cellHeight }, cellStyle]}>
            <View>
              <Text
                style={[ {
                  color: categoryColor,
                  fontWeight: categoryWeight,
                  marginBottom: 3,
                  fontSize: categorySize,
                }, cellTextStyle ]}
              >
                {rowData.category}
              </Text>
              <Text style={[ styles.text, { color: titleColor, fontSize: titleSize }, textStyle]}>
                {truncate(rowData.title, { 'length': 70, 'separator': /,? +/})}
              </Text>
            </View>
            <DateItem color={dateColor} timestamp={rowData.timestamp} style={dateStyle} />
          </View>
        </View>
      </TouchableOpacity>
    }
  />
);

ArticleList.defaultProps = {
  gutter,
  backgroundColor: '#fff',
  categoryColor: primary,
  categorySize: 14,
  categoryWeight: 'bold',
  titleSize: 16,
  titleColor: '#222',
  headerWeight: 'bold',
  cellHeight: 100,
  dateColor: '#666',
  containerStyle: {},
  style: {},
  itemStyle: {},
  imageStyle: {},
  cellStyle: {},
  cellTextStyle: {},
  textStyle: {},
  dateStyle: {},
  headerStyle: {},
  footerStyle: {},
};

ArticleList.propTypes = {
  gutter: React.PropTypes.number,
  backgroundColor: React.PropTypes.string,
  fontSize: React.PropTypes.number,
  height: React.PropTypes.number,
  items: React.PropTypes.array,
  headerContent: React.PropTypes.element,
  headerWeight: React.PropTypes.string,
  cellHeight: React.PropTypes.number,
  titleSize: React.PropTypes.number,
  titleColor: React.PropTypes.string,
  categoryColor: React.PropTypes.string,
  categoryWeight: React.PropTypes.string,
  categorySize: React.PropTypes.number,
  footerContent: React.PropTypes.element,
  dateColor: React.PropTypes.string,
  onPress: React.PropTypes.func,
  i: React.PropTypes.number,
};

export default ArticleList;
