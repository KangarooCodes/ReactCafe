### Conceptual Exercise

**Answer the following questions below:**

- What is the purpose of the React Router?
 <React router enables single-page applications by handling client and server-side routing.

- What is a single page application?
 <Single-Page applications are websites that the user can interact with without the need of loading entirely new pages. The current applications page is dynamically rewritten with new data from the web server.

- What are some differences between client side and server side routing?
 <Client-side routing enables the ability for single-page applications by displaying new data on the same page. It happens by using JavaScript to internally handle the routing. Changing routes will be must faster, as an entirely new page does not need to load.

 <Server-side routing consists of requesting entire new documents and pages.

- What are two ways of handling redirects with React Router? When would you use each?
 <Redirect Components can be rendered and is useful for directing the user where they should be, and away from where they should not be. Can be helpful with sending simple error pages.

 <The .push method is another way, using Reacts history object. Useful when you have some logic that you want to perform before the redirect is called.

- What are two different ways to handle page-not-found user experiences using React Router? 
 <You can make a component that imports Redirect and use some logic that redirects the user to rendered HTML of your choice that you call from your Router. This way will not mark any history and you cannot simply go back to where you just were.

 <useHistory is a hook you can use, based on session history and can push via .push(url).


- How do you grab URL parameters from within a component using React Router?
 <useParams will return an object with data from the URL requests with the parameter as the object key.

- What is context in React? When would you use it?
 <Context allows us to have data in a hierarchical format. With this, we can also prevent pop drilling(tunneling) in cases we would not want that.
 1) Create a Component that imports react and exports CreateContext.
 2) use Context.Provider to provide certain content to be shared.
 3) useContext() will go inside of your provider as shared data.

- Describe some differences between class-based components and function
  components in React.
  <Class-based components extend React.Component. To pass props, you have to use 'this' and [preferably] destructure your props.

  <Function components returns JSX with a plain JS function. This helps keep it clean and less confusing. (also with more support, via hooks)

- What are some of the problems that hooks were designed to solve?
 <Mostly, not being able to use function components for many things due to their current design.
 
 <Class components are never needed, which is solved because of hooks integration in React 16.8.