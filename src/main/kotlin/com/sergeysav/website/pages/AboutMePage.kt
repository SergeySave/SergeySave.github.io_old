package com.sergeysav.website.pages

import com.sergeysav.website.WebsiteGenerationContext
import com.sergeysav.website.templates.webFooter
import com.sergeysav.website.templates.header
import com.sergeysav.website.templates.mainNavbar
import com.sergeysav.website.templates.mastTitleImage
import kotlinx.html.HTML
import kotlinx.html.a
import kotlinx.html.body
import kotlinx.html.div
import kotlinx.html.i
import kotlinx.html.id
import kotlinx.html.img
import kotlinx.html.p
import kotlinx.html.style

/**
 * @author sergeys
 *
 * @constructor Creates a new AboutMePage
 */
object AboutMePage : WebPage() {

    override val baseName: String = "about_me"
    override val name: String = "About Me"

    override fun HTML.create() {
        header("About Me")

        body(classes = "pushable") {
            mainNavbar()

            div(classes = "pusher") {
                mastTitleImage("Sergey Savelyev", "Georgia Tech CS Masters Student", WebsiteGenerationContext.getResource("file://images/me.jpg")) {
//                    a {
//                        href = "#contact_me"
//                        div(classes = "ui huge primary button") {
//                            +"Contact Me"
//                            i(classes = "right arrow icon")
//                        }
//                    }

                    div() {
                        a {
                            href = "https://github.com/SergeySave"
                            i(classes = "github big icon") {
                                style = "color: white;"
                            }
                        }
                        a {
                            href = "mailto:sergey@sergeysav.com"
                            i(classes = "envelope outline big icon") {
                                style = "color: white;"
                            }
                        }
                        a {
                            href = "https://www.linkedin.com/in/sergeysav"
                            i(classes = "linkedin big icon") {
                                style = "color: white;"
                            }
                        }
                        a {
                            href = "/Resume.pdf"
                            i(classes = "file alternate outline big icon") {
                                style = "color: white;"
                            }
                        }
                    }
                }

                div(classes = "ui padded basic segment")

                div(classes = "ui padded basic text container segment") {
                    div("ui middle aligned stackable grid container") {
                        div(classes = "row") {
                            div(classes = "four wide left floated column") {
                                div(classes = "ui medium header") {
                                    +"About"
                                }
                            }
                        }
                        div(classes = "row") {
                            div(classes = "fourteen wide right floated column") {
                                p {
                                    +"""
                                        I am a Computer Science Masters Student at Georgia Tech.
                                        I love Computer Science and I love working on my own personal programming projects.
                                        You can view many of them on the projects page. I am very driven and
                                        determined to finish projects that I have started. Whenever I run into a tough
                                        challenge, I never give up, but I persevere through it and I solve the problem in one
                                        way or another.   
                                    """.trimIndent()

                                }
                                div(classes = "ui big right floated buttons") {
                                    a(classes = "ui button") {
                                        href = WebsiteGenerationContext.getResource("page://projects").relativeOutputPath()
                                        +"Projects"
                                    }
                                    a(classes = "ui button") {
                                        href = WebsiteGenerationContext.getResource("file://Resume.pdf").relativeOutputPath()
                                        +"Resume"
                                    }
                                }
                            }
                        }
                        div(classes = "ui divider") { }
                        div(classes = "row") {
                            div(classes = "four wide left floated column") {
                                div(classes = "ui medium header") {
                                    id = "contact_me"
                                    +"Contact Me"
                                }
                            }
                        }
                        div(classes = "row") {
                            div(classes = "fourteen wide right floated column") {
                                p {
                                    +"Feel free to send me an email at "
                                    a {
                                        href = "mailto:sergey@sergeysav.com"
                                        +"sergey@sergeysav.com"
                                    }
                                    +"""
                                          with questions regarding my projects or possible opportunities such as project
                                         offers or possible ventures.
                                         """.trimIndent()
                                }
                            }
                        }
                    }
                }

                div(classes = "ui padded basic segment")

                webFooter()
            }
        }
    }
}