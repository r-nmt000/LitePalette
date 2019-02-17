import React from 'react';
import { Dimensions, Text, View, ScrollView } from 'react-native';
import HTML from 'react-native-render-html';
import marked from 'marked'

const markdown = `
# 見出し
 
- 箇条書き
  - 入れ子
  - 入れ子
- 箇条書き
- 箇条書き
 
[Google](https://www.google.co.jp/)
 
> 引用
 
**太字太字**
 
![画像](https://blog.piyo.tech/images/prof.png)
`;

const htmlContent = marked(markdown);

export default class SingleNote extends React.Component {
  render() {
    return (
      <ScrollView style={{ flex: 1 }}>
        <HTML html={htmlContent} imagesMaxWidth={Dimensions.get('window').width} />
      </ScrollView>
    );
  }
}
