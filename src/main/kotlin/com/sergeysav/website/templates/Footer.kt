package com.sergeysav.website.templates

import com.sergeysav.website.WebsiteGenerationContext
import kotlinx.html.DIV
import kotlinx.html.ScriptType
import kotlinx.html.a
import kotlinx.html.div
import kotlinx.html.h4
import kotlinx.html.i
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
                            i(classes = "github big icon") {
                                style = "color: white; margin: 0.5em 0 0.5em 0;"
                            }
                        }
                        a {
                            href = "mailto:sergey@sergeysav.com"
                            i(classes = "envelope outline big icon") {
                                style = "color: white; margin: 0.5em 0 0.5em 0;"
                            }
                        }
                        a {
                            href = "https://www.linkedin.com/in/sergeysav"
                            i(classes = "linkedin big icon") {
                                style = "color: white; margin: 0.5em 0 0.5em 0;"
                            }
                        }
                        a {
                            href = "/Resume.pdf"
                            i(classes = "file alternate outline big icon") {
                                style = "color: white; margin: 0.5em 0 0.5em 0;"
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