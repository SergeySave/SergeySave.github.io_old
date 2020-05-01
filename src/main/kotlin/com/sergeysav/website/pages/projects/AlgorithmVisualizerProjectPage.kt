package com.sergeysav.website.pages.projects

import com.sergeysav.website.WebsiteGenerationContext
import com.sergeysav.website.pages.ProjectsPage
import com.sergeysav.website.templates.container
import com.sergeysav.website.templates.header
import com.sergeysav.website.templates.mainNavbar
import com.sergeysav.website.templates.mastTitle
import com.sergeysav.website.templates.webFooter
import kotlinx.html.HTML
import kotlinx.html.ScriptType
import kotlinx.html.a
import kotlinx.html.body
import kotlinx.html.br
import kotlinx.html.button
import kotlinx.html.canvas
import kotlinx.html.div
import kotlinx.html.h4
import kotlinx.html.i
import kotlinx.html.id
import kotlinx.html.img
import kotlinx.html.p
import kotlinx.html.script
import kotlinx.html.style
import kotlinx.html.unsafe

/**
 * @author sergeys
 */
object AlgorithmVisualizerProjectPage : ProjectsPage.SubPage() {

    override val description: String = "A visualizer for various algorithms"
    override fun getResource() = WebsiteGenerationContext.getResource("file://projects/algorithm_visualizer/icon.png")
    override val baseName: String = "projects/algorithm_visualizer"
    override val name: String = "Algorithm Visualizer"

    override fun HTML.create() {
        header(name) {
            style {
                unsafe {
                    raw("""
                        <style type="text/css">
                            .canvasContent {
                                display: flex;
                                justify-content: center;
                                align-items: center;
                            }
                        </style>
                    """.trimIndent())
                }
            }
        }

        body(classes = "pushable") {
            mainNavbar()

            div(classes = "pusher") {
                mastTitle(name, description)

                container("basic text segment") {
                    div("ui medium header") {
                        +"February 2018 - August 2018"
                    }
                    p {
                        style = "text-indent: 2.0em;"
                        +"Having some experience with "
                        a {
                            href = "http://kotlinlang.org/"
                            +"Kotlin"
                        }
                        +" from my "
                        a {
                            href = WebsiteGenerationContext.getResource("page://projects/space_game").relativeOutputPath()
                            +"Space Game"
                        }
                        +"""
                             project and some interest
                            in seeing how various algorithms work because I was taking Algorithms and Data
                            Structures. I wanted to try to make a Kotlin multiplatform project using Kotlin's
                            coroutines. This project ended up being an algorithm visualizer that would run
                            in the browser, by compiling the Kotlin to Javascript, and in the JVM.
                        """.trimIndent()
                    }
                    p {
                        style = "text-indent: 2.0em;"
                        +"""
                            By using coroutines and some syntax sugar from Kotlin, I was able to write these
                            algorithms in such a way that they were almost the same code as the normal algorithms.
                            Only multithreaded algorithms, such as the parallel merge sort and parallel quicksort,
                            had large bits that were related to the implementation of the algorithm renderer.
                            The end result, compiled to JavaScript is available below.
                        """.trimIndent()
                    }

                    div(classes = "ui segment") {
                        id = "mainArea"
                        div(classes = "ui large stackable menu") {
                            id = "controls"
                            div(classes = "ui dropdown item") {
                                +"Structures"
                                i(classes = "ui dropdown icon")
                                div(classes = "menu") {
                                    id = "structureList"
                                    div(classes = "item") {
                                        id = "structureListItem"
                                    }
                                }
                            }
                            div(classes = "ui dropdown item") {
                                +"Current Structure"
                                i(classes = "ui dropdown icon")
                                div(classes = "menu") {
                                    id = "structureMenu"
                                    div(classes = "ui dropdown item") {
                                        id = "structureMenuItem"
                                        i(classes = "ui dropdown icon")
                                        div(classes = "menu") {
                                            div(classes = "item") {
                                                id = "structureMenuSubItem"
                                            }
                                            div(classes = "ui dropdown item") {
                                                id = "structureMenuSubListItem"
                                                i(classes = "ui dropdown icon")
                                                div(classes = "menu") {
                                                    div(classes = "item") {
                                                        id = "structureMenuSubSubItem"
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            div(classes = "ui dropdown item") {
                                +"Options"
                                i(classes = "ui downdown icon")
                                div(classes = "menu") {
                                    button(classes = "item") {
                                        id = "dataSizeMenu"
                                    }
                                    button(classes = "item") {
                                        id = "opTimeMenu"
                                    }
                                }
                            }
                            a(classes = "item") {
                                id = "simulation"
                            }
                        }
                        div(classes = "canvasContent") {
                            canvas {
                                id = "canvas"
                                width = "100%"
                                height = "100%"
                            }
                        }
                    }
                }

                webFooter {
                    div("three wide column") {
                        h4("ui inverted header") {
                            +"Links"
                        }
                        div(classes = "ui inverted link list") {
                            a(classes = "item") {
                                href = "https://github.com/SergeySave/Algovis"
                                +"Source Code"
                            }
                        }
                    }

                    script {
                        type = ScriptType.textJavaScript
                        src = WebsiteGenerationContext.getResource("file://projects/algorithm_visualizer/kotlin.js").relativeOutputPath()
                    }
                    script {
                        type = ScriptType.textJavaScript
                        src = WebsiteGenerationContext.getResource("file://projects/algorithm_visualizer/kotlinx-atomicfu.js").relativeOutputPath()
                    }
                    script {
                        type = ScriptType.textJavaScript
                        src = WebsiteGenerationContext.getResource("file://projects/algorithm_visualizer/kotlinx-coroutines-core.js").relativeOutputPath()
                    }
                    script {
                        type = ScriptType.textJavaScript
                        src = WebsiteGenerationContext.getResource("file://projects/algorithm_visualizer/algovis-js.js").relativeOutputPath()
                    }
                }
            }
        }
    }
}