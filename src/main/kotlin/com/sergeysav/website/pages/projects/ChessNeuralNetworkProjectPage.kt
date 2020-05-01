package com.sergeysav.website.pages.projects

import com.sergeysav.website.WebsiteGenerationContext
import com.sergeysav.website.pages.ProjectsPage
import com.sergeysav.website.templates.container
import com.sergeysav.website.templates.header
import com.sergeysav.website.templates.mainNavbar
import com.sergeysav.website.templates.mastTitle
import com.sergeysav.website.templates.webFooter
import kotlinx.html.HTML
import kotlinx.html.a
import kotlinx.html.body
import kotlinx.html.br
import kotlinx.html.div
import kotlinx.html.h4
import kotlinx.html.img
import kotlinx.html.p
import kotlinx.html.style

/**
 * @author sergeys
 */
object ChessNeuralNetworkProjectPage : ProjectsPage.SubPage() {

    override val description: String = "An Artificial Neural Network written from scratch and taught to play chess"
    override fun getResource() = WebsiteGenerationContext.getResource("file://projects/chess_neural_network/icon.png")
    override val baseName: String = "projects/chess_neural_network"
    override val name: String = "Chess Neural Network"

    override fun HTML.create() {
        header(name)

        body(classes = "pushable") {
            mainNavbar()

            div(classes = "pusher") {
                mastTitle(name, description)

                container("basic text segment") {
                    div("ui medium header") {
                        +"September 2016 - June 2017"
                    }
                    p {
                        style = "text-indent: 2.0em;"
                        +"""
                            Over the course of my senior year of high school, I performed an Independent Study on Artificial
                            Intelligence using Neural Networks where I wrote an deeply-connected feed-forward Artificial
                            Neural Network from scratch in Java and I taught it to play chess. This was a tremendous
                            undertaking.
                        """.trimIndent()
                    }
                    div(classes = "activating element") {
                        attributes["data-position"] = "top right"
                        attributes["data-content"] = "A visual representation of the neural network's output on an " +
                                "empty chess board. In this stage of its training the AI thinks that the purple tile " +
                                "should be moved to the light blue tile. With enough training the AI will start to " +
                                "make legal moves."
                        img(classes = "ui medium right floated image") {
                            src = WebsiteGenerationContext.getResource("file://projects/chess_neural_network/icon.png").relativeOutputPath()
                        }
                    }
                    p {
                        style = "text-indent: 2.0em;"
                        +"""
                            I started off this project by researching how Artificial Neural Networks worked and were
                            written. I learned of the underlying math and calculations that occurred in order to make a 
                            computer able to learn. I read academic research papers, programmer blog posts, and 
                            wikipedia articles all detailing the underlying processes allowing computers to simulate 
                            intelligence. After over a month of research, I believed that I knew enough and that I had 
                            figured out enough of the math in order to write my own Neural Network. This simple network 
                            was just a starting point for me to learn how to go about writing a Neural Network and for 
                            me to play around with some of the parameters that I would later have to spend a lot of 
                            time fine-tuning. I taught this first simple network the
                        """.trimIndent()
                        a {
                            href = "https://en.wikipedia.org/wiki/Exclusive_or"
                            +"XOR function"
                        }
                        br {  }
                        br {  }
                        +"""
                            After it was able to learn this function with a fairly high success rate (90% of random starts),
                            I decided that it was time to switch to a more complex task: Chess. While I recognized that this
                            would be an immense challenge and I even doubted my own ability to be able to write a neural network
                            that would be able to do anything from my fairly surface-level understanding of all of the concepts
                            behind all that I was doing, I was determined to take my failures and convert them to successes,
                            to increase my understanding and learn how to write a neural network that I never thought I could.
                        """.trimIndent()
                    }
                    div(classes = "activating element") {
                        attributes["data-position"] = "top right"
                        attributes["data-content"] = "A graph of the neural network's error as it relates to a given " +
                                "input into the network. A single unit along the x axis represents a single iteration " +
                                "of the backpropagation algorithm. The y axis is the squared error for the iteration " +
                                "of the algorithm."
                        img(classes = "ui medium right floated image") {
                            src = WebsiteGenerationContext.getResource("file://projects/chess_neural_network/output.png").relativeOutputPath()
                        }
                    }
                    p {
                        style = "text-indent: 2.0em;"
                        +"""
                            So next, I downloaded 18,313 games of chess from 12 different chess masters in order to use to
                            train my network. After writing the code that I'd need to be able to read these chess trascripts and
                            convert them into a form that would be usable for my neural network, I reworked my code in order
                            to be able to handle and better process this tremendous volume of data. Over the course of the rest
                            of the school year, I worked on improving my algorithm and changing the size of the neural network.
                            I spent it fixing bugs that I kepts discovering and optimizing the methods that I was using to
                            teach the Neural Network chess. The end of the year came before it was able to fully learn to play
                            chess. While it never truly learned to play chess it did manage to memorize the first 7 moves of a
                            couple of different openings. It was also able to change which opening it would use depending on what
                            moves its opponent made. Then I presented my results to a related class, in my case the AP Computer
                            Science A class, and I called it a year. I do still plan on returning to this project. Probably
                            using a library, such as TensorFlow, just to see if it was my data or my algorithm that were at
                            fault for this result.
                        """.trimIndent()
                    }
                }

                webFooter {
                    div("three wide column") {
                        h4("ui inverted header") {
                            +"Links"
                        }
                        div(classes = "ui inverted link list") {
                            a(classes = "item") {
                                href = "https://github.com/SergeySave/NeuralNetwork"
                                +"Source Code"
                            }
                        }
                    }
                }
            }
        }
    }
}