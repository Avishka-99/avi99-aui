# @avi99/aui

A minimal ui library for react native

# 1.Installation

```sh
npm install @avi99/aui
```

# 2. Example

See exaple from [here](https://snack.expo.dev/@avishka99/github.com-avishka-99-aui-example)

# 3.Usage

```js
import { Button } from '@avi99/aui';

const MyButton = () => {
    return (
        <Button 
            mode='flat' 
            onPress={() => console.log("clicked")} 
            style={{ width: 80 }} 
            title="Click Me!" 
        />
    )
}
```

# 4.Components

## Button

```js
import { Button } from '@avi99/aui';

export fuction App(){
    return (
        <Button 
            mode='flat' 
            onPress={() => console.log("clicked")} 
            title="Click Me!" 
        />
    )
}
```


| Property     | Required | Type           | Description                                                                     |
| -------------- | ---------- | ---------------- | --------------------------------------------------------------------------------- |
| mode         | true     | String         | mode of the button. mode should be one of following  ('flat','outlined','text') |
| onPress      | true     | Function       | this calls when user press the button                                           |
| title        | true     | String         | button text                                                                     |
| background   | false    | ColorValue     | background color for button.<br>default -> #1E90FF                              |
| color        | false    | ColorValue     | button text color.<br>default -> #FFFFFF                                        |
| outlineColor | false    | ColorValue     | button outline color.<br>default -> #4169E1                                     |
| width        | false    | DimensionValue | width of button                                                                 |
| rounded      | false    | Boolean        | if true, button corners will be rounded                                         |
| ripple       | false    | Boolean        | enables ripple effect when user press the button                                |
| rippleColor  | false    | ColorValue     | ripple color.                                                                   |

## Loader

```js
import { Loader } from '@avi99/aui';

export fuction App(){
    return (
        <Loader 
           name='3-dots-blinking' 
           color={'#1C1678'} 
        />
    )
}
```


| Property | Required | Type       | Description                                                                                                                                                                                                                                                                                         |
| :--------- | ---------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name     | true     | String     | name of loader.it should be one of following<br />('6Dots','3Dots','curveSpin','triangle','dotGliding','fading-Box','4DotSquare','3DotScale','3DotBlinking','3DotSwap','3DotSway',<br />'3Rings','tinyCurve','2Curves','3Quarters','ringExpand',<br />'endlessSquares','spinningSquare','5DotWave') |
| duration | false    | Number     | duration of the animation. default value vary according to animation                                                                                                                                                                                                                                |
| color    | false    | ColorValue | background color of loader. default -> #1E90FF                                                                                                                                                                                                                                                      |

## Switch

```js
import { Switch } from '@avi99/aui';

export fuction App(){
    return (
        <Switch
           onChange={(state: Boolean) => setValue(state)} 
           value={value} 
        />
    )
}
```


| Property | Required | Type       | Description                                    |
| ---------- | ---------- | ------------ | ------------------------------------------------ |
| value    | true     | Boolean    | current state of the button                    |
| onChange | true     | Function   | triggers when user press the switch            |
| color    | true     | ColorValue | background color of switch. default -> #1E90FF |

## Seperator

```js
import { Seperator } from '@avi99/aui';

export fuction App(){
    return (
        <Seperator/>
    )
}

```


| Property | Required | Type       | Description                   |
| :--------- | ---------- | ------------ | ------------------------------- |
| color    | false    | ColorValue | background color of seperator |

## Progress Bar

```js
import { ProgressBar } from '@avi99/aui';

export fuction App(){
    const [progress, setProgress] = React.useState<number>(0);
    return (
        <ProgressBar color={'purple'} value={progress} />
    )
}
```


| Property | Required | Type           | Description                                              |
| :--------- | ---------- | ---------------- | ---------------------------------------------------------- |
| color    | false    | ColorValue     | background color of progress bar. default -> #5BC236     |
| value    | true     | Number         | progress value. it should be in between 0 - 100          |
| width    | false    | DimensionValue | width of progressbar. default -> '100%' of its container |
| height   | false    | DimensionValue | height of progressbar. default -> 8                      |

## OTP Input

```js
import { OtpInput} from '@avi99/aui';

export fuction App(){
   return(
      <OtpInput length={5} onChange={(otp:String) => console.log(otp)} onComplete={(otp:String)=>console.log(otp)} />
   )
}
```


| Property   | Required | Type     | Description                      |
| ------------ | ---------- | ---------- | ---------------------------------- |
| length     | true     | Number   | length of otp component          |
| onComplete | false    | Function | triggers last digit entered      |
| onChange   | true     | Function | triggers when digits are changed |

## TextInput

```js

import { TextInput } from '@avi99/aui';

export fuction App(){
   return(
      <TextInput 
         onChange={(text:String)=>console.log(text)} 
         placeholder={'Enter password'} 
         secured
      ></TextInput>
   )
}
```


| Property         | Required | Type       | Description                                                            |
| ------------------ | ---------- | ------------ | ------------------------------------------------------------------------ |
| onChange         | true     | Function   | triggers when user input text                                          |
| secured          | false    | Boolean    | is true, then entered text will be masked.<br /><br />default -> false |
| textColor        | false    | ColorValue | color of entered text. default -> '#000000'                            |
| outlineColor     | false    | ColorValue | border color of textbox. default -> '#000000'                          |
| disabled         | false    | Boolean    | if true, the textinput is disabled                                     |
| placeholder      | true     | String     | placeholder text                                                       |
| placeholderColor | fasle    | ColorValue | color of placeholder text. default -> '#000000'                        |

## Bottomsheet

###### current version does not support pan gestures yet.

```js
import { BottomSheet,type SheetRef,Button } from '@avi99/aui';

export fuction App(){
    const sheetRef = React.useRef<SheetRef>(null);
    const openSheet = () => {
      sheetRef.current?.open()
    }
    const closeSheet = () => {
      sheetRef.current?.close()
    }
  
    return(
     <BottomSheet height={'90%'} ref={sheetRef} backdropColor={'red'} onClose={closeSheet}>
         <View style={{ height: '100%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Button onPress={closeSheet} title={'close sheet'} mode='flat' />
         </View>
      </BottomSheet>


    )
}
```


| Property      | Required | Type           | Description                                                                                    |
| --------------- | ---------- | ---------------- | ------------------------------------------------------------------------------------------------ |
| close         | false    | Function       | close function.if user pass this prop, user can close the bottomsheet by press on the backdrop |
| backdropColor | false    | ColorValue     | color of backdrop component. default -> '#000000'                                              |
| height        | true     | DimensionValue | height of bottomsheet                                                                          |
| children      | true     | ReactNode      | child nodes that required to be rendered inside bottomsheet                                    |

### methods


| Name  | Description           | Usage                    |
| ------- | ----------------------- | -------------------------- |
| open  | open the bottomsheet  | sheetRef.current.open()  |
| close | close the bottomsheet | sheetRef.current.close() |

## Portal

```js
import { Portal,PortalProvider } from '@avi99/aui';

export function AppWrapper(){
     return(
        <PortalProvider>
            </App>
        </PortalProvider>
     )
}

function App(){
    const sheetRef = React.useRef<SheetRef>(null);
    const openSheet = () => {
      sheetRef.current?.open()
    }
    const closeSheet = () => {
      sheetRef.current?.close()
    }
  
    return(
     <Portal name="bottomsheet">
       <BottomSheet height={'90%'} ref={sheetRef} backdropColor={'red'} onClose={closeSheet}>
         <View style={{ height: '100%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
           <Button onPress={closeSheet} title={'close sheet'} mode='flat' />
         </View>
       </BottomSheet>
     </Portal>
    )
}
```


| Property | Required | Type      | Description                                                 |
| ---------- | ---------- | ----------- | ------------------------------------------------------------- |
| name     | true     | String    | name for component that used to identify component uniquely |
| children | true     | ReactNode | component that required to reloacate                        |

## IconButton

```js
import { IconButton } from '@avi99/aui';

export function App(){
   return(
     <IconButton onPress={() => console.log("pressed")} title={"Home"} icon='home' ripple={true} width={80} />
   )


}
```


| Property   | Required | Type           | Description                                                          |
| ------------ | ---------- | ---------------- | ---------------------------------------------------------------------- |
| onPress    | true     | Function       | triggers when button is pressed                                      |
| title      | true     | String         | title text of the button                                             |
| icon       | true     | String         | icon name                                                            |
| color      | false    | ColorValue     | color of icon & title. default -> '#FFFFFF'                          |
| width      | false    | DimensionValue | width of button                                                      |
| background | false    | ColorValue     | background color of button. default -> '#1E90FF'                     |
| outlined   | false    | Boolean        | if true, background -> '#FFFFFF'. only outline,icon,tile are visible |
| reversed   | false    | Boolean        | if true, order of icon & title reversed                              |
| ripple     | false    | Boolean        | enables ripple effect when user press the button                     |
| rounded    | false    | Boolean        | if true, button corners will be rounded                              |

##

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
