##react-active

```
npm install react-active
```

###What is this

react-active lets you handle open / closed states better in your app. It passes `active` and `setActive` to children. When you click outside of the children, active will be set to false. You can trigger active to be false by calling `setActive` yourself. I'm using this to better handle select inputs and make sure only one is active at a time.

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

###Todo

Possibly add other components. The current one will only allow one active component on the page. Maybe a component that returns active true / false on media query changes. I think the api for this is very simple, and if done right, could be really useful!
