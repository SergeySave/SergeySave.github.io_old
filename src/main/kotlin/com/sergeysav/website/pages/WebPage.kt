package com.sergeysav.website.pages

import com.sergeysav.website.WebsiteGenerationContext
import kotlinx.html.HTML
import kotlinx.html.lang


/**
 * @author sergeys
 *
 * @constructor Creates a new WebPage
 */
abstract class WebPage {

    abstract val baseName: String
    abstract val name: String
    open val subPages: List<WebPage> = emptyList()

    abstract fun HTML.create()

    fun createPage(html: HTML) {
        Pages.currentPage = this
        val basePath = WebsiteGenerationContext
            .getResource("page://$baseName")
            .absoluteOutputPath
        WebsiteGenerationContext.pathRelativeTo = basePath.substringBeforeLast("/", "")
        html.apply {
            lang = "en"
            create()
        }
    }
}