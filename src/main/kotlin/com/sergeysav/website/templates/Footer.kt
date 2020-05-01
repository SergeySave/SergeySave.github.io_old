package com.sergeysav.website.templates

import com.sergeysav.website.WebsiteGenerationContext
import kotlinx.html.DIV
import kotlinx.html.ScriptType
import kotlinx.html.a
import kotlinx.html.div
import kotlinx.html.h4
import kotlinx.html.img
import kotlinx.html.script
import kotlinx.html.style
import kotlinx.html.unsafe


/**
 * @author sergeys
 */
fun DIV.webFooter(inner: DIV.()->Unit = {}) {
    div(classes = "ui inverted vertical footer segment") {
        container {
            div(classes = "ui stackable inverted divided equal height stackable grid") {
                div(classes = "three wide two wide large screen column") {
                    h4(classes = "ui inverted header") {
                        +"About"
                    }
                    div(classes = "ui two column inverted grid") {
                        a {
                            href = "https://github.com/SergeySave"
                            img(classes = "ui mini image") {
                                src = WebsiteGenerationContext.getResource("file://icons/github_inverted.png").relativeOutputPath()
                                alt = "GitHub Logo"
                                style = "padding: 5px 0px 5px 0px;"
                            }
                        }
                        a {
                            href = "mailto:sergeysav.nn@gatech.edu"
                            img(classes = "ui mini image") {
                                src = WebsiteGenerationContext.getResource("file://icons/email_inverted.png").relativeOutputPath()
                                alt = "Email Icon"
                                style = "padding: 5px 0px 5px 0px;"
                            }
                        }
                        a {
                            href = "https://www.linkedin.com/in/sergeysav"
                            img(classes = "ui mini image") {
                                src = WebsiteGenerationContext.getResource("file://icons/linkedin_inverted.png").relativeOutputPath()
                                alt = "LinkedIn Logo"
                                style = "padding: 5px 0px 5px 0px;"
                            }
                        }
                        a {
                            href = "/Resume.pdf"
                            img(classes = "ui mini image") {
                                src = WebsiteGenerationContext.getResource("file://icons/resume_inverted.png").relativeOutputPath()
                                alt = "Resume Icon"
                                style = "padding: 5px 0px 5px 0px;"
                            }
                        }
                    }
                }
                inner()
            }
        }
        script(type = ScriptType.textJavaScript) {
            unsafe {
                raw("""
                    ${'$'}('.ui.dropdown').dropdown();
                    ${'$'}('.activating.element').popup();
                """.trimIndent())
            }
        }
    }
}