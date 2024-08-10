import * as React from 'react';
import { View, Text, SafeAreaView, Dimensions } from 'react-native';
import { BottomSheet, Button, Loader, Portal, PortalProvider, type SheetRef } from '@avi99/aui';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

function App() {
  // const [result, setResult] = React.useState<number | undefined>();

  // const [number, setNumber] = React.useState<number>(0);
  const sheetRef = React.useRef<SheetRef>(null);
  const openSheet = () => {
    sheetRef.current?.open()
  }
  const closeSheet = () => {
    sheetRef.current?.close()
  }
  const Home = () => {
    return (
      <View style={{ display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {/* <Text>{number}</Text> */}
        <Button onPress={openSheet} title={'open sheet'} mode='flat' />
        {/*<IconButton onPress={() => console.log("pressed")} title={"Home"} icon='home-outline' ripple={true} width={80} /> */}
        {/* <View style={{ height: 60 }}></View> */}
        {/* <Pro progress={number} /> */}
        {/* <ProgressBar color={'red'} value={number} />
        <View style={{ height: 10 }}></View> */}
        {/* <Loader name='2-curves'/>
        <Loader name='6-dots' color={'purple'}/>
        <View style={{height:9}}></View>
        <Loader name='3-dots-sway' color={'red'}/>
        <View style={{height:9}}></View>
        <Loader name='curve-spin' color={'green'}/>
        <View style={{height:9}}></View>
        <Loader name='fading-box' color={'black'}/>
        <View style={{height:9}}></View>
        <Loader name='triangle' color={'tomato'}/> */}
        <Portal name="bottomsheet">
          <BottomSheet height={'90%'} ref={sheetRef} backdropColor={'red'} close={closeSheet}>
            <View style={{ height: '100%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'grey' }}>
              <Button onPress={closeSheet} title={'close sheet'} mode='flat' />
            </View>
          </BottomSheet>
        </Portal>
        {/* <Portal name='text'>
          <Text>This is portal Text</Text>
        </Portal> */}


        {/* <But icon="camera" mode="contained" onPress={() => console.log("hello")}>
          Press me
        </But>
        <View style={{ height: 60 }}></View>
        <Divider />
        <View style={{ height: 60 }}></View>
        <Seperator /> */}
      </View>
    )
  }
  const Categories = () => {
    // const [value, setValue] = React.useState<Boolean>(true);
    // const [progress, setProgress] = React.useState<number>(0)
    return (
      <>
        {/* <View style={{ display: 'flex', justifyContent: 'center', flex: 1 }}>
          <ProgressBar color={'purple'} value={progress} height={20} />
          <Pressable onPress={() => setProgress(progress + 10)}><View style={{ width: 20, height: 10, marginTop: 60, backgroundColor: 'red' }}></View></Pressable>
        </View> */}

        {/* <TextInput onChange={(text: String) => console.log(text)} placeholder={'Enter text'} />
        <OtpInput length={5} onChange={(text) => console.log(text)} />
        <Button mode='flat' onPress={() => setProgress(progress + 20)} title="Click Me" />
        
        <ProgressBar value={progress} /> */}
        <View style={{ display: 'flex', flexDirection: 'column' }}>
          <View style={{ height: 80, width: '100%', display: 'flex', flexDirection: 'row' }}>
            <View style={{ height: '100%', width: '33.33%', backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderTopWidth: 2, borderLeftWidth: 2 }}>
              <Loader name='6Dots' />
              <Text style={{ fontWeight: "600" }}>6Dots</Text>
            </View>
            <View style={{ height: '100%', width: '33.33%', display: 'flex', alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderTopWidth: 2 }}>
              <Loader name='3Dots' color={'green'} />
              <Text style={{ fontWeight: "600" }}>3Dots</Text>
            </View>
            <View style={{ height: '100%', width: '33.33%', display: 'flex', alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderTopWidth: 2, borderRightWidth: 2 }}>
              <Loader name='curveSpin' color={'violet'} />
              <Text style={{ fontWeight: "600" }}>curveSpin</Text>
            </View>
          </View>
          <View style={{ height: 80, width: '100%', display: 'flex', flexDirection: 'row' }}>
            <View style={{ height: '100%', width: '33.33%', backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderLeftWidth: 2 }}>
              <Loader name='triangle' color={'royalblue'} />
              <Text style={{ fontWeight: "600" }}>triangle</Text>
            </View>
            <View style={{ height: '100%', width: '33.33%', display: 'flex', alignItems: 'center', justifyContent: 'center', borderWidth: 1 }}>

              <View style={{ height: 47, display: 'flex', justifyContent: 'center' }}><Loader name='dotGliding' color={'blue'} /></View>
              <Text style={{ fontWeight: "600" }}>dotGliding</Text>
            </View>
            <View style={{ height: '100%', width: '33.33%', display: 'flex', alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderRightWidth: 2 }}>

              <View style={{ height: 47, display: 'flex', justifyContent: 'center' }}><Loader name='fadingBox' color={'red'} /></View>
              <Text style={{ fontWeight: "600" }}>fadingBox</Text>
            </View>
          </View>
          <View style={{ height: 80, width: '100%', display: 'flex', flexDirection: 'row' }}>
            <View style={{ height: '100%', width: '33.33%', backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderLeftWidth: 2 }}>
              <Loader name='4DotSquare' color={'black'} />
              <Text style={{ fontWeight: "600" }}>4DotSquare</Text>
            </View>
            <View style={{ height: '100%', width: '33.33%', display: 'flex', alignItems: 'center', justifyContent: 'center', borderWidth: 1 }}>

              <View style={{ height: 47, display: 'flex', justifyContent: 'center' }}><Loader name='3DotScale' color={'purple'} /></View>
              <Text style={{ fontWeight: "600" }}>3DotScale</Text>
            </View>
            <View style={{ height: '100%', width: '33.33%', display: 'flex', alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderRightWidth: 2 }}>

              <View style={{ height: 47, display: 'flex', justifyContent: 'center' }}><Loader name='3DotBlinking' color={'#1C1678'} /></View>
              <Text style={{ fontWeight: "600" }}>3DotBlinking</Text>
            </View>
          </View>
          <View style={{ height: 80, width: '100%', display: 'flex', flexDirection: 'row' }}>
            <View style={{ height: '100%', width: '33.33%', backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderLeftWidth: 2 }}>
              <Loader name='3DotSwap' color={'#A34343'} />
              <Text style={{ fontWeight: "600" }}>3DotSwap</Text>
            </View>
            <View style={{ height: '100%', width: '33.33%', display: 'flex', alignItems: 'center', justifyContent: 'center', borderWidth: 1 }}>
              <Loader name='3DotSway' color={'#D20062'} />
              <Text style={{ fontWeight: "600" }}>3DotSway</Text>
            </View>
            <View style={{ height: '100%', width: '33.33%', display: 'flex', alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderRightWidth: 2 }}>
              <Loader name='3Rings' color={'#ff0000'} />
              <Text style={{ fontWeight: "600" }}>3Rings</Text>
            </View>
          </View>
          <View style={{ height: 80, width: '100%', display: 'flex', flexDirection: 'row' }}>
            <View style={{ height: '100%', width: '33.33%', backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderLeftWidth: 2 }}>
              <Loader name='tinyCurve' color={'#8E7AB5'} />
              <Text style={{ fontWeight: "600" }}>tinyCurve</Text>
            </View>
            <View style={{ height: '100%', width: '33.33%', display: 'flex', alignItems: 'center', justifyContent: 'center', borderWidth: 1 }}>
              <Loader name='2Curves' color={'#FC6736'} />
              <Text style={{ fontWeight: "600" }}>2Curves</Text>
            </View>
            <View style={{ height: '100%', width: '33.33%', display: 'flex', alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderRightWidth: 2 }}>
              <Loader name='3Quarters' color={'#280274'} />
              <Text style={{ fontWeight: "600" }}>3Quarters</Text>
            </View>
          </View>
          <View style={{ height: 80, width: '100%', display: 'flex', flexDirection: 'row' }}>
            <View style={{ height: '100%', width: '33.33%', backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderLeftWidth: 2 }}>
              <Loader name='ringExpand' color={'#8E7AB5'} />
              <Text style={{ fontWeight: "600" }}>ringExpand</Text>
            </View>
            <View style={{ height: '100%', width: '33.33%', display: 'flex', alignItems: 'center', justifyContent: 'center', borderWidth: 1 }}>
              <Loader name='endlessSquares' color={'#3468C0'} />
              <Text style={{ fontWeight: "600" }}>endlessSquares</Text>
            </View>
            <View style={{ height: '100%', width: '33.33%', display: 'flex', alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderRightWidth: 2 }}>
              <Loader name='spinningSquare' color={'#B80000'} />
              <Text style={{ fontWeight: "600" }}>spinningSquare</Text>
            </View>
          </View>
          <View style={{ height: 80, width: '100%', display: 'flex', flexDirection: 'row' }}>
            <View style={{ height: '100%', width: '33.33%', backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderLeftWidth: 2 }}>
            </View>
            <View style={{ height: '100%', width: '33.33%', display: 'flex', alignItems: 'center', justifyContent: 'center', borderWidth: 1 }}>
              <Loader name='5DotWave' color={'#8E7AB5'} />
              <Text style={{ fontWeight: "600" }}>5DotWave</Text>
            </View>
            <View style={{ height: '100%', width: '33.33%', display: 'flex', alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderRightWidth: 2 }}>
            </View>
          </View>
        </View>
      </>
    )
  }
  const Tab = createBottomTabNavigator();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <Home/> */}
      {/* <StatusBar backgroundColor='red' /> */}
      {/* <ScrollView style={styles.container} contentContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}> */}

      {/* <Home /> */}
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarStyle: {
              position: 'absolute',
              height: Dimensions.get('screen').height / 8,
              borderRadius: 30,
              elevation: 5,
              shadowColor: 'black',
              shadowOffset: { width: 5, height: 5 },
              backgroundColor: '#fff',
              bottom: 10,
              borderWidth: 3,
              borderTopWidth: 3,
              borderColor: '#76B693',
              borderTopColor: '#76B693',
              width: '98%',
              left: '1%',
            },
          }}
        >
          <Tab.Screen
            name='Home'
            component={Home}
            options={{
              headerShown: true,
              tabBarInactiveTintColor: 'black',
              tabBarActiveTintColor: 'dodgerblue',
              tabBarShowLabel: true,

            }}
          />
          <Tab.Screen
            name='Categories'
            component={Categories}
            options={{
              headerShown: true,
              tabBarInactiveTintColor: 'black',
              tabBarActiveTintColor: 'dodgerblue',
              tabBarShowLabel: true,
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
      {/*<BottomSheet height={'70%'} ref={sheetRef}>
          <View style={{ height: '100%', width: '100%',display:'flex',alignItems:'center',justifyContent:'center' }}>
            <Button onPress={closeSheet} title={'close sheet'} mode='flat' />
          </View>

        </BottomSheet>
      <Button onPress={openSheet} title={'open sheet'} mode='flat' />*/}
      {/* <Button title='Ripple Button' mode='ripple' onPress={() => console.log('ropple')} background='dodgerblue' /> */}
      {/* <Button title='Ripple Button' mode='ripple' onPress={() => console.log('ropple')} background='dodgerblue' /> */}

      {/* </ScrollView> */}
    </SafeAreaView >

  );
}
const ApppWrapper = () => {
  return (
    <>
      <PortalProvider>

        <App />

      </PortalProvider>
    </>



  )

}
export default ApppWrapper;
