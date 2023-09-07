# React + TypeScript + Vite

- Use of TypeSafe "as" props in React
  - to demonstrate to implement polymorphic props(like components, tags)
- In simple javascript version(.jsx)
  ```javascript App.jsx
  // App.jsx
   <Button>Medium</Button>
   <Button size="lg">Large</Button>
   <Button As="a" href="/" className="link">
      Link
   </Button>
  ```
  ```javascript
  // Button.jsx component
  // No need of Generic BS
  export function Button({
    As = "button",
    size = "md",
    className = "",
    ...btnProps
  }) {
    return (
      <As
        {...btnProps}
        className={`${styles.button} ${styles[size]} ${className}`}
      />
    );
  }
  ```
