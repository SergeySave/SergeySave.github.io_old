package com.sergeysav.website.templates

import kotlinx.html.DIV
import kotlinx.html.FlowContent
import kotlinx.html.div

/**
 * @author sergeys
 */
inline fun FlowContent.container(classes: String = "", crossinline inner: DIV.()->Unit) = div(classes = "ui container $classes".trim(), block = inner)