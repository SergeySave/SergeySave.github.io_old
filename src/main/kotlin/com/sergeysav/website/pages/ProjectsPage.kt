package com.sergeysav.website.pages

import com.sergeysav.website.WebsiteGenerationContext
import com.sergeysav.website.pages.projects.AlgorithmVisualizerProjectPage
import com.sergeysav.website.pages.projects.ChessNeuralNetworkProjectPage
import com.sergeysav.website.pages.projects.PlanetRendererProjectPage
import com.sergeysav.website.pages.projects.RBMCProjectPage
import com.sergeysav.website.pages.projects.SpaceGameProjectPage
import com.sergeysav.website.resource.Resource
import com.sergeysav.website.templates.webFooter
import com.sergeysav.website.templates.header
import com.sergeysav.website.templates.mainNavbar
import com.sergeysav.website.templates.mastTitle
import kotlinx.html.HTML
import kotlinx.html.a
import kotlinx.html.body
import kotlinx.html.div
import kotlinx.html.img
import kotlinx.html.p

/**
 * @author sergeys
 */
object ProjectsPage : WebPage() {

    override val baseName: String = "projects"
    override val name: String = "Projects"

    override val subPages: List<SubPage> = listOf(
        RBMCProjectPage,
        AlgorithmVisualizerProjectPage,
        SpaceGameProjectPage,
        ChessNeuralNetworkProjectPage,
        PlanetRendererProjectPage
    )

    override fun HTML.create() {
        header(name)

        body(classes = "pushable") {
            mainNavbar()

            div(classes = "pusher") {
                mastTitle(name, null)

                div(classes = "ui padded basic segment") {
                    div(classes = "ui middle aligned stackable vertically divided grid container") {
                        for (project in subPages) {
                            div(classes = "row") {
                                a(classes = "ui container") {
                                    href = WebsiteGenerationContext.getResource("page://${project.baseName}").relativeOutputPath()
                                    div(classes = "ui stackable grid") {
                                        div(classes = "four wide column") {
                                            img(classes = "ui fluid rounded image") {
                                                alt = "${project.name} Image"
                                                src = project.getResource().relativeOutputPath()
                                            }
                                        }
                                        div(classes = "twelve wide column") {
                                            div(classes = "ui large header") {
                                                +project.name
                                            }
                                            p {
                                                +project.description
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }

                webFooter()
            }
        }
    }

    abstract class SubPage : WebPage() {
        abstract val description: String
        abstract fun getResource(): Resource
    }
}