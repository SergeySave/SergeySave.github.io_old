package com.sergeysav.website.templates

import com.sergeysav.website.WebsiteGenerationContext
import kotlinx.html.HEAD
import kotlinx.html.link
import kotlinx.html.script

/**
 * @author sergeys
 */
fun HEAD.linkSemantic() {
    link {
        rel = "stylesheet"
        type = "text/css"
        href = "https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"
    }
    script {
        src = "https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.js"
    }
}

fun HEAD.linkJQuery() {
    script {
        src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.0/jquery.min.js"
    }
}

fun HEAD.linkCustomCSS() {
    link {
        rel = "stylesheet"
        type = "text/css"
        href = WebsiteGenerationContext.getResource("file://css.css").relativeOutputPath()
    }
}
