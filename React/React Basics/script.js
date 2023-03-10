const position=document.querySelector('.root');
const element=(
    <div>
        <h1>Hi This is Vamsi</h1>
        <p>I am an Aspisiring Full Stack Developer</p>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmIuEXGusLyzPzBKhR2kO5n5mxMJ_j2WASx8zN529UPQ&s' alt='Vamsi Photo'></img>
    </div>
);
ReactDOM.render(element,position);



const secondPosition=document.querySelector('.second-root');


const header=(
    <header>
        Welcome to React JS
    </header>
);

const mainContent=(
    <main>
        <p>React is most javascript Library used to create User Interfaces </p>
        <p>It is developed by facebook in the year 2014</p>
    </main>
);


const footerSection=(
    <footer>
        Copyright by @Facebook 2023
    </footer>
);


//To insert mutiple elements inside an element we use {}

const app= (
    <div>
    {header} {mainContent}  {footerSection}
    </div>
);
ReactDOM.render(app,secondPosition);


// Adding Styles to the website

const thirdPositon=document.querySelector('.third-root');

// Adding css as inline css
const section=(
    <section style={{backgroundColor:"black",border:'1px solid red',color:"white",marginTop:"10px", padding:'30px'}}>
        <pra>This section is used to teach how to style in jsx
              In Jsx the css is added as key value pair style = (key:value)
              In Jsx CSS Properties should follow Camel Case.
        </pra>
    </section>
    );


// Store the Css properties inside an variable



const css={
    border:"10px solid red",
    color:'black',
    fontSize:'20px',
    marginTop:'20px',
    padding:'5px 10px'
}

const heading=(
    <header style={css}>
    <h1 style={{color:'yellow',textAlign:'center',backgroundColor:"black",fontFamily:'Helvetica'}}>
        HELLO WELCOME TO REACT WEBSITE
    </h1>
    </header>
);


// By Adding Classes

const info=(
    <section className='lorem' style={{margin:'10px 35%'}}>
        <h1>cdjcwjchuich cwkchwiuc cieciuch</h1>
        <h1>cdjcwjchuich cwkchwiuc cieciuch</h1>
        <h1>cdjcwjchuich cwkchwiuc cieciuch</h1>
        <h1>cdjcwjchuich cwkchwiuc cieciuch</h1>
        <h1>cdjcwjchuich cwkchwiuc cieciuch</h1>
        <h1>cdjcwjchuich cwkchwiuc cieciuch</h1>
        
    </section>
);
const app2=(
    <div>
    {section} {heading} {info}
    </div>
);



ReactDOM.render(app2,thirdPositon);



