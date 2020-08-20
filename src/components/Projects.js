import React from "react";
import Card from "react-bootstrap/Card";
import meal_scouter from "../assets/card_imgs/meal-scouter.PNG";
import expensify from "../assets/card_imgs/expensify.PNG";
import vidz from "../assets/card_imgs/random-vid.PNG";
import recipes from "../assets/card_imgs/recipe-app.PNG";
import portfolio from "../assets/card_imgs/portfolio.PNG";
import riddle from "../assets/card_imgs/riddle.PNG";
import proj_button from "../assets/project-button.svg";

const Projects = () =>(
    <div className="container ppadjust" id="projects">
        <div className="projects-page">
            <p className="page-title">Projects</p>
            <div className="line"></div>

            <div className="projects-container">

                <Card className="project-card">
                    <Card.Body>
                        <Card.Img variant="top" src={meal_scouter} className="card-pic"/>
                        <Card.Title className="card-title">Meal Scouter</Card.Title>
                        <Card.Text className="card-text">Don't know where or what to eat? Use Meal Scouter to find restaurants or recipes all in one place for whatever food you might be craving.</Card.Text>
                        <div className="card-links">
                            <Card.Link href="https://github.com/dhruv-patel1/Meal-Scouter" className="card-link-text">Code</Card.Link>
                            <Card.Link href="https://dhruv-patel1.github.io/Meal-Scouter/" className="card-link-text">Demo</Card.Link>
                        </div>
                    </Card.Body>
                </Card>

                <Card className="project-card">
                    <Card.Body>
                        <Card.Img variant="top" src={vidz} className="card-pic"/>
                        <Card.Title className="card-title">Random Vidz</Card.Title>
                        <Card.Text className="card-text">Do have difficulty searching for something to watch on Youtube? Using RandomVidz, find a random video about whatever topic you select from the presets or search for.</Card.Text>
                        <div className="card-links">
                            <Card.Link href="https://github.com/dhruv-patel1/random-vid" className="card-link-text">Code</Card.Link>
                            <Card.Link href="https://dhruv-patel1.github.io/random-vid/" className="card-link-text">Demo</Card.Link>
                        </div>
                    </Card.Body>
                </Card>

                <Card className="project-card pc2">
                    <Card.Body>
                        <Card.Img variant="top" src={expensify} className="card-pic"/>
                        <Card.Title className="card-title">Expensify</Card.Title>
                        <Card.Text className="card-text">Manage your expenses today using Expensify which allows you to track any purchases that you have made or are going to make in the future.</Card.Text>
                        <div className="card-links">
                            <Card.Link href="https://github.com/dhruv-patel1/expensify-app" className="card-link-text">Code</Card.Link>
                            <Card.Link href="https://reactexpensify-app.herokuapp.com/" className="card-link-text">Demo</Card.Link>
                        </div>
                    </Card.Body>
                </Card>

                <Card className="project-card pc2">
                    <Card.Body>
                        <Card.Img variant="top" src={recipes} className="card-pic"/>
                        <Card.Title className="card-title">Recipes Now</Card.Title>
                        <Card.Text className="card-text">Find recipes in a quick way using Recipes Now. Search for whatever you're in the mood for and 10 recipes will be displayed based off your query.</Card.Text>
                        <div className="card-links">
                            <Card.Link href="https://github.com/dhruv-patel1/recipe-app/tree/master" className="card-link-text">Code</Card.Link>
                            <Card.Link href="https://dhruv-patel1.github.io/recipe-app/" className="card-link-text">Demo</Card.Link>
                        </div>
                    </Card.Body>
                </Card>

                <Card className="project-card pc2">
                    <Card.Body>
                        <Card.Img variant="top" src={portfolio} className="card-pic"/>
                        <Card.Title className="card-title">Portfolio Site</Card.Title>
                        <Card.Text className="card-text">This is the second version of my portfolio site showcasing who I am, what I know, and what I've done so far.</Card.Text>
                        <div className="card-links">
                            <Card.Link href="https://github.com/dhruv-patel1/portfolio-v2" className="card-link-text">Code</Card.Link>
                        </div>
                    </Card.Body>
                </Card>

                <Card className="project-card pc2">
                    <Card.Body>
                        <Card.Img variant="top" src={riddle} className="card-pic"/>
                        <Card.Title className="card-title">Riddle App</Card.Title>
                        <Card.Text className="card-text">Riddle App that was created for fun and practice with 10 unique levels that are solved through the riddles presented.</Card.Text>
                        <div className="card-links">
                            <Card.Link href="https://github.com/dhruv-patel1/dhruv-patel1.github.io" className="card-link-text">Code</Card.Link>
                            <Card.Link href="https://dhruv-patel1.github.io/" className="card-link-text">Demo</Card.Link>
                        </div>
                    </Card.Body>
                </Card>

            </div>

            <div className="more-projects">
                <a href="https://github.com/dhruv-patel1?tab=repositories">
                    <img src={proj_button} alt="More Projects" className="more-projects-link"/>
                </a>
            </div>
        </div>
    </div>
);

export default Projects;