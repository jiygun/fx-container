# Fx-Container

# Usage

```hs

npm install fx-container --save

```
  
Import Module


```

import { FxContainerModule } from 'fx-container';

@NgModule({

imports: [
FxContainerModule
]

})

```
In Component

```hs

  <fx-container container /*Optional : containerXs="Opt" containerSm="Opt" containerMd="Opt" containerLg="Opt" containerXl="opt"  */ >

  </fx-container>

```

Default Veriables

```hs
{
    (max-width: 599px):100%,
    (min-width: 600px) and (max-width: 959px):100%,
    (min-width: 960px) and (max-width: 1279px):930px,
    (min-width: 1280px) and (max-width: 1919px):1250px,
    (min-width: 1920px) and (max-width: 5000px)':1440px
}
```