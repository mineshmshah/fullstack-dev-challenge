# Finimize Full-Stack Development Challenge

- How you approached the challenge
  Design

As with most problems I take on through code I started on the drawing board and working with designs. I took this opportunity to get the requirements and mock up some designs in Figma.

This just gives me focus on what to build. As the challenge spec wanted us to show how we focus on UI I wanted to take the time to dissect the requirements and draw up a design that customers would find easy to use and also would give value to the hypothetical business. There were some additional features that I wanted in this design that I included and had built in the final build. I split the main app into 3 pages of components to break down the flow for the customer using it.

1. Personal Data Entry - This allows details for the customer to enter their own personal details in. This was an extra feature but the rational for this primarily was for a better UI experience. This would allow for a more personalised UI for the user so making them more invested by addressing them by their name and making them feel the expereience was tailored for them. If this would be expanded on it could collect/ store data to email the customer their results or for business reasons. In this case nothing is stored and is used for demo purposes.

Note: I also made sure not to overdo it with the inputs and kept to what was needed for this demo. Just from past experience it is best only to collect vital data for regulatory reasons. Some fields might be expanded depending on the need. From a past project at a bank fields for gender for example were only necessary when running calculations for insurance related queries. For this instance I just collected what would be minimal for personalisation.

2. Choosing the calculator mode - The second section is to break down the flow and just give the customer a chance to decide their view for the main calculation summary page. I offer a choice between simple and advanced here. This was an extra feature but allows me to show off some conditional rendering. It also helps from a UI perspective to make sure it starts off in the simple mode ,so it does not alienate the customer.

3. Calculating the savings -The final section shows the actual calculation page. It will show some personalisation based to the user. All components have been built so that changes are automatically reflected in the values of the summary and the graph. I added the option for users to calculate interest and different periods by adding a toggle. The graph will be updated automatically on changes. I also made sure it is a step graph to show user exactly how much their money will be at a certain point. I adjusted the legends to show the years and months and the user will see this on teh label when they select a certain point on the graph.

I also added the feature of adding reading suggestions. The main reason for this is to extend the customer journey more. It will be tailored to the user's savings (so above 50000 after 50 years will show another article). It just shows the customer the next steps that they can take. It also helps the business guide the customer to other products or provide back links.

Code

I tackled the code first by updating the tooling to make sure standards were being upheld in terms of linting and typing. I added a few scripts also to make sure that these items were dealt with before commits were made to keep the standard of the code relatively good.

I first started at the server. I made it so that the main route would calculate the result whether the simple of advanced view was chosen. I then bundled all the calculations and returned it through a post request.

I then broke down the application by components and built them up from the Chakra UI. A lot were stylistic changes to add for a better UI such as through the addition of validation. I broke down each component with a dedicated folder which contained its interfaces, tests and the main component.

I implemented and created a context wrapper with the reducer as the app I wanted to create has this validation and layers through the pages. I create a central store to hold this and wrapped this around the main app so it had access to the store and the dispatch methods through `useContext`. Once it was all constructed, I made sure I was getting data from the server, and then finished off by making sure that the app was responsive.

Finally, I made sure the majority of the front end was fully tested. What really helped was creating a `customRender` method to get access to the dispatch to see whether it was being called. This sped up the process drastically and allowed me to get the majority of the app tested with ease.

- What bits of your solution you like

I spent my time focussing on the UI and I think this is where it shines. I made sure thought went to this area to make is personal and responsive to the user. It was effective to create and show the information in a clear visual way. I think from a coding perspective the breakdown of components really helped and allowed quick piecing an reusability. I also think having the code tested at a threshold above 90% really helped push to make the code robust.

- What bits of your solution you’d like to improve upon

There are many areas this could have improved. A few that immediately stuck out are as follows:

1. Because of the additional features I chose to include made the app slighlty more complicated and larger I would have liked to have made a better structure for organising components. The approach I took involved having all components in the `Components` folder and having a dedicated `Layouts` folder to store the main views. This is fine but I usually find when an app does grow I tend to break the components down more for easier navigation for developers. One example of this could have been through using Atoms/ Molecules/ Organisms breakdown to divide the components on how they are stitched together.

2. I didn't get round to implementing a better way to test the fetching of the data in the front end and testing the backend. I could have used something like MSW to streamline this process better instead of mocking the calls too much

3. I would have optimised the backend better. Either implementing something like graphql to deliver data more efficiently or adding more routes.

There is plenty more I can add and could have improved on beyond this. I hope this reflects some of my skills and most importantly I hope you have a pleasant exereince using the app.
