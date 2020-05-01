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
import kotlinx.html.b
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
object RBMCProjectPage : ProjectsPage.SubPage() {

    override val description: String = "Undergraduate Research Thesis at Georgia Tech"
    override fun getResource() = WebsiteGenerationContext.getResource("file://projects/rbmc/icon.png")
    override val baseName: String = "projects/rbmc"
    override val name: String = "Mastering Reconnaissance Blind Chess with Reinforcement Learning"

    override fun HTML.create() {
        header(name)

        body(classes = "pushable") {
            mainNavbar()

            div(classes = "pusher") {
                mastTitle(name, description)

                container("basic text segment") {
                    div(classes = "ui medium header") {
                        +"September 2018 - May 2020"
                    }
                    div(classes = "ui small header center aligned") {
                        +"Abstract"
                    }
                    p {
                        style = "text-indent: 2.0em; text-align: justify;"
                        +"""
Research within Artificial Intelligence has often set goals of being able to autonomously play games (e.g., Chess or Go) 
at or above human level. Novel machine learning-based agents have recently made advances in the state-of-the-art by 
achieving superhuman performance in increasingly complicated games. We believe that solving imperfect information games 
(i.e., games where you do not have full knowledge of the opponent's activities) should be the next goal in Artificial 
Intelligence research. We study Reconnaissance Blind Multi-Chess (RBMC), an imperfect information variant of Chess, 
which comes with a novel set of challenges that must be overcome before a computer can attain superhuman performance. 
Prior works have largely focused on reducing the problem to a game of standard Chess (i.e., with perfect information) 
by attempting to determine the true state of the Chessboard. This procedure separates the problem of acquiring and 
applying gathered information from the move policy, allowing existing Chess agents to be used to choose nearly optimal 
moves. In contrast, our method trains a triple-headed neural network through self-play reinforcement learning, handling 
the information-gathering process, and move process within one model. Since this agent does not attempt to solve a 
restricted version of the problem, the algorithm is able to execute strategies based on the imperfect information 
aspect of the game. We believe that such a learning method, given enough training time, should be able to outperform 
agents that simply reduce the problem to a standard game of Chess. In this thesis, we explore this hypothesis and 
algorithms for playing RBMC.
                        """.trimIndent()
                    }

                    p {
                        b { + "Keywords: " }
                        +"Reconnaissance Blind Multi-Chess, Reinforcement Learning."
                    }

                    container {
                        // For whatever reason the right floated button doesnt have height
                        // So a second (invisible) button is needed to provide it
                        a(classes = "ui primary button") {
                            style = "visibility: hidden;"
                            +"View Thesis"
                        }
                        a(classes = "ui right floated primary button") {
                            href = WebsiteGenerationContext.getResource("file://projects/rbmc/Thesis.pdf").relativeOutputPath()
                            +"View Thesis"
                        }
                    }
                }

                webFooter()
            }
        }
    }
}