# react-native-UIKit


A collection of stateless (or minimally stateful) stylized and configurable UI presentation components for rapid prototyping in react native.


#### Getting Started
`npm i react-native-uikit -S`

import what you need

`import { Button, Card } from 'react-native-uikit';`


#### Components

**AlertMessage,  ArticleText, Avatar, AvatarHeader, Button, Card, Carousel, Close, DateItem, Divider, FieldError, Grid, GalleryOffset, Heading, ImageCustom, InputField, LikeBtn, ListBasic, LoginFb, LoginForm, MapSection, Message, MessageList, ProfileHeader, RatingBox, ReviewCell, Search, ThumbSwiper, Time**


any margin issues occur between components wrap the component in a
```javascript
<View></View>
```


### Example
___
##### Components can be combined to create larger entities
![](https://raw.githubusercontent.com/andyfenelon/react-native-UIKit/master/docs/img/full-post.jpg)

`import {AvatarHeader, ImageCustom, LikeBtn, ArticleText, Divider } from 'react-native-uikit';`


```javascript
<View style={{flex:1, paddingTop: 20}}>

  <View>
    <AvatarHeader
      src={'https://s3.amazonaws.com/uifaces/faces/twitter/9lessons/128.jpg'}
      heading={'John Doe'}
      timestamp={1460227647478}
      circle={true}
      backgroundColor={'#fff'}
      height={40}
      gutter={10}
    />
  <ImageCustom
      src={'https://upload.wikimedia.org/wikipedia/commons/0/05/20100726_Kalamitsi_Beach_Ionian_Sea_Lefkada_island_Greece.jpg'}
      height={300}
      onPress={() => console.log('pressed')}
    />
    <View style={{paddingTop: 10, paddingHorizontal: 10, backgroundColor: '#fff'}}>
      <LikeBtn
        active={true}
        likes={232}
        onPress={() => console.log('liked')}
      />
      <ArticleText
        username={'John Doe'}
        text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '}
        onPress={() => console.log('link to profile')}
      />
      <Divider color={'#eee'}/>
    </View>
  </View>

</View>
```



## Documentation



### AlertMessage
[source](https://github.com/andyfenelon/react-native-UIKit/tree/master/lib/alert-message)

![](https://raw.githubusercontent.com/andyfenelon/react-native-UIKit/master/docs/img/alertmessage.jpg)




`import { AlertMessage } from 'react-native-uikit'`

```javascript
<AlertMessage
  message={'This is the alert message here'}
  onPress={() => console.log('pressed')}
/>
```
| Prop | Type | Description |
| :------| :-----------| :-----------|
| backgroundColor   | String | box background color |
| color   | String | text color |
| message   | String | message text |
| onPress   | Func | called on press of close button  |
| style   | Object | Container Style for the Alert Message  |
| textStyle   | Object | Styling for the Text within the Alert Message  |
| closeStyle   | Object | Styling for the close button  |

### ArticleText

[source](https://github.com/andyfenelon/react-native-UIKit/tree/master/lib/article-text)

![](https://raw.githubusercontent.com/andyfenelon/react-native-UIKit/master/docs/img/articletext.jpg)

`import { ArticleText } from 'react-native-uikit'`

```javascript
<ArticleText
  username={'username'}
  text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
  onPress={() => console.log('pressed')}
/>
```
| Prop | Type | Description |
| :------| :-----------| :-----------|
| username   | String | username  |
| text   | String | body of text for article |
| highLightColor   | String | text color for username |
| onPress   | Func | called on press   |
| style   | Object | Container Style   |
| userStyle   | Object | Style applied to the username field   |
| textStyle   | Object | Style applied to the text field   |

### ArticleList

[source](https://github.com/andyfenelon/react-native-UIKit/blob/master/lib/article-list/index.js)

![](https://raw.githubusercontent.com/andyfenelon/react-native-UIKit/master/docs/img/article-list.jpg)

`import { ArticleList } from 'react-native-uikit'`

```javascript
<ArticleList
  headerContent={<Text style={{textAlign:'center', fontSize: 20, padding: 10, backgroundColor: '#eee', marginBottom: 3}}>HEADER CONTENT</Text>}
  items={[
    {id:0, category:'Misc', timestamp: 1463338637801, title:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', src:'https://placehold.it/200/798466'},
    {id:1, category:'Misc', timestamp: 1463338637801, title:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', src:'https://placehold.it/200/311112'},
    {id:2, category:'Misc', timestamp: 1463338637801, title:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', src:'https://placehold.it/200/D4BB69'},
    {id:3, category:'Misc', timestamp: 1463338637801, title:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', src:'https://placehold.it/200/ABB2B8'},
    {id:4, category:'Misc', timestamp: 1463338637801, title:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', src:'https://placehold.it/200/798466'},
    {id:5, category:'Misc', timestamp: 1463338637801, title:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', src:'https://placehold.it/200/919888'},
  ]}
  footerContent={<Text style={{textAlign:'center', fontSize: 20, padding: 10, backgroundColor: '#eee'}}>FOOTER CONTENT</Text>}
  onPress={(id) => console.log(id)}
/>
```
| Prop | Type | Description |
| :------| :-----------| :-----------|
| items   | Array | data |
| cellHeight   | Number | height of cell  |
| categoryWeight  | String | font weight of category |
| categorySize   | Number | font size of category |
| titleSize   | Number | font size of title   |
| titleColor   | String | color of title   |
| dateColor  | String | color of date   |
| headerContent   | Component | content for header (optional) |
| footerContent   | Component | content for footer (optional)|
| onPress   | Func | called on press return cell id |
| style   | Object | Style applied to individual Article Item TouchableOpacity |
| containerStyle   | Object | Style applied to the container |
| itemStyle   | Object | Style applied to individual Article Item  |
| imageStyle   | Object | Style applied to the article image |
| cellStyle   | Object | Style applied to the Article Cell |
| cellTextStyle   | Object | Style applied to the wrapper text within the Article Cell |
| textStyle   | Object | Style applied to the Title Text |
| dateStyle   | Object | Style applied to the Date |

### Avatar

[source](https://github.com/andyfenelon/react-native-UIKit/blob/master/lib/avatar/index.js)

![](https://raw.githubusercontent.com/andyfenelon/react-native-UIKit/master/docs/img/avatar.jpg)

`import { Avatar} from 'react-native-uikit'`

```javascript
<Avatar
  src={'https://s3.amazonaws.com/uifaces/faces/twitter/evagiselle/128.jpg'}
  size={40}
  circle={true}
  onPress={() => console.log('pressed')}
/>
```
| Prop | Type | Description |
| :------| :-----------| :-----------|
| src   | String | src for avartar img  |
| size   | Number | height & width of img |
| circle   | Bool | is circular |
| onPress   | Func | called on press   |
| style   | Object | Styles   |
| containerStyle   | Object | Container Style   |
| imageStyle   | Object | avatar image style   |


### AvatarHeader

[source](https://github.com/andyfenelon/react-native-UIKit/blob/master/lib/avatar-header/index.js)

![](https://raw.githubusercontent.com/andyfenelon/react-native-UIKit/master/docs/img/avartar-header.jpg)

`import { AvatarHeader } from 'react-native-uikit'`

```javascript
<AvatarHeader src={'https://s3.amazonaws.com/uifaces/faces/twitter/evagiselle/128.jpg'}
  heading={'Lynsey Smith'}
  timestamp={1460227647478}
  circle={true}
  backgroundColor={'#fff'}
  height={40}
  gutter={10}
/>
```
| Prop | Type | Description |
| :------| :-----------| :-----------|
| heading   | String | title / username  |
| timestamp  | Number | Unix Timestamp (milliseconds)  |
| backgroundColor   | String | section background color |
| gutter  | Number | spacing around  |
| onPress   | Func | called on press   |
| style   | Object | Styles   |
| containerStyle   | Object | Container Style   |
| dateStyle   | Object | Styles for Date   |
| avatarStyle   | Object | Avatar Styles   |
| avatarContainerStyle   | Object | Avatar Container Style   |
| avatarImageStyle   | Object | avatar image style   |

### Button

[source](https://github.com/andyfenelon/react-native-UIKit/blob/master/lib/button/index.js)

![](https://raw.githubusercontent.com/andyfenelon/react-native-UIKit/master/docs/img/button.jpg)

`import { Button } from 'react-native-uikit'`

```javascript
<Button
  color={'#fff'}
  backgroundColor={'#0094EA'}
  radius={5}>
  Submit
</Button>
```
| Prop | Type | Description |
| :------| :-----------| :-----------|
| backgroundColor   | String | box background color |
| color   | String | text color |
| radius   | Number | border radius size |
| onPress   | Func | called on press |
| children   | String | button text |

### ButtonOutline

[source](https://github.com/andyfenelon/react-native-UIKit/blob/master/lib/button-outline/index.js)

![](https://raw.githubusercontent.com/andyfenelon/react-native-UIKit/master/docs/img/button-outline.jpg)

`import { ButtonOutline } from 'react-native-uikit'`

```javascript
<ButtonOutline
  color={'#222'}
  borderWidth={4}
  fontWeight={'bold'}
  fontSize={19}
  radius={1}>
  Submit
</ButtonOutline>
```
| Prop | Type | Description |
| :------| :-----------| :-----------|
| color   | String | text and border color |
| radius   | Number | border radius size |
| fontWeight  | String | font weight |
| fontSize   | Number | font size|
| onPress   | Func | called on press |
| children   | String | button text |

### Card

[source](https://github.com/andyfenelon/react-native-UIKit/blob/master/lib/card/index.js)

![](https://raw.githubusercontent.com/andyfenelon/react-native-UIKit/master/docs/img/card.jpg)

`import { Card } from 'react-native-uikit'`

```javascript
<Card
  onPress={() => console.log('card pressed')}
  src={'https://s-media-cache-ak0.pinimg.com/736x/5f/70/41/5f704159cdf6512cf21000ec4827fc03.jpg'}
  title={'Card title - Some quick example text to build on the card title and make up the bulk of the card'}
  link={'www.example.com'}
  radius={5}
  marginBottom={30}
/>
```
| Prop | Type | Description |
| :------| :-----------| :-----------|
| backgroundColor   | String | box background color |
| color   | String | text color |
| shadow   | Bool | display dropshadow (default true) |
| src  | String | img src |
| gutter  | Number | side padding |
| radius   | Number | border radius size |
| onPress   | Func | called on press  |


### Carousel

[source](https://github.com/andyfenelon/react-native-UIKit/blob/master/lib/carousel/index.js)

![](https://raw.githubusercontent.com/andyfenelon/react-native-UIKit/master/docs/img/carousel.jpg)

`import { Carousel } from 'react-native-uikit'`

```javascript
<Carousel
  images={[
    {id:0, src:'https://placehold.it/600/311112'},
    {id:1, src:'https://placehold.it/600/59C480'},
    {id:2, src:'https://placehold.it/600/546C80'},
    {id:3, src:'https://placehold.it/600/D58554'},
    {id:4, src:'https://placehold.it/600/F0CD9B'},
    {id:5, src:'https://placehold.it/600/311112'},
  ]}
  height={300}
/>
```
| Prop | Type | Description |
| :------| :-----------| :-----------|
| images   | Array | array of images |
| height   | Number | height of carousel |
| gutter   | Number | padding to sides |

### Close

[source](https://github.com/andyfenelon/react-native-UIKit/blob/master/lib/close/index.js)

![](https://raw.githubusercontent.com/andyfenelon/react-native-UIKit/master/docs/img/close.jpg)

`import { Close } from 'react-native-uikit'`

```javascript
<Close
  size={50}
  color={'#222'}
  onPress={() => console.log('closed')}
/>
```
| Prop | Type | Description |
| :------| :-----------| :-----------|
| size   | Number | width / height |
| color   | String | color of button |
| onPress   | Func | called on press  |

### DateItem

[source](https://github.com/andyfenelon/react-native-UIKit/blob/master/lib/date-item/index.js)

![](https://raw.githubusercontent.com/andyfenelon/react-native-UIKit/master/docs/img/date-item.jpg)

`import { DateItem } from 'react-native-uikit'`

```javascript
<DateItem
  timestamp={1460227647478}
  color={'#222'}
  marginLeft={10}
/>
```
| Prop | Type | Description |
| :------| :-----------| :-----------|
| timestamp  | Number | Unix Timestamp (milliseconds)  |
| color   | String | color of text |
| marginLeft  | Number | margin left |

### Divider

[source](https://github.com/andyfenelon/react-native-UIKit/blob/master/lib/divider/index.js)

![](https://raw.githubusercontent.com/andyfenelon/react-native-UIKit/master/docs/img/divider.jpg)

`import { Divider } from 'react-native-uikit'`

```javascript
<Divider
  color={'#eee'}
/>
```
| Prop | Type | Description |
| :------| :-----------| :-----------|
| color   | String | color of divider |

### FieldError

[source](https://github.com/andyfenelon/react-native-UIKit/blob/master/lib/field-error/index.js)

`import { FieldError } from 'react-native-uikit'`

```javascript
<FieldError
  errorMsg={'error something has gone wrong!'}
  error={true}
  color={'red'}
  marginBottom={40}
/>
```
| Prop | Type | Description |
| :------| :-----------| :-----------|
| errorMsg   | String | error message |
| error   | Bool | display message or not |
| color   | String | color of text |
| marginBottom   | Number | marginBottom |

### Grid

[source](https://github.com/andyfenelon/react-native-UIKit/blob/master/lib/grid/index.js)

![](https://raw.githubusercontent.com/andyfenelon/react-native-UIKit/master/docs/img/gallery-tiles.jpg)

`import { Grid } from 'react-native-uikit'`

```javascript
<Grid
  headerContent={<Text style={{textAlign:'center', fontSize: 20, padding: 10, backgroundColor: '#eee', marginBottom: 3}}>HEADER CONTENT</Text>}
  images={[
    {id:0, src:'https://placehold.it/200/798466'},
    {id:1, src:'https://placehold.it/200/311112'},
    {id:2, src:'https://placehold.it/200/ABB2B8'},
    {id:3, src:'https://placehold.it/200/D4BB69'},
    {id:4, src:'https://placehold.it/200/798466'},
    {id:5, src:'https://placehold.it/200/919888'},
    {id:6, src:'https://placehold.it/200/ABB2B8'},
    {id:7, src:'https://placehold.it/200/919888'},
    {id:8, src:'https://placehold.it/200/A9C781'},
    {id:9, src:'https://placehold.it/200/311112'},
  ]}
  footerContent={<Text style={{textAlign:'center', fontSize: 20, padding: 10, backgroundColor: '#eee'}}>FOOTER CONTENT</Text>}
  onPress={(id) => console.log(id)}
  itemsPerRow={3}
  spacing={2}
/>
```
| Prop | Type | Description |
| :------| :-----------| :-----------|
| images   | Array | images array |
| itemsPerRow   | Number | number of items per row |
| spacing   | Number | spacing between cells |

### GalleryOffset

[source](https://github.com/andyfenelon/react-native-UIKit/blob/master/lib/gallery-offset/index.js)

![](https://raw.githubusercontent.com/andyfenelon/react-native-UIKit/master/docs/img/gallery-offset-row.jpg)

`import { GalleryOffset } from 'react-native-uikit'`

```javascript
<GalleryOffset
  imagesArray={[
    'https://placehold.it/600/311112',
    'https://placehold.it/600/A9C781',
    'https://placehold.it/600/919888',
    'https://placehold.it/600/ABB2B8',
    'https://placehold.it/600/ABB2B8',
    'https://placehold.it/600/919888',
  ]}
  display={'column'}
/>
```
| Prop | Type | Description |
| :------| :-----------| :-----------|
| images   | Array | images array |



### ImageCustom
[source](https://github.com/andyfenelon/react-native-UIKit/blob/master/lib/image-custom/index.js)

`import { ImageCustom } from 'react-native-uikit'`

```javascript
<ImageCustom
  src={'https://placehold.it/600/ABB2B8'}
  height={300}
  overlayColor={'#222'}
  overlayOpacity={0.8}
  fullHeight={true}
>
<View style={{flex:1, justifyContent:'center'}}>
  <Text style={{color:'#fff', backgroundColor:'transparent',fontSize:90, fontWeight: '100', textAlign:'center'}}>YES HELLO</Text>
</View>
</ImageCustom>
```
| Prop | Type | Description |
| :------| :-----------| :-----------|
| src  | String | img src |
| height  | Number | img height |
| fullHeight  | Bool | fullscreen height |
| children  | Component | allows nesting children components |
| blurRadius | Number | background img blur radius (default 0)  |
| overlayColor | String | background overlay color  |
| overlayOpacity | Number | background overlay opacity  |


### InputField
[source](https://github.com/andyfenelon/react-native-UIKit/blob/master/lib/input-field/index.js)

`import { InputField } from 'react-native-uikit'`

```javascript
<InputField
  placeHolder={'i am the placeholder txt'}
  gutter={10}
  color={'#222'}
  backgroundColor={'#eee'}
  radius={5}
/>
```
| Prop | Type | Description |
| :------| :-----------| :-----------|
| placeHolder  | String | input placeholder |
| gutter  | Number | padding |
| color  | String | text color |
| backgroundColor | String | background color |
| radius  | Number | border radius |
| autoCapitalize  | String | default 'none' ('none', 'sentences', 'words', 'characters') |
| autoCorrect | Bool | default false |

### LikeBtn
[source](https://github.com/andyfenelon/react-native-UIKit/blob/master/lib/like-btn/index.js)

`import { LikeBtn } from 'react-native-uikit'`

```javascript
<LikeBtn
  active={true}
  likes={322}
  //color={'#fa0008'}
  onPress={() => console.log('liked')}
/>
```
| Prop | Type | Description |
| :------| :-----------| :-----------|
| active  | Bool | is active |
| likes  | Number | number of likes |
| color  | String | text color |
| onPress | Func | called onPress |



### ListBasic

[source](https://github.com/andyfenelon/react-native-UIKit/blob/master/lib/list-basic/index.js)

![](https://raw.githubusercontent.com/andyfenelon/react-native-UIKit/master/docs/img/list-basic.jpg)

`import { ListBasic } from 'react-native-uikit'`

```javascript
<ListBasic
  headerContent={<Text style={{textAlign:'center', fontSize: 20, padding: 10, backgroundColor: '#eee', marginBottom: 3}}>HEADER CONTENT</Text>}
  items={[
    {id: 0, title:'Label'},
    {id: 1, title:'Label'},
    {id: 2, title:'Label'},
    {id: 3, title:'Label'}
  ]}
  footerContent={<Text style={{textAlign:'center', fontSize: 20, padding: 10, backgroundColor: '#eee'}}>FOOTER CONTENT</Text>}
  onPress={(i) => console.log(id)}
/>
```
| Prop | Type | Description |
| :------| :-----------| :-----------|
| items  | Array | list items |
| onPress | Func | called onPress |
| headerContent   | Component | content for header (optional) |
| footerContent   | Component | content for footer (optional)|

### LoginFb
[source](https://github.com/andyfenelon/react-native-UIKit/blob/master/lib/login-fb/index.js)

![](https://raw.githubusercontent.com/andyfenelon/react-native-UIKit/master/docs/img/fb-login.jpg)

`import { LoginFb } from 'react-native-uikit'`

```javascript
<LoginFb
  onPress={() => console.log('login with fb')}
/>
```
| Prop | Type | Description |
| :------| :-----------| :-----------|
| onPress | Func | called onPress |

### LoginForm

[source](https://github.com/andyfenelon/react-native-UIKit/blob/master/lib/login-form/index.js)

![](https://raw.githubusercontent.com/andyfenelon/react-native-UIKit/master/docs/img/login-form.jpg)

`import { LoginForm } from 'react-native-uikit'`

```javascript
<LoginForm
  loginFb={() => console.log('login with facebook')}
  onSubmit={(email, password) => console.log(email, password)}
  error={false}
  errorMsg={'username or password incorrect'}
/>
```
| Prop | Type | Description |
| :------| :-----------| :-----------|
| loginFb | Func | called onPress fb login |
| onSubmit | Func | called onPress login |
| error | Bool | display error message |
| errorMsg | String | error message |
| btnBackgroundColor | String | submit btn background color |
| btnColor | String | submit btn text color |
| inputRadius | String | radius of inputs |
| btnRadius | String | radius of submit button |

### MapSection (Deprecated  )
###### better alternative   https://github.com/lelandrichardson/react-native-maps
`import { MapSection } from 'react-native-uikit'`

```javascript
<MapSection
  height={300}
  fullHeight={false}
  region={{
    latitude: 40.712784,
    longitude: -74.005941,
    latitudeDelta: 10,
    longitudeDelta: 10,}
  }
  annotations={[{
    latitude: 40.712784,
    longitude: -74.005941,
    title: 'New York',
    subtitle: 'This is cool!'}]
  }
  />
```
| Prop | Type | Description |
| :------| :-----------| :-----------|
| height | Number | map height |
| fullHeight | Bool | display full height |
| region | Obj | region on map |
| annotations | Array | markers on map |


### Message

[source](https://github.com/andyfenelon/react-native-UIKit/blob/master/lib/message/index.js)


`import { Message } from 'react-native-uikit'`

```javascript
<Message
  active={true}
  user={'Jon Snow'}
  title={'Winter is Coming'}
  message={'Hey Rob, have you seen the weather report on tv ?'}
  timestamp={1460227614421}
/>
```
| Prop | Type | Description |
| :------| :-----------| :-----------|
| active | Bool | is message read |
| user | String | sender name |
| title | String | message title |
| message | String | message body |
| timestamp  | Number | Unix Timestamp (milliseconds)  |

### MessageList

[source](https://github.com/andyfenelon/react-native-UIKit/blob/master/lib/message-list/index.js)

![](https://raw.githubusercontent.com/andyfenelon/react-native-UIKit/master/docs/img/messages.jpg)

`import { MessageList } from 'react-native-uikit'`

```javascript
<MessageList
  headerContent={<Text style={{textAlign:'center', fontSize: 20, padding: 10, backgroundColor: '#eee', marginBottom: 3}}>HEADER CONTENT</Text>}
  items={[
    {id:0, active:false, user: 'Jon Snow', title: 'Winter is Coming', message: 'Hey Rob, have you seen the weather report on tv ?', timestamp: 1460223614421},
    {id:1, active:true, user: 'Ric Lowe', title: 'Guess what I found?', message: 'Hey Rob, checkout this story ?', timestamp: 1460221614421},
    {id:2, active:true ,user: 'Jon Snow', title: 'title 3', message: 'Hey Rob, have you seen the weather report on tv ?', timestamp: 1460227614421},
  ]}
  footerContent={<Text style={{textAlign:'center', fontSize: 20, padding: 10, backgroundColor: '#eee'}}>FOOTER CONTENT</Text>}
  onPress={(id) => console.log(id)}
/>
```
| Prop | Type | Description |
| :------| :-----------| :-----------|
| items  | Array | messages data  |
| backgroundColor  | String | background color |
| headerContent   | Component | content for header (optional) |
| footerContent   | Component | content for footer (optional)|
| onPress   | Func | called by press returns message id |

### ProfileHeader

[source](https://github.com/andyfenelon/react-native-UIKit/blob/master/lib/profile-header/index.js)

![](https://raw.githubusercontent.com/andyfenelon/react-native-UIKit/master/docs/img/profile-header.jpg)

`import { ProfileHeader } from 'react-native-uikit'`

```javascript
<ProfileHeader
  profileImg={'https://s3.amazonaws.com/uifaces/faces/twitter/evagiselle/128.jpg'}
  backgroundImg={'https://placehold.it/600/ABB2B8'}
/>
```
| Prop | Type | Description |
| :------| :-----------| :-----------|
| profileImg | String | profile thumb src |
| backgroundImg  | String | background img src  |
| circle  | Bool | profile img circular  |
| blurRadius | Number | background img blur radius (default 0)  |

### RatingBox
[source](https://github.com/andyfenelon/react-native-UIKit/blob/master/lib/rating-box/index.js)
`import { RatingBox } from 'react-native-uikit'`

```javascript
<RatingBox rating={4} outOf={5}/>
```

### ReviewCell

[source](https://github.com/andyfenelon/react-native-UIKit/blob/master/lib/review-cell/index.js)

![](https://raw.githubusercontent.com/andyfenelon/react-native-UIKit/master/docs/img/review.jpg)

`import { ReviewCell } from 'react-native-uikit'`

```javascript
<ReviewCell
  title={'Gaucho'}
  description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'}
  src={'https://lh5.googleusercontent.com/proxy/lvLgnhcoHke5BEhTG-bVydssje9jV_GytcBidVZh4ADXEuiybVwXN4mlIbgxxOKn2pF1uharMho8lAqGSXcMGKJMigr42UH_qZ1THp4bZplV7uyThhmwEtq38oAhKW7V5Y_6j46jAEkxkrewm9wrd_T4K2JBUw8=w271-h180'}
  onPress={() => console.log('pressed')}
  rating={4}
  outOf={5}
/>
```
| Prop | Type | Description |
| :------| :-----------| :-----------|
| title | String | item title |
| description | String | item description |
| src | String | item thumb src |
| onPress | Func | called on press |

### Search (Deprecated  )
###### better alternative   https://github.com/umhan35/react-native-search-bar

![](https://raw.githubusercontent.com/andyfenelon/react-native-UIKit/master/docs/img/search.jpg)

`import { Search } from 'react-native-uikit'`

```javascript
<Search (Depreciated suggested )
  placeHolder={'Search for cool stuff..'}
  //backgroundColor={'red'}
  //innerBackground={'#eee'}
  //borderColor={'#222'}
  //border={false}
  radius={5}
  //iconColor={'red'}
  onChangeText={(text) => console.log(text)}
/>
```
| Prop | Type | Description |
| :------| :-----------| :-----------|
| placeHolder | String | placeholder text |
| backgroundColor | String | background color |
| innerBackground | String | search box background color |
| border | Bool | display border or not |
| radius | Number | border radius |
| borderColor | String | search border color |
| iconColor | String | search icon color |
| onChangeText | Func | called with search text on text change |

### ThumbSwiper

[source](https://github.com/andyfenelon/react-native-UIKit/blob/master/lib/thumb-swiper/index.js)

![](https://raw.githubusercontent.com/andyfenelon/react-native-UIKit/master/docs/img/thumb-swiper.jpg)

`import { ThumbSwiper } from 'react-native-uikit'`

```javascript
<ThumbSwiper
  images={[
    {id:0, src:'https://placehold.it/200/798466'},
    {id:1, src:'https://placehold.it/200/311112'},
    {id:2, src:'https://placehold.it/200/ABB2B8'},
    {id:3, src:'https://placehold.it/200/D4BB69'},
    {id:4, src:'https://placehold.it/200/798466'},
    {id:5, src:'https://placehold.it/200/919888'},
    {id:6, src:'https://placehold.it/200/ABB2B8'},
    {id:7, src:'https://placehold.it/200/919888'},
    {id:8, src:'https://placehold.it/200/A9C781'},
    {id:9, src:'https://placehold.it/200/311112'},
  ]}
  onPress={(id) => console.log(id)}
/>

```
| Prop | Type | Description |
| :------| :-----------| :-----------|
| images | Array| images |

### Time
[source](https://github.com/andyfenelon/react-native-UIKit/blob/master/lib/time/index.js)

11.47 AM

`import { Time } from 'react-native-uikit'`

```javascript
<Time
  timestamp={1460227647478}
  color={'#222'}
/>
```
| Prop | Type | Description |
| :------| :-----------| :-----------|
| color | String | text color |
| timestamp  | Number | Unix Timestamp (milliseconds)  |
