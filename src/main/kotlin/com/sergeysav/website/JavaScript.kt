package com.sergeysav.website

/**
 * @author sergeys
 */
fun String.trimJavaScript(): String {
    return this.lines()
        .map(String::trim)
        .filterNot {
            it.startsWith("//")
        }.filterNot {
            it.isEmpty()
        }.joinToString("\n")
}