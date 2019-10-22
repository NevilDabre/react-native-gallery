import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

const MyComponent = () => (
  <Card style={{width:100, height: 80, margin: 10}}>
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} style={{width:100, height: 80, padding: 1}} />
  </Card>
);

export default MyComponent;