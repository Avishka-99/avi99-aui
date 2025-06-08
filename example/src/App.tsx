import * as React from 'react';
import { View, Text, SafeAreaView, ScrollView, Pressable, Dimensions, StyleSheet } from 'react-native';
import { IconButton, PortalProvider, Switch, Button as AuiButton, OtpInput, SheetRef, ProgressBar, Seperator, Portal, Loader, TextInput } from '@avi99/aui';
import { BottomSheet } from '@avi99/aui';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { createStaticNavigation, NavigationContainer, useNavigation } from '@react-navigation/native';
import { Divider } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';
import { NativeStackScreenProps } from '@react-navigation/native-stack';


type StackParamList = {
  Home: undefined;
  Button: undefined;
  Bottomsheet: undefined;
  Loader: undefined;
  OTP: undefined;
  ProgressBar: undefined;
  Seperator: undefined;
  Switch: undefined;
  Textinput: undefined;
};

type HomeProps = NativeStackScreenProps<StackParamList, 'Home'>;
type ButtonProps = NativeStackScreenProps<StackParamList, 'Button'>;
type BottomsheetProps = NativeStackScreenProps<StackParamList, 'Bottomsheet'>;
type LoaderProps = NativeStackScreenProps<StackParamList, 'Loader'>;
type OTPProps = NativeStackScreenProps<StackParamList, 'OTP'>;
type ProgressBarProps = NativeStackScreenProps<StackParamList, 'ProgressBar'>;
type SeperatorProps = NativeStackScreenProps<StackParamList, 'Seperator'>;
type SwitchProps = NativeStackScreenProps<StackParamList, 'Switch'>;
type TextinputProps = NativeStackScreenProps<StackParamList, 'Textinput'>;

function App() {
  const sheetRef = React.useRef<SheetRef>(null);
  const openSheet = () => {
    sheetRef.current?.open()
  }
  const closeSheet = () => {
    sheetRef.current?.close()
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  })


  const [number, setNumber] = React.useState<number>(0.5);

  const Stack = createStackNavigator<StackParamList>();
  return (
    <>
      < NavigationContainer >
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            cardStyle: { backgroundColor: '#fff' },
          }}
        >
          <Stack.Screen
            name='Home'
            component={Home}

          />
          <Stack.Screen
            name='Button'
            component={Button}
          />
          <Stack.Screen
            name='Loader'
            component={LoaderScreen} />
          <Stack.Screen
            name='OTP'
            component={OtpInputScreen} />
          <Stack.Screen
            name='ProgressBar'
            component={ProgressBarScreen} />
          <Stack.Screen
            name='Seperator'
            component={SeperatorScreen} />
          <Stack.Screen
            name='Switch'
            component={SwitchScreen} />
          <Stack.Screen
            name='Textinput'
            component={TextInputScreen} />
        </Stack.Navigator>
      </NavigationContainer >
    </>

  );
}





const Home = ({ navigation }: HomeProps) => {
  const sheetRef = React.useRef<SheetRef>(null);
  const openSheet = () => {
    sheetRef.current?.open()
  }
  const closeSheet = () => {
    sheetRef.current?.close()
  }
  const [number, setNumber] = React.useState<number>(0.5);
  return (
    <ScrollView contentContainerStyle={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>

      <View style={{ display: 'flex', height: '70%', justifyContent: 'space-around' }}>
        <AuiButton onPress={() => { navigation.navigate("Button") }} title={'Button'} mode='flat' background={'tomato'} />
        <AuiButton onPress={openSheet} title={'BottomSheet'} background={'#8A784E'} mode='flat' />
        <AuiButton onPress={() => { navigation.navigate("Loader") }} title={'Loaders'} background={'#52357B'} mode='flat' />
        <AuiButton onPress={() => { navigation.navigate("OTP") }} title={'OTP Input'} background={'#AF3E3E'} mode='flat' />
        <AuiButton onPress={() => { navigation.navigate("ProgressBar") }} title={'Progressbar'} background={'#4E71FF'} mode='flat' />
        <AuiButton onPress={() => { navigation.navigate("Seperator") }} title={'Seperator'} background={'#FF9F00'} mode='flat' />
        <AuiButton onPress={() => { navigation.navigate("Switch") }} title={'Switch'} background={'#393E46'} mode='flat' />
        <AuiButton onPress={() => { navigation.navigate("Textinput") }} title={'Textinput'} background={'#A5158C'} mode='flat' />
        <Portal name="bottomsheet">
          <BottomSheet height={'90%'} ref={sheetRef} backdropColor={'grey'} close={closeSheet}>
            <View style={{ height: '100%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}>
              <AuiButton onPress={closeSheet} title={'close sheet'} mode='flat' />
            </View>
          </BottomSheet>
        </Portal>
      </View>


    </ScrollView >
  )
}

const LoaderScreen = ({ navigation }: LoaderProps) => {
  return (
    <ScrollView contentContainerStyle={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
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
    </ScrollView>
  )
}
const Button = ({ navigation }: ButtonProps) => {
  return (
    <ScrollView contentContainerStyle={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
      <View style={{ display: 'flex', height: '70%', justifyContent: 'space-around' }}>
        <AuiButton onPress={() => { }} title={'Flat Button'} mode='flat' background={'#FF3EA5'} />
        <AuiButton ripple onPress={() => { }} title={'Flat Button - Ripple'} background={'#FC6736'} mode='flat' />
        <AuiButton onPress={() => { }} title={'Outlined Button'} mode='outlined' />
        <AuiButton ripple rippleColor={'grey'} onPress={() => { }} title={'Outlined Button - Ripple'} mode='outlined' />
        <AuiButton onPress={() => { }} title={'Text Button'} color={'#4E71FF'} mode='text' />
        <AuiButton ripple rippleColor={'grey'} onPress={() => { }} title={'Text Button - Ripple'} color={'#4E71FF'} mode='text' />
        <IconButton onPress={() => { }} title={'Icon Button'} background={'#6895D2'} icon='home' />
      </View>
    </ScrollView >
  )

}

const OtpInputScreen = ({ navigation }: OTPProps) => {
  const [otp, setOtp] = React.useState<string>('');

  return (
    <ScrollView contentContainerStyle={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
      <Text>OTP is : {otp}</Text>
      <OtpInput length={5} onChange={(text) => console.log(text)} onComplete={(text: string) => { setOtp(text) }} />
    </ScrollView>


  )


}
const ProgressBarScreen = ({ navigation }: ProgressBarProps) => {
  const [progress, setProgress] = React.useState<number>(0);
  return (
    <ScrollView contentContainerStyle={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
      <Text>Progress is : {progress}</Text>
      <ProgressBar value={progress} />
      <AuiButton onPress={() => setProgress(Math.floor(Math.random() * 10 + 1) + progress)} title={'Update'} background={'#A5158C'} mode='flat' />
    </ScrollView>
  )
}

const SeperatorScreen = ({ navigation }: SeperatorProps) => {
  return (
    <ScrollView contentContainerStyle={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
      <AuiButton onPress={() => { }} title={'Button'} mode='flat' background={'tomato'} />
      <Seperator containerStyle={{ marginTop: 2, marginBottom: 2 }} />
      <AuiButton mode='flat' onPress={() => { }} title="Click Me" />
      <Seperator containerStyle={{ marginTop: 2, marginBottom: 2 }} />
      <AuiButton onPress={() => { }} title={'Textinput'} background={'#A5158C'} mode='flat' />
      <Seperator containerStyle={{ marginTop: 2, marginBottom: 2 }} />
    </ScrollView>
  )
}

const SwitchScreen = ({ navigation }: SwitchProps) => {
  const [value, setValue] = React.useState<boolean>(true);
  return (
    <ScrollView contentContainerStyle={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
      <Switch value={value} onChange={(val: boolean) => setValue(val)} color={'#FF3EA5'} />
      <Text>Switch is {value ? 'ON' : 'OFF'}</Text>
    </ScrollView>
  )
}

const TextInputScreen = ({ navigation }: TextinputProps) => {
  const [value, setValue] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  return (
    <View style={{ display: 'flex', height: '100%', justifyContent: 'space-around' }}>
      <View style={{ display: 'flex', height: '30%', justifyContent: 'space-around' }}>
        <TextInput value={value} onChange={(text: string) => setValue(text)} placeholder={'Enter text'} />
        <TextInput value={value} onChange={(text: string) => setValue(text)} placeholder={'Enter password'} secured />
      </View>
    </View>
  )
}
const ApppWrapper = () => {
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <PortalProvider>
          <App />
        </PortalProvider>
      </SafeAreaView>
    </>



  )

}
export default ApppWrapper;
