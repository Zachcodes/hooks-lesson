# Pre class 

1. Run create react app and install axios 

# Lesson plan

1. Start by building out the Counter component.

- First, build it out using classes and render it on the dom.

- Next intro the useState hook and restructure the Counter component to use hooks instead of state

- explain that useState takes an initial value and uses it on the first render. it returns an array with two values in it. the first value is the value of the state variable and the second is a function specific to that variable that when invoked will update the value of that state variable

2. Next build out the TodoContainer just using useEffect and useState

2.1 start with just useState and then bring the component into app

2.2 show how it renders but there are no todos

2.3 intro useEffect to get values from an api

- explain that useEffect is invoked every time but whether or not the callback function runs depends on what is passed into the array and whether or not the values have changed

- useEffect can return a function that will be invoked on component unmounting that can be used for things like unsubscribing to a store or cleaning up a timeout

- Also explain the rule of hooks that all hooks must be called every single time. you cannot have an outer if check to decide whether to run it

3. Create the hooks file and explain that you can write your own custom hooks that are able to be used anywhere

- explain each instance of the function has it's own instance of usestate and useeffect

4. Bring in the new custom hook into todoContainer

# Rules of hooks / Info about hooks

1. Only call hooks at the top level, not inside if checks or conditionals

2. Only use hooks inside of a functional component, not a class based component 

3. Each call to a hook has an isolated state meaning that you can use the same hook in multiple places and they will ahve thei own indepent state