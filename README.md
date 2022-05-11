# About this Project

I often glance over Frontend and Full Stack Engineer jobs, to plug any holes in my repertoire and constantly upskill, find interesting challenges to solve. I saw there was an opening at [platform.sh](https://platform.sh) in the Frontend Engineer position.

This is what the skillset demanded according to the job description:

- React
- Redux
- Webpack
- SASS

**Job Summary:**

> The Observability Team is looking for a Frontend Engineer to contribute to the development of the Blackfire product and, more generally, to the Observability features of the Platform.

That sounded interesting. I took a look at the Blackfire Product Demo and knew there was a problem to be solved. I've been a startup founder and I love solving problems, so I thought, why not I have a go?!

(Dated: 7th of May, 2022)

---

# Disclaimer

Any assumptions made are made based as of May 7th, 2022 and based on my sole expertise and experience. Any assets used are not used for any commercial purpose. This is not a functional app that attempts to do anything the Blackfire app is doing but merely a personal rendition of the Blackfire app's frontend (for which they are as of this date, looking for an engineer).

---

# Scope of the Project

As of writing this article, I am neither employed by [platform.sh](platform.sh) nor have I been approached by them. This is a fun project for me and my approach to problem solving is typically my own.
I believe problem solving is THE most crucial skillset in any **ENGINEER** (Read my blog post on [Engineer vs Developer vs Entrepreneur](www.jayantasamaddar.com)).

In an actual production environment, usually the brief would come from the Product Manager.
But since, it is not so and I have no access to Blackfire APIs, the following is my approach to working on the project as someone approaching this from the outside:

1. OBSERVATIONS - Take a deep look at the **[Blackfire Product Demo](https://demo.blackfire.io)**.
2. OPPORTUNITIES - I come from a startup founder background, so this is natural for me, whatever project it is, I'm working on, I always do a SWOT analysis. In this case, we will not look at any competitors, just because I am doing as a fun project. So we will only look at Weaknesses and Opportunities.
3. REQUIREMENTS LIST - Make a List of Requirements for the project. We will limit the project to the frontend only and will not create any API routes.
4. DEVELOPMENT ROADMAP - We will build a Development Roadmap. We will use Notion as a Project Management Tool. In Production, one usually uses whatever the company is using.
5. CODE - Using the tech stack mentioned in the job description and make any additions if necessary, we begin to put the meat on the skeleton.
6. TEST - Create a Testing pipeline / Test the app.
7. DEPLOY

---

# OBSERVATIONS

We are going to take a deep look at Blackfire. I have a couple of browser extensions installed that help me in detecting the tech stack.

- React Developer Tools
- Redux DevTools
- Wappalyzer

In this case Wappalyzer is enough as Blackfire is, as on the date of writing this article, not using React or Redux.

#### A little source code review

1. At first glimpse the app looks a bit outdated and clunky with lot of information.

2. The Javascript Libraries currently being used are `core-js` and `jQuery`. jQuery at this point is almost an outdated technology. Recently even [bootstrap ditched `jQuery` for `popper`](https://www.infoq.com/news/2020/08/bootsrap-5-drops-jquery/) saving 85kb of javascript code. jQuery, the once hugely popular library is now nearing obsoletion. So, we can clearly understand the motivations of the company to use React and Redux in their stack instead to bring more flexibility with component reusability and state management.

3. The app is not responsive. With the amount of text content, it is not very usable on smaller devices.

   - **For Smaller Devices:** The Sidebar Navigation shrinks but can be improved by completely removing it and replacing with 4-5 tabs on the bottom with the last tab being a Settings Tab for more options. Alternatively we could also place a settings icon at the header.

   - The **widgets** can be improved with modern design principles in mind.

   - Better **padding**, **margins** and **separation** by **sections** is required for better **legibility**. The end consumer is a tech business which has apps in production or development. In today's times, we want every flexibility given to the end consumer. Being a startup founder, I know how I'd love to have an app where I can see all the nice analytics, neat and clean on my phone while in transit or on a tablet.

   - Inspecting the code, reveals that for the charts, **[Recharts](https://recharts.org)** is being used. That is a bit strange to me because Recharts is a React component based data visualization library and React Developer Tools did not detect React, while Wappalyzer detected `jQuery`. Let's inspect this deeper.

   - On refreshing the app page there seems to be the loading phase for the chart widget. Which suggests client side rendering.
   - With all the information above, so far my assumption is that, Blackfire was built initially with `jQuery` and has not been changed. However additional features like data visualization had to be done in a predictable, reusable manner, hence the use of a component based data visualization library, Recharts.
   - Most likely, the method used in here, is that a fetch request is made during the starting of the app for pre-rendered `recharts` from the server. Since the server doesn't run React, it has to fetch this from another app that purely consumes the data sent by the server, builds the chart based component and sends the file back to the server. `Webpack` is most likely used here to isolate the chart files. The server then pushes this rendered chart to the main Blackfire App. That seems to me the only way a non-React app can use a React component based library. Too much work and understandly the job description means, platform.sh wants to move Blackfire from jQuery to React based on these problems.

4. Blackfire is using WebRTC and establishing a connection via Websockets. I did not probe deeper here but just to understand a bird eye's view of the underlying infrastructure.
5. Intercom, Sentry, Algolia (for the recommendation engine) are other tools being used.

---

# SWOT ANALYSIS - Weaknesses and Opportunities

| Weaknesses | Opportunities |
| ---------- | ------------- |
| Using jQuery | Use React, Redux, TailwindCSS for the Stack<br>I suggest Tailwind over SASS as Tailwind just makes things way faster. Having worked with both, and while both are precompilers, Tailwind just makes life easy with pre-built classes that can be extended which ends up producing flexible but manageable code. It's very easy to train someone new in it, even if they may not be really good at CSS. |
| Not responsive | TailwindCSS makes it easy to quickly make responsive pages without writing media queries, which we can easily use to create three views: Desktop, Tablet, Mobile. |
| UI needs revamp | We can either create our own UI Kit/Library or an existing library like Material UI or Tailwind UI |
| Not Type safe | We can use `TypeScript` and/or React `propTypes` to add a debugging layer to the application. |

---

# REQUIREMENTS LIST

We will be using the tech stack: **`React*`**, **`TypeScript`**, **`Redux`**, **`TailwindCSS`**, to build the frontend. We don't really need Redux at this stage as we only have UI state changes, but considering the app will have other changes based on data, it's safe to consider it as a core technology. 
Lastly, we will use `Git` to push changes to `GitHub` and once published, we will maintain a `feature-testing` branch to test any new features which in a production environment has to be approved before they are pushed to the `main` branch.

- Improve Widgets
- Improve Navigation
- Optimize Text for Legibility
- Make App responsive on Desktop, Tablet, Mobile.
- Build reusable components to be used throughout the App

---

# DEVELOPMENT ROADMAP

1. Design the UI on Figma to have as a reference. (Just has to be at wireframe level). In production, most likely an UI/UX developer will be entrusted to provide this.
2. Separate the UI into reusable components based on regular occurence/potential of regular occurence.
3. Create a folder structure for the project.
4. Start building the UI - Layout and Pages.
5. Functionality that relies on APIs need to be communicated with the backend developer who whould supply the API endpoints. In our case, we don't have that. We will simply use either a Firestore database or static data to mimic the real production environment data fetch.


<details>
<summary><h3>UI Design</h3></summary>



</details>

<details>
<summary><h3>Reusable Components List</h3></summary>



</details>

<details>
<summary><h3><code>src</code> Folder Structure</h3></summary>

├── App.test.tsx
├── App.tsx
├── components
│   ├── Card.tsx
│   ├── Header.tsx
│   ├── index.ts
│   ├── Layout.tsx
│   ├── Navbar.tsx
│   ├── NavItem.tsx
│   ├── Sidebar.tsx
│   ├── WidgetList.tsx
│   └── Widget.tsx
├── data
│   └── widgets.ts
├── index.css
├── index.tsx
├── pages
│   ├── HealthReport.tsx
│   ├── Home.tsx
│   └── index.ts
├── react-app-env.d.ts
├── reportWebVitals.ts
├── setupTests.ts
└── state
    ├── hooks
    │   └── index.ts
    ├── index.ts
    └── reducers
        ├── index.ts
        └── windowSlice.ts

</details>

---

# CODE
The source code for this project can be found - **[HERE](https://www.github.com/jayantasamaddar)**
- The `main` branch has the deployed code.
- The `feature-testing` branch has the code currently under development.

---

# TESTING
The purpose of testing to create a bug free, highly performant app experience for the end user. We will be testing the frontend of the app on the following parameters:

- Performance
- Responsiveness
- Google Lighthouse Test
- Load Time
- 

---

# DEPLOY
This is the DevOps department in a production environment who will put this in a CI/CD pipeline, or already have a repo where we are pushing to that has already been configured to a CI/CD pipeline.
However since we are independently deploying, we will be using Vercel to deploy the App.
