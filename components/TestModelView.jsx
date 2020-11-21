import ModelView from 'react-native-gl-model-view';
 
<ModelView
    model={{
      uri: 'model.obj',
    }}
    texture={{
      uri: 'texture.png',
    }}
 
    scale={0.01}
 
    translateZ={-2}
    rotateZ={270}
 
    style={{flex: 1}}
/>