# React Project – Learning Notes

## 📦 Parcel (https://parceljs.org/)
- Dev build  
- Local server  
- HMR (Hot Module Replacement)  
- File-watching algorithm (written in C++)  
- Caching → faster rebuilds  
- Image optimization  
- Minification (removes unnecessary characters)  
- Bundling  
- Compression  
- Consistent hashing  
- Code splitting  
- Differential bundling (supports older browsers)  
- Diagnostics  
- Error handling  
- HTTPS  
- Tree shaking (removes unused code)  
- Different dev and production builds  

---

## 🍽️ SmartBite – Food Delivery Application (Learning Project)

### App Structure

**Header**
- Logo  
- Navigation items  

**Body**
- Search  
- RestaurantContainer  
  - RestaurantCard  
    - Image  
    - Name, rating, cuisines, delivery time  

**Footer**
- Copyright  
- Links  
- Address  
- Contact  

### Notes
- Passing props = passing arguments to a component  
- Data-driven UI (config-driven UI) → UI is controlled by data  

---

## 🔄 Import / Export in JavaScript

### Default Export / Import  
```js
export default Component;
import Component from "path";
```

### Named Export / Import  
```js
export const Component;
import { Component } from "path";
```

---

## ⚛️ React Hooks

### useState()
- Special React variable for state  
- ```js
  const [state, setState] = useState(initialValue);
  ```
- `state` → current value  
- `setState` → updates state  
- Should be used only inside functional components  
- Never use inside loops, conditions, or nested functions  
- React tracks state and re-renders the component when it changes  

### useEffect()
- Accepts **callback function** and **dependency array** (optional)  
- Behavior:
  - No dependency array → runs after every render  
  - Empty array `[]` → runs once (on initial render)  
  - `[variable]` → runs when the variable changes  

### fetch()
- JS function to make API calls  
- CORS issues occur when origins don’t match  

### Shimmer UI
- Skeleton screen shown while data loads  
- Better than showing blank screens or spinners  

---

## 🌐 React Router

- Install:  
  ```
  npm install react-router-dom
  ```
- Routing configuration defines what happens on a URL  
- `RouterProvider` provides routing config to the app  
- `useRouteError` for error pages  
- `<Link>` component for navigation  

### Types of Routing
1. Client-side routing (SPA — React)  
2. Server-side routing (older sites)  

---

## 🧱 Class-Based Components

- Class component extends `React.Component`  
- Has a `render()` method returning JSX  

### Why `super(props)`?
- Allows access to `this.props` inside constructor  
- Calls parent class constructor  

### State in Class Components
- Created inside constructor  
- Never update state directly  
- Lifecycle:
  **constructor → render → componentDidMount**

---

## 🧩 Core Concepts

1. **Single Responsibility Principle**  
   Each component/class should do one job.

2. **Modularity**  
   Break code into small pieces → testable, maintainable, reusable.

3. **Custom Hooks**  
   Utility functions starting with `use`.  
   Example: `useRestaurantMenu`.

4. **Define a hook’s contract before writing it**  
   - What is the input?  
   - What is the output?

5. **Large Apps & Bundling**
   - 1000+ components → need bundling  
   - Code splitting / lazy loading reduces bundle size  
   - Dev build is larger; production build is optimized  

6. **Suspense**
   - Shows fallback UI until component loads  

7. **Higher Order Components (HOCs)**
   - Function that takes a component, enhances it, returns a new one  

8. **React Layers**
   - **UI layer:** renders JSX  
   - **Data layer:** state, props, local variables  
   - Managing the data layer efficiently improves performance  

---

## 🚧 Note  
This project is still in progress.  
These notes will continue to grow as I learn more React concepts.
