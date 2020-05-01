package com.sergeysav.website.templates

import com.sergeysav.website.resource.Resource
import kotlinx.html.*

/**
 * @author sergeys
 */
fun DIV.mastTitle(text: String, desc: String?, contents: (DIV.()->Unit)? = null) {
    div(classes = "ui inverted vertical masthead center aligned segment ${if (contents != null) "long" else ""}".trim()) {
        container {
            div(classes = "ui large secondary inverted pointing menu") {
                navbarContents()
            }
        }
        container("text") {
            h1(classes = "ui inverted header topMargin") {
                +text
            }
            if (desc != null) {
                h2 {
                    +desc
                }
            }
            contents?.invoke(this)
        }
    }
}

fun DIV.mastTitleImage(text: String, desc: String?, image: Resource, contents: (DIV.()->Unit)? = null) {
    div("ui inverted vertical masthead center aligned segment ${if (contents != null) "long" else ""}".trim()) {
        container {
            div("ui large secondary inverted pointing menu") {
                navbarContents()
            }
            div(classes = "ui one column grid") {
                div(classes = "computer only column") {
                    img(classes = "ui medium left floated middle aligned circular image") {
                        src = image.relativeOutputPath()
                        this.style = if (contents == null) {
                            "margin-top: 24px;"
                        } else {
                            "margin-top: 56px;"
                        }

                    }
                    div(classes = "ui text container") {
                        h1(classes = "ui inverted header topMargin") {
                            +text
                        }
                        if (desc != null) {
                            h2 {
                                +desc
                            }
                        }
                        contents?.invoke(this)
                    }
                }

                div(classes = "tablet mobile only column") {
                    div(classes = "ui one column grid") {
                        div(classes = "column") {
                            img(classes = "ui medium middle aligned circular image") {
                                src = image.relativeOutputPath()
                                this.style = "margin-top: 8px;"
                            }
                        }
                        div(classes = "column") {
                            div(classes = "ui text container") {
                                h1(classes = "ui inverted header") {
                                    +text
                                }
                                if (desc != null) {
                                    h2 {
                                        +desc
                                    }
                                }
                                contents?.invoke(this)
                            }
                        }
                    }
                }
            }
        }
    }
}