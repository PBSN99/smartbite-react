# React Project Based Learnings.

# Parcel https://parceljs.org/
- Dev build
- Local Server
- HMR = Hot module replacement
- File watching algorithm - written in C++
- Cachig - Faster builds 
- Image optimization 
- Minification - process of removing unnecessary characters from your code without changing its functionality.
- Bundling 
- Compress
- Consistent Hashing 
- Code Splitting 
- Differential Bundling - support older browsers.
- Diagnostic 
- Error Handling 
- HTTPs
- Tree Shaking - remove unused code.
- Different dev and production build

# SmartBite - Food Delivery Application 

// Header
//  -- Logo
//  -- Nav Items
// Body 
//  -- search
//  --RestaurentContainer
//    --RestaurentCard
        //  --Image
        //  --name of the restaurent, star Rating, cuisines, Delivery time
// Footer
//  --copyright
//  --links
//  --Address
//  --Contact


//passing props to the component = passing arguments to the function 
//dynamically pass in some data to component - use props  
//configure driven UI - Basically our UI is driven by config (data) 

Two types of Import/Export

- Default Export/Import

export default component;
import component from "path";

- Named Export/Import

export const Component;
import {Component} from "path"

# React Hooks
- Normal JS utility Fuctions - Created by facebook developers 
- useState() - SuperPowerful state variables in react.
- const [stateVariable, setStateVariable] = useState(initialValue);
- stateVariable: The current value of the state.
- setStateVariable: A function to update the state.
- initialValue: The initial value of the state (can be a number, string, array, object, etc.).
- We should only write useState() inside the functional component and best practice is to write it on the top. Is it easy for react to understand. Never use useState() hooks inside - if() else() or for() loop or a function.

- When i write npm install react - Then we got all the utility functions in our code.
- React keep track of all state variables(special variables).
- When ever a state variables updates react re-renders the components. check the difference between previous virtual dom and new virtual dom. Only updates that difference on real dom.

- useEffect() 
- There are 2 arguments we will keep into useEffect.
- First argument is arrow function (Callback function)  () => {} 
- Second argument is dependency array. [ ] - (optional)
- This callback function will be called after your component renders.
- So if you have to do something after rendering the component you have to write it inside useEffect.
- if no dependency array => useEffect is called on every render
- if dependency array is empty = [ ] => useEffect is called on initial render(just once) 
- if dependency array is [btnName] => useEffect is called everytime btnName is updated.

- fetch() is a built-in JavaScript function used to make HTTP requests (like GET, POST, etc.) to servers 
- for example, to fetch data from an API.

- If there is an origin mismatch then browsers blocks that api call - CORS policy.
- If suppose i want to call swiggy's api from my local host.
- Cors chrome extension should be added to access.

- Shimmer UI 
- Shimmer UI (also called skeleton loading or shimmer loading) is a loading placeholder animation that  gives users a visual hint that content is being loaded.
- Instead of showing a blank screen or a spinner, it displays gray blocks with a shimmering effect (like a light moving across), imitating the layout of the real content.

# React Router 
- npm install react-router-dom 
- when ever we have to develop routes we have to create the routing configuration 
- routing configuration means some information that will define what will happen on a specific route.
- an information that will tell the browser router that what will happen on a specific path.

- RouterProvider -> Provide this routing configuration to our app.
- react-router-dom gives us access to an important hook --> useRouteError
- react-router-dom also gives us a super power link component.

# 2 types Routing in web apps
- Client Side Routing (React -> Single Page Application -> Client Side Routing)
- Server Side Routing (older Websites)


# Class Based component
- Is a class which extend React.Component and it has a render method that returns some piece of JSX. ex:- UserClass.js
- Functional Component: Is Basically a function that returns a piece of JSX. ex:- user.js
- React.Component: Is a class which is given to us by react. we import this from javascript react package.

Questions: 
1. Why do we write super(props)??
In class based components props can be passed into the constructor and then we need to write super(props) inside it, then it calls parent class and parent class set the child class, so that child class can use (this) keyword.

State variables in class based components:
1. In functional components we create it using useState() hook.
2. But in class based components we does it differently. Whenever we create an instance of a class then constructor is called then the state was created.
3. so constructor is the best place to create state variables.
(Loading a class based component to the website -> I am creating an instance of that class.)
4. Never update state variables directly.
- class based components: first constructor is called -> render method is called -> componentDidMount is called.

1. Single Responsibility Principle: Class/function/any identity should have a single responsibiliy.
2. Modularity - Distrubuting code into smaller smaller pieces(modules) and keeping it modular makes the code testable, maintable and reusable.
3. Custom hooks - create your own hooks. 
Basically hooks are nothing but utility functions.
Ex:- In this project i have created a useRestaurantMenu hook and kept it in the utils.
When we create a hook, name should start with (use).
4. When we start writing a custom hook we need to finilize the contract first, so we get basic idea of what to write.
contract means - what is the input of that hook and what is the output of that hook.
5. large scale applications -> Consists of 1000's of components -> we dont need 1000 files loading into our web page ---> So we do bundling, but if all files are bundled size of the file we load to the web page will be big(website might become slow), so we do chunking/ code splitting/ Dynamic bundling/ lazy loading/ on demand loading/ dynamic import to reduce the size of it.
In development build the size is big compared to production build, because when it comes to production build parcel will do minification and reduce the size.
6. Suspense - shows the fallback on webage until the component is ready to load.

1. High order Components(javascript Function) : which takes a existing component, enhances it and returns a new component. 
2. React applications have 2 important layers - Ui layer, Datalayer.
   Ui layer - powered by Data layer(consists of all application data).
   Ui layer - Takes jsx and keep it on the page
   Data layer(Important) - Consists of State, Props, local variables.
   Major part in react applications - handling this data layer - it makes app super performant.


