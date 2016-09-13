##react-active

```
npm install react-active
```

###Usage

```js
<Active>
  {(active, setActive) => (
    active ?
      <div>
        Show this! It will hide on global window clicks.
        <div onClick={() => setActive(false)}>
          Hide this
        </div>
      </div>
    :
     //hide
  )}
</Active>
```
