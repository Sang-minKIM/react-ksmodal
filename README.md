<div align="center">
  <h1>react-ksmodal</h1>
  <p align="center">
    <img src="https://github.com/Sang-minKIM/react-ksmodal/assets/87116017/4b37fbc5-261a-46b9-b1f8-3ce6a97985ba" />
  </p>
  <p>"<b>React-ksmodal</b> is a versatile <b>React component library</b> for creating <b>customizable toast messages</b> with support for animations, various display options, and TypeScript compatibility."

</p>
</div>

## Install

```bash
npm install react-ksmodal
```

## Usage

### Single Modal

```jsx live
import { createKsmodal, useModal } from "react-ksmodal";

function App() {
    const Modal = createKsmodal();
    const { isVisible, showModal } = useModal();

    return (
        <div>
            // Provide the duration(ms) to maintain the modal as an argument to the 'showModal' function.
            <button onClick={() => showModal(1000)}>click</button>

            // Duration prop should be same as the argument to the 'showModal' function.
            <Modal
              isVisible={isVisible}
              duration={1000}
              message={"Clicked!"}
              backgroundColor="rgba(0,0,0,0.7)"
            />
        </div>
    );
}

export default App;
```

### Multi Modals

If you need to use **multiple modals** in your project, you can create custom configurations for each of them.
You can specify different names and settings for each modal.

1. **Create Modal Instances**:  
   To use each modal, you create instances of the modals.
   You call the useModal hook to retrieve the state and functions for each modal.

2. **Assign Modal Names**:  
   Give a clear name to each modal. This name is used to reference that specific modal.

```jsx live
import { createKsmodal, useModal } from "react-ksmodal";

function App() {
    const Modal = createKsmodal();

    const { isVisible: firstVisible, showModal: showFirstModal } = useModal();
    const { isVisible: secondVisible, showModal: showSecondModal } = useModal();

    return (
        <div>
            <button onClick={() => showFirstModal(2000)}>click</button>
            <button onClick={() => showSecondModal(1000)}>click</button>
            <Modal isVisible={firstVisible} duration={2000} message={"1st Btn Clicked!"} />
            <Modal isVisible={secondVisible} duration={1000} message={"2nd Btn Clicked!"} />
        </div>
    );
}

export default App;
```

## Props Options

| Prop Name         | Type                       | Required | Default Value   |
| ----------------- | -------------------------- | -------- | --------------- |
| `isVisible`       | boolean                    | Yes      | -               |
| `duration(ms)`    | number                     | Yes      | -               |
| `message`         | string                     | Yes      | -               |
| `backgroundColor` | string                     | No       | `"#000000"`     |
| `color`           | string                     | No       | `"#ffffff"`     |
| `radius`          | number                     | No       | `0`             |
| `width`           | SizeValue \| "max-content" | No       | `"max-content"` |
| `height`          | SizeValue \| "max-content" | No       | `"max-content"` |
| `bottom`          | SizeValue                  | No       | `"10%"`         |
| `left`            | SizeValue                  | No       | `"50%"`         |

> `SizeValue`: It's a string value that consists of a number followed by a size unit (either percentage or pixels). For example, it can take the form of "50%" or "200px".

## Issue Reporting

If you've found a bug or have a feature request, please create an issue.
