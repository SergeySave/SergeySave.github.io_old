package com.sergeysav.website.templates

import kotlinx.html.*

/**
 * @author sergeys
 */
inline fun HTML.header(titleText: String, crossinline inner: HEAD.()->Unit = {}) {
    head {
        meta {
            charset = "UTF-8"
        }
        meta {
            name = "viewport"
            content = "width=device-width, initial-scale=1, shrink-to-fit=no"
        }
        meta {
            httpEquiv = "x-ua-compatible"
            content = "ie=edge"
        }

        title(content = titleText)


        linkJQuery()
        linkSemantic()
        linkCustomCSS()

        inner()
    }
}