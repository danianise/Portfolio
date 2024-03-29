import React, {useEffect} from 'react'
import '../css/Projects.css'
import {motion} from 'framer-motion'
import ReactGA from 'react-ga';

function Projects() {

    useEffect(() => {
        ReactGA.pageview(window.location.pathname)
      }, [])

  return (
  
    // <div className='projectsContent'>
    <motion.div
        className='projectsContent'
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        // exit={{opacity: 0}}
    >

        <div className='projects'>

            <h1>
                <a href='https://whatsfordinner-production.up.railway.app/recipes' target='_blank'>
                    What's For Dinner?
                </a>
            </h1>
            <h5>
                HTML | EJS | CSS | JavaScript | Express | Node.js | MongoDB/Mongoose
            </h5>
            <p className='description'>
                This project helps to alleviate the tedium of deciding what to make for dinner every day.
                'What's For Dinner?' is a collection of dinner recipes that can be filtered by different
                criteria, such as ingredients or (lack of) allergens.
            </p>
            <a href='https://whatsfordinner-production.up.railway.app/recipes' target='_blank'>
                <div className='recipeImages images'>
                    <img src='recipeIndex.png' alt='Index page of Whats For Dinner'/>
                    <img src='recipeEdit.gif' alt='gif of editing a recipe'/>
                    <br />
                    <img src='recipeSearch.gif' alt='gif of searching by ingredients'/>
                    <img src='allergenSearch.gif' alt='gif of filtering out allergens' />
                </div>
            </a>
            <a href='https://github.com/danianise/WhatsForDinner' target='_blank'>
                <img className='octocat' src='Octocat.png' alt='GitHub Octocat'/>
            </a>
            <hr className='divider'/>

            <h1>
                <a href='https://danianisemockstock.netlify.app/portfolio' target='_blank'>
                    MockStock
                </a>
            </h1>
            <h5>
                JavaScript | React.js | Express | Node.js | MongoDB/Mongoose | React Bootstrap 
            </h5>
            <p className='description'>
            A collaborative project, MockStock is a mock-up of a stock market app that will represent
            the user’s stock portfolio. 
            {/* The user will be able to see stock holdings, portfolio balance,
            stock-specific information, and be able to search for current stock data.
            The app has full CRUD capabilities in that the user can add new stocks upon purchase,
            see their portfolio information, update their portfolio upon change to holdings
            (buy/sell in part), and delete stocks upon sale. */}
            </p>
            <a href='https://danianisemockstock.netlify.app/portfolio' target='_blank'>
                <div className='mockStockImages images'>
                    <img src='searchStock.gif' alt='search by stock symbol'/>
                    <img src='watchlist.gif' alt='gif of editing a recipe'/>
                </div>
            </a>
            <div className='multiCat'>
                <a href='https://github.com/danianise/MockStockFrontend' target='_blank'>
                    <img className='octocat' src='Octocat.png' alt='GitHub Octocat'/>
                </a>
                <a href='https://github.com/danianise/MockStockBackend' target='_blank'>
                    <img className='octocat secondOctocat' src='Octocat.png' alt='GitHub Octocat'/>
                </a>
            </div>
            <hr className='divider'/>

            <h1>
                <a href='https://thealumninetwork.netlify.app/' target='_blank'>
                    [theAlumniNetwork]
                </a>
            </h1>
            <h5>
                JavaScript | React.js | Node.js | Django | PostgreSQL | JWT Authentication 
            </h5>
            <p className='description'>
            Modeled after early Facebook, [theAlumniNetwork] is an app to connect alumni of a school or course
            for continued networking and support.
            {/* Modeled after early Facebook, users can set up a  profile with their contact information,
            create posts and comments in different conversation topics, and view/add to a list of relevant
            events. Users can register and login to view protected routes, and can also update or delete
            their own posts or comments, and update their profile information as needed. */}
            </p>
            <a href='https://thealumninetwork.netlify.app/' target='_blank'>
                <div className='alumniNetworkImages images'>
                    <img src='ANLandingPage.png' alt='Alumni Network landing page'/>
                    <img src='ANProfilePage.png' alt='Alumni Network profile page'/>
                    <br />
                    <img src='ANConversationPage.png' alt='Alumni Network landing page'/>
                    <img src='ANEventPage.png' alt='Alumni Network profile page'/>
                </div>
            </a>
            <div className='multiCat'>
                <a href='https://github.com/danianise/AlumniNetworkFrontend' target='_blank'>
                    <img className='octocat' src='Octocat.png' alt='GitHub Octocat'/>
                </a>
                <a href='https://github.com/danianise/AlumniNetworkBackend' target='_blank'>
                    <img className='octocat secondOctocat' src='Octocat.png' alt='GitHub Octocat'/>
                </a>
            </div>
            <hr className='divider'/>

            <h1>
                <a href='https://danianise.github.io/triviagame/' target='_blank'>
                    Harry Potter Trivia
                </a>
            </h1>
            <h5>
                HTML | CSS | JavaScript
            </h5>
            <p className='description'>
                A self-scoring trivia game about Harry Potter and the Wizarding World.
                {/* Questions will increase in difficulty as the game progresses.
                This game has 7 levels of difficulty, each with 7 questions to answer.
                The levels are both numbered and given a name based on a Harry Potter character
                whose magical skill level corresponds to the difficulty of questions in that level.
                If the user is answering correctly, they will progress through the levels quickly.
                If the user is answering incorrectly, they will stay in the same level of difficulty longer.
                At the end of the game, a new screen will appear to show the user their final score
                and give them a rating based on how well they did. */}
            </p>
            <a href='https://danianise.github.io/triviagame/' target='_blank'>
                <div className='HPImages images'>
                    <img src='HPTriviaPlay.png' alt='Harry Potter Trivia game play screenshot'/>
                    <img src='HPTriviaEnd.png' alt='Harry Potter Trivia end of game screenshot'/>
                </div>
            </a>
            <a href='https://github.com/danianise/triviagame' target='_blank'>
                <img className='octocat' src='Octocat.png' alt='GitHub Octocat'/>
            </a>
            <hr className='divider'/>

            <h1>
                <a href='https://oscarsbirthday.netlify.app/' target='_blank'>
                    Oscar's Third Birthday Invitation
                </a>
            </h1>
            <h5>
                JavaScript | React.js | Node.js | Django | PostgreSQL 
            </h5>
            <p className='description'>
            A single page React App to invite friends and family to Oscar's Spooky 3rd Birthday Party. 
            RSVP functionality via React forms and a Django/PostgreSQL backend.
            </p>
            <a href='https://oscarsbirthday.netlify.app/' target='_blank'>
                <div className='oscarsBirthdayImages images'>
                    <img src='birthdayAccept.gif' alt='Accept invitation gif'/>
                    <img src='birthdayDecline.gif' alt='Decline invitation gif'/>
                </div>
            </a>
            <div className='multiCat'>
                <a href='https://github.com/danianise/BirthdayPartyFrontend' target='_blank'>
                    <img className='octocat' src='Octocat.png' alt='GitHub Octocat'/>
                </a>
                <a href='https://github.com/danianise/BirthdayPartyBackend' target='_blank'>
                    <img className='octocat secondOctocat' src='Octocat.png' alt='GitHub Octocat'/>
                </a>
            </div>

        </div>

    {/* </div> */}
    </motion.div>
  )
}

export default Projects